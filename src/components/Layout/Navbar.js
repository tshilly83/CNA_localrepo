import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            onClick={() => navigate('/')}
            sx={{ 
              color: '#FFFFFF',
              fontWeight: 'bold',
              letterSpacing: '1px',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8
              }
            }}
          >
            COACH NATION AFRIKA
          </Typography>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button 
              onClick={() => navigate('/')}
              sx={{ 
                color: '#FFFFFF',
                opacity: isActive('/') ? 1 : 0.8,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  opacity: 1
                }
              }}
            >
              Home
            </Button>

            <Button 
              onClick={() => navigate('/trainers')}
              sx={{ 
                color: '#FFFFFF',
                opacity: isActive('/trainers') ? 1 : 0.8,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  opacity: 1
                }
              }}
            >
              Trainers
            </Button>

            <Button 
              onClick={() => navigate('/booking')}
              sx={{ 
                color: '#FFFFFF',
                opacity: isActive('/booking') ? 1 : 0.8,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  opacity: 1
                }
              }}
            >
              Book Session
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
