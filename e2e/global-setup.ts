import { chromium, type FullConfig } from '@playwright/test';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';

const BASE_URL = 'http://localhost:3000';
const TEST_EMAIL = 'e2e-test@example.com';
const TEST_PASSWORD = 'e2e-test-password-123';

export default async function globalSetup(_config: FullConfig) {
  // .env.test.local を読み込む。ファイルが無い場合は DATABASE_URL が直接設定されている必要がある（CI 等）
  // 注意: .env へのフォールバックは行わない（本番・開発 DB の汚染防止）
  const testEnv = config({ path: '.env.test.local', override: true });
  if (testEnv.error && !process.env['DATABASE_URL']) {
    throw new Error(
      'E2E テストには .env.test.local または DATABASE_URL 環境変数が必要です。',
    );
  }

  // 既存テストユーザーをクリーンアップ（パスワード無しで作成された場合を含む）
  const databaseUrl = process.env['DATABASE_URL'];
  if (!databaseUrl) throw new Error('DATABASE_URL is not set.');
  const sql = neon(databaseUrl);
  await sql`DELETE FROM "User" WHERE email = ${TEST_EMAIL}`;

  const browser = await chromium.launch();
  let context;
  try {
    context = await browser.newContext();

    // サインアップ
    const signUpRes = await context.request.post(
      `${BASE_URL}/api/auth/sign-up/email`,
      {
        headers: { Origin: BASE_URL },
        data: {
          email: TEST_EMAIL,
          password: TEST_PASSWORD,
          name: 'E2E Test User',
        },
      },
    );
    if (!signUpRes.ok()) {
      throw new Error(
        `E2E test sign-up failed: ${signUpRes.status()} ${await signUpRes.text()}`,
      );
    }

    // サインインして署名済み Cookie を取得
    const signInRes = await context.request.post(
      `${BASE_URL}/api/auth/sign-in/email`,
      {
        headers: { Origin: BASE_URL },
        data: { email: TEST_EMAIL, password: TEST_PASSWORD },
      },
    );
    if (!signInRes.ok()) {
      throw new Error(
        `E2E test sign-in failed: ${signInRes.status()} ${await signInRes.text()}`,
      );
    }

    // Cookie を含む storageState を保存
    await context.storageState({ path: 'e2e/auth-state.json' });
  } finally {
    if (context) await context.close();
    await browser.close();
  }
}
