import Anthropic from '@anthropic-ai/sdk';

const globalForAnthropic = globalThis as unknown as {
  anthropic: Anthropic | undefined;
};

function createClient() {
  const apiKey = process.env['ANTHROPIC_API_KEY'];
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY is not set.');
  }
  return new Anthropic({ apiKey });
}

export const anthropic = globalForAnthropic.anthropic ?? createClient();

if (process.env.NODE_ENV !== 'production') {
  globalForAnthropic.anthropic = anthropic;
}
