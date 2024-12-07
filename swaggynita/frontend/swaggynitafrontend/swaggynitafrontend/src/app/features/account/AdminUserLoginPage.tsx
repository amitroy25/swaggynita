import React from 'react';
import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function AdminUserLoginPage() {

    const navigate= useNavigate();
    const handleUserlogin = () => {
      navigate('/user-login')

    }
    const handleAdminLogin = ()=>{
       navigate('/admin-login')
    }
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" gutterBottom>
        User and Admin Login
      </Typography>
      <Box mt={3}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleUserlogin}
          sx={{ m: 1 }}
        >
          User Login
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleAdminLogin}
          sx={{ m: 1 }}
        >
          Admin Login
        </Button>
      </Box>
    </Box>
  );
}
