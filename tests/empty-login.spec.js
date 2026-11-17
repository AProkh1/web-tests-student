import { test, expect } from '@playwright/test';

test('пустая форма входа показывает ошибки Email и пароля', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-marker="login-button-desktop"]').click();
  await page.locator('[data-marker="login-submit-button"]').click();

  const emailError = page.locator('[data-marker="email-error"]:visible');
  const passwordError = page.locator('[data-marker="password-error"]:visible');

  await expect(emailError).toHaveText('Email обязателен');
  await expect(passwordError).toHaveText('Пароль обязателен');
});
