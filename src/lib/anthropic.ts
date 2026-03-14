import Anthropic from '@anthropic-ai/sdk';

const globalForAnthropic = globalThis as unknown as {
  anthropic: Anthropic | undefined;
};

function getClient(): Anthropic {
  if (globalForAnthropic.anthropic) {
    return globalForAnthropic.anthropic;
  }
  const apiKey = process.env['ANTHROPIC_API_KEY'];
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY is not set.');
  }
  const client = new Anthropic({ apiKey });
  if (process.env.NODE_ENV !== 'production') {
    globalForAnthropic.anthropic = client;
  }
  return client;
}

export { getClient as getAnthropicClient };
