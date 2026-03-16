import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from '@/lib/prisma';

function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Environment variable ${key} is not set.`);
  return value;
}

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: getRequiredEnv('GOOGLE_CLIENT_ID'),
      clientSecret: getRequiredEnv('GOOGLE_CLIENT_SECRET'),
    },
  },
});
