import { Product } from "../../model/product";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";


interface Props{
    products: Product[]
}


export default function ProductList({products}: Props){



return(
         <Grid container spacing={4}>
            
            {products.map(product=>(
                <Grid item xs={4} key={product.id}>
                <ProductCard product={product}/>
                </Grid>
            ))}

         </Grid>
);

}