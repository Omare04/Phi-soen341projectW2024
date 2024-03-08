const { render } = require('@testing-library/react');
const puppeteer = require('puppeteer');

describe('Input field acceptance test for user story 1', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('', async () => {
    //change to whatever port you're running on
    await page.goto('http://localhost:5173'); 

    const textContent = await page.evaluate(() => document.body.textContent);
    expect(textContent).toContain('user story');
  });


});
