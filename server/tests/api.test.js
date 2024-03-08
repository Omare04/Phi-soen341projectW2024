const request = require("supertest");
const app = require("../src/app");
import { carStruct } from "../routes/carRentalRoute";

describe("Should send an array of available cars, which could be empty, or throws a 500 if there's an error with the query", () => {
  test("GET /getAvailabilities/:from/:to/:where", async () => {
    const fromParam = "2022-03-07"; 
    const toParam = "2022-03-14"; 
    const whereParam = "LAX"; 

    const response = await request(app).get(
      `/getAvailabilities/${fromParam}/${toParam}/${whereParam}`
    );

    expect(response.statusCode).toBe(200);

    expect(Array.isArray(response.body)).toBe(true);

    response.body.forEach((car) => {
      expect(car).toMatchObject(carStruct);
    });

  });
});
