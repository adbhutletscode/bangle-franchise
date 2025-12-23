import { test, expect } from "@playwright/test";

test.describe("Enquiry Form", () => {
  test("should load enquiry page with form", async ({ page }) => {
    await page.goto("/enquiry");
    
    await expect(page).toHaveTitle(/Enquiry Form/);
    await expect(page.locator("h1")).toContainText("Enquiry Form");
    
    const form = page.locator("form");
    await expect(form).toBeVisible();
  });

  test("should have all required form fields", async ({ page }) => {
    await page.goto("/enquiry");
    
    await expect(page.locator("input[name='name']")).toBeVisible();
    await expect(page.locator("input[name='phone']")).toBeVisible();
    await expect(page.locator("input[name='city']")).toBeVisible();
    await expect(page.locator("select[name='budget']")).toBeVisible();
    await expect(page.locator("select[name='experience']")).toBeVisible();
    await expect(page.locator("textarea[name='message']")).toBeVisible();
  });

  test("should require mandatory fields", async ({ page }) => {
    await page.goto("/enquiry");
    
    const submitButton = page.locator("button[type='submit']");
    
    await submitButton.click();
    
    const nameInput = page.locator("input[name='name']");
    const phoneInput = page.locator("input[name='phone']");
    const cityInput = page.locator("input[name='city']");
    const budgetSelect = page.locator("select[name='budget']");
    
    await expect(nameInput).toBeFocused();
  });

  test("should submit form with valid data", async ({ page }) => {
    await page.goto("/enquiry");
    
    await page.locator("input[name='name']").fill("Test User");
    await page.locator("input[name='phone']").fill("9876543210");
    await page.locator("input[name='city']").fill("Mumbai");
    await page.locator("select[name='budget']").selectOption("150000-300000");
    await page.locator("select[name='experience']").selectOption("some-experience");
    await page.locator("textarea[name='message']").fill("Interested in franchise opportunity");
    
    const submitButton = page.locator("button[type='submit']");
    await submitButton.click();
    
    await expect(page.locator("text=Thank You for Your Enquiry")).toBeVisible({ timeout: 5000 });
    await expect(page.locator("text=within 24 hours")).toBeVisible();
  });

  test("should validate phone number format", async ({ page }) => {
    await page.goto("/enquiry");
    
    await page.locator("input[name='name']").fill("Test User");
    await page.locator("input[name='city']").fill("Mumbai");
    await page.locator("select[name='budget']").selectOption("150000-300000");
    
    const phoneInput = page.locator("input[name='phone']");
    await phoneInput.fill("123");
    
    const submitButton = page.locator("button[type='submit']");
    await submitButton.click();
    
    const validity = await phoneInput.evaluate((el: HTMLInputElement) => el.validity.valid);
    expect(validity).toBe(false);
  });

  test("should clear form on successful submission", async ({ page }) => {
    await page.goto("/enquiry");
    
    const nameInput = page.locator("input[name='name']");
    const phoneInput = page.locator("input[name='phone']");
    const cityInput = page.locator("input[name='city']");
    const messageInput = page.locator("textarea[name='message']");
    
    await nameInput.fill("Test User");
    await phoneInput.fill("9876543210");
    await cityInput.fill("Mumbai");
    await page.locator("select[name='budget']").selectOption("150000-300000");
    await messageInput.fill("Test message");
    
    await page.locator("button[type='submit']").click();
    
    await expect(page.locator("text=Thank You")).toBeVisible({ timeout: 5000 });
    
    await page.waitForTimeout(5500);
    
    expect(await nameInput.inputValue()).toBe("");
    expect(await phoneInput.inputValue()).toBe("");
    expect(await cityInput.inputValue()).toBe("");
    expect(await messageInput.inputValue()).toBe("");
  });

  test("should display privacy notice", async ({ page }) => {
    await page.goto("/enquiry");
    
    await expect(page.locator("text=Privacy Notice")).toBeVisible();
    await expect(page.locator("text=never share your details")).toBeVisible();
  });

  test("should have link to terms and privacy policy", async ({ page }) => {
    await page.goto("/enquiry");
    
    const termsLink = page.locator("a:has-text('Terms & Conditions')");
    const privacyLink = page.locator("a:has-text('Privacy Policy')");
    
    await expect(termsLink).toBeVisible();
    await expect(privacyLink).toBeVisible();
  });
});
