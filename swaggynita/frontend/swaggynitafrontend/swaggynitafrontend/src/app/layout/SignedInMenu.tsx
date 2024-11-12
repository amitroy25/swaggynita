import { Button, Menu, Fade, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logOut } from "../features/account/accountSlice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";







export default function SignedInMenu(){
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state=>state.account);
    const [anchorEl, setAnchorEl] = React.useState(null); 
    const open = Boolean(anchorEl);
    const handleClick=(event:any)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () =>{
        setAnchorEl(null);
    }
     return (
        <>
               <Button
                 onClick={handleClick}
                 color='inherit'
                 sx={{typography:'h6'}}
                 >
                 Hi, {user?.username}
               </Button>
               <Menu anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}> 
                 <MenuItem onClick={handleClose}>Profile</MenuItem>
                 <MenuItem component={Link} to="/orders">My Orders</MenuItem>
                 <MenuItem onClick={()=>dispatch(logOut())}>Logout</MenuItem>
               </Menu>
         </>
       );
}