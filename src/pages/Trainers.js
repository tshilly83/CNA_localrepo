import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Instagram, Facebook, LinkedIn } from '@mui/icons-material';

const Trainers = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            mb: { xs: 4, md: 6 },
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
          Our Elite Trainers
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            mb: { xs: 6, md: 8 },
            color: 'text.secondary',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          Transform your life with Africa's finest fitness experts
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="500"
                  image="/images/Alain.jpg" // Image from public folder
                  alt="Coach Alain"
                  sx={{
                    filter: 'brightness(0.9)',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    p: 2,
                    color: 'white',
                  }}
                >
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                    Coach Alain Kakoba
                  </Typography>
                  <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                    Elite Strength Coach
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ pt: 3 }}>
                <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  Elite strength coach with 10+ years experience in powerlifting and functional training. Specializes in building lean muscle and improving athletic performance.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <Instagram sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }} />
                  <Facebook sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }} />
                  <LinkedIn sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }} />
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate('/booking')}
                  sx={{
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Book Session
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="500"
                  image="/images/trainer2.jpg"
                  alt="Coach Amara"
                  sx={{
                    filter: 'brightness(0.9)',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    p: 2,
                    color: 'white',
                  }}
                >
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                    Coach Amara Diallo
                  </Typography>
                  <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                    HIIT Specialist
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ pt: 3 }}>
                <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  Certified HIIT specialist and former professional athlete. Expert in weight loss transformation and high-intensity cardio programs. Passionate about helping clients achieve their fitness goals.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <Instagram sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }} />
                  <Facebook sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }} />
                  <LinkedIn sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }} />
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate('/booking')}
                  sx={{
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Book Session
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="500"
                  image="/images/trainer3.jpg"
                  alt="Coach Chioma"
                  sx={{
                    filter: 'brightness(0.9)',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    p: 2,
                    color: 'white',
                  }}
                >
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                    Coach Chioma Okafor
                  </Typography>
                  <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                    Wellness Expert
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ pt: 3 }}>
                <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                  Holistic wellness expert with expertise in nutrition and body transformation. Specializes in creating personalized meal plans and lifestyle coaching for sustainable results.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <Instagram sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }} />
                  <Facebook sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }} />
                  <LinkedIn sx={{ color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }} />
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate('/booking')}
                  sx={{
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Book Session
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Trainers;
