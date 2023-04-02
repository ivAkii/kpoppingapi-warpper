const express = require('express');
const puppeteer = require('puppeteer');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();
const port = 3000;

router.get('/pics/:idolName/:groupName?', async (req, res) => {
  const groupName = req.params.groupName || 'any';
  const idolName = req.params.idolName;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    const url = `https://kpopping.com/kpics/gender-all/category-any/idol-any/group-${groupName}/order-new`;
    await page.goto(url);

    const foundIdolName = await page.evaluate((idolName) => {
      const buttons = Array.from(document.querySelectorAll('.buttons a.btn'));
      for (const button of buttons) {
        const href = button.getAttribute('href');
        if (href.includes('/idol-') && href.includes('/group-any')) {
          const idolNameMatch = href.match(/idol-(.*)\/group/);
          if (idolNameMatch && idolNameMatch[1].toLowerCase().includes(idolName.toLowerCase())) {
            return idolNameMatch[1];
          }
        }
      }
      return '';
    }, idolName);

    const finalIdolName = foundIdolName || idolName;
    if (!finalIdolName) {
      console.log(`Idol ${finalIdolName} not found in group ${groupName}`);
      return res.json('Idol not found. Probably cuz your idol got the same name as others try with their group included [name] [group] ');
    }

    const idolUrl = `https://kpopping.com/kpics/gender-all/category-any/idol-${finalIdolName}/group-any/order-new`;
    console.log(idolUrl);
    await page.goto(idolUrl);

    const cells = await page.evaluate(() => {
      const cells = Array.from(document.querySelectorAll('.cell figure a'));
      return cells.filter((cell) => cell.getAttribute('href').match(/^\/kpics\/\d+/)).map((cell) => cell.getAttribute('href'));
    });

    if (cells.length > 0) {
      const cellUrl = `https://kpopping.com${cells[Math.floor(Math.random() * cells.length)]}`;
      await page.goto(cellUrl);

      const images = await page.evaluate(() => {
        const images = Array.from(document.querySelectorAll('.justified-gallery a'));
        return images.map((image) => `https://kpopping.com${image.getAttribute('href')}`);
      });

      if (images.length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.json({ foundIdolName, images });
      } else {
        res.json({ message: `No images found for ${finalIdolName}` });
      }
    } else {
      res.json({ message: `No images found for ${finalIdolName}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing your request. Please try again later.' });
  } finally {
    await browser.close();
  }
});

router.get('/gpics/:groupName', async (req, res) => {
  const groupName = req.params.groupName;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    const url = `https://kpopping.com/kpics/gender-all/category-any/idol-any/group-${groupName}/order-new`;
    await page.goto(url);

    const cells = await page.evaluate(() => {
      const cells = Array.from(document.querySelectorAll('.cell figure a'));
      return cells.filter((cell) => cell.getAttribute('href').match(/^\/kpics\/\d+/)).map((cell) => cell.getAttribute('href'));
    });

    if (cells.length > 0) {
      const cellUrl = `https://kpopping.com${cells[Math.floor(Math.random() * cells.length)]}`;
      await page.goto(cellUrl);

      const images = await page.evaluate(() => {
        const images = Array.from(document.querySelectorAll('.justified-gallery a'));
        return images.map((image) => `https://kpopping.com${image.getAttribute('href')}`);
      });

      if (images.length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.json({ groupName, images });
      } else {
        res.status(404).json({ message: `No images found for ${groupName}` });
      }
    } else {
      res.status(404).json({ message: `No images found for ${groupName}` });
    }
  }catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing your request. Please try again later.' });
  } finally {
    await browser.close();
  }
});

app.use(`/api`, router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports.handler = serverless(app);