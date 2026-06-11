const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2
  });

  const htmlPath = path.join(__dirname, 'index.html');
  await page.goto(`file://${htmlPath}`, {
    waitUntil: 'networkidle0',
    timeout: 30000
  });

  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);

  await page.pdf({
    path: path.join(__dirname, 'output', '张瀚月_AI创意设计师_作品集_第一阶段.pdf'),
    width: '1920px',
    height: '1080px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    pageRanges: '1-5'
  });

  console.log('PDF generated: output/张瀚月_AI创意设计师_作品集_第一阶段.pdf');
  await browser.close();
})();
