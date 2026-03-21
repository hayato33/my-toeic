import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';

// .env.test.local を読み込む。ファイルが無い場合は DATABASE_URL が直接設定されている必要がある（CI 等）
// 注意: .env へのフォールバックは行わない（本番・開発 DB の汚染防止）
config({ path: '.env.test.local', override: true });

export default defineConfig({
  testDir: './e2e',
  globalSetup: './e2e/global-setup.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    storageState: 'e2e/auth-state.json',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
