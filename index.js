 const puppeteer = require('puppeteer');
 const C = require('./config');
// const USERNAME_SELECTOR = 'input[id="identifierId"]';

// const PASSWORD_SELECTOR = 'input[type="password"]';
// const CTA_SELECTOR = 'button';
const google = 'button[id="logIn"]';

const rate =  'button[class="btn btn-success"]';
const rate_sub = 'input[value="1"]';

const button_confirm = 'button[class="btn btn-success"]';

// async function startBrowser() {
//   const browser = await puppeteer.launch({
//     headless: true
//   });
 
//   const page = await browser.newPage();
//   return {browser, page};
// }


// async function playTest(url) {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   page.setViewport({ width: 1280, height:720 });
//   await page.goto('http://daotao.vku.udn.vn/sv/diem', { waitUntil: 'networkidle2' });
//   await page.screenshot({path: 'vku.png'});
//   await page.click(google);
//   // await page.click('#Email');
//   await page.click(USERNAME_SELECTOR);
//   await page.keyboard.type(C.username);
//   await page.click(PASSWORD_SELECTOR);
//   await page.keyboard.type(C.password);
//   await page.click(CTA_SELECTOR);
//   await page.waitForNavigation();
//   // await page.screenshot({path: 'linkedin.png'});
//   const body = await page.content();
//   // console.log(body)
  
// }



// (async () => {
//   await playTest("daotao.vku.udn.vn/sv");
 
//   // process.exit(1);
// })();



(async () => {
  const browser = await puppeteer.launch({ headless: false})
  const page = await browser.newPage()
  page.setViewport({ width: 1280, height:720 });
  const navigationPromise = page.waitForNavigation()

  await page.goto('http://daotao.vku.udn.vn/sv/diem')
 
  await navigationPromise
  await page.click(google);
  await page.waitForSelector('input[type="email"]')
  await page.click('input[type="email"]')

  await navigationPromise

  //TODO : change to your email 
  await page.type('input[type="email"]', 'nnhoang.18it4@vku.udn.vn')

  await page.waitForSelector('#identifierNext')
  await page.click('#identifierNext')

  await page.waitFor(500);

  await page.waitForSelector('input[type="password"]',{visible: true})
  await page.click('input[type="password"]')
  await page.waitFor(500);

  //TODO : change to your password
  await page.type('input[type="password"]', 'Anhhoang12bar4')

  await page.waitForSelector('#passwordNext')
  await page.click('#passwordNext')
 
   await navigationPromise

   await page.waitFor(10000);
 
  
  //await browser.close()
  console.log(page.url());
  await page.goto('http://daotao.vku.udn.vn/sv/diem')
  do{
    // await page.click(rate)
    // await page.waitForSelector(rate_sub,{visible: true})
    // await page.click(rate_sub);
    // await page.click(button_confirm);
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
  }
  while(rate==null){
   await browser.close()
    
  }
  
})()
