'use client';

import { authClient } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

  const displayName = name || email;
  const initial = displayName.charAt(0).toUpperCase() || '?';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="sm" className="gap-2 px-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              {initial}
            </span>
            <span className="hidden max-w-[140px] truncate text-sm sm:block">
              {displayName}
            </span>
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="flex flex-col gap-0.5">
          <span className="font-medium">{name || '—'}</span>
          <span className="text-xs font-normal text-muted-foreground">
            {email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onClick={() => void handleSignOut()}
        >
          ログアウト
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
