let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("http://github.com/team")
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub')
  }, 50000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content")
  }, 50000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team", {timeout: 50000})
  });
});

describe("Should  title for GitHub", () => {
    test("Should page skills", async() => {
      await page.goto("https://github.com/");
      const link1 = await page.$("body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > footer > div.container-xl.p-responsive > div > div:nth-child(4) > ul > li:nth-child(4) > a");
      await link1.click();
      //const link2 = await page.$("body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(3) > div > ul:nth-child(1) > li > a > div > div");
      //await page.click("body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu--logged-out.p-responsive.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.pt-7.pb-4.top-0 > div > nav > ul > li:nth-child(3) > div > ul:nth-child(1) > li > a > div > div");
      const title2 = await page.waitForSelector("body > header > div > div.col-12.col-md-8.col-lg-7.p-responsive.pt-7.pb-9 > h1");
      expect(title2).toEqual({});
    }, 50000);
  });

describe("Should check GitHub pages", () => {
  test("Should check Pricing page", async () => {
    await page.goto("https://github.com/pricing");
    const title = await page.title();
    expect(title).toContain("Pricing · Plans for every developer · GitHub")
  }, 50000);

  test("Should check About page", async () => {
    await page.goto("https://github.com/about");
    const title = await page.title();
    expect(title).toContain("About · GitHub")
  }, 50000);

  test("Should check Shop page", async () => {
    await page.goto("https://github.com/marketplace");
    const title = await page.title();
    expect(title).toContain("GitHub Marketplace · to improve your workflow · GitHub")
  }, 50000);
});