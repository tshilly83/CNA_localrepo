import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const locales = {
  'en-US': require('date-fns/locale/en-US')
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const BookingCalendar = () => {
  const [events, setEvents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSelectSlot = (slotInfo) => {
    setSelectedSlot(slotInfo);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedSlot(null);
    setBookingDetails({ name: '', email: '', phone: '' });
  };

  const handleBooking = () => {
    const newEvent = {
      title: `Booked: ${bookingDetails.name}`,
      start: selectedSlot.start,
      end: selectedSlot.end,
      ...bookingDetails
    };
    setEvents([...events, newEvent]);
    handleCloseDialog();
  };

  return (
    <Container style={{ marginTop: '2rem' }}>
      <Paper elevation={3} sx={{ 
        padding: '2rem',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.1)'
      }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#000000', fontWeight: 'bold' }}>
          Book Your Training Session
        </Typography>
        <div style={{ height: '500px' }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSelectSlot}
            step={60}
            timeslots={1}
            defaultView="week"
            style={{
              backgroundColor: '#FFFFFF',
              padding: '20px',
              borderRadius: '8px',
            }}
          />
        </div>
      </Paper>

      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
          }
        }}
      >
        <DialogTitle sx={{ color: '#000000', fontWeight: 'bold' }}>
          Book Training Session
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={bookingDetails.name}
            onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
            sx={{ marginTop: 2 }}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={bookingDetails.email}
            onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Phone"
            fullWidth
            value={bookingDetails.phone}
            onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ color: '#000000' }}>
            Cancel
          </Button>
          <Button 
            onClick={handleBooking} 
            sx={{ 
              backgroundColor: '#FF0000',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#CC0000'
              }
            }}
            variant="contained"
          >
            Book Session
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default BookingCalendar;
