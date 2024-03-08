import express from "express";
import nodemailer from 'nodemailer';

const carRentalRoute = express();

carRentalRoute.route("/getAvailabilities/:from/:to").post((req, res) => {
  // Extract dates from request parameters
  const fromDate = req.params.from;
  const toDate = req.params.to;

  // Send the dates in the response
  res.send({
    from: fromDate,
    to: toDate,
  });
});


carRentalRoute.post('/confirm-email', async (req, res) => {
    
  const { email, userName, bookingDetails } = req.body;

  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'noreply@gmail.com', 
          pass: 'your-password' 
      }
  });

  
  const mailOptions = {
      from: 'noreply@gmail.com', 
      to: email, 
      subject: 'Booking Confirmation', 
      text: `Hello ${userName}, your booking is confirmed. Details: ${bookingDetails}` 
  };

  
  try {
      await transporter.sendMail(mailOptions);
      res.send('Confirmation email sent successfully');
  } catch (error) {
      res.status(500).send('Error sending email');
  }
});

carRentalRoute.get('/users/:userId', async (req, res) => {
  
  const { userId } = req.params;

  // Replace with actual database call
  const userInfo = {}; 
  const bookingHistory = {}; 

  
  res.json({ userInfo, bookingHistory });
});

carRentalRoute.post('/book-car', async (req, res) => {
  
  const bookingInfo = req.body; 

  res.send('Booking received');
});



export default carRentalRoute;
