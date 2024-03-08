import express, { response } from "express";
import nodemailer from "nodemailer";
import dbpool from "../db/dbConnection.js";

const carRentalRoute = express();

export const carStruct = {
  car_id: 0,
  model: "",
  brand: "",
  range: 0,
  size: "",
  transmission: 0,
  passengers: 0,
  efficiency: 0,
  rate: 0,
  reserved: {
    isReserved: false,
    from: null,
    till: null,
  },
  company_id: 0,
  location_id: 0,
};

carRentalRoute
  .route("/getAvailabilities/:from/:till/:where")
  .get((req, res) => {
    // Extract dates from request parameters

    const from = req.params.from;
    const till = req.params.till;
    const location = req.params.where;

    const query = `
      SELECT *
      FROM cars
      WHERE location_id = ? 
        AND (
          reserved IS NULL
          OR (
            reserved.isReserved = false
            OR (
              reserved.from > ? OR reserved.till < ?
              OR (
                reserved.from IS NULL OR reserved.till IS NULL
                OR (reserved.from >= ? AND reserved.till <= ?)
              )
            )
          )
        );
    `;

    dbpool.query(query, [location, from, till, from, till], (err, response) => {
      if (err) {
        res.status(500).send("Internal Server Error");
      } else {
        res.status(200).send(response);
      }
    });

  });

carRentalRoute.post("/confirm-email", async (req, res) => {
  const { email, userName, bookingDetails } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "noreply@gmail.com",
      pass: "your-password",
    },
  });

  const mailOptions = {
    from: "noreply@gmail.com",
    to: email,
    subject: "Booking Confirmation",
    text: `Hello ${userName}, your booking is confirmed. Details: ${bookingDetails}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Confirmation email sent successfully");
  } catch (error) {
    res.status(500).send("Error sending email");
  }
});

carRentalRoute.get("/users/:userId", async (req, res) => {
  const { userId } = req.params;

  // Replace with actual database call
  const userInfo = {};
  const bookingHistory = {};

  res.json({ userInfo, bookingHistory });
});

carRentalRoute.post("/book-car", async (req, res) => {
  const bookingInfo = req.body;

  res.send("Booking received");
});

export default carRentalRoute;
