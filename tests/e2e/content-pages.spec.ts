import { test, expect } from "@playwright/test";

test.describe("Content Pages", () => {
  test("should load about page", async ({ page }) => {
    await page.goto("/about");
    
    await expect(page).toHaveTitle(/About Us/);
    await expect(page.locator("h1")).toContainText("About Our Bangle Franchise");
    await expect(page.locator("text=15 years")).toBeVisible();
  });

  test("should load franchise model page", async ({ page }) => {
    await page.goto("/franchise-model");
    
    await expect(page).toHaveTitle(/Franchise Model/);
    await expect(page.locator("h1")).toContainText("Franchise Model");
    
    await expect(page.locator("text=Counter Setup")).toBeVisible();
    await expect(page.locator("text=Small Shop")).toBeVisible();
    await expect(page.locator("text=Flagship Store")).toBeVisible();
    await expect(page.locator("text=Home-Based")).toBeVisible();
  });

  test("should display investment ranges on franchise model page", async ({ page }) => {
    await page.goto("/franchise-model");
    
    await expect(page.locator("text=₹1,50,000 - ₹3,00,000")).toBeVisible();
    await expect(page.locator("text=₹3,00,000 - ₹6,00,000")).toBeVisible();
    await expect(page.locator("text=₹6,00,000 - ₹12,00,000")).toBeVisible();
  });

  test("should load why-choose-us page", async ({ page }) => {
    await page.goto("/why-choose-us");
    
    await expect(page).toHaveTitle(/Why Choose Us/);
    await expect(page.locator("h1")).toContainText("Why Choose");
    await expect(page.locator("text=Proven Business Model")).toBeVisible();
    await expect(page.locator("text=Dedicated Support")).toBeVisible();
  });

  test("should display testimonials", async ({ page }) => {
    await page.goto("/why-choose-us");
    
    const testimonials = page.locator(".card-maroon");
    const count = await testimonials.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("should load legal pages", async ({ page }) => {
    const pages = [
      { path: "/disclaimer", heading: "Disclaimer" },
      { path: "/privacy", heading: "Privacy Policy" },
      { path: "/terms", heading: "Terms & Conditions" },
    ];

    for (const p of pages) {
      await page.goto(p.path);
      await expect(page.locator("h1")).toContainText(p.heading);
    }
  });

  test("should display disclaimer warning", async ({ page }) => {
    await page.goto("/disclaimer");
    
    await expect(page.locator("text=NOT a guaranteed income scheme")).toBeVisible();
    await expect(page.locator("text=Important Notice")).toBeVisible();
    await expect(page.locator("text=No Income Guarantees")).toBeVisible();
  });

  test("should have disclaimer on enquiry form", async ({ page }) => {
    await page.goto("/enquiry");
    
    const disclaimer = page.locator("text=is a franchise opportunity");
    await expect(disclaimer).toBeVisible();
  });

  test("should have clear content structure on home page", async ({ page }) => {
    await page.goto("/");
    
    await expect(page.locator("text=Low Initial Investment")).toBeVisible();
    await expect(page.locator("text=High Profit Margins")).toBeVisible();
    await expect(page.locator("text=Comprehensive Training")).toBeVisible();
  });
});
