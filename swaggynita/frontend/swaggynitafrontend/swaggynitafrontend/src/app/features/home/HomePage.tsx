'use client'

import React from 'react'
import { 
  ThemeProvider, 
  createTheme, 
  Typography, 
  Box, 
  Container, 
  Button, 
  Grid, 
  Card, 
  CardContent,
  TextField,
  IconButton,
  useMediaQuery
} from '@mui/material'
import { 
  Star as StarIcon, 
  Group as GroupIcon, 
  ShoppingCart as ShoppingCartIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})

export default function HomePage() {
    const navigate = useNavigate();

    const handleShopClick = () => {
        navigate("/store"); // Navigates to the Shop page
    };

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Hero Section */}
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
          }}
        >
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
              Welcome to SwaggyNita!
            </Typography>
            <Typography variant="h5" sx={{ mb: 6 }}>
              Discover exclusive college merchandise that combines style, comfort, and pride.
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                fontSize: '1.2rem', 
                py: 1.5, 
                px: 4,
                boxShadow: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
                transition: 'all 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)',
                }
              }}
             onClick={handleShopClick}>
              Explore Now
            </Button>
          </Container>
        </Box>

        {/* About SwaggyNita Section */}
        <Box sx={{ py: 12, backgroundColor: 'background.paper' }}>
          <Container maxWidth="md">
            <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
              About SwaggyNita
            </Typography>
            <Typography variant="body1" align="center" paragraph sx={{ fontSize: '1.2rem', mb: 6 }}>
              SwaggyNita is your ultimate destination for trendy college merchandise. From cozy
              hoodies and stylish tees to unique accessories, we bring you products that stand
              out. Represent your college spirit and individuality with our high-quality designs.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button 
                variant="outlined" 
                size="large" 
                sx={{ 
                  fontSize: '1.1rem', 
                  py: 1.5, 
                  px: 4,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                  }
                }}
              >
                Learn More
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Why Choose SwaggyNita */}
        <Box sx={{ py: 12, backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 8 }}>
              Why Choose Us?
            </Typography>
            <Grid container spacing={6} justifyContent="center">
              {[
                { icon: StarIcon, title: "Premium Quality", description: "We ensure the best materials and unmatched quality in all our products." },
                { icon: GroupIcon, title: "Designed for Students", description: "Our merchandise is tailored for college life, combining comfort with style." },
                { icon: ShoppingCartIcon, title: "Easy Shopping", description: "A seamless shopping experience from start to finish." },
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 4, backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                    <feature.icon sx={{ fontSize: 60, mb: 2, color: 'secondary.main' }} />
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Newsletter Section */}
        <Box sx={{ py: 12, backgroundColor: 'background.paper' }}>
          <Container maxWidth="md">
            <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
              Stay Updated
            </Typography>
            <Typography variant="body1" align="center" paragraph sx={{ fontSize: '1.2rem', mb: 6 }}>
              Subscribe to our newsletter for exclusive offers and the latest college swag updates!
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', gap: 2, maxWidth: 500, margin: '0 auto' }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
                sx={{ flexGrow: 1 }}
              />
              <Button 
                variant="contained" 
                size="large" 
                type="submit"
                sx={{ 
                  py: 1.5, 
                  px: 4,
                  boxShadow: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
                  transition: 'all 0.2s',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)',
                  }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ py: 8, backgroundColor: 'primary.main', color: 'primary.contrastText', mt: 'auto' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  About SwaggyNita
                </Typography>
                <Typography variant="body2">
                  SwaggyNita offers premium college merchandise that blends creativity,
                  comfort, and style. Celebrate your college spirit with us!
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Follow Us
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton color="inherit" aria-label="Instagram">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton color="inherit" aria-label="Twitter">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton color="inherit" aria-label="Facebook">
                    <FacebookIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
            <Typography variant="body2" align="center" sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              © 2024 SwaggyNita. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

