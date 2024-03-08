import React from "react";
import Header from "./Layout/Header";
import RentACar from "./RentACar";
import axios from 'axios';


const baseURL = 'http://localhost:3000';

// Create an instance of Axios with a custom configuration
export const api = axios.create({
  baseURL,
  // You can add other configuration options here if needed
});

function Home() {
  return (
    <>
      <Header />
      <div>
        <RentACar />
      </div>
    </>
  );
}

export default Home;
