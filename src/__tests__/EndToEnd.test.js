
import '@testing-library/jest-dom';
import puppeteer from 'puppeteer';

describe('show/hide event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 250, //slows down by 250ms
      timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('an event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .details'); //page.$(selector) grabs an element on the page, similar to document.querySelector(selector)
    expect(eventDetails).toBe(null);
  });

  test('user can expand an event to see its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
  });

  test('user can collapse an event to hide details', async () => {
    await page.click('.event .details-btn')
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBe(null);
  });

});