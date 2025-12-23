import { test, expect } from "@playwright/test";

test.describe("Responsive Design", () => {
  const viewports = [
    { name: "Mobile", width: 375, height: 667 },
    { name: "Tablet", width: 768, height: 1024 },
    { name: "Desktop", width: 1440, height: 900 },
  ];

  viewports.forEach(({ name, width, height }) => {
    test(`should render home page correctly on ${name}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto("/");
      
      const heading = page.locator("h1").first();
      await expect(heading).toBeVisible();
      
      const buttons = page.locator("button, a.btn-primary, a.btn-secondary");
      const buttonCount = await buttons.count();
      expect(buttonCount).toBeGreaterThan(0);
    });

    test(`should render enquiry form correctly on ${name}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto("/enquiry");
      
      const form = page.locator("form");
      await expect(form).toBeVisible();
      
      const inputs = page.locator("input, select, textarea");
      const count = await inputs.count();
      expect(count).toBeGreaterThan(3);
    });
  });

  test("should have readable text on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    
    const heading = page.locator("h1").first();
    const fontSize = await heading.evaluate((el) => 
      window.getComputedStyle(el).fontSize
    );
    
    const fontSizeValue = parseInt(fontSize);
    expect(fontSizeValue).toBeGreaterThanOrEqual(24);
  });

  test("should have proper spacing on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    
    const cards = page.locator(".card");
    const firstCard = cards.first();
    
    await expect(firstCard).toBeVisible();
    
    const padding = await firstCard.evaluate((el) => 
      window.getComputedStyle(el).padding
    );
    
    expect(padding).toBeTruthy();
  });

  test("should have functional footer on all viewports", async ({ page }) => {
    const viewports = [375, 768, 1440];
    
    for (const width of viewports) {
      await page.setViewportSize({ width, height: 667 });
      await page.goto("/");
      
      await page.locator("body").evaluate(() => 
        window.scrollTo(0, document.body.scrollHeight)
      );
      
      const footer = page.locator("footer");
      await expect(footer).toBeVisible();
    }
  });
});
