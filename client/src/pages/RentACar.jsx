import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import axios from "axios";
import { Button, ButtonGroup } from "@chakra-ui/react";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh", // This makes sure the container takes the full height of the viewport
  },
};

const baseURL = "http://localhost:3000";

// Create an instance of Axios with a custom configuration
const api = axios.create({
  baseURL,
  // You can add other configuration options here if needed
});

function RentACar() {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const handleOnclick = () => {
    api
      .post(`/carRental/getAvailabilities/${fromDate}/${toDate}`)
      .then((result) => {
        console.log(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleFromDateChange = (event) => {
    const newDate = event.target.value;
    setFromDate(newDate);
  };

  const handleToDateChange = (event) => {
    const newDate = event.target.value;
    setToDate(newDate);
  };

  return (
    <>
      <h1>rent a car</h1>
      <div style={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ padding: "10px" }}>
            From
            <Input
              placeholder="Basic usage"
              type="date"
              onChange={handleFromDateChange}
            />
          </div>
          <div style={{ padding: "10px" }}>
            Till
            <Input
              placeholder="Basic usage"
              type="date"
              onChange={handleToDateChange}
            />
          </div>
          <Button colorScheme="blue" mt={10} onClick={handleOnclick}>
            Check Availabilities
          </Button>
        </div>
      </div>
    </>
  );
}

export default RentACar;
