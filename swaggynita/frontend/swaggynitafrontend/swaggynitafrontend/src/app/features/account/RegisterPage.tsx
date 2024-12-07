import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button, Grid,Link } from "@mui/material";
import { useState } from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { toast } from "react-toastify";
import axios from "axios";
import agent from "../../api/agent";















export default function RegisterPage(){

  const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
    });
  
    const handleChange = (e: any) =>{
      const {name, value} = e.target;
      setFormData({...formData, [name]: value});
    }
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      if (!validateForm()) return;
    
      try {
        const response = await agent.Account.signup(formData); // The backend response contains the message
        toast.success(response.message || "Signup successful!"); // Show the success message from the response
        navigate("/login"); // Redirect to login
      } catch (error) {
        console.error("Error during signup:", error);
    
        if (axios.isAxiosError(error)) {
          // Safely access Axios error properties
          toast.error(
            error.response?.data?.message || "Signup failed. Please try again."
          );
        } else {
          // Handle non-Axios errors
          toast.error("An unexpected error occurred. Please try again.");
        }
      }
    };
    
  
    const validateForm = () => {
      const { username, email, password } = formData;
      if (!username || !email || !password) {
        toast.error("All fields are required.");
        return false;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        toast.error("Invalid email format.");
        return false;
      }
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
        return false;
      }
      return true;
    };
  
      return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={formData.username}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link component={RouterLink} to="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>    
      )
  }