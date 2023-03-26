// Scraping

// Es la tecnica de simular la navegacion de un humano para extraer informacion de sitios

const puppeteer = require('puppeteer')
    // Funcion para navegar
async function scraping() {
    console.log('Lanch');
    // puppeter nos ayuda a abrir un navegador en segundo plano
    const browser = await puppeteer.launch({headless: false});
    // Abrir una nueva pagina
    const page = await browser.newPage();
    // Dirigir al navegador a una pagina
    await page.goto('https:es.wikipedia.org/wiki/node.js')
    // Busca el componente especifico y hace lo que se le indique
    var tittle1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });
    console.log(tittle1)
    console.log('Closing');
    browser.close();
    console.log('closed');
};

scraping()