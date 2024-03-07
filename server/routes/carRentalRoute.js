import express from "express";

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

export default carRentalRoute;
