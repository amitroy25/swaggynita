import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../model/product";
import axios from "axios";
import agent from "../../api/agent";
import NotFound from "../../error/NotFoundError";
import Spinner from "../../layout/Spinner";
import { useAppSelector, useAppDispatch } from "../../store/configureStore";
import { LoadingButton } from "@mui/lab";


export default function ProductDetails(){
    
    const {id} =  useParams<{id:string}>();
    const [product,setProduct] = useState<Product | null>();
    const [loading,setLoading] = useState(true);
    const { basket } = useAppSelector(state=>state.basket);
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const item = basket?.items.find(i=> i.id === product?.id);

    useEffect(() => {
                    id && agent.Store.details(parseInt(id))
                        .then(response => setProduct(response))
                        .catch(error => console.log(error))
                        .finally(() => setLoading(false))
    },[id])

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };

    const updateQuantity = async () => {
        try {
            setSubmitting(true);
            const newItem = {
                ...product!,
                quantity: quantity
            };
            if (item) {
                const quantityDifference = quantity - item.quantity;
                if (quantityDifference > 0) {
                    // Increment the quantity of an existing item in the basket
                    await agent.Basket.incrementItemQuantity(item.id, quantityDifference, dispatch);
                } else if (quantityDifference < 0) {
                    // Decrement the quantity of an existing item in the basket
                    await agent.Basket.decrementItemQuantity(item.id, Math.abs(quantityDifference), dispatch);
                }
            } else {
                // Add a new item to the basket
                await agent.Basket.addItem(newItem, dispatch);
            }
            setSubmitting(false);
        } catch (error) {
            console.error("Failed to update quantity:", error);
            // Handle error
            setSubmitting(false);
        }
    };


    if(loading) return <Spinner message='Loading Product...'/>
    if(!product) return <NotFound/>
    const extractImageName = (item: Product): string | null =>{
        if(item && item.pictureUrl){
          const parts = item.pictureUrl.split('/');
          if(parts.length>0){
            return parts[parts.length-1];
          }
        }
        return null;
      }
      const formatPrice = (price: number): string =>{
        return new Intl.NumberFormat('en-In', {
          style:'currency',
          currency: 'INR',
          minimumFractionDigits: 2
        }).format(price);
      }
    
    
        return(
            <Grid container spacing={6}>
            <Grid item xs={6} sx={{ mt: 4 }}>
                <img src={"/images/products/"+extractImageName(product)} alt={product.name} style={{ width: '90%' }}/>
            </Grid>
            <Grid item xs={6} sx={{ mt: 4 }}>
                <Typography variant='h3'>{product.name}</Typography>
                <Divider sx={{ mb:2 }}/>
                <Typography gutterBottom color='secondary' variant="h4">{formatPrice(product.price)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.productType}</TableCell>
                            </TableRow>
                         
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            onChange={inputChange} 
                            variant='outlined'
                            type='number'
                            label='Quantity in Cart'
                            fullWidth
                            value={quantity}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <LoadingButton
                            sx={{ height: '55px' }}
                            color='primary'
                            size='large'
                            variant='contained'
                            fullWidth
                            loading={submitting}
                            onClick={updateQuantity}
                        >
                            {item ? 'Update Quantity' : 'Add to Cart'}
                        </LoadingButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        //<Typography variant="h2">{product.name}</Typography>
    )
}