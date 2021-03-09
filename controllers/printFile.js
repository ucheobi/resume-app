const puppeteer = require('puppeteer');
const fs = require('fs-extra');

(async () => {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('http://localhost:3000/resume')
        await page.waitForSelector("sidebar-component")

         await page.pdf({ 
            path: 'resume.pdf',
            format: 'A4' ,
            printBackground: true
        });

        await browser.close();
    
})()

//module.exports = printPDF;

