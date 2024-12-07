// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Ensure axios is installed: npm install axios

// const AdminDashboard = () => {
//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch order data from API
//   useEffect(() => {
//     const fetchOrderData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8081/api/orders"); // Replace with your API URL
//         setOrder(response.data[0]); // Assuming you want to display the first order in the array
//       } catch (err) {
//         setError(err.message || "An error occurred while fetching data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrderData();
//   }, []);

//   // Handle loading and error states
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   // Render order details
//   return (
//     <div className="admin-dashboard">
//       {order ? (
//         <>
//           <h2>Order #{order.id}</h2>
//           <p><strong>Basket ID:</strong> {order.basketId}</p>
//           <p><strong>Shipping Address:</strong></p>
//           <p>- Name: {order.shippingAddress?.name}</p>
//           <p>- Address 1: {order.shippingAddress?.address1}</p>
//           <p>- Address 2: {order.shippingAddress?.address2}</p>
//           <p>- City: {order.shippingAddress?.city}</p>
//           <p>- State: {order.shippingAddress?.state}</p>
//           <p>- Zipcode: {order.shippingAddress?.zipcode || "N/A"}</p>
//           <p>- Country: {order.shippingAddress?.country}</p>
//           <p><strong>Subtotal:</strong> ${order.subTotal}</p>
//           <p><strong>Delivery Fee:</strong> ${order.deliveryFee}</p>
//           <p><strong>Total:</strong> ${order.total}</p>
//           <p><strong>Order Date:</strong> {order.orderDate.map(formatNumber).join("/")}</p>
//           <p><strong>Order Status:</strong> {order.orderStatus}</p>

//           <h3>Order Items:</h3>
//           {order.orderItems?.length ? (
//             order.orderItems.map((orderItem, index) => (
//               <div key={index} className="order-item">
//                 <h4>Item #{index + 1}</h4>
//                 <p><strong>ID:</strong> {orderItem.id}</p>
//                 <p><strong>Name:</strong> {orderItem.itemOrdered?.name}</p>
//                 <p><strong>Quantity:</strong> {orderItem.quantity}</p>
//               </div>
//             ))
//           ) : (
//             <p>No order items available.</p>
//           )}
//         </>
//       ) : (
//         <p>No order data available.</p>
//       )}
//     </div>
//   );
// };

// // Helper function to format numbers
// const formatNumber = (num) => (num < 10 ? `0${num}` : num);

// export default AdminDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Box,
//   Card,
//   CardContent,
//   CardHeader,
//   Typography,
//   CircularProgress,
//   Grid,
//   Divider,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Paper,
//   Chip,
//   Avatar,
//   Stack,
//   Button,
//   IconButton,
// } from "@mui/material";
// import { CheckCircle, Error, ShoppingCart, LocalShipping } from "@mui/icons-material";

// const AdminDashboard = () => {
//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch order data from API
//   useEffect(() => {
//     const fetchOrderData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8081/api/orders"); // Replace with your API URL
//         setOrder(response.data[0]); // Assuming you want to display the first order in the array
//       } catch (err) {
//         setError(err.message || "An error occurred while fetching data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrderData();
//   }, []);

//   // Handle loading and error states
//   if (loading)
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress color="primary" />
//       </Box>
//     );
//   if (error)
//     return (
//       <Box textAlign="center" mt={5}>
//         <Typography color="error" variant="h6">
//           Error: {error}
//         </Typography>
//       </Box>
//     );

//   // Render order details
//   return (
//     <Box p={3} bgcolor="#f5f5f5" minHeight="100vh">
//       <Typography variant="h4" gutterBottom textAlign="center" color="primary">
//         Admin Dashboard
//       </Typography>
//       {order ? (
//         <Grid container spacing={4}>
//           {/* Order Summary */}
//           <Grid item xs={12} md={6}>
//             <Card elevation={4}>
//               <CardHeader
//                 avatar={<Avatar sx={{ bgcolor: "#1976d2" }}><ShoppingCart /></Avatar>}
//                 title="Order Summary"
//                 subheader={`Order ID: #${order.id}`}
//               />
//               <CardContent>
//                 <Typography variant="body1" gutterBottom>
//                   <strong>Basket ID:</strong> {order.basketId}
//                 </Typography>
//                 <Divider sx={{ my: 2 }} />
//                 <Typography variant="h6" gutterBottom>
//                   <LocalShipping /> Shipping Address
//                 </Typography>
//                 <Typography variant="body2">Name: {order.shippingAddress?.name}</Typography>
//                 <Typography variant="body2">Address: {order.shippingAddress?.address1}</Typography>
//                 <Typography variant="body2">City: {order.shippingAddress?.city}</Typography>
//                 <Typography variant="body2">State: {order.shippingAddress?.state}</Typography>
//                 <Typography variant="body2">Country: {order.shippingAddress?.country}</Typography>
//                 <Typography variant="body2">
//                   Zipcode: {order.shippingAddress?.zipcode || "N/A"}
//                 </Typography>
//                 <Divider sx={{ my: 2 }} />
//                 <Stack direction="row" spacing={1} alignItems="center">
//                   <Typography variant="body1">
//                     <strong>Order Status:</strong>
//                   </Typography>
//                   <Chip
//                     label={order.orderStatus}
//                     color={order.orderStatus === "Completed" ? "success" : "warning"}
//                     icon={
//                       order.orderStatus === "Completed" ? <CheckCircle /> : <Error />
//                     }
//                   />
//                 </Stack>
//                 <Typography variant="body1">
//                   <strong>Subtotal:</strong> ${order.subTotal}
//                 </Typography>
//                 <Typography variant="body1">
//                   <strong>Delivery Fee:</strong> ${order.deliveryFee}
//                 </Typography>
//                 <Typography variant="body1" color="secondary">
//                   <strong>Total:</strong> ${order.total}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Order Items */}
//           <Grid item xs={12} md={6}>
//             <Card elevation={4}>
//               <CardHeader
//                 avatar={<Avatar sx={{ bgcolor: "#ff5722" }}><ShoppingCart /></Avatar>}
//                 title="Order Items"
//                 subheader={`Total Items: ${order.orderItems?.length || 0}`}
//               />
//               <CardContent>
//                 {order.orderItems?.length ? (
//                   <TableContainer component={Paper}>
//                     <Table>
//                       <TableBody>
//                         {order.orderItems.map((orderItem, index) => (
//                           <TableRow key={index}>
//                             <TableCell>
//                               <Typography variant="body2" fontWeight="bold">
//                                 Item #{index + 1}
//                               </Typography>
//                               <Typography variant="body2">
//                                 <strong>Name:</strong> {orderItem.itemOrdered?.name || "N/A"}
//                               </Typography>
//                             </TableCell>
//                             <TableCell>
//                               <Typography variant="body2">
//                                 <strong>Quantity:</strong> {orderItem.quantity}
//                               </Typography>
//                             </TableCell>
//                             <TableCell>
//                               <Typography variant="body2">
//                                 <strong>ID:</strong> {orderItem.id}
//                               </Typography>
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
//                 ) : (
//                   <Typography>No order items available.</Typography>
//                 )}
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       ) : (
//         <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
//           <Typography variant="h6">No order data available.</Typography>
//         </Paper>
//       )}
//       <Box textAlign="center" mt={4}>
//         <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
//           Refresh Orders
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// // Helper function to format numbers
// const formatNumber = (num) => (num < 10 ? `0${num}` : num);

// export default AdminDashboard;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Box,
//   Card,
//   CardContent,
//   CardHeader,
//   Typography,
//   CircularProgress,
//   Grid,
//   Divider,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Paper,
//   Chip,
//   Avatar,
//   Stack,
//   Button,
//   IconButton,
// } from "@mui/material";
// import { CheckCircle, Error, ShoppingCart, LocalShipping } from "@mui/icons-material";

// const AdminDashboard = () => {
//   const [orders, setOrders] = useState([]); // Changed to handle an array of orders
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch orders data from API
//   const fetchOrderData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8081/api/orders"); // Replace with your API URL
//       // Replace the entire order list with the latest fetched data
//       setOrders(response.data); // Assuming the response is an array of orders
//     } catch (err) {
//       setError(err.message || "An error occurred while fetching data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch orders when the component mounts
//   useEffect(() => {
//     fetchOrderData();
//   }, []);

//   // Handle loading and error states
//   if (loading)
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress color="primary" />
//       </Box>
//     );
//   if (error)
//     return (
//       <Box textAlign="center" mt={5}>
//         <Typography color="error" variant="h6">
//           Error: {error}
//         </Typography>
//       </Box>
//     );

//   // Render order details for each order
//   return (
//     <Box p={3} bgcolor="#f5f5f5" minHeight="100vh">
//       <Typography variant="h4" gutterBottom textAlign="center" color="primary">
//         Admin Dashboard
//       </Typography>
//       {orders.length ? (
//         <Grid container spacing={4}>
//           {orders.map((order) => (
//             <Grid item xs={12} md={6} key={order.id}>
//               <Card elevation={4}>
//                 <CardHeader
//                   avatar={<Avatar sx={{ bgcolor: "#1976d2" }}><ShoppingCart /></Avatar>}
//                   title={`Order ID: #${order.id}`}
//                   subheader={`Basket ID: ${order.basketId}`}
//                 />
//                 <CardContent>
//                   <Typography variant="body1" gutterBottom>
//                     <strong>Shipping Address:</strong>
//                   </Typography>
//                   {/* Rendering Address 1 and Address 2 separately */}
//                   <Typography variant="body2">Address 1: {order.shippingAddress?.address1}</Typography>
//                   <Typography variant="body2">Address 2: {order.shippingAddress?.address2}</Typography>
//                   <Typography variant="body2">City: {order.shippingAddress?.city}</Typography>
//                   <Typography variant="body2">State: {order.shippingAddress?.state}</Typography>
//                   <Typography variant="body2">Country: {order.shippingAddress?.country}</Typography>
//                   <Typography variant="body2">
//                     Zipcode: {order.shippingAddress?.zipcode || "N/A"}
//                   </Typography>
//                   <Divider sx={{ my: 2 }} />
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <Typography variant="body1">
//                       <strong>Order Status:</strong>
//                     </Typography>
//                     <Chip
//                       label={order.orderStatus}
//                       color={order.orderStatus === "Completed" ? "success" : "warning"}
//                       icon={order.orderStatus === "Completed" ? <CheckCircle /> : <Error />}
//                     />
//                   </Stack>
//                   <Typography variant="body1">
//                     <strong>Subtotal:</strong> ${order.subTotal}
//                   </Typography>
//                   <Typography variant="body1">
//                     <strong>Delivery Fee:</strong> ${order.deliveryFee}
//                   </Typography>
//                   <Typography variant="body1" color="secondary">
//                     <strong>Total:</strong> ${order.total}
//                   </Typography>

//                   <Typography variant="h6" gutterBottom mt={2}>
//                     <LocalShipping /> Shipping Details
//                   </Typography>
//                   <Typography variant="body2">
//                     <strong>Order Date:</strong> {order.orderDate.join("/")}
//                   </Typography>
//                 </CardContent>
//               </Card>

//               {/* Order Items */}
//               <Card elevation={4} sx={{ mt: 2 }}>
//                 <CardHeader
//                   avatar={<Avatar sx={{ bgcolor: "#ff5722" }}><ShoppingCart /></Avatar>}
//                   title="Order Items"
//                   subheader={`Total Items: ${order.orderItems?.length || 0}`}
//                 />
//                 <CardContent>
//                   {order.orderItems?.length ? (
//                     <TableContainer component={Paper}>
//                       <Table>
//                         <TableBody>
//                           {order.orderItems.map((orderItem, index) => (
//                             <TableRow key={index}>
//                               <TableCell>
//                                 <Typography variant="body2" fontWeight="bold">
//                                   Item #{index + 1}
//                                 </Typography>
//                                 <Typography variant="body2">
//                                   <strong>Name:</strong> {orderItem.itemOrdered?.name || "N/A"}
//                                 </Typography>
//                               </TableCell>
//                               <TableCell>
//                                 <Typography variant="body2">
//                                   <strong>Quantity:</strong> {orderItem.quantity}
//                                 </Typography>
//                               </TableCell>
//                               <TableCell>
//                                 <Typography variant="body2">
//                                   <strong>ID:</strong> {orderItem.id}
//                                 </Typography>
//                               </TableCell>
//                             </TableRow>
//                           ))}
//                         </TableBody>
//                       </Table>
//                     </TableContainer>
//                   ) : (
//                     <Typography>No order items available.</Typography>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       ) : (
//         <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
//           <Typography variant="h6">No orders available.</Typography>
//         </Paper>
//       )}

//       <Box textAlign="center" mt={4}>
//         <Button variant="contained" color="primary" onClick={fetchOrderData}>
//           Refresh Orders
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default AdminDashboard;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Box,
//   Card,
//   CardContent,
//   CardHeader,
//   Typography,
//   CircularProgress,
//   Grid,
//   Divider,
//   Stack,
//   Chip,
//   Avatar,
//   Button,
// } from "@mui/material";
// import { CheckCircle, Error, ShoppingCart } from "@mui/icons-material";

// const AdminDashboard = () => {
//   const [orders, setOrders] = useState([]); // To store the orders
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch orders data from the API
//   const fetchOrderData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8081/api/orders"); // Replace with your API URL
//       setOrders(response.data); // Store the orders
//     } catch (err) {
//       setError(err.message || "An error occurred while fetching data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch orders when the component mounts
//   useEffect(() => {
//     fetchOrderData();
//   }, []);

//   // Handle loading and error states
//   if (loading)
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress color="primary" />
//       </Box>
//     );
//   if (error)
//     return (
//       <Box textAlign="center" mt={5}>
//         <Typography color="error" variant="h6">
//           Error: {error}
//         </Typography>
//       </Box>
//     );

//   // Render order details for each order
//   return (
//     <Box p={3} bgcolor="#f5f5f5" minHeight="100vh">
//       <Typography variant="h4" gutterBottom textAlign="center" color="primary">
//         Admin Dashboard
//       </Typography>
//       {orders.length ? (
//         <Grid container spacing={4}>
//           {orders.map((order) => (
//             <Grid item xs={12} key={order.id}>
//               {/* One Big Card to occupy the whole screen */}
//               <Card elevation={4} sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
//                 <CardHeader
//                   avatar={<Avatar sx={{ bgcolor: "#1976d2" }}><ShoppingCart /></Avatar>}
//                   title={`Order ID: #${order.id}`}
//                   subheader={`Basket ID: ${order.basketId}`}
//                 />
//                 <CardContent>
//                   {/* Grid for Left and Right Cards inside the Big Card */}
//                   <Grid container spacing={2}>
//                     {/* Left Card - Order Details */}
//                     <Grid item xs={12} md={6}>
//                       <Card elevation={2} sx={{ height: '100%' }}>
//                         <CardHeader title="Order Details" />
//                         <CardContent>
//                           <Typography variant="body1" gutterBottom>
//                             <strong>Shipping Address:</strong>
//                           </Typography>
//                           <Typography variant="body2">Address 1: {order.shippingAddress?.address1}</Typography>
//                           <Typography variant="body2">Address 2: {order.shippingAddress?.address2}</Typography>
//                           <Typography variant="body2">City: {order.shippingAddress?.city}</Typography>
//                           <Typography variant="body2">State: {order.shippingAddress?.state}</Typography>
//                           <Typography variant="body2">Country: {order.shippingAddress?.country}</Typography>
//                           <Typography variant="body2">
//                             Zipcode: {order.shippingAddress?.zipcode || "N/A"}
//                           </Typography>
//                           <Divider sx={{ my: 2 }} />
//                           <Stack direction="row" spacing={1} alignItems="center">
//                             <Typography variant="body1">
//                               <strong>Order Status:</strong>
//                             </Typography>
//                             <Chip
//                               label={order.orderStatus}
//                               color={order.orderStatus === "Completed" ? "success" : "warning"}
//                               icon={order.orderStatus === "Completed" ? <CheckCircle /> : <Error />}
//                             />
//                           </Stack>
//                           <Typography variant="body1">
//                             <strong>Subtotal:</strong> ${order.subTotal}
//                           </Typography>
//                           <Typography variant="body1">
//                             <strong>Delivery Fee:</strong> ${order.deliveryFee}
//                           </Typography>
//                           <Typography variant="body1" color="secondary">
//                             <strong>Total:</strong> ${order.total}
//                           </Typography>
//                           <Typography variant="body1">
//                             <strong>Order Date:</strong> {order.orderDate.join("/")}
//                           </Typography>
//                         </CardContent>
//                       </Card>
//                     </Grid>

//                     {/* Right Card - Order Items */}
//                     <Grid item xs={12} md={6}>
//                       <Card elevation={2} sx={{ height: '100%' }}>
//                         <CardHeader title="Order Items" />
//                         <CardContent>
//                           <Typography variant="body1" gutterBottom>
//                             <strong>Total Items:</strong> {order.orderItems?.length || 0}
//                           </Typography>
//                           {order.orderItems?.map((orderItem, index) => (
//                             <Grid container spacing={2} key={index}>
//                               <Grid item xs={12}>
//                                 <Typography variant="body2">
//                                   <strong>Item #{index + 1}</strong>
//                                 </Typography>
//                                 <Typography variant="body2">Name: {orderItem.itemOrdered?.name}</Typography>
//                                 <Typography variant="body2">Quantity: {orderItem.quantity}</Typography>
//                                 <Typography variant="body2">ID: {orderItem.id}</Typography>
//                                 <Divider sx={{ my: 2 }} />
//                               </Grid>
//                             </Grid>
//                           ))}
//                         </CardContent>
//                       </Card>
//                     </Grid>
//                   </Grid>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       ) : (
//         <Typography variant="h6" textAlign="center" mt={4}>
//           No orders available.
//         </Typography>
//       )}

//       <Box textAlign="center" mt={4}>
//         <Button variant="contained" color="primary" onClick={fetchOrderData}>
//           Refresh Orders
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  CircularProgress,
  Grid,
  Divider,
  Stack,
  Chip,
  Avatar,
  Button,
  Paper,
  useTheme,
  alpha,
} from "@mui/material"
import {
  CheckCircle,
  Error,
  ShoppingCart,
  LocalShipping,
  AttachMoney,
  CalendarToday,
  Refresh,
  Person,
  Home,
} from "@mui/icons-material"
import moment from "moment"

const AdminDashboard = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const theme = useTheme()

  const fetchOrderData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/orders")
      setOrders(response.data)
    } catch (err) {
      setError(err.message || "An error occurred while fetching data.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrderData()
  }, [])

  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress color="primary" size={60} thickness={4} />
      </Box>
    )

  if (error)
    return (
      <Box textAlign="center" mt={5}>
        <Typography color="error" variant="h6">
          Error: {error}
        </Typography>
      </Box>
    )

  return (
    <Box
      sx={{
        bgcolor: theme.palette.grey[100],
        minHeight: "100vh",
        p: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 4,
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Admin Dashboard
        </Typography>
      </Paper>

      {orders.length ? (
        <Grid container spacing={4}>
          {orders.map((order) => {
            const orderDateArray = order.orderDate
            const orderDate = new Date(
              Date.UTC(
                orderDateArray[0],
                orderDateArray[1] - 1,
                orderDateArray[2],
                orderDateArray[3],
                orderDateArray[4],
                orderDateArray[5],
                orderDateArray[6]
              )
            )

            return (
              <Grid item xs={12} key={order.id}>
                <Card
                  elevation={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    overflow: "hidden",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: theme.palette.secondary.main }}>
                        <ShoppingCart />
                      </Avatar>
                    }
                    title={
                      <Typography variant="h6" component="div">
                        Order ID: #{order.id}
                      </Typography>
                    }
                    subheader={`Basket ID: ${order.basketId}`}
                    sx={{
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                    }}
                  />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Card elevation={2} sx={{ height: "100%" }}>
                          <CardHeader
                            title="Order Details"
                            avatar={
                              <Avatar sx={{ bgcolor: theme.palette.info.main }}>
                                <AttachMoney />
                              </Avatar>
                            }
                          />
                          <CardContent>
                            <Stack spacing={2}>
                              <Box display="flex" alignItems="center">
                                <Person sx={{ mr: 1, color: theme.palette.text.secondary }} />
                                <Typography variant="body1">
                                  <strong>Customer:</strong> {order.shippingAddress?.name || "Not available"}
                                </Typography>
                              </Box>
                              <Divider />
                              <Box>
                                <Box display="flex" alignItems="center" mb={1}>
                                  <Home sx={{ mr: 1, color: theme.palette.text.secondary }} />
                                  <Typography variant="body1">
                                    <strong>Shipping Address:</strong>
                                  </Typography>
                                </Box>
                                <Typography variant="body2">{order.shippingAddress?.address1}</Typography>
                                <Typography variant="body2">{order.shippingAddress?.address2}</Typography>
                                <Typography variant="body2">
                                  {order.shippingAddress?.city}, {order.shippingAddress?.state},{" "}
                                  {order.shippingAddress?.country}
                                </Typography>
                                <Typography variant="body2">
                                  Zipcode: {order.shippingAddress?.zipcode || "N/A"}
                                </Typography>
                              </Box>
                              <Divider />
                              <Stack direction="row" spacing={1} alignItems="center">
                                <LocalShipping sx={{ color: theme.palette.text.secondary }} />
                                <Typography variant="body1">
                                  <strong>Order Status:</strong>
                                </Typography>
                                <Chip
                                  label={order.orderStatus}
                                  color={order.orderStatus === "Completed" ? "success" : "warning"}
                                  icon={order.orderStatus === "Completed" ? <CheckCircle /> : <Error />}
                                  size="small"
                                />
                              </Stack>
                              <Box>
                                <Typography variant="body1">
                                  <strong>Subtotal:</strong> ₹{order.subTotal}
                                </Typography>
                                <Typography variant="body1">
                                  <strong>Delivery Fee:</strong> ₹{order.deliveryFee}
                                </Typography>
                                <Typography variant="h6" color="secondary">
                                  <strong>Total:</strong> ₹{order.total}
                                </Typography>
                              </Box>
                              <Box display="flex" alignItems="center">
                                <CalendarToday sx={{ mr: 1, color: theme.palette.text.secondary }} />
                                <Typography variant="body1">
                                  <strong>Order Date: </strong>
                                  {order.orderDate && order.orderDate.length > 0
                                    ? moment([
                                        order.orderDate[0],
                                        order.orderDate[1] - 1,
                                        order.orderDate[2],
                                        order.orderDate[3],
                                        order.orderDate[4],
                                        order.orderDate[5],
                                      ]).format("YYYY-MM-DD HH:mm")
                                    : "Date not available"}
                                </Typography>
                              </Box>
                            </Stack>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Card elevation={2} sx={{ height: "100%" }}>
                          <CardHeader
                            title="Order Items"
                            avatar={
                              <Avatar sx={{ bgcolor: theme.palette.success.main }}>
                                <ShoppingCart />
                              </Avatar>
                            }
                          />
                          <CardContent>
                            <Typography variant="body1" gutterBottom>
                              <strong>Total Items:</strong> {order.orderItems?.length || 0}
                            </Typography>
                            {order.orderItems?.map((orderItem, index) => (
                              <Paper
                                key={index}
                                elevation={1}
                                sx={{
                                  p: 2,
                                  my: 2,
                                  bgcolor: alpha(theme.palette.background.paper, 0.7),
                                }}
                              >
                                <Typography variant="subtitle1">
                                  <strong>Item #{index + 1}</strong>
                                </Typography>
                                <Typography variant="body2">Name: {orderItem.itemOrdered?.name}</Typography>
                                <Typography variant="body2">Quantity: {orderItem.quantity}</Typography>
                                <Typography variant="body2">ID: {orderItem.id}</Typography>
                              </Paper>
                            ))}
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      ) : (
        <Typography variant="h6" textAlign="center" mt={4}>
          No orders available.
        </Typography>
      )}

      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={fetchOrderData}
          startIcon={<Refresh />}
          size="large"
        >
          Refresh Orders
        </Button>
      </Box>
    </Box>
  )
}

export default AdminDashboard