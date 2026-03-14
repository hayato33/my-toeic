import { test, expect } from '@playwright/test';

test.describe('学習セッション', () => {
  test('問題に回答して結果が表示される', async ({ page }) => {
    await page.goto('/');
    await page.click('text=学習を始める');
    await expect(page).toHaveURL('/study');

    await expect(page.locator('text=問題 1')).toBeVisible();

    const choices = page.locator('[data-testid="choice"]');
    await expect(choices).toHaveCount(4);

    await choices.first().click();

    await expect(
      page.locator('text=正解').or(page.locator('text=不正解')),
    ).toBeVisible();

    await expect(page.locator('text=解説')).toBeVisible();
    await expect(page.locator('text=次の問題へ')).toBeVisible();
  });

  test('全問回答後に完了画面が表示される', async ({ page }) => {
    await page.goto('/study');

    for (let i = 0; i < 10; i++) {
      await page.locator('[data-testid="choice"]').first().waitFor();
      await page.locator('[data-testid="choice"]').first().click();
      await page.waitForTimeout(300);
      const nextBtn = page.locator('text=次の問題へ');
      if (await nextBtn.isVisible()) {
        await nextBtn.click();
      }
    }

    await expect(page.locator('text=学習完了')).toBeVisible();
    await expect(page.locator('text=ダッシュボードに戻る')).toBeVisible();
  });
});
