'use client';

import { authClient } from '@/lib/auth-client';

interface UserMenuProps {
  name: string;
  email: string;
}

export function UserMenu({ name, email }: UserMenuProps) {
  async function handleSignOut() {
    try {
      await authClient.signOut();
      // フルリロードで layout (Server Component) の auth UI を確実に更新
      window.location.assign('/login');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="hidden text-sm text-zinc-600 dark:text-zinc-400 sm:block">
        {name || email}
      </span>
      <button
        onClick={() => void handleSignOut()}
        className="rounded-md border border-zinc-300 px-3 py-1 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
      >
        ログアウト
      </button>
    </div>
  );
}
