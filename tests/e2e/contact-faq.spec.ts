import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test("should display contact information", async ({ page }) => {
    await page.goto("/contact");
    
    await expect(page.locator("h1")).toContainText("Get In Touch");
    
    await expect(page.locator("text=+91 98765 43210")).toBeVisible();
    await expect(page.locator("text=franchise@bangles.in")).toBeVisible();
    await expect(page.locator("text=WhatsApp")).toBeVisible();
  });

  test("should have clickable phone link", async ({ page }) => {
    await page.goto("/contact");
    
    const phoneLink = page.locator("a[href='tel:+919876543210']");
    await expect(phoneLink).toBeVisible();
    await expect(phoneLink).toHaveAttribute("href", "tel:+919876543210");
  });

  test("should have clickable email link", async ({ page }) => {
    await page.goto("/contact");
    
    const emailLink = page.locator("a[href*='mailto:']");
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute("href", /franchise@bangles\.in/);
  });

  test("should have WhatsApp link", async ({ page }) => {
    await page.goto("/contact");
    
    const whatsappLink = page.locator("a[href*='wa.me']");
    await expect(whatsappLink).toBeVisible();
    await expect(whatsappLink).toHaveAttribute("href", /wa\.me/);
  });

  test("should display business hours", async ({ page }) => {
    await page.goto("/contact");
    
    await expect(page.locator("text=Monday - Saturday")).toBeVisible();
    await expect(page.locator("text=10:00 AM - 7:00 PM IST")).toBeVisible();
  });

  test("should have enquiry CTA on contact page", async ({ page }) => {
    await page.goto("/contact");
    
    const enquiryLink = page.locator("a:has-text('Submit Franchise Enquiry')");
    await expect(enquiryLink).toBeVisible();
  });
});

test.describe("FAQ Page", () => {
  test("should load FAQ page", async ({ page }) => {
    await page.goto("/faq");
    
    await expect(page).toHaveTitle(/FAQ/);
    await expect(page.locator("h1")).toContainText("Frequently Asked");
  });

  test("should display FAQ items", async ({ page }) => {
    await page.goto("/faq");
    
    const faqCards = page.locator(".card");
    const count = await faqCards.count();
    expect(count).toBeGreaterThan(5);
  });

  test("should toggle FAQ accordion", async ({ page }) => {
    await page.goto("/faq");
    
    const firstFaqButton = page.locator(".card button").first();
    await firstFaqButton.click();
    
    const firstAnswer = page.locator(".card").first().locator("p");
    await expect(firstAnswer).toBeVisible();
    
    await firstFaqButton.click();
  });

  test("should contain important disclaimer in FAQ", async ({ page }) => {
    await page.goto("/faq");
    
    await expect(page.locator("text=NOT guaranteed")).toBeVisible();
    await expect(page.locator("text=income")).toBeVisible();
  });

  test("should have contact info in FAQ", async ({ page }) => {
    await page.goto("/faq");
    
    await expect(page.locator("text=franchise@bangles.in")).toBeVisible();
    await expect(page.locator("text=+91 98765 43210")).toBeVisible();
  });
});
