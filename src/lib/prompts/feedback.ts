type FeedbackPromptParams = {
  type: 'vocabulary' | 'grammar';
  content: string;
  choices: string[];
  answer: string;
  userAnswer: string;
  isCorrect: boolean;
};

export function buildFeedbackPrompt(params: FeedbackPromptParams): string {
  const { type, content, choices, answer, userAnswer, isCorrect } = params;
  const typeLabel = type === 'vocabulary' ? '単語' : '文法';
  const resultLabel = isCorrect ? '正解' : '不正解';
  const feedbackPoints = isCorrect
    ? '- なぜこれが正解なのか簡単な補足\n- 関連する表現や覚え方のヒント'
    : '- なぜ間違えたのかの分析\n- 正解の覚え方のヒント\n- 似た表現との違い';

  return `あなたはTOEIC学習のチューターです。以下の問題に対して、JSON形式で回答してください。

問題タイプ: ${typeLabel}
問題: ${content}
選択肢: ${choices.join(', ')}
正解: ${answer}
ユーザーの回答: ${userAnswer}
結果: ${resultLabel}

以下のJSON形式で回答してください（マークダウンコードブロック不要）:
{
  "translation": "問題文の自然な日本語訳",
  "feedback": "以下の観点で3〜5文程度の日本語フィードバック:\\n${feedbackPoints.replace(/\n/g, '\\\\n')}"
}`;
}
