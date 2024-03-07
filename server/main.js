import express from "express";
import cors from "cors";
import carRentalRoute from "./routes/carRentalRoute.js";
const app = express();

app.use(cors());

app.use("/carRental", carRentalRoute);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.send("Rent a Car dates");
});
app.listen(3000, () => {
  console.log("server started on port 3000");
});
