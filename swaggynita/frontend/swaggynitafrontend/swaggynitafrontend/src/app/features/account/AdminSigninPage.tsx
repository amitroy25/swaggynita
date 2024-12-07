import React, { useState } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AdminSignInPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Add authentication logic here if needed
    if (username === "admin" && password === "admin123") {
      console.log("Sign-in successful");
      navigate("/admin-dashboard"); // Navigate to admin dashboard or desired page
    } else {
      console.log("Invalid credentials");
      alert("Invalid username or password");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      p={3}
    >
      <Typography variant="h4" gutterBottom>
        Admin Sign-In
      </Typography>
      <Box width="100%" maxWidth={400} mt={2}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignIn}
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
}
