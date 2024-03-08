describe("Acceptance Test", () => {
  test("", async () => {
    //change to whatever port you're running on
    await page.goto("http://localhost:3000");

    const welcomeMessage = await queryByText(
      page,
      "server started on port 3000"
    );
    expect(welcomeMessage).toBeInTheDocument();
  });
});
