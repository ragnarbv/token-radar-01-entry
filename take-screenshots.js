const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function takeScreenshots() {
  const outputDir = path.join(__dirname, 'out');
  const dashboardDir = path.join(outputDir, 'dashboard');
  const screenshotsDir = path.join(outputDir, 'screenshots');
  
  fs.mkdirSync(screenshotsDir, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  const indexPath = path.join(dashboardDir, 'index.html');
  await page.goto(`file://${indexPath}`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);

  // 1. Board view
  await page.screenshot({ path: path.join(screenshotsDir, '1-board.png'), fullPage: false });
  console.log('Saved 1-board.png');

  // 2. Detail view
  await page.click('tbody tr:first-child');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(screenshotsDir, '2-detail.png'), fullPage: false });
  console.log('Saved 2-detail.png');

  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);

  // 3. Filtered view
  const searchInput = await page.$('#q');
  await searchInput.fill('bridge');
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(screenshotsDir, '3-filtered.png'), fullPage: false });
  console.log('Saved 3-filtered.png');

  await browser.close();
  console.log('All screenshots captured!');
}

takeScreenshots().catch(err => {
  console.error(err);
  process.exit(1);
});
