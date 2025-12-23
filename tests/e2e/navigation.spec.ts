import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should load home page with all elements", async ({ page }) => {
    await page.goto("/");
    
    await expect(page).toHaveTitle(/Start Your Own Bangle Business/);
    await expect(page.locator("h1")).toContainText("Start Your Own Bangle Business");
    
    const navBar = page.locator("nav");
    await expect(navBar).toBeVisible();
    await expect(navBar.locator("text=Home")).toBeVisible();
    await expect(navBar.locator("text=About")).toBeVisible();
    await expect(navBar.locator("text=Franchise Model")).toBeVisible();
  });

  test("should navigate to all main pages", async ({ page }) => {
    const pages = [
      { path: "/", title: /Start Your Own Bangle Business/ },
      { path: "/about", title: /About Us/ },
      { path: "/franchise-model", title: /Franchise Model/ },
      { path: "/why-choose-us", title: /Why Choose Us/ },
      { path: "/faq", title: /FAQ/ },
      { path: "/contact", title: /Contact Us/ },
      { path: "/enquiry", title: /Enquiry Form/ },
    ];

    for (const p of pages) {
      await page.goto(p.path);
      await expect(page).toHaveTitle(p.title);
    }
  });

  test("should navigate via navbar links", async ({ page }) => {
    await page.goto("/");
    
    await page.locator("a:has-text('About')").click();
    await expect(page).toHaveURL(/\/about/);
    
    await page.locator("a:has-text('Franchise Model')").click();
    await expect(page).toHaveURL(/\/franchise-model/);
    
    await page.locator("a:has-text('Contact')").click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("should have working CTA buttons on home page", async ({ page }) => {
    await page.goto("/");
    
    const applyButton = page.locator("a:has-text('Apply for Franchise')").first();
    await expect(applyButton).toBeVisible();
    await applyButton.click();
    await expect(page).toHaveURL(/\/enquiry/);
  });

  test("should have responsive mobile menu", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    
    const menuButton = page.locator("button").filter({ hasText: /Menu|☰/ }).first();
    
    if (await menuButton.isVisible()) {
      await menuButton.click();
      const aboutLink = page.locator("a:has-text('About')");
      await expect(aboutLink).toBeVisible();
    }
  });
});
