import { test, expect } from '@playwright/test';

test.describe('復習フロー', () => {
  test('復習対象がないとき適切なメッセージが表示される', async ({ page }) => {
    await page.goto('/review');
    await expect(page.locator('text=今日の復習はありません')).toBeVisible();
  });

  test('復習画面に直接アクセスできる', async ({ page }) => {
    await page.goto('/review');
    await expect(page).toHaveURL('/review');
    await expect(page.locator('text=今日の復習はありません')).toBeVisible();
  });
});
