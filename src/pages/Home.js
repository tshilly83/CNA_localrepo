import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GroupsIcon from '@mui/icons-material/Groups';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          background: 'linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)',
          color: '#FFFFFF',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/images/hero-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Transform Your Life
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 4,
                  opacity: 0.9,
                  fontWeight: 400,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                With Africa's Premier Fitness Coaches
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/booking')}
                sx={{
                  mr: 2,
                  mb: { xs: 2, md: 0 },
                  fontSize: '1.1rem',
                  py: 1.5,
                  px: 4,
                }}
              >
                Start Your Journey
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/trainers')}
                sx={{
                  color: '#FFFFFF',
                  borderColor: '#FFFFFF',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                  fontSize: '1.1rem',
                  py: 1.5,
                  px: 4,
                }}
              >
                Meet Our Trainers
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontWeight: 700,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              backgroundColor: 'primary.main',
              borderRadius: 2,
            },
          }}
        >
          Our Services
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <FitnessCenterIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                  Personal Training
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Get personalized workout plans and one-on-one attention from our certified African trainers.
                  Transform your body with expert guidance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <GroupsIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                  Group Classes
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Join our energetic African-inspired group sessions for motivation and community support.
                  Experience the power of training together.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <RestaurantIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                  Nutrition Coaching
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Get expert advice on nutrition with an African twist to complement your fitness journey.
                  Learn how to fuel your body for optimal performance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center', py: 4 }}>
                <LocationOnIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                  City-Wide Gym Access
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Enjoy unlimited access to our network of premium fitness centers across Kinshasa.
                  Work out anywhere, anytime with our exclusive gym partnerships.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
