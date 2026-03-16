'use client';

import { authClient } from '@/lib/auth-client';

export default function LoginPage() {
  function handleGoogleLogin() {
    void authClient.signIn.social({ provider: 'google', callbackURL: '/' });
  }

  return (
    <main>
      <div className="mx-auto max-w-lg py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-3xl font-bold">My TOEIC</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            TOEIC 学習を始めましょう
          </p>
          <button
            onClick={handleGoogleLogin}
            className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
          >
            Google でログイン
          </button>
        </div>
      </div>
    </main>
  );
}
