import puppeteer from "puppeteer";

export const captureHTMLAsImage = async (
  fileNamePrefix: string,
  absolutePaths: string[],
  outputDir: string
) => {
  const browser = await puppeteer.launch();

  const capturePage = async (path: string, index: number) => {
    try {
      const page = await browser.newPage();
      console.log(`Processing ${path}`);
      await page.goto(`file://${path}`, {
        waitUntil: "networkidle2",
      });

      await page.setViewport({ width: 1500, height: 1500 });
      await page.screenshot({
        path: `${outputDir}/${fileNamePrefix}-${index}.png`,
        fullPage: true,
      });
      await page.close();

      console.log(`Screenshot saved as ${fileNamePrefix}-${index}.png`);
    } catch (err) {
      console.log(err);
    }
  };

  try {
    const maxParallelTabs = 30;
    for (let i = 0; i < absolutePaths.length; i = i + maxParallelTabs) {
      let tabCount = 0;
      const allTabs = [];
      while (
        tabCount < maxParallelTabs &&
        i + tabCount < absolutePaths.length
      ) {
        const index = i + tabCount;
        const path = absolutePaths[index];
        allTabs.push(capturePage(path, index));
        tabCount++;
      }
      await Promise.all(allTabs);
    }
  } catch (err) {
    console.log(err);
  }

  await browser.close();
};
