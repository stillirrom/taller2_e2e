const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Test header and title of the page', () => {
    test('Title of the page', async () => {
        const title = await page.title();
        expect(title).toBe('Angular 6 User Registration and Login Example');
    }, timeout);

    /*test('Header of the page', async () => {
        const headerHandle = await page.$('.learn_header');
        const html = await page.evaluate(headerHandle => headerHandle.innerHTML, headerHandle);

        expect(html).toBe("What will you learn");
    }, timeout);*/

    /*test('Submit form with valid data', async () => {
        await page.click('[href="/register"]');
        
        await page.waitForSelector('form');
        await page.type('#name', 'Rick');

        await page.type('#password','szechuanSauce');
        await page.type('#repeat_password','szechuanSauce');

        await page.click('[type="submit"]');
        await page.waitForSelector('.success');
        const html = await page.$eval('.success', el => el.innerHTML);

        expect(html).toBe('Successfully signed up!');
    }, timeout);*/
});