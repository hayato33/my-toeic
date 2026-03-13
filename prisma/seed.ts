import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { vocabularyQuestions } from './seeds/vocabulary';
import { grammarQuestions } from './seeds/grammar';

const databaseUrl = process.env['DATABASE_URL'];
if (!databaseUrl) {
  console.error('DATABASE_URL is not set. Please check your .env file.');
  process.exit(1);
}

const adapter = new PrismaBetterSqlite3({ url: databaseUrl });
const prisma = new PrismaClient({ adapter });

async function main() {
  const allQuestions = [...vocabularyQuestions, ...grammarQuestions];

  for (const q of allQuestions) {
    await prisma.question.upsert({
      where: { id: q.id },
      update: {
        type: q.type,
        content: q.content,
        choices: JSON.stringify(q.choices),
        answer: q.answer,
        explanation: q.explanation,
      },
      create: {
        id: q.id,
        type: q.type,
        content: q.content,
        choices: JSON.stringify(q.choices),
        answer: q.answer,
        explanation: q.explanation,
      },
    });
  }

  console.log(`Seeded ${allQuestions.length} questions.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
