import { SeedQuestion } from './types';

export const grammarQuestions: SeedQuestion[] = [
  {
    id: 'gram-001',
    type: 'grammar',
    content:
      'The manager asked the team to submit the report _____ the end of the day.',
    choices: ['by', 'until', 'for', 'since'],
    answer: 'by',
    explanation:
      '「〜までに」という期限を表す場合は by を使います。until は「〜まで（ずっと）」という継続を表します。',
  },
  {
    id: 'gram-002',
    type: 'grammar',
    content:
      'If the shipment _____ on time, we would not have lost the client.',
    choices: ['had arrived', 'arrived', 'has arrived', 'would arrive'],
    answer: 'had arrived',
    explanation:
      '仮定法過去完了の文です。過去の事実に反する仮定には had + 過去分詞 を使います。',
  },
  {
    id: 'gram-003',
    type: 'grammar',
    content: 'The new policy will take _____ starting next month.',
    choices: ['effect', 'affect', 'effective', 'effects'],
    answer: 'effect',
    explanation:
      'take effect は「効力を発する」という定型表現です。affect は動詞で「影響を与える」の意味。',
  },
  {
    id: 'gram-004',
    type: 'grammar',
    content:
      '_____ the heavy rain, the outdoor event was postponed to next week.',
    choices: ['Due to', 'Although', 'Despite', 'However'],
    answer: 'Due to',
    explanation:
      'Due to は「〜のために」という原因を表す前置詞句です。名詞（the heavy rain）の前に使います。',
  },
  {
    id: 'gram-005',
    type: 'grammar',
    content:
      'The company has been _____ expanding its operations in Southeast Asia.',
    choices: ['steadily', 'steady', 'steadiness', 'steadied'],
    answer: 'steadily',
    explanation:
      '動詞 expanding を修飾するには副詞 steadily が必要です。形容詞 steady は名詞を修飾します。',
  },
  {
    id: 'gram-006',
    type: 'grammar',
    content:
      'All employees are required to attend the meeting, _____ they have prior approval to be absent.',
    choices: ['unless', 'if', 'when', 'while'],
    answer: 'unless',
    explanation: 'unless は「〜でない限り」という意味で、例外条件を示します。',
  },
  {
    id: 'gram-007',
    type: 'grammar',
    content:
      "The proposal was rejected because it did not _____ with the company's guidelines.",
    choices: ['comply', 'apply', 'supply', 'reply'],
    answer: 'comply',
    explanation:
      'comply with は「〜に従う、準拠する」という意味です。apply to（適用する）、supply（供給する）、reply to（返答する）と区別しましょう。',
  },
  {
    id: 'gram-008',
    type: 'grammar',
    content:
      'The CEO, along with the board members, _____ attending the conference next week.',
    choices: ['is', 'are', 'were', 'have been'],
    answer: 'is',
    explanation:
      'along with は付帯表現で、主語は The CEO（単数）のままです。したがって動詞も単数形の is を使います。',
  },
  {
    id: 'gram-009',
    type: 'grammar',
    content:
      'The marketing department has proposed _____ the advertising budget by 15%.',
    choices: ['increasing', 'to increase', 'increased', 'increase'],
    answer: 'increasing',
    explanation:
      'propose の後には動名詞（-ing形）が続きます。propose doing の形で覚えましょう。',
  },
  {
    id: 'gram-010',
    type: 'grammar',
    content:
      'The office renovation is expected to be completed _____ three months.',
    choices: ['within', 'during', 'for', 'while'],
    answer: 'within',
    explanation:
      'within は「〜以内に」という期間の範囲を表します。during は特定の期間中を意味し、ニュアンスが異なります。',
  },
  {
    id: 'gram-011',
    type: 'grammar',
    content:
      'Neither the manager _____ the assistant was available for the meeting.',
    choices: ['nor', 'or', 'and', 'but'],
    answer: 'nor',
    explanation:
      'neither ... nor は「〜も〜もない」という相関接続詞です。neither と nor はセットで使います。',
  },
  {
    id: 'gram-012',
    type: 'grammar',
    content: 'The contract will be reviewed _____ both parties have signed it.',
    choices: ['after', 'until', 'by', 'during'],
    answer: 'after',
    explanation:
      'after は「〜した後に」という時間的順序を表す接続詞です。後ろに節（主語+動詞）が続きます。',
  },
  {
    id: 'gram-013',
    type: 'grammar',
    content:
      'Employees who wish to work remotely must submit a _____ request to their supervisor.',
    choices: ['written', 'writing', 'wrote', 'write'],
    answer: 'written',
    explanation:
      '名詞 request を修飾するには過去分詞 written（書面の）を使います。a written request で「書面による申請」。',
  },
  {
    id: 'gram-014',
    type: 'grammar',
    content: 'The conference room is large _____ to accommodate 50 people.',
    choices: ['enough', 'too', 'very', 'so'],
    answer: 'enough',
    explanation:
      '形容詞 + enough + to do で「〜するのに十分…だ」という意味です。enough は形容詞の後に置きます。',
  },
  {
    id: 'gram-015',
    type: 'grammar',
    content:
      "_____ Ms. Chen's leadership, the department exceeded its sales targets.",
    choices: ['Under', 'Below', 'Beneath', 'Down'],
    answer: 'Under',
    explanation:
      "under one's leadership は「〜のリーダーシップのもとで」という定型表現です。",
  },
  {
    id: 'gram-016',
    type: 'grammar',
    content:
      'The report should be proofread carefully _____ it is submitted to the client.',
    choices: ['before', 'after', 'while', 'since'],
    answer: 'before',
    explanation:
      'before は「〜する前に」という時間的順序を表します。提出前に校正するのが論理的です。',
  },
  {
    id: 'gram-017',
    type: 'grammar',
    content:
      'The company has hired additional staff to _____ the increased workload.',
    choices: ['handle', 'handling', 'handled', 'handles'],
    answer: 'handle',
    explanation:
      'to の後には動詞の原形が続きます。to handle で「処理するために」という目的を表します。',
  },
  {
    id: 'gram-018',
    type: 'grammar',
    content:
      'Customers who are not satisfied with their purchase may return it for a full _____.',
    choices: ['refund', 'refunding', 'refunded', 'refundable'],
    answer: 'refund',
    explanation:
      '冠詞 a の後には名詞が必要です。a full refund で「全額返金」という意味になります。',
  },
  {
    id: 'gram-019',
    type: 'grammar',
    content:
      'The new software is _____ more efficient than the previous version.',
    choices: ['significantly', 'significant', 'significance', 'signify'],
    answer: 'significantly',
    explanation:
      '比較級 more efficient を修飾するには副詞 significantly が必要です。「大幅に効率的」という意味。',
  },
  {
    id: 'gram-020',
    type: 'grammar',
    content:
      '_____ completing the training program, employees will receive a certificate.',
    choices: ['Upon', 'While', 'During', 'For'],
    answer: 'Upon',
    explanation:
      'upon + 動名詞 で「〜するとすぐに」という意味です。upon completing で「完了すると」。',
  },
  {
    id: 'gram-021',
    type: 'grammar',
    content:
      'The budget for this project is _____ than what was originally estimated.',
    choices: ['higher', 'highest', 'high', 'highly'],
    answer: 'higher',
    explanation:
      'than があるので比較級 higher を使います。最上級や原級は than と共に使えません。',
  },
  {
    id: 'gram-022',
    type: 'grammar',
    content: 'Please make sure that all documents are filed _____.',
    choices: ['properly', 'proper', 'property', 'properness'],
    answer: 'properly',
    explanation:
      '動詞 are filed を修飾するには副詞 properly（適切に）が必要です。',
  },
  {
    id: 'gram-023',
    type: 'grammar',
    content:
      'The store offers a wide _____ of products to meet customer needs.',
    choices: ['variety', 'various', 'vary', 'varied'],
    answer: 'variety',
    explanation:
      '冠詞 a の後には名詞が必要です。a wide variety of で「幅広い種類の」という定型表現。',
  },
  {
    id: 'gram-024',
    type: 'grammar',
    content:
      'The seminar was so informative _____ many participants requested additional sessions.',
    choices: ['that', 'which', 'what', 'when'],
    answer: 'that',
    explanation: 'so ... that で「とても〜なので…」という結果を表す構文です。',
  },
  {
    id: 'gram-025',
    type: 'grammar',
    content: 'The factory has been operating at full _____ since last quarter.',
    choices: ['capacity', 'capable', 'capability', 'capacious'],
    answer: 'capacity',
    explanation:
      'at full capacity は「フル稼働で」という定型表現です。名詞 capacity が必要です。',
  },
  {
    id: 'gram-026',
    type: 'grammar',
    content:
      'Each of the applicants _____ required to submit a resume and cover letter.',
    choices: ['is', 'are', 'were', 'have been'],
    answer: 'is',
    explanation:
      'each of は単数扱いです。したがって動詞も単数形の is を使います。',
  },
  {
    id: 'gram-027',
    type: 'grammar',
    content: 'The hotel is conveniently _____ near the train station.',
    choices: ['located', 'locating', 'location', 'locate'],
    answer: 'located',
    explanation:
      'is located は「位置している」という受動態です。conveniently located で「便利な場所にある」。',
  },
  {
    id: 'gram-028',
    type: 'grammar',
    content:
      'We need to find a solution _____ addresses both cost and quality concerns.',
    choices: ['that', 'what', 'who', 'where'],
    answer: 'that',
    explanation:
      '先行詞 a solution（物）を修飾する関係代名詞は that または which です。主格として使います。',
  },
  {
    id: 'gram-029',
    type: 'grammar',
    content: 'The presentation was well _____ by the audience.',
    choices: ['received', 'receiving', 'receive', 'receipt'],
    answer: 'received',
    explanation:
      'was received は受動態で「受け入れられた」という意味です。well received で「好評だった」。',
  },
  {
    id: 'gram-030',
    type: 'grammar',
    content: 'Mr. Park will be responsible _____ overseeing the new project.',
    choices: ['for', 'to', 'with', 'of'],
    answer: 'for',
    explanation:
      'responsible for は「〜に責任がある」という定型表現です。for の後に動名詞が続きます。',
  },
  {
    id: 'gram-031',
    type: 'grammar',
    content:
      'The quarterly earnings report will be _____ released to shareholders next Monday.',
    choices: ['officially', 'official', 'officiate', 'officer'],
    answer: 'officially',
    explanation:
      '動詞 released を修飾するには副詞 officially（公式に）が必要です。',
  },
  {
    id: 'gram-032',
    type: 'grammar',
    content:
      '_____ the product has been tested thoroughly, it will be available for purchase.',
    choices: ['Once', 'Unless', 'Although', 'Despite'],
    answer: 'Once',
    explanation:
      'once は「いったん〜すれば」という条件を表す接続詞です。テスト完了後に販売開始という論理関係に合います。',
  },
  {
    id: 'gram-033',
    type: 'grammar',
    content:
      'The company decided to _____ its operations to include international markets.',
    choices: ['expand', 'expansion', 'expanded', 'expanding'],
    answer: 'expand',
    explanation:
      'to の後には動詞の原形が続きます。decided to expand で「拡大することを決めた」。',
  },
  {
    id: 'gram-034',
    type: 'grammar',
    content:
      'Attendance at the safety workshop is _____ for all factory workers.',
    choices: ['mandatory', 'mandatorily', 'mandate', 'mandated'],
    answer: 'mandatory',
    explanation: 'is の後に補語として形容詞 mandatory（義務的な）が入ります。',
  },
  {
    id: 'gram-035',
    type: 'grammar',
    content:
      'The client expressed _____ with the quality of the delivered products.',
    choices: ['satisfaction', 'satisfy', 'satisfactory', 'satisfied'],
    answer: 'satisfaction',
    explanation:
      '動詞 expressed の目的語として名詞 satisfaction（満足）が必要です。',
  },
  {
    id: 'gram-036',
    type: 'grammar',
    content:
      'Employees should refrain _____ using personal devices during meetings.',
    choices: ['from', 'to', 'of', 'for'],
    answer: 'from',
    explanation:
      'refrain from は「〜を控える」という定型表現です。from の後に動名詞が続きます。',
  },
  {
    id: 'gram-037',
    type: 'grammar',
    content:
      'The building _____ was constructed in 1990 has recently been renovated.',
    choices: ['that', 'what', 'where', 'when'],
    answer: 'that',
    explanation:
      '先行詞 The building を修飾する関係代名詞節です。主格の関係代名詞 that が適切です。',
  },
  {
    id: 'gram-038',
    type: 'grammar',
    content: 'The merger is expected to result _____ significant cost savings.',
    choices: ['in', 'to', 'for', 'with'],
    answer: 'in',
    explanation:
      'result in は「〜という結果になる」という定型表現です。result from（〜に起因する）と区別しましょう。',
  },
  {
    id: 'gram-039',
    type: 'grammar',
    content: '_____ of the two proposals is more cost-effective?',
    choices: ['Which', 'What', 'Who', 'Whom'],
    answer: 'Which',
    explanation:
      '限られた選択肢（two proposals）から選ぶ場合は which を使います。what は不特定の場合に使います。',
  },
  {
    id: 'gram-040',
    type: 'grammar',
    content:
      "The company's profits have increased _____ over the past five years.",
    choices: ['consistently', 'consistent', 'consistency', 'consisting'],
    answer: 'consistently',
    explanation:
      '動詞 have increased を修飾するには副詞 consistently（一貫して）が必要です。',
  },
  {
    id: 'gram-041',
    type: 'grammar',
    content:
      'It is essential that the project _____ completed by the deadline.',
    choices: ['be', 'is', 'was', 'will be'],
    answer: 'be',
    explanation:
      'It is essential that の後は仮定法現在で、動詞は原形（be）を使います。要求・提案を表す構文です。',
  },
  {
    id: 'gram-042',
    type: 'grammar',
    content:
      'The new regulation will _____ all businesses operating in the region.',
    choices: ['affect', 'effect', 'effective', 'affection'],
    answer: 'affect',
    explanation:
      'affect は動詞で「影響を与える」、effect は名詞で「効果」です。will の後には動詞が必要です。',
  },
  {
    id: 'gram-043',
    type: 'grammar',
    content:
      'Ms. Johnson has been working at the company _____ she graduated from university.',
    choices: ['since', 'for', 'during', 'while'],
    answer: 'since',
    explanation:
      'since は起点を表し、後ろに節（she graduated）が続きます。for は期間の長さに使います。',
  },
  {
    id: 'gram-044',
    type: 'grammar',
    content: 'The meeting room is available for anyone _____ needs to use it.',
    choices: ['who', 'which', 'whom', 'whose'],
    answer: 'who',
    explanation: '先行詞 anyone（人）の主格として関係代名詞 who を使います。',
  },
  {
    id: 'gram-045',
    type: 'grammar',
    content: 'Prices are subject to change without _____.',
    choices: ['notice', 'notify', 'notification', 'notifying'],
    answer: 'notice',
    explanation:
      'without notice は「予告なしに」という定型表現です。前置詞 without の後に名詞 notice が入ります。',
  },
  {
    id: 'gram-046',
    type: 'grammar',
    content: 'The factory must _____ to all environmental regulations.',
    choices: ['adhere', 'adherence', 'adherent', 'adhering'],
    answer: 'adhere',
    explanation:
      'must の後には動詞の原形が続きます。adhere to は「〜を遵守する」という意味です。',
  },
  {
    id: 'gram-047',
    type: 'grammar',
    content: 'The sales team achieved results that were _____ expectations.',
    choices: ['beyond', 'between', 'beside', 'below'],
    answer: 'beyond',
    explanation:
      'beyond expectations は「期待以上の」という意味です。結果が予想を超えたことを表します。',
  },
  {
    id: 'gram-048',
    type: 'grammar',
    content:
      'Had the company invested earlier, it _____ have gained a competitive advantage.',
    choices: ['would', 'will', 'should', 'can'],
    answer: 'would',
    explanation:
      '仮定法過去完了の帰結節です。Had + S + 過去分詞, S + would have + 過去分詞 の形。',
  },
  {
    id: 'gram-049',
    type: 'grammar',
    content: 'The intern showed a great deal of _____ in learning new skills.',
    choices: ['enthusiasm', 'enthusiastic', 'enthusiastically', 'enthuse'],
    answer: 'enthusiasm',
    explanation:
      'of の後には名詞が必要です。a great deal of enthusiasm で「大きな熱意」。',
  },
  {
    id: 'gram-050',
    type: 'grammar',
    content: 'The warranty covers defects _____ in materials and workmanship.',
    choices: ['both', 'either', 'neither', 'whether'],
    answer: 'both',
    explanation:
      'both A and B は「AとBの両方」です。both in materials and workmanship で「材料と仕上がりの両方における」。',
  },
  {
    id: 'gram-051',
    type: 'grammar',
    content:
      'The supervisor insisted that the employee _____ the safety protocol.',
    choices: ['follow', 'follows', 'followed', 'following'],
    answer: 'follow',
    explanation:
      'insist that の後は仮定法現在で、動詞は原形を使います。主語が三人称単数でも follows にはなりません。',
  },
  {
    id: 'gram-052',
    type: 'grammar',
    content:
      'The new office building is _____ to the subway station, making commuting easy.',
    choices: ['adjacent', 'adjacently', 'adjacency', 'adjoining'],
    answer: 'adjacent',
    explanation:
      'is の後に補語として形容詞 adjacent（隣接した）が入ります。adjacent to で「〜に隣接した」。',
  },
  {
    id: 'gram-053',
    type: 'grammar',
    content:
      'The manager asked us to _____ a detailed analysis of the market trends.',
    choices: ['conduct', 'conducting', 'conducted', 'conducts'],
    answer: 'conduct',
    explanation:
      'asked us to の後には動詞の原形が続きます。conduct an analysis で「分析を行う」。',
  },
  {
    id: 'gram-054',
    type: 'grammar',
    content: '_____ the instructions carefully before assembling the product.',
    choices: ['Read', 'Reading', 'To read', 'Reads'],
    answer: 'Read',
    explanation:
      '命令文なので動詞の原形 Read で始まります。主語 You が省略された形です。',
  },
  {
    id: 'gram-055',
    type: 'grammar',
    content:
      'The report indicates that sales _____ by 20% compared to last year.',
    choices: ['have increased', 'has increased', 'increasing', 'increase'],
    answer: 'have increased',
    explanation:
      '主語 sales は複数形なので have increased を使います。compared to last year から現在完了形が適切。',
  },
  {
    id: 'gram-056',
    type: 'grammar',
    content: 'The venue can accommodate up _____ 500 guests.',
    choices: ['to', 'for', 'at', 'with'],
    answer: 'to',
    explanation:
      'up to は「最大〜まで」という定型表現です。数量の上限を表します。',
  },
  {
    id: 'gram-057',
    type: 'grammar',
    content:
      'The director _____ the team for their outstanding performance last quarter.',
    choices: ['commended', 'commending', 'commend', 'commends'],
    answer: 'commended',
    explanation:
      'last quarter（先四半期）という過去の時点を表す語があるので過去形 commended を使います。',
  },
  {
    id: 'gram-058',
    type: 'grammar',
    content:
      'All employees must wear _____ identification badges while on company premises.',
    choices: ['their', 'there', "they're", 'them'],
    answer: 'their',
    explanation:
      "所有格の their（彼らの）が名詞 badges を修飾します。there（そこ）、they're（they are の短縮）と区別しましょう。",
  },
  {
    id: 'gram-059',
    type: 'grammar',
    content:
      'The proposal was rejected _____ of its high implementation costs.',
    choices: ['because', 'instead', 'regardless', 'in spite'],
    answer: 'because',
    explanation:
      'because of は「〜のために」という原因を表します。提案が却下された理由を説明しています。',
  },
  {
    id: 'gram-060',
    type: 'grammar',
    content:
      'The company is looking for candidates with _____ experience in project management.',
    choices: ['extensive', 'extend', 'extension', 'extensively'],
    answer: 'extensive',
    explanation:
      '名詞 experience を修飾するには形容詞 extensive（豊富な）が必要です。',
  },
  {
    id: 'gram-061',
    type: 'grammar',
    content:
      'Participants are encouraged to _____ any questions during the Q&A session.',
    choices: ['raise', 'rise', 'arise', 'rose'],
    answer: 'raise',
    explanation:
      'raise は他動詞で「〜を上げる、提起する」、rise は自動詞で「上がる」です。questions は目的語なので raise。',
  },
  {
    id: 'gram-062',
    type: 'grammar',
    content: 'The renovation project was completed ahead of _____.',
    choices: ['schedule', 'scheduled', 'scheduling', 'schedules'],
    answer: 'schedule',
    explanation:
      'ahead of schedule は「予定より早く」という定型表現です。前置詞 of の後に名詞 schedule。',
  },
  {
    id: 'gram-063',
    type: 'grammar',
    content:
      '_____ the economy improves, many businesses continue to struggle.',
    choices: ['Although', 'Because', 'Since', 'Therefore'],
    answer: 'Although',
    explanation:
      'although は「〜にもかかわらず」という譲歩を表す接続詞です。経済改善と苦戦の対比を表します。',
  },
  {
    id: 'gram-064',
    type: 'grammar',
    content: 'The contract clearly _____ the responsibilities of each party.',
    choices: ['outlines', 'outlining', 'outlined', 'outline'],
    answer: 'outlines',
    explanation:
      '主語 The contract は三人称単数で、一般的事実を述べるので現在形 outlines を使います。',
  },
  {
    id: 'gram-065',
    type: 'grammar',
    content:
      'Feedback from customers is _____ valuable for improving our services.',
    choices: ['extremely', 'extreme', 'extremity', 'extremeness'],
    answer: 'extremely',
    explanation:
      '形容詞 valuable を修飾するには副詞 extremely（極めて）が必要です。',
  },
  {
    id: 'gram-066',
    type: 'grammar',
    content: 'The shipment is expected to arrive _____ Wednesday and Friday.',
    choices: ['between', 'among', 'during', 'within'],
    answer: 'between',
    explanation:
      'between A and B は2つの間を表します。2つの曜日の間なので between が適切です。among は3つ以上。',
  },
  {
    id: 'gram-067',
    type: 'grammar',
    content:
      'The company will not proceed with the plan _____ it receives board approval.',
    choices: ['until', 'by', 'while', 'during'],
    answer: 'until',
    explanation:
      'not ... until で「〜するまで…しない」という意味です。承認を受けるまで進めないということ。',
  },
  {
    id: 'gram-068',
    type: 'grammar',
    content: 'Applicants must have at _____ five years of relevant experience.',
    choices: ['least', 'last', 'less', 'latest'],
    answer: 'least',
    explanation:
      'at least は「少なくとも」という定型表現です。最低条件を示します。',
  },
  {
    id: 'gram-069',
    type: 'grammar',
    content: 'The team worked _____ to meet the tight deadline.',
    choices: [
      'collaboratively',
      'collaborative',
      'collaboration',
      'collaborate',
    ],
    answer: 'collaboratively',
    explanation:
      '動詞 worked を修飾するには副詞 collaboratively（協力して）が必要です。',
  },
  {
    id: 'gram-070',
    type: 'grammar',
    content: 'The new policy aims to _____ employee productivity.',
    choices: ['enhance', 'enhancement', 'enhanced', 'enhancing'],
    answer: 'enhance',
    explanation:
      'to の後には動詞の原形が続きます。aims to enhance で「向上させることを目指す」。',
  },
  {
    id: 'gram-071',
    type: 'grammar',
    content:
      'All inquiries should be _____ to the customer service department.',
    choices: ['directed', 'directing', 'direct', 'direction'],
    answer: 'directed',
    explanation:
      'should be directed は受動態で「〜に向けられるべきだ」という意味です。',
  },
  {
    id: 'gram-072',
    type: 'grammar',
    content: "The CEO made a _____ speech at the annual shareholders' meeting.",
    choices: ['compelling', 'compelled', 'compel', 'compellingly'],
    answer: 'compelling',
    explanation:
      '名詞 speech を修飾するには形容詞 compelling（説得力のある）が必要です。',
  },
  {
    id: 'gram-073',
    type: 'grammar',
    content:
      '_____ the training session, participants will receive a handbook.',
    choices: ['Prior to', 'Afterward', 'Meanwhile', 'Nevertheless'],
    answer: 'Prior to',
    explanation:
      'prior to は「〜の前に」という意味の前置詞句です。名詞（the training session）の前に使います。',
  },
  {
    id: 'gram-074',
    type: 'grammar',
    content:
      'The company is committed _____ providing excellent customer service.',
    choices: ['to', 'for', 'in', 'with'],
    answer: 'to',
    explanation:
      'committed to は「〜に尽力している」という定型表現です。to の後には動名詞 providing が続きます。',
  },
  {
    id: 'gram-075',
    type: 'grammar',
    content:
      'Sales representatives are expected to maintain _____ relationships with clients.',
    choices: [
      'professional',
      'professionally',
      'professionalism',
      'profession',
    ],
    answer: 'professional',
    explanation:
      '名詞 relationships を修飾するには形容詞 professional（プロフェッショナルな）が必要です。',
  },
  {
    id: 'gram-076',
    type: 'grammar',
    content: 'The review process _____ approximately two weeks to complete.',
    choices: ['takes', 'taking', 'taken', 'took'],
    answer: 'takes',
    explanation:
      '一般的事実を述べる文で、主語 The review process は三人称単数なので現在形 takes を使います。',
  },
  {
    id: 'gram-077',
    type: 'grammar',
    content: '_____ interested in applying for the position should contact HR.',
    choices: ['Those', 'That', 'These', 'This'],
    answer: 'Those',
    explanation:
      'those は「〜する人々」という意味で、those interested in で「〜に興味のある人々」。',
  },
  {
    id: 'gram-078',
    type: 'grammar',
    content:
      'The proposed changes were met with _____ from several department heads.',
    choices: ['resistance', 'resist', 'resistant', 'resisting'],
    answer: 'resistance',
    explanation:
      '前置詞 with の後には名詞が必要です。met with resistance で「抵抗にあった」。',
  },
  {
    id: 'gram-079',
    type: 'grammar',
    content:
      'The training program is designed to help employees develop _____ skills.',
    choices: ['their', 'them', 'they', 'theirs'],
    answer: 'their',
    explanation:
      '名詞 skills を修飾する所有格 their が必要です。help + O + 原形 + their + 名詞 の構造。',
  },
  {
    id: 'gram-080',
    type: 'grammar',
    content: 'Production will resume once the necessary parts _____.',
    choices: ['arrive', 'arrives', 'arriving', 'arrived'],
    answer: 'arrive',
    explanation:
      '主語 parts は複数形なので動詞は原形 arrive です。once 節の中は未来のことでも現在形を使います。',
  },
  {
    id: 'gram-081',
    type: 'grammar',
    content:
      'The seminar provided participants with _____ information about tax regulations.',
    choices: ['useful', 'usefully', 'usefulness', 'use'],
    answer: 'useful',
    explanation:
      '名詞 information を修飾するには形容詞 useful（有用な）が必要です。',
  },
  {
    id: 'gram-082',
    type: 'grammar',
    content: 'Please ensure that all equipment is returned in _____ condition.',
    choices: ['good', 'well', 'goodness', 'better'],
    answer: 'good',
    explanation:
      '名詞 condition を修飾するには形容詞 good が必要です。in good condition で「良い状態で」。',
  },
  {
    id: 'gram-083',
    type: 'grammar',
    content:
      'The company _____ its employees to attend professional development workshops.',
    choices: ['encourages', 'encouraging', 'encouraged', 'encourage'],
    answer: 'encourages',
    explanation:
      '主語 The company は三人称単数で、一般的な方針を述べるので現在形 encourages を使います。',
  },
  {
    id: 'gram-084',
    type: 'grammar',
    content:
      'The deadline for submissions has been extended _____ an additional two weeks.',
    choices: ['by', 'for', 'to', 'with'],
    answer: 'by',
    explanation:
      'extended by は「〜だけ延長された」という差分を表します。by an additional two weeks で「さらに2週間」。',
  },
  {
    id: 'gram-085',
    type: 'grammar',
    content:
      'The research _____ by the university has attracted international attention.',
    choices: ['conducted', 'conducting', 'conduct', 'conducts'],
    answer: 'conducted',
    explanation:
      '過去分詞 conducted が The research を後置修飾しています。「大学によって行われた研究」。',
  },
  {
    id: 'gram-086',
    type: 'grammar',
    content: 'The package will be delivered to _____ address is on file.',
    choices: ['whichever', 'whatever', 'wherever', 'however'],
    answer: 'whichever',
    explanation:
      'whichever address は「どちらの住所であっても」という意味です。名詞 address を修飾する複合関係形容詞。',
  },
  {
    id: 'gram-087',
    type: 'grammar',
    content:
      'Not only did the company increase profits, _____ it also expanded its market share.',
    choices: ['but', 'and', 'or', 'yet'],
    answer: 'but',
    explanation:
      'not only ... but (also) は「〜だけでなく…も」という相関接続詞です。',
  },
  {
    id: 'gram-088',
    type: 'grammar',
    content:
      'The consultant recommended that the company _____ its marketing strategy.',
    choices: ['revise', 'revises', 'revised', 'revising'],
    answer: 'revise',
    explanation: 'recommend that の後は仮定法現在で、動詞は原形を使います。',
  },
  {
    id: 'gram-089',
    type: 'grammar',
    content: 'The workshop will focus _____ on improving communication skills.',
    choices: ['primarily', 'primary', 'prime', 'primed'],
    answer: 'primarily',
    explanation: '動詞 focus を修飾するには副詞 primarily（主に）が必要です。',
  },
  {
    id: 'gram-090',
    type: 'grammar',
    content:
      'Employees who complete the certification _____ eligible for a pay raise.',
    choices: ['become', 'becomes', 'becoming', 'became'],
    answer: 'become',
    explanation:
      '主語は Employees（複数）なので動詞は原形の become です。一般的事実を述べる現在形。',
  },
  {
    id: 'gram-091',
    type: 'grammar',
    content: 'The proposal includes a _____ breakdown of the project costs.',
    choices: ['detailed', 'detail', 'detailing', 'details'],
    answer: 'detailed',
    explanation:
      '名詞 breakdown を修飾するには形容詞（過去分詞）detailed（詳細な）が必要です。',
  },
  {
    id: 'gram-092',
    type: 'grammar',
    content:
      'The event will be held at the convention center, _____ is located downtown.',
    choices: ['which', 'that', 'where', 'what'],
    answer: 'which',
    explanation:
      'コンマの後の非制限用法の関係代名詞は which を使います。that は非制限用法では使えません。',
  },
  {
    id: 'gram-093',
    type: 'grammar',
    content: 'The annual budget must be approved _____ the fiscal year begins.',
    choices: ['before', 'after', 'since', 'until'],
    answer: 'before',
    explanation:
      'before は「〜する前に」です。予算は会計年度開始前に承認される必要があるという論理です。',
  },
  {
    id: 'gram-094',
    type: 'grammar',
    content:
      'Market analysts predict that demand for the product will _____ significantly.',
    choices: ['grow', 'growth', 'growing', 'grew'],
    answer: 'grow',
    explanation:
      'will の後には動詞の原形が続きます。will grow significantly で「大幅に成長するだろう」。',
  },
  {
    id: 'gram-095',
    type: 'grammar',
    content:
      'The new regulations are _____ to take effect at the beginning of next year.',
    choices: ['expected', 'expecting', 'expect', 'expectation'],
    answer: 'expected',
    explanation:
      'are expected to は「〜すると予想されている」という受動態です。',
  },
  {
    id: 'gram-096',
    type: 'grammar',
    content:
      'The project manager ensured that all tasks were completed _____ the specified timeframe.',
    choices: ['within', 'along', 'through', 'across'],
    answer: 'within',
    explanation:
      'within は「〜以内に」という意味で、指定された期間内という意味に合います。',
  },
  {
    id: 'gram-097',
    type: 'grammar',
    content:
      'The company prides _____ on its commitment to environmental sustainability.',
    choices: ['itself', 'themselves', 'ourselves', 'himself'],
    answer: 'itself',
    explanation:
      'pride oneself on は「〜を誇りに思う」という定型表現です。主語 The company は単数なので itself。',
  },
  {
    id: 'gram-098',
    type: 'grammar',
    content:
      '_____ weather conditions may cause delays in the delivery schedule.',
    choices: ['Adverse', 'Adversely', 'Adversity', 'Adversary'],
    answer: 'Adverse',
    explanation:
      '名詞 weather conditions を修飾するには形容詞 adverse（不利な）が必要です。',
  },
  {
    id: 'gram-099',
    type: 'grammar',
    content:
      'The accountant is responsible for ensuring that all financial records are _____.',
    choices: ['accurate', 'accurately', 'accuracy', 'accurateness'],
    answer: 'accurate',
    explanation: 'are の後に補語として形容詞 accurate（正確な）が入ります。',
  },
  {
    id: 'gram-100',
    type: 'grammar',
    content:
      'The marketing campaign proved to be highly _____ in attracting new customers.',
    choices: ['effective', 'effectively', 'effect', 'effectiveness'],
    answer: 'effective',
    explanation:
      'to be の後に補語として形容詞 effective（効果的な）が入ります。highly effective で「非常に効果的」。',
  },
  {
    id: 'gram-101',
    type: 'grammar',
    content: 'She has been working at this company _____ five years.',
    choices: ['for', 'since', 'during', 'while'],
    answer: 'for',
    explanation:
      '期間を表す場合は for を使います。since は起点（since 2019）、during は特定の期間中（during the meeting）を表します。',
  },
  {
    id: 'gram-102',
    type: 'grammar',
    content: 'The budget was approved _____ the board of directors yesterday.',
    choices: ['by', 'from', 'with', 'through'],
    answer: 'by',
    explanation:
      '受動態の動作主は by で表します。「取締役会によって承認された」という意味になります。',
  },
  {
    id: 'gram-103',
    type: 'grammar',
    content: 'Please make sure all employees _____ the safety regulations.',
    choices: ['comply with', 'comply to', 'comply for', 'comply at'],
    answer: 'comply with',
    explanation:
      'comply with は「〜を遵守する」という意味の定型句です。with とセットで使われます。',
  },
  {
    id: 'gram-104',
    type: 'grammar',
    content: 'The conference will be held _____ Monday, March 15, at 9 a.m.',
    choices: ['on', 'in', 'at', 'by'],
    answer: 'on',
    explanation:
      '特定の日付・曜日には on を使います。at は時刻、in は月・年・季節に使います。',
  },
  {
    id: 'gram-105',
    type: 'grammar',
    content: 'The project _____ by the time the client arrives.',
    choices: [
      'will have been completed',
      'will complete',
      'is completed',
      'has completed',
    ],
    answer: 'will have been completed',
    explanation:
      '未来のある時点までに完了する動作を表す未来完了形の受動態です。by the time〜 がヒントになります。',
  },
  {
    id: 'gram-106',
    type: 'grammar',
    content:
      '_____ attending the seminar, she networked with industry leaders.',
    choices: ['While', 'During', 'For', 'Although'],
    answer: 'While',
    explanation:
      'while は接続詞で後に SV が続きます。ここでは while attending（〜しながら）という分詞構文的な用法です。during は前置詞で名詞句を続けます。',
  },
  {
    id: 'gram-107',
    type: 'grammar',
    content:
      'The _____ of the annual report has been postponed until further notice.',
    choices: ['publication', 'publish', 'published', 'publicly'],
    answer: 'publication',
    explanation:
      '冠詞 The の後には名詞が来ます。publication（出版・発行）が正解です。',
  },
  {
    id: 'gram-108',
    type: 'grammar',
    content: 'We need to _____ the deadline by at least two weeks.',
    choices: ['extend', 'expansion', 'extensive', 'extended'],
    answer: 'extend',
    explanation:
      'need to の後には動詞の原形が続きます。extend（延長する）が正解です。',
  },
  {
    id: 'gram-109',
    type: 'grammar',
    content:
      'Neither the manager _____ the employees were informed of the change.',
    choices: ['nor', 'or', 'and', 'but'],
    answer: 'nor',
    explanation: 'neither〜nor〜 は「〜でも〜でもない」という相関接続詞です。',
  },
  {
    id: 'gram-110',
    type: 'grammar',
    content: 'The proposal was so _____ that it was immediately approved.',
    choices: ['convincing', 'convinced', 'convince', 'convincingly'],
    answer: 'convincing',
    explanation:
      'so の後に形容詞が来て「非常に〜な」という意味になります。convincing（説得力のある）が正解です。',
  },
  {
    id: 'gram-111',
    type: 'grammar',
    content: 'The department head asked that the report _____ by Friday.',
    choices: [
      'be submitted',
      'is submitted',
      'will be submitted',
      'was submitted',
    ],
    answer: 'be submitted',
    explanation:
      'asked that〜 の後は仮定法現在（動詞の原形）を使います。受動態なので be submitted となります。',
  },
  {
    id: 'gram-112',
    type: 'grammar',
    content: 'Sales figures have increased _____ compared to last year.',
    choices: ['significantly', 'significant', 'significance', 'signify'],
    answer: 'significantly',
    explanation:
      '動詞 increased を修飾するので副詞 significantly（著しく）が正解です。',
  },
  {
    id: 'gram-113',
    type: 'grammar',
    content:
      'The company _____ its headquarters to a new location next spring.',
    choices: [
      'will relocate',
      'has relocated',
      'was relocating',
      'had relocated',
    ],
    answer: 'will relocate',
    explanation:
      'next spring という未来を示す表現があるため、未来形 will relocate が正解です。',
  },
  {
    id: 'gram-114',
    type: 'grammar',
    content:
      'I would appreciate it _____ you could respond at your earliest convenience.',
    choices: ['if', 'that', 'whether', 'when'],
    answer: 'if',
    explanation:
      'I would appreciate it if〜 は「〜していただけると幸いです」という丁寧な定型表現です。',
  },
  {
    id: 'gram-115',
    type: 'grammar',
    content:
      'The new software system is _____ compatible with our existing hardware.',
    choices: ['fully', 'full', 'fullness', 'fulfill'],
    answer: 'fully',
    explanation:
      '形容詞 compatible を修飾するので副詞 fully（完全に）が正解です。',
  },
  {
    id: 'gram-116',
    type: 'grammar',
    content:
      '_____ the merger, the company became the largest in the industry.',
    choices: ['Following', 'Followed', 'Follow', 'To follow'],
    answer: 'Following',
    explanation:
      'Following〜 は「〜の後に」という前置詞的な分詞で、文頭で使われます。',
  },
  {
    id: 'gram-117',
    type: 'grammar',
    content:
      'The applicant _____ most qualified for the position will be contacted.',
    choices: ['deemed', 'deeming', 'deems', 'to deem'],
    answer: 'deemed',
    explanation:
      '関係代名詞節（who is deemed）の省略形で、過去分詞 deemed が名詞を後置修飾します。',
  },
  {
    id: 'gram-118',
    type: 'grammar',
    content:
      'Employees should refrain _____ using personal devices during meetings.',
    choices: ['from', 'to', 'at', 'in'],
    answer: 'from',
    explanation:
      'refrain from doing は「〜することを控える」という定型表現です。',
  },
  {
    id: 'gram-119',
    type: 'grammar',
    content: 'The quarterly results exceeded _____ expectations.',
    choices: ['our', 'us', 'we', 'ours'],
    answer: 'our',
    explanation: '名詞 expectations を修飾するので所有格の our が正解です。',
  },
  {
    id: 'gram-120',
    type: 'grammar',
    content:
      '_____ all the challenges, the team delivered the project on time.',
    choices: ['Despite', 'Although', 'Even if', 'Because of'],
    answer: 'Despite',
    explanation:
      'Despite は前置詞で「〜にもかかわらず」という意味です。後には名詞句が続きます。although は接続詞でSVが続きます。',
  },
  {
    id: 'gram-121',
    type: 'grammar',
    content:
      'The announcement _____ to all staff members via email this morning.',
    choices: ['was sent', 'sent', 'has send', 'sending'],
    answer: 'was sent',
    explanation:
      '受動態の過去形 was sent（送られた）が正解です。this morning は過去の時点を示します。',
  },
  {
    id: 'gram-122',
    type: 'grammar',
    content: 'Could you please _____ me know when the package arrives?',
    choices: ['let', 'make', 'have', 'get'],
    answer: 'let',
    explanation:
      'let me know は「知らせてください」という定型表現です。let + 目的語 + 動詞原形 の形をとります。',
  },
  {
    id: 'gram-123',
    type: 'grammar',
    content: 'The CEO emphasized the importance of _____ a diverse workforce.',
    choices: ['maintaining', 'maintain', 'maintained', 'maintenance'],
    answer: 'maintaining',
    explanation: '前置詞 of の後には動名詞（〜ing）が続きます。',
  },
  {
    id: 'gram-124',
    type: 'grammar',
    content:
      'We will proceed with the plan _____ we receive approval from management.',
    choices: ['once', 'while', 'despite', 'although'],
    answer: 'once',
    explanation:
      'once は「〜したらすぐに、〜次第」という接続詞です。条件が満たされた後の行動を表します。',
  },
  {
    id: 'gram-125',
    type: 'grammar',
    content:
      'The new policy applies to _____ employees, regardless of their position.',
    choices: ['all', 'every', 'each', 'whole'],
    answer: 'all',
    explanation:
      '複数名詞 employees の前には all を使います。every と each は単数名詞に使います。',
  },
  {
    id: 'gram-126',
    type: 'grammar',
    content: 'The training session will be _____ by an external consultant.',
    choices: ['conducted', 'conducting', 'conduct', 'conduction'],
    answer: 'conducted',
    explanation:
      'will be の後には過去分詞が来て受動態を形成します。conducted（実施される）が正解です。',
  },
  {
    id: 'gram-127',
    type: 'grammar',
    content: 'We are looking forward _____ working with your team.',
    choices: ['to', 'for', 'at', 'in'],
    answer: 'to',
    explanation:
      'look forward to doing は「〜することを楽しみにしている」という定型表現です。to は前置詞なので後に動名詞が続きます。',
  },
  {
    id: 'gram-128',
    type: 'grammar',
    content:
      'The product launch _____ scheduled for March has been moved to April.',
    choices: ['originally', 'original', 'origin', 'originate'],
    answer: 'originally',
    explanation:
      '過去分詞 scheduled を修飾するので副詞 originally（当初）が正解です。',
  },
  {
    id: 'gram-129',
    type: 'grammar',
    content: 'Please ensure that the document is _____ before submission.',
    choices: [
      'proofread',
      'proofread carefully',
      'carefully proofread',
      'carefully proofreading',
    ],
    answer: 'carefully proofread',
    explanation:
      'be動詞の後に副詞＋過去分詞の形で受動態を作ります。carefully proofread（注意深く校正された）が正解です。',
  },
  {
    id: 'gram-130',
    type: 'grammar',
    content:
      '_____ is required for the position is a minimum of five years of experience.',
    choices: ['What', 'That', 'Which', 'Who'],
    answer: 'What',
    explanation:
      'What is required〜 は名詞節で「必要なのは〜だ」という意味です。What が主語の先行詞を含む関係代名詞として機能します。',
  },
  {
    id: 'gram-131',
    type: 'grammar',
    content: 'The company has _____ expanded its operations to Southeast Asia.',
    choices: ['recently', 'recent', 'recency', 'recentness'],
    answer: 'recently',
    explanation:
      '動詞 expanded を修飾するので副詞 recently（最近）が正解です。',
  },
  {
    id: 'gram-132',
    type: 'grammar',
    content: 'The invoice must be paid _____ 30 days of receipt.',
    choices: ['within', 'during', 'between', 'along'],
    answer: 'within',
    explanation:
      'within は「〜以内に」という期限を表します。within 30 days で「30日以内に」という意味です。',
  },
  {
    id: 'gram-133',
    type: 'grammar',
    content: 'Ms. Chen is _____ for overseeing the quality control department.',
    choices: ['responsible', 'responsibility', 'responsibly', 'respond'],
    answer: 'responsible',
    explanation:
      'be responsible for doing は「〜に責任がある」という定型表現です。形容詞 responsible が正解です。',
  },
  {
    id: 'gram-134',
    type: 'grammar',
    content:
      'Candidates _____ have relevant experience will be given priority.',
    choices: ['who', 'whose', 'which', 'whom'],
    answer: 'who',
    explanation: '先行詞が人（Candidates）なので関係代名詞 who が正解です。',
  },
  {
    id: 'gram-135',
    type: 'grammar',
    content: 'The report must be _____ no later than Friday afternoon.',
    choices: ['submitted', 'submitting', 'submits', 'submission'],
    answer: 'submitted',
    explanation:
      'must be の後に過去分詞で受動態を作ります。submitted（提出された）が正解です。',
  },
  {
    id: 'gram-136',
    type: 'grammar',
    content: 'The _____ of the new product was met with great enthusiasm.',
    choices: ['introduction', 'introduce', 'introducing', 'introduced'],
    answer: 'introduction',
    explanation:
      '冠詞 The の後には名詞が来ます。introduction（導入・発表）が正解です。',
  },
  {
    id: 'gram-137',
    type: 'grammar',
    content: 'I am afraid _____ I will not be able to attend the meeting.',
    choices: ['that', 'which', 'what', 'if'],
    answer: 'that',
    explanation:
      'I am afraid that〜 は「残念ながら〜です」という定型表現です。that は名詞節を導く接続詞です。',
  },
  {
    id: 'gram-138',
    type: 'grammar',
    content: 'The new regulations will come _____ effect from January 1st.',
    choices: ['into', 'in', 'to', 'onto'],
    answer: 'into',
    explanation:
      'come into effect は「効力を発する・施行される」という定型表現です。',
  },
  {
    id: 'gram-139',
    type: 'grammar',
    content:
      '_____ the proposal is approved, construction will begin immediately.',
    choices: ['Provided that', 'Even though', 'In spite of', 'Regardless of'],
    answer: 'Provided that',
    explanation:
      'provided that は「〜という条件で、〜さえすれば」という条件を表す接続詞です。',
  },
  {
    id: 'gram-140',
    type: 'grammar',
    content:
      "The manager was pleased _____ the team's performance last quarter.",
    choices: ['with', 'about', 'at', 'for'],
    answer: 'with',
    explanation: 'be pleased with は「〜に満足している」という定型表現です。',
  },
  {
    id: 'gram-141',
    type: 'grammar',
    content: 'The company plans to hire _____ 50 new employees this year.',
    choices: ['approximately', 'approximate', 'approximation', 'approximating'],
    answer: 'approximately',
    explanation: '数詞 50 を修飾するので副詞 approximately（約）が正解です。',
  },
  {
    id: 'gram-142',
    type: 'grammar',
    content: 'The new policy is _____ to all departments without exception.',
    choices: ['applicable', 'apply', 'application', 'applied'],
    answer: 'applicable',
    explanation:
      'be applicable to は「〜に適用される」という表現です。形容詞 applicable が正解です。',
  },
  {
    id: 'gram-143',
    type: 'grammar',
    content: 'The director wants the team _____ the project ahead of schedule.',
    choices: ['to complete', 'completing', 'completed', 'completes'],
    answer: 'to complete',
    explanation: 'want + 目的語 + to不定詞 の形をとります。',
  },
  {
    id: 'gram-144',
    type: 'grammar',
    content: 'This task requires _____ attention to detail.',
    choices: ['careful', 'carefully', 'care', 'caring'],
    answer: 'careful',
    explanation:
      '名詞 attention を修飾するので形容詞 careful（注意深い）が正解です。',
  },
  {
    id: 'gram-145',
    type: 'grammar',
    content:
      'By the end of this year, she _____ with the company for a decade.',
    choices: ['will have been', 'will be', 'has been', 'would be'],
    answer: 'will have been',
    explanation:
      'by the end of this year という未来の時点までの継続を表すので、未来完了形 will have been が正解です。',
  },
  {
    id: 'gram-146',
    type: 'grammar',
    content: 'The meeting room is _____ for the presentation at 2 p.m.',
    choices: ['reserved', 'reserving', 'reserve', 'reservation'],
    answer: 'reserved',
    explanation:
      'be動詞の後に形容詞または過去分詞が続きます。reserved（予約されている）が正解です。',
  },
  {
    id: 'gram-147',
    type: 'grammar',
    content: 'Please _____ free to contact us if you have any questions.',
    choices: ['feel', 'make', 'take', 'get'],
    answer: 'feel',
    explanation:
      'Please feel free to〜 は「遠慮なく〜してください」という定型表現です。',
  },
  {
    id: 'gram-148',
    type: 'grammar',
    content: 'The factory _____ produce 10,000 units per day at full capacity.',
    choices: ['can', 'should', 'ought', 'must'],
    answer: 'can',
    explanation:
      '能力・可能性を表す助動詞 can（〜できる）が正解です。at full capacity（フル稼働で）という文脈に合います。',
  },
  {
    id: 'gram-149',
    type: 'grammar',
    content: "The client's _____ was incorporated into the final design.",
    choices: ['feedback', 'feed', 'feeder', 'feeding'],
    answer: 'feedback',
    explanation:
      "所有格 client's の後には名詞が来ます。feedback（フィードバック）が正解です。",
  },
  {
    id: 'gram-150',
    type: 'grammar',
    content: 'All participants are _____ to register in advance.',
    choices: ['encouraged', 'encouraging', 'encouragement', 'encourage'],
    answer: 'encouraged',
    explanation:
      'are の後に過去分詞で受動態を作ります。be encouraged to do（〜するよう促される）が正解です。',
  },
  {
    id: 'gram-151',
    type: 'grammar',
    content: 'The _____ between the two companies lasted over 20 years.',
    choices: ['partnership', 'partner', 'partnered', 'partnering'],
    answer: 'partnership',
    explanation:
      '冠詞 The の後には名詞が来ます。partnership（パートナーシップ・提携）が正解です。',
  },
  {
    id: 'gram-152',
    type: 'grammar',
    content: 'Staff members are advised _____ overtime without prior approval.',
    choices: ['not to work', 'not working', 'to not work', 'no working'],
    answer: 'not to work',
    explanation: 'be advised to do の否定形は be advised not to do です。',
  },
  {
    id: 'gram-153',
    type: 'grammar',
    content:
      'The committee will _____ a final decision after reviewing all applications.',
    choices: ['make', 'do', 'take', 'give'],
    answer: 'make',
    explanation: 'make a decision は「決定を下す」という定型表現です。',
  },
  {
    id: 'gram-154',
    type: 'grammar',
    content: 'The new branch office is _____ in downtown Tokyo.',
    choices: ['located', 'locating', 'locate', 'location'],
    answer: 'located',
    explanation:
      'be located in は「〜に位置している」という定型表現です。過去分詞 located が正解です。',
  },
  {
    id: 'gram-155',
    type: 'grammar',
    content: 'The seminar attracted more attendees _____ expected.',
    choices: ['than', 'as', 'that', 'which'],
    answer: 'than',
    explanation: '比較表現 more〜than「〜よりも多い」の構造です。',
  },
  {
    id: 'gram-156',
    type: 'grammar',
    content:
      '_____ approved by the safety committee, the equipment can be used.',
    choices: ['Once', 'Unless', 'Although', 'Without'],
    answer: 'Once',
    explanation:
      '分詞構文の前に once を置いて「〜されたら」という条件を表します。Once approved = Once it is approved。',
  },
  {
    id: 'gram-157',
    type: 'grammar',
    content: 'The company expects to _____ a profit in the second quarter.',
    choices: ['turn', 'make', 'take', 'earn'],
    answer: 'turn',
    explanation: 'turn a profit は「利益を上げる」という定型表現です。',
  },
  {
    id: 'gram-158',
    type: 'grammar',
    content: 'Customers _____ their orders online will receive a 10% discount.',
    choices: ['placing', 'placed', 'to place', 'place'],
    answer: 'placing',
    explanation:
      '現在分詞 placing が名詞 Customers を後置修飾します。Customers who place orders = Customers placing orders。',
  },
  {
    id: 'gram-159',
    type: 'grammar',
    content: 'The project was completed ahead of _____ by two weeks.',
    choices: ['schedule', 'schedules', 'scheduling', 'scheduled'],
    answer: 'schedule',
    explanation: 'ahead of schedule は「予定より早く」という定型表現です。',
  },
  {
    id: 'gram-160',
    type: 'grammar',
    content: "The company's _____ strategy focuses on sustainable growth.",
    choices: ['long-term', 'long term', 'longer term', 'longest term'],
    answer: 'long-term',
    explanation:
      '名詞 strategy を修飾する複合形容詞は通常ハイフンで結ばれます。long-term（長期的な）が正解です。',
  },
  {
    id: 'gram-161',
    type: 'grammar',
    content: 'The revised proposal was _____ to the client for review.',
    choices: ['forwarded', 'forwarding', 'forward', 'forwards'],
    answer: 'forwarded',
    explanation:
      'was の後に過去分詞で受動態を作ります。was forwarded（転送された）が正解です。',
  },
  {
    id: 'gram-162',
    type: 'grammar',
    content:
      'Please confirm _____ you will be attending the annual conference.',
    choices: ['whether', 'either', 'neither', 'both'],
    answer: 'whether',
    explanation: 'confirm whether〜 は「〜かどうかを確認する」という表現です。',
  },
  {
    id: 'gram-163',
    type: 'grammar',
    content: 'The team worked _____ to meet the tight deadline.',
    choices: ['tirelessly', 'tireless', 'tire', 'tiredness'],
    answer: 'tirelessly',
    explanation:
      '動詞 worked を修飾するので副詞 tirelessly（精力的に）が正解です。',
  },
  {
    id: 'gram-164',
    type: 'grammar',
    content: 'The company is _____ for providing excellent customer service.',
    choices: ['known', 'knowing', 'know', 'knowledge'],
    answer: 'known',
    explanation:
      'be known for は「〜で知られている」という定型表現です。過去分詞 known が正解です。',
  },
  {
    id: 'gram-165',
    type: 'grammar',
    content:
      '_____ additional information is needed, please contact our support team.',
    choices: ['If', 'While', 'Though', 'Until'],
    answer: 'If',
    explanation: 'if は条件を表す接続詞で「もし〜であれば」という意味です。',
  },
  {
    id: 'gram-166',
    type: 'grammar',
    content: 'The shareholders voted _____ favor of the new acquisition.',
    choices: ['in', 'for', 'to', 'with'],
    answer: 'in',
    explanation:
      'vote in favor of は「〜に賛成票を投じる」という定型表現です。',
  },
  {
    id: 'gram-167',
    type: 'grammar',
    content: 'The executive team has _____ several key initiatives this year.',
    choices: ['launched', 'launch', 'launching', 'to launch'],
    answer: 'launched',
    explanation:
      '現在完了形 has + 過去分詞の形です。launched（開始した）が正解です。',
  },
  {
    id: 'gram-168',
    type: 'grammar',
    content: 'Employees _____ work overtime will be compensated accordingly.',
    choices: ['who', 'which', 'whose', 'that'],
    answer: 'who',
    explanation:
      '先行詞が人（Employees）なので関係代名詞 who（またはthat）が正解です。',
  },
  {
    id: 'gram-169',
    type: 'grammar',
    content: 'The _____ of the new building will begin in the spring.',
    choices: ['construction', 'construct', 'constructed', 'constructing'],
    answer: 'construction',
    explanation:
      '冠詞 The の後には名詞が来ます。construction（建設）が正解です。',
  },
  {
    id: 'gram-170',
    type: 'grammar',
    content: 'Please _____ the attached file for more details.',
    choices: ['refer to', 'refer at', 'refer for', 'refer with'],
    answer: 'refer to',
    explanation: 'refer to は「〜を参照する」という定型表現です。',
  },
  {
    id: 'gram-171',
    type: 'grammar',
    content: 'The company has been _____ facing financial difficulties.',
    choices: ['reportedly', 'reported', 'report', 'reporting'],
    answer: 'reportedly',
    explanation: '文全体を修飾する副詞 reportedly（報道によると）が正解です。',
  },
  {
    id: 'gram-172',
    type: 'grammar',
    content: 'All expenses _____ during the business trip will be reimbursed.',
    choices: ['incurred', 'incurring', 'to incur', 'incurs'],
    answer: 'incurred',
    explanation:
      '過去分詞 incurred が名詞 expenses を後置修飾します。expenses incurred = expenses that were incurred（発生した費用）。',
  },
  {
    id: 'gram-173',
    type: 'grammar',
    content:
      'The marketing team is _____ a new campaign for the holiday season.',
    choices: ['developing', 'developed', 'development', 'develop'],
    answer: 'developing',
    explanation:
      'is の後に現在分詞で進行形を作ります。is developing（開発中である）が正解です。',
  },
  {
    id: 'gram-174',
    type: 'grammar',
    content: 'Staff members are required _____ safety gear at all times.',
    choices: ['to wear', 'wearing', 'wear', 'worn'],
    answer: 'to wear',
    explanation:
      'be required to do は「〜することが義務付けられている」という定型表現です。',
  },
  {
    id: 'gram-175',
    type: 'grammar',
    content:
      'We have _____ received your application and will review it shortly.',
    choices: ['successfully', 'successful', 'success', 'succeed'],
    answer: 'successfully',
    explanation:
      '動詞 received を修飾するので副詞 successfully（無事に）が正解です。',
  },
  {
    id: 'gram-176',
    type: 'grammar',
    content: 'The factory operates _____ a 24-hour schedule.',
    choices: ['on', 'in', 'by', 'at'],
    answer: 'on',
    explanation:
      'operate on a schedule は「スケジュールで稼働する」という表現です。on a 24-hour schedule で「24時間稼働で」。',
  },
  {
    id: 'gram-177',
    type: 'grammar',
    content: 'The board _____ the decision to expand into new markets.',
    choices: ['made', 'did', 'took', 'had'],
    answer: 'made',
    explanation: 'make a decision は「決定を下す」という定型表現です。',
  },
  {
    id: 'gram-178',
    type: 'grammar',
    content: 'The contract _____ between the two parties last week.',
    choices: ['was signed', 'signed', 'sign', 'has signed'],
    answer: 'was signed',
    explanation:
      '受動態の過去形 was signed（署名された）が正解です。last week は過去の時点を示します。',
  },
  {
    id: 'gram-179',
    type: 'grammar',
    content: 'The presentation will take place _____ the main conference hall.',
    choices: ['in', 'on', 'at', 'by'],
    answer: 'in',
    explanation:
      '建物の内部の空間を表すには in を使います。in the conference hall（会議ホールの中で）。',
  },
  {
    id: 'gram-180',
    type: 'grammar',
    content: 'The manager was not _____ of the changes in the schedule.',
    choices: ['aware', 'awake', 'alert', 'aware of'],
    answer: 'aware',
    explanation:
      'be aware of は「〜を知っている・気づいている」という表現です。aware が正解で、of は後に続いています。',
  },
  {
    id: 'gram-181',
    type: 'grammar',
    content:
      'The company will _____ with a local firm to expand its market reach.',
    choices: ['collaborate', 'collaborates', 'collaborated', 'collaborating'],
    answer: 'collaborate',
    explanation:
      'will の後には動詞の原形が続きます。collaborate（協力する）が正解です。',
  },
  {
    id: 'gram-182',
    type: 'grammar',
    content:
      'The employees _____ to work remotely showed increased productivity.',
    choices: ['allowed', 'allowing', 'allow', 'to allow'],
    answer: 'allowed',
    explanation:
      '過去分詞 allowed が名詞 employees を後置修飾します。employees (who were) allowed to work remotely。',
  },
  {
    id: 'gram-183',
    type: 'grammar',
    content: 'Please ensure that all documents are filed _____ order.',
    choices: ['in', 'on', 'by', 'at'],
    answer: 'in',
    explanation:
      'in order は「整理されて、順序よく」という意味です。filed in order で「整然とファイルされた」。',
  },
  {
    id: 'gram-184',
    type: 'grammar',
    content:
      'The customer complained _____ the quality of the delivered goods.',
    choices: ['about', 'for', 'at', 'to'],
    answer: 'about',
    explanation:
      'complain about は「〜について不平を言う」という定型表現です。',
  },
  {
    id: 'gram-185',
    type: 'grammar',
    content:
      'It is _____ that all participants submit their forms before the deadline.',
    choices: ['essential', 'essentially', 'essence', 'essentially'],
    answer: 'essential',
    explanation:
      'It is essential that〜 の形で「〜することが不可欠だ」という意味です。形容詞 essential が正解です。',
  },
  {
    id: 'gram-186',
    type: 'grammar',
    content: 'The new office building is equipped _____ the latest technology.',
    choices: ['with', 'by', 'in', 'for'],
    answer: 'with',
    explanation: 'be equipped with は「〜が備わっている」という定型表現です。',
  },
  {
    id: 'gram-187',
    type: 'grammar',
    content: 'The budget for next year has _____ been finalized.',
    choices: ['not yet', 'yet not', 'already not', 'not already'],
    answer: 'not yet',
    explanation:
      'has not yet been finalized は「まだ確定していない」という現在完了の否定形です。not yet で「まだ〜ない」という意味です。',
  },
  {
    id: 'gram-188',
    type: 'grammar',
    content: 'The company was _____ in 1985 by two entrepreneurs.',
    choices: ['founded', 'founding', 'found', 'foundation'],
    answer: 'founded',
    explanation: '受動態の過去形 was founded（設立された）が正解です。',
  },
  {
    id: 'gram-189',
    type: 'grammar',
    content: 'We need to take _____ of the current market conditions.',
    choices: ['advantage', 'advantageous', 'advantages', 'advantageously'],
    answer: 'advantage',
    explanation: 'take advantage of は「〜を活用する」という定型表現です。',
  },
  {
    id: 'gram-190',
    type: 'grammar',
    content:
      'The new software will be rolled _____ to all departments next month.',
    choices: ['out', 'up', 'in', 'over'],
    answer: 'out',
    explanation: 'roll out は「展開する・導入する」という句動詞です。',
  },
  {
    id: 'gram-191',
    type: 'grammar',
    content:
      'The merger will _____ in significant cost savings for both companies.',
    choices: ['result', 'results', 'resulting', 'resulted'],
    answer: 'result',
    explanation:
      'will の後には動詞の原形が続きます。result in は「〜という結果になる」という表現です。',
  },
  {
    id: 'gram-192',
    type: 'grammar',
    content: 'The financial report should be _____ to all stakeholders.',
    choices: ['distributed', 'distributing', 'distribute', 'distribution'],
    answer: 'distributed',
    explanation:
      'should be の後に過去分詞で受動態を作ります。distributed（配布された）が正解です。',
  },
  {
    id: 'gram-193',
    type: 'grammar',
    content: 'The director suggested _____ the meeting to next Tuesday.',
    choices: ['postponing', 'to postpone', 'postpone', 'postponed'],
    answer: 'postponing',
    explanation:
      'suggest は動名詞を目的語にとります。suggest doing（〜することを提案する）の形です。',
  },
  {
    id: 'gram-194',
    type: 'grammar',
    content:
      'Customers who are not _____ with their purchase may request a refund.',
    choices: ['satisfied', 'satisfying', 'satisfy', 'satisfaction'],
    answer: 'satisfied',
    explanation:
      'be satisfied with は「〜に満足している」という定型表現です。過去分詞 satisfied が正解です。',
  },
  {
    id: 'gram-195',
    type: 'grammar',
    content: 'The team leader was _____ for the success of the project.',
    choices: ['credited', 'crediting', 'credit', 'creditable'],
    answer: 'credited',
    explanation: 'be credited for は「〜の功績を認められる」という表現です。',
  },
  {
    id: 'gram-196',
    type: 'grammar',
    content: 'The _____ in demand has led to production increases.',
    choices: ['surge', 'surging', 'surged', 'surgingly'],
    answer: 'surge',
    explanation: '冠詞 The の後には名詞が来ます。surge（急増）が正解です。',
  },
  {
    id: 'gram-197',
    type: 'grammar',
    content: 'The office will be closed _____ the national holiday.',
    choices: ['during', 'while', 'when', 'along'],
    answer: 'during',
    explanation:
      'during は前置詞で「〜の間」という意味です。後に名詞句が続きます。while は接続詞でSVが続きます。',
  },
  {
    id: 'gram-198',
    type: 'grammar',
    content: 'The issue was brought _____ the attention of senior management.',
    choices: ['to', 'for', 'at', 'in'],
    answer: 'to',
    explanation:
      "bring something to someone's attention は「〜を〜の注意に持ってくる」という定型表現です。",
  },
  {
    id: 'gram-199',
    type: 'grammar',
    content: 'The seminar is _____ to both members and non-members.',
    choices: ['open', 'opened', 'opening', 'openly'],
    answer: 'open',
    explanation:
      'be open to は「〜に開かれている・参加できる」という表現です。形容詞 open が正解です。',
  },
  {
    id: 'gram-200',
    type: 'grammar',
    content: 'The company has been in _____ for over a century.',
    choices: ['operation', 'operate', 'operated', 'operating'],
    answer: 'operation',
    explanation:
      'in operation は「稼働中・営業中」という定型表現です。前置詞 in の後には名詞が来ます。',
  },
  {
    id: 'gram-201',
    type: 'grammar',
    content:
      'The CEO announced that the company _____ 200 new stores next year.',
    choices: ['will open', 'has opened', 'was opening', 'had opened'],
    answer: 'will open',
    explanation:
      'next year という未来を示す表現があるため、未来形 will open が正解です。',
  },
  {
    id: 'gram-202',
    type: 'grammar',
    content: 'The safety inspection is _____ on a monthly basis.',
    choices: ['conducted', 'conducting', 'conduct', 'conduction'],
    answer: 'conducted',
    explanation:
      'is の後に過去分詞で受動態を作ります。conducted（実施される）が正解です。',
  },
  {
    id: 'gram-203',
    type: 'grammar',
    content: 'He is one of the _____ respected leaders in the industry.',
    choices: ['most', 'more', 'very', 'much'],
    answer: 'most',
    explanation:
      'one of the + 最上級 + 複数名詞 の形で「最も〜な〜の一つ」という意味です。',
  },
  {
    id: 'gram-204',
    type: 'grammar',
    content: 'The renovation of the office _____ two months to complete.',
    choices: ['took', 'take', 'taken', 'taking'],
    answer: 'took',
    explanation:
      '過去の事実を述べているので過去形 took が正解です。take は「（時間が）かかる」という意味です。',
  },
  {
    id: 'gram-205',
    type: 'grammar',
    content: 'Applications _____ after the deadline will not be considered.',
    choices: ['received', 'receiving', 'receive', 'reception'],
    answer: 'received',
    explanation:
      '過去分詞 received が名詞 Applications を後置修飾します。applications (that are) received after the deadline。',
  },
  {
    id: 'gram-206',
    type: 'grammar',
    content: 'The report _____ that sales have increased by 15% this quarter.',
    choices: ['indicates', 'indicate', 'indicated', 'indicating'],
    answer: 'indicates',
    explanation:
      '主語 The report（単数）に対して現在形の動詞 indicates が正解です。',
  },
  {
    id: 'gram-207',
    type: 'grammar',
    content: 'Customers can choose _____ three different subscription plans.',
    choices: ['from', 'among', 'between', 'within'],
    answer: 'from',
    explanation:
      'choose from は「〜の中から選ぶ」という表現で、3つ以上の選択肢に使います。',
  },
  {
    id: 'gram-208',
    type: 'grammar',
    content: 'The shipment is expected to arrive _____ the end of the week.',
    choices: ['by', 'until', 'before', 'at'],
    answer: 'by',
    explanation:
      'by は「〜までに」という期限を表します。by the end of the week で「今週末までに」という意味です。',
  },
  {
    id: 'gram-209',
    type: 'grammar',
    content:
      '_____ experience in project management is preferred for this role.',
    choices: ['Prior', 'Previous', 'Prior to', 'Formerly'],
    answer: 'Prior',
    explanation:
      '名詞 experience を修飾する形容詞として prior（以前の）が正解です。prior experience で「事前の経験」。',
  },
  {
    id: 'gram-210',
    type: 'grammar',
    content: "The company's profits have grown _____ over the past decade.",
    choices: ['steadily', 'steady', 'steadiness', 'steadied'],
    answer: 'steadily',
    explanation: '動詞 grown を修飾するので副詞 steadily（着実に）が正解です。',
  },
  {
    id: 'gram-211',
    type: 'grammar',
    content: 'The manager approved the expense report _____ any hesitation.',
    choices: ['without', 'unless', 'despite', 'although'],
    answer: 'without',
    explanation:
      'without は「〜なしに」という前置詞です。without hesitation で「ためらいなく」という意味です。',
  },
  {
    id: 'gram-212',
    type: 'grammar',
    content:
      'The project _____ been completed if the funding had not been cut.',
    choices: ['would have', 'will have', 'would', 'had'],
    answer: 'would have',
    explanation:
      '仮定法過去完了の帰結節では would have + 過去分詞 の形を使います。',
  },
  {
    id: 'gram-213',
    type: 'grammar',
    content: 'The company is committed _____ environmental sustainability.',
    choices: ['to', 'for', 'with', 'at'],
    answer: 'to',
    explanation:
      'be committed to は「〜に取り組んでいる・専念している」という定型表現です。',
  },
  {
    id: 'gram-214',
    type: 'grammar',
    content: 'The new employee was _____ warmly by her colleagues.',
    choices: ['welcomed', 'welcoming', 'welcome', 'welcomely'],
    answer: 'welcomed',
    explanation: '受動態の過去形 was welcomed（歓迎された）が正解です。',
  },
  {
    id: 'gram-215',
    type: 'grammar',
    content: 'The technical team _____ the issue within a few hours.',
    choices: ['resolved', 'resolving', 'resolution', 'resolve'],
    answer: 'resolved',
    explanation:
      '過去形 resolved（解決した）が正解です。主語 team に対する述語動詞です。',
  },
  {
    id: 'gram-216',
    type: 'grammar',
    content: 'The event was organized _____ raise funds for charity.',
    choices: ['to', 'for', 'in order', 'so as'],
    answer: 'to',
    explanation:
      '目的を表すto不定詞の副詞的用法です。was organized to raise funds で「資金調達のために開催された」。',
  },
  {
    id: 'gram-217',
    type: 'grammar',
    content:
      'Please be _____ that all travel arrangements are made in advance.',
    choices: ['sure', 'certain', 'aware', 'ready'],
    answer: 'sure',
    explanation:
      'Please be sure that〜 は「〜することを確認してください」という定型表現です。',
  },
  {
    id: 'gram-218',
    type: 'grammar',
    content: 'The workshop was _____ attended by over 200 professionals.',
    choices: ['well', 'good', 'much', 'highly'],
    answer: 'well',
    explanation:
      'well-attended は「多くの参加者がいる」という意味の複合形容詞です。well attended（参加者が多かった）が正解です。',
  },
  {
    id: 'gram-219',
    type: 'grammar',
    content: 'The HR department is in _____ of hiring for the new positions.',
    choices: ['charge', 'control', 'order', 'command'],
    answer: 'charge',
    explanation:
      'be in charge of は「〜を担当している・責任を持っている」という定型表現です。',
  },
  {
    id: 'gram-220',
    type: 'grammar',
    content:
      'The client will not accept the terms _____ some revisions are made.',
    choices: ['unless', 'if', 'when', 'while'],
    answer: 'unless',
    explanation: 'unless は「〜しない限り」という条件を表す接続詞です。',
  },
  {
    id: 'gram-221',
    type: 'grammar',
    content: 'Feedback from customers has been _____ positive.',
    choices: ['overwhelmingly', 'overwhelming', 'overwhelm', 'overwhelmed'],
    answer: 'overwhelmingly',
    explanation:
      '形容詞 positive を修飾するので副詞 overwhelmingly（圧倒的に）が正解です。',
  },
  {
    id: 'gram-222',
    type: 'grammar',
    content: 'The warehouse is _____ enough to store all the inventory.',
    choices: ['large', 'largely', 'largeness', 'enlarge'],
    answer: 'large',
    explanation:
      'be動詞の後に形容詞が補語として来ます。large enough to do で「〜できるほど十分に大きい」という意味です。',
  },
  {
    id: 'gram-223',
    type: 'grammar',
    content: 'The quarterly targets _____ as of last month.',
    choices: ['have been met', 'have met', 'were meeting', 'met'],
    answer: 'have been met',
    explanation:
      '現在完了の受動態 have been met（達成された）が正解です。as of last month（先月時点で）が時制のヒントです。',
  },
  {
    id: 'gram-224',
    type: 'grammar',
    content: 'The CEO will be _____ at the annual shareholders meeting.',
    choices: ['present', 'presence', 'presented', 'presently'],
    answer: 'present',
    explanation:
      'be present（出席している）という表現で、形容詞 present が正解です。',
  },
  {
    id: 'gram-225',
    type: 'grammar',
    content:
      '_____ the risk of delays, contingency plans have been established.',
    choices: ['Given', 'Give', 'Giving', 'To give'],
    answer: 'Given',
    explanation: 'Given〜 は「〜を考慮すると」という意味の前置詞的分詞です。',
  },
  {
    id: 'gram-226',
    type: 'grammar',
    content: 'The customer service team handles _____ 500 inquiries per day.',
    choices: ['up to', 'as far as', 'at most', 'no more'],
    answer: 'up to',
    explanation:
      'up to は「最大〜まで」という上限を表します。up to 500 inquiries で「最大500件の問い合わせ」。',
  },
  {
    id: 'gram-227',
    type: 'grammar',
    content:
      'The company is seeking candidates _____ can speak multiple languages.',
    choices: ['who', 'which', 'whose', 'what'],
    answer: 'who',
    explanation: '先行詞が人（candidates）なので関係代名詞 who が正解です。',
  },
  {
    id: 'gram-228',
    type: 'grammar',
    content: 'We appreciate your _____ in our products and services.',
    choices: ['interest', 'interested', 'interesting', 'interests'],
    answer: 'interest',
    explanation:
      '所有格 your の後には名詞が来ます。interest（関心・興味）が正解です。',
  },
  {
    id: 'gram-229',
    type: 'grammar',
    content:
      'The proposal was reviewed _____ the legal team before submission.',
    choices: ['by', 'from', 'with', 'through'],
    answer: 'by',
    explanation:
      '受動態の動作主を表すのは by です。reviewed by the legal team（法務チームによってレビューされた）。',
  },
  {
    id: 'gram-230',
    type: 'grammar',
    content: 'Management is _____ considering the option of outsourcing.',
    choices: ['currently', 'current', 'currency', 'currentness'],
    answer: 'currently',
    explanation:
      '動詞句 is considering を修飾するので副詞 currently（現在）が正解です。',
  },
  {
    id: 'gram-231',
    type: 'grammar',
    content:
      'The agreement will remain in _____ until either party terminates it.',
    choices: ['effect', 'force', 'place', 'power'],
    answer: 'effect',
    explanation:
      'remain in effect は「効力が続く・有効のまま」という定型表現です。',
  },
  {
    id: 'gram-232',
    type: 'grammar',
    content: 'Please _____ the enclosed form and return it to our office.',
    choices: ['complete', 'completing', 'completed', 'completion'],
    answer: 'complete',
    explanation:
      '命令文は動詞の原形で始まります。complete（記入する・完成させる）が正解です。',
  },
  {
    id: 'gram-233',
    type: 'grammar',
    content: 'The new product line _____ to customers across five countries.',
    choices: ['is available', 'available', 'is availability', 'available to'],
    answer: 'is available',
    explanation:
      'be available to は「〜が利用できる」という表現です。is available が述語動詞として正解です。',
  },
  {
    id: 'gram-234',
    type: 'grammar',
    content:
      'Prior to _____ a decision, all factors must be carefully considered.',
    choices: ['making', 'make', 'made', 'makes'],
    answer: 'making',
    explanation:
      'prior to は前置詞で、後には名詞または動名詞が続きます。prior to making（決定する前に）。',
  },
  {
    id: 'gram-235',
    type: 'grammar',
    content: 'The new software is _____ to download from the company website.',
    choices: ['free', 'freely', 'freedom', 'freed'],
    answer: 'free',
    explanation:
      'be free to do は「自由に〜できる」という表現で、また free to download で「無料でダウンロードできる」という意味にもなります。',
  },
  {
    id: 'gram-236',
    type: 'grammar',
    content: 'The company has achieved _____ growth over the past three years.',
    choices: ['remarkable', 'remarkably', 'remark', 'remarkableness'],
    answer: 'remarkable',
    explanation:
      '名詞 growth を修飾するので形容詞 remarkable（目覚ましい）が正解です。',
  },
  {
    id: 'gram-237',
    type: 'grammar',
    content: 'The new hire will be _____ with a company laptop and phone.',
    choices: ['provided', 'providing', 'provide', 'provision'],
    answer: 'provided',
    explanation:
      'be provided with は「〜を支給される」という受動態の定型表現です。',
  },
  {
    id: 'gram-238',
    type: 'grammar',
    content: '_____ the deadline approaches, the team is working overtime.',
    choices: ['As', 'While', 'Since', 'Because'],
    answer: 'As',
    explanation:
      'as は「〜するにつれて、〜するとき」という接続詞で、時間の経過に伴う変化を表します。',
  },
  {
    id: 'gram-239',
    type: 'grammar',
    content: 'The shipment has been _____ due to bad weather conditions.',
    choices: ['delayed', 'delaying', 'delay', 'delayance'],
    answer: 'delayed',
    explanation:
      '現在完了の受動態 has been delayed（遅延している）が正解です。',
  },
  {
    id: 'gram-240',
    type: 'grammar',
    content:
      'All meeting participants should _____ themselves before speaking.',
    choices: ['introduce', 'presents', 'identify', 'state'],
    answer: 'introduce',
    explanation: 'introduce themselves は「自己紹介する」という定型表現です。',
  },
  {
    id: 'gram-241',
    type: 'grammar',
    content: 'The company spokesperson declined _____ on the matter.',
    choices: ['to comment', 'commenting', 'comment', 'commented'],
    answer: 'to comment',
    explanation:
      'decline to do は「〜することを断る」という表現です。decline は to不定詞を目的語にとります。',
  },
  {
    id: 'gram-242',
    type: 'grammar',
    content:
      'The revised budget is _____ to be adopted at the next board meeting.',
    choices: ['expected', 'expecting', 'expect', 'expectation'],
    answer: 'expected',
    explanation:
      'be expected to do は「〜すると予想されている」という定型表現です。',
  },
  {
    id: 'gram-243',
    type: 'grammar',
    content:
      'The manager asked her team to _____ the problem as soon as possible.',
    choices: ['address', 'addressing', 'addressed', 'addresses'],
    answer: 'address',
    explanation:
      'ask someone to do の形で to の後には動詞の原形が続きます。address（取り組む・対処する）が正解です。',
  },
  {
    id: 'gram-244',
    type: 'grammar',
    content: 'The order will be shipped _____ 3-5 business days.',
    choices: ['within', 'in', 'for', 'during'],
    answer: 'within',
    explanation:
      'within は「〜以内に」という期限を表します。within 3-5 business days で「3〜5営業日以内に」。',
  },
  {
    id: 'gram-245',
    type: 'grammar',
    content: 'The _____ for the new product exceeded our projections by 30%.',
    choices: ['demand', 'demanding', 'demanded', 'demander'],
    answer: 'demand',
    explanation: '冠詞 The の後には名詞が来ます。demand（需要）が正解です。',
  },
  {
    id: 'gram-246',
    type: 'grammar',
    content:
      'The terms of the contract are subject _____ change without notice.',
    choices: ['to', 'for', 'at', 'by'],
    answer: 'to',
    explanation:
      'be subject to は「〜を受ける可能性がある・〜次第である」という定型表現です。',
  },
  {
    id: 'gram-247',
    type: 'grammar',
    content:
      '_____ submitting your application, you will receive a confirmation email.',
    choices: ['Upon', 'Once', 'After', 'When'],
    answer: 'Upon',
    explanation:
      'upon doing は「〜するとすぐに」という意味で、upon submitting で「提出後すぐに」という意味です。',
  },
  {
    id: 'gram-248',
    type: 'grammar',
    content: 'The training program is _____ for all new employees.',
    choices: ['mandatory', 'mandate', 'mandating', 'mandatorily'],
    answer: 'mandatory',
    explanation:
      'be動詞の後に補語として形容詞 mandatory（義務的な）が正解です。',
  },
  {
    id: 'gram-249',
    type: 'grammar',
    content:
      'The product has been _____ tested before being released to market.',
    choices: ['thoroughly', 'thorough', 'thoroughness', 'thoroughgoing'],
    answer: 'thoroughly',
    explanation:
      '過去分詞 tested を修飾するので副詞 thoroughly（徹底的に）が正解です。',
  },
  {
    id: 'gram-250',
    type: 'grammar',
    content: 'The candidate _____ the interview most effectively was selected.',
    choices: ['who handled', 'whose handled', 'which handled', 'whom handled'],
    answer: 'who handled',
    explanation: '先行詞が人（The candidate）で主格なので who が正解です。',
  },
  {
    id: 'gram-251',
    type: 'grammar',
    content: 'The company will _____ costs by streamlining its operations.',
    choices: ['cut', 'cutting', 'cuts', 'cutted'],
    answer: 'cut',
    explanation:
      'will の後には動詞の原形が続きます。cut costs（コストを削減する）が正解です。',
  },
  {
    id: 'gram-252',
    type: 'grammar',
    content: 'The customer was _____ a full refund for the defective product.',
    choices: ['issued', 'issuing', 'issue', 'issues'],
    answer: 'issued',
    explanation:
      '受動態の過去形 was issued（交付された）が正解です。be issued a refund で「返金を受ける」という意味です。',
  },
  {
    id: 'gram-253',
    type: 'grammar',
    content: 'Please forward your _____ to the HR department by Friday.',
    choices: ['resume', 'resumes', 'resuming', 'resumed'],
    answer: 'resume',
    explanation:
      '所有格 your の後には名詞が来ます。resume（履歴書）が正解です。',
  },
  {
    id: 'gram-254',
    type: 'grammar',
    content:
      'The new employee orientation will be held _____ the training center.',
    choices: ['at', 'in', 'on', 'by'],
    answer: 'at',
    explanation:
      '特定の場所や施設を指す場合は at を使います。at the training center（トレーニングセンターで）。',
  },
  {
    id: 'gram-255',
    type: 'grammar',
    content: 'The board agreed _____ proceed with the proposed strategy.',
    choices: ['to', 'for', 'on', 'in'],
    answer: 'to',
    explanation: 'agree to do は「〜することに同意する」という表現です。',
  },
  {
    id: 'gram-256',
    type: 'grammar',
    content: 'The results of the survey will be _____ next month.',
    choices: ['published', 'publishing', 'publish', 'publication'],
    answer: 'published',
    explanation:
      'will be の後に過去分詞で受動態を作ります。published（公表される）が正解です。',
  },
  {
    id: 'gram-257',
    type: 'grammar',
    content:
      'The _____ of goods from Asia has increased significantly this year.',
    choices: ['import', 'imports', 'importing', 'imported'],
    answer: 'import',
    explanation: '冠詞 The の後には名詞が来ます。import（輸入）が正解です。',
  },
  {
    id: 'gram-258',
    type: 'grammar',
    content: 'The company _____ great lengths to ensure customer satisfaction.',
    choices: ['goes', 'go', 'went', 'gone'],
    answer: 'goes',
    explanation:
      'go to great lengths は「多大な努力をする」という定型表現です。主語 The company（単数）に合わせて goes が正解です。',
  },
  {
    id: 'gram-259',
    type: 'grammar',
    content: 'The building _____ the headquarters is located downtown.',
    choices: ['housing', 'housed', 'house', 'to house'],
    answer: 'housing',
    explanation:
      '現在分詞 housing（収容している）が名詞 building を後置修飾します。',
  },
  {
    id: 'gram-260',
    type: 'grammar',
    content: 'Please let us know _____ you have any dietary restrictions.',
    choices: ['if', 'whether', 'that', 'what'],
    answer: 'if',
    explanation:
      'let us know if〜 は「〜かどうか知らせてください」という定型表現です。',
  },
  {
    id: 'gram-261',
    type: 'grammar',
    content:
      'Employees are encouraged to _____ professional development opportunities.',
    choices: ['seek', 'seeking', 'sought', 'seeks'],
    answer: 'seek',
    explanation:
      'be encouraged to do の形で、to の後には動詞の原形が続きます。seek（追求する）が正解です。',
  },
  {
    id: 'gram-262',
    type: 'grammar',
    content: 'The new regulation is aimed _____ reducing carbon emissions.',
    choices: ['at', 'to', 'for', 'in'],
    answer: 'at',
    explanation:
      'be aimed at doing は「〜することを目的としている」という定型表現です。',
  },
  {
    id: 'gram-263',
    type: 'grammar',
    content:
      'The conference is _____ at professionals in the financial sector.',
    choices: ['targeted', 'targeting', 'target', 'targets'],
    answer: 'targeted',
    explanation:
      'be targeted at は「〜を対象としている」という定型表現です。過去分詞 targeted が正解です。',
  },
  {
    id: 'gram-264',
    type: 'grammar',
    content: 'We need to _____ the contract terms with the supplier.',
    choices: ['renegotiate', 'renegotiation', 'renegotiating', 'renegotiated'],
    answer: 'renegotiate',
    explanation:
      'need to の後には動詞の原形が続きます。renegotiate（再交渉する）が正解です。',
  },
  {
    id: 'gram-265',
    type: 'grammar',
    content:
      'The revised plan was submitted to management _____ review and approval.',
    choices: ['for', 'to', 'with', 'at'],
    answer: 'for',
    explanation:
      'for review and approval は「レビューと承認のために」という目的を表す表現です。',
  },
  {
    id: 'gram-266',
    type: 'grammar',
    content:
      'The hotel accommodation has been arranged _____ the visiting delegation.',
    choices: ['for', 'to', 'with', 'by'],
    answer: 'for',
    explanation: 'arranged for は「〜のために手配された」という表現です。',
  },
  {
    id: 'gram-267',
    type: 'grammar',
    content: 'The team celebrated _____ the annual sales target early.',
    choices: ['having achieved', 'to achieve', 'achieving', 'achievement of'],
    answer: 'having achieved',
    explanation:
      '完了動名詞 having achieved は「達成したこと」という過去の動作を表します。celebrate having done で「〜したことを祝う」。',
  },
  {
    id: 'gram-268',
    type: 'grammar',
    content: 'The CEO _____ the company as a leader in sustainable innovation.',
    choices: ['positions', 'position', 'positioned', 'positioning'],
    answer: 'positions',
    explanation: '主語 The CEO（単数）に対して現在形 positions が正解です。',
  },
  {
    id: 'gram-269',
    type: 'grammar',
    content: 'The safety procedures must be followed _____ exception.',
    choices: ['without', 'with no', 'with any', 'regardless'],
    answer: 'without',
    explanation: 'without exception は「例外なく」という定型表現です。',
  },
  {
    id: 'gram-270',
    type: 'grammar',
    content:
      'The committee will _____ its final report at the end of the month.',
    choices: ['release', 'releasing', 'released', 'releases'],
    answer: 'release',
    explanation:
      'will の後には動詞の原形が続きます。release（発表する・公開する）が正解です。',
  },
  {
    id: 'gram-271',
    type: 'grammar',
    content: 'The project was completed _____ budget and on schedule.',
    choices: ['under', 'within', 'below', 'at'],
    answer: 'under',
    explanation:
      'under budget は「予算内で」という定型表現です。on schedule（予定通りに）とセットで使われます。',
  },
  {
    id: 'gram-272',
    type: 'grammar',
    content:
      "The company's annual revenue _____ $50 million for the first time.",
    choices: ['exceeded', 'exceeded over', 'surpassed over', 'went over'],
    answer: 'exceeded',
    explanation:
      'exceed は「〜を超える」という他動詞で、over は不要です。exceed $50 million で「5000万ドルを超えた」。',
  },
  {
    id: 'gram-273',
    type: 'grammar',
    content:
      'Customer _____ has been a top priority since the company was founded.',
    choices: ['satisfaction', 'satisfying', 'satisfactory', 'satisfy'],
    answer: 'satisfaction',
    explanation:
      '主語位置の名詞として customer satisfaction（顧客満足）が正解です。',
  },
  {
    id: 'gram-274',
    type: 'grammar',
    content: 'The proposal was _____ rejected by the investment committee.',
    choices: ['unanimously', 'unanimous', 'unanimity', 'unanimousness'],
    answer: 'unanimously',
    explanation:
      '過去分詞 rejected を修飾するので副詞 unanimously（全会一致で）が正解です。',
  },
  {
    id: 'gram-275',
    type: 'grammar',
    content:
      'The CEO will be speaking _____ behalf of the entire organization.',
    choices: ['on', 'in', 'for', 'at'],
    answer: 'on',
    explanation: 'on behalf of は「〜を代表して」という定型表現です。',
  },
  {
    id: 'gram-276',
    type: 'grammar',
    content: 'The financial statements _____ audited on an annual basis.',
    choices: ['are', 'were', 'have', 'will'],
    answer: 'are',
    explanation:
      '定期的に繰り返される事実を表す現在形の受動態 are audited（監査される）が正解です。',
  },
  {
    id: 'gram-277',
    type: 'grammar',
    content:
      'All goods must be _____ before they are accepted into the warehouse.',
    choices: ['inspected', 'inspecting', 'inspect', 'inspection'],
    answer: 'inspected',
    explanation:
      'must be の後に過去分詞で受動態を作ります。inspected（検査された）が正解です。',
  },
  {
    id: 'gram-278',
    type: 'grammar',
    content: 'The new regulation _____ into force on January 1st.',
    choices: ['comes', 'come', 'came', 'is coming'],
    answer: 'comes',
    explanation:
      '確定した未来の予定は現在形で表せます。come into force（施行される）で主語 regulation（単数）に comes が正解です。',
  },
  {
    id: 'gram-279',
    type: 'grammar',
    content: 'The report _____ be ready for distribution by tomorrow morning.',
    choices: ['should', 'ought', 'needs', 'has'],
    answer: 'should',
    explanation:
      'should は義務・期待を表す助動詞で「〜のはずだ・〜すべき」という意味です。',
  },
  {
    id: 'gram-280',
    type: 'grammar',
    content:
      'The workshop focuses _____ practical skills for business communication.',
    choices: ['on', 'at', 'in', 'for'],
    answer: 'on',
    explanation: 'focus on は「〜に焦点を当てる」という定型表現です。',
  },
  {
    id: 'gram-281',
    type: 'grammar',
    content:
      "_____ to the company's website, you can find all relevant information.",
    choices: ['By referring', 'Refer', 'If refer', 'When referred'],
    answer: 'By referring',
    explanation:
      'by doing は「〜することによって」という手段を表します。By referring to（参照することによって）が正解です。',
  },
  {
    id: 'gram-282',
    type: 'grammar',
    content: 'All employees _____ report any suspicious activity to security.',
    choices: ['must', 'might', 'could', 'may'],
    answer: 'must',
    explanation:
      'must は強い義務を表す助動詞で「〜しなければならない」という意味です。',
  },
  {
    id: 'gram-283',
    type: 'grammar',
    content: 'The new branch will serve customers _____ the northern region.',
    choices: ['throughout', 'through', 'across from', 'about'],
    answer: 'throughout',
    explanation:
      'throughout は「〜全体にわたって」という意味の前置詞です。throughout the northern region で「北部地域全体で」。',
  },
  {
    id: 'gram-284',
    type: 'grammar',
    content:
      'The marketing strategy proved _____ effective in the Asian market.',
    choices: ['highly', 'high', 'height', 'heightened'],
    answer: 'highly',
    explanation:
      '形容詞 effective を修飾するので副詞 highly（非常に）が正解です。',
  },
  {
    id: 'gram-285',
    type: 'grammar',
    content: 'The HR director _____ the job offer to the top candidate.',
    choices: ['extended', 'extended out', 'extended to', 'gave'],
    answer: 'extended',
    explanation:
      'extend a job offer は「内定を出す・オファーをする」という定型表現です。',
  },
  {
    id: 'gram-286',
    type: 'grammar',
    content: 'The team will meet every Tuesday _____ discuss project updates.',
    choices: ['to', 'for', 'in order', 'so as'],
    answer: 'to',
    explanation:
      '目的を表す to不定詞の副詞的用法です。meet to discuss（話し合うために集まる）。',
  },
  {
    id: 'gram-287',
    type: 'grammar',
    content:
      'The price increase has been attributed _____ rising material costs.',
    choices: ['to', 'for', 'by', 'from'],
    answer: 'to',
    explanation:
      'be attributed to は「〜に起因する・〜のせいにされる」という定型表現です。',
  },
  {
    id: 'gram-288',
    type: 'grammar',
    content:
      'Employees are _____ their first performance review after 90 days.',
    choices: ['given', 'giving', 'give', 'gave'],
    answer: 'given',
    explanation:
      '受動態 are given（与えられる）が正解です。be given a review で「評価を受ける」という意味です。',
  },
  {
    id: 'gram-289',
    type: 'grammar',
    content: 'The new product is expected to _____ a significant market share.',
    choices: ['capture', 'capturing', 'captured', 'capture for'],
    answer: 'capture',
    explanation:
      'be expected to do の形で、to の後には動詞の原形が続きます。capture market share（市場シェアを獲得する）。',
  },
  {
    id: 'gram-290',
    type: 'grammar',
    content: 'The manager spoke _____ the importance of work-life balance.',
    choices: ['about', 'for', 'at', 'to'],
    answer: 'about',
    explanation: 'speak about は「〜について話す」という表現です。',
  },
  {
    id: 'gram-291',
    type: 'grammar',
    content:
      'The company _____ to expand into the European market within five years.',
    choices: ['aims', 'aim', 'aimed', 'aiming'],
    answer: 'aims',
    explanation:
      '主語 The company（単数）に対して現在形 aims が正解です。aim to do（〜することを目指す）。',
  },
  {
    id: 'gram-292',
    type: 'grammar',
    content: 'The client wanted to ensure _____ the delivery was on time.',
    choices: ['that', 'if', 'whether', 'which'],
    answer: 'that',
    explanation:
      'ensure that〜 は「〜を確認する・保証する」という定型表現です。',
  },
  {
    id: 'gram-293',
    type: 'grammar',
    content: 'The safety audit will be _____ by an independent firm.',
    choices: ['carried out', 'carried on', 'carried through', 'carried off'],
    answer: 'carried out',
    explanation: 'carry out は「実施する・実行する」という句動詞です。',
  },
  {
    id: 'gram-294',
    type: 'grammar',
    content: 'All staff are _____ to take part in the annual company survey.',
    choices: ['invited', 'inviting', 'invite', 'invitation'],
    answer: 'invited',
    explanation:
      '受動態 are invited（招待されている）が正解です。be invited to do（〜するよう招待される）。',
  },
  {
    id: 'gram-295',
    type: 'grammar',
    content:
      'The project _____ well until the team encountered unexpected setbacks.',
    choices: ['was progressing', 'has progressed', 'progresses', 'progress'],
    answer: 'was progressing',
    explanation:
      '過去のある時点での進行中の動作を表す過去進行形 was progressing が正解です。',
  },
  {
    id: 'gram-296',
    type: 'grammar',
    content:
      'Our customer service team is available _____ a.m. to 9 p.m. daily.',
    choices: ['from 9', 'since 9', 'between 9', 'as of 9'],
    answer: 'from 9',
    explanation:
      'from〜to〜 は「〜から〜まで」という時間の範囲を表します。from 9 a.m. to 9 p.m. が正解です。',
  },
  {
    id: 'gram-297',
    type: 'grammar',
    content:
      'The manager took _____ of the opportunity to promote the new product.',
    choices: ['advantage', 'use', 'benefit', 'control'],
    answer: 'advantage',
    explanation: 'take advantage of は「〜を活用する」という定型表現です。',
  },
  {
    id: 'gram-298',
    type: 'grammar',
    content:
      'The workshop is _____ to participants with prior knowledge of Excel.',
    choices: ['limited', 'limiting', 'limit', 'limitation'],
    answer: 'limited',
    explanation:
      'be limited to は「〜に限定されている」という定型表現です。過去分詞 limited が正解です。',
  },
  {
    id: 'gram-299',
    type: 'grammar',
    content: 'The figures _____ in the table represent quarterly revenue.',
    choices: ['shown', 'showing', 'show', 'shows'],
    answer: 'shown',
    explanation:
      '過去分詞 shown が名詞 figures を後置修飾します。figures shown in the table（表に示されている数字）。',
  },
  {
    id: 'gram-300',
    type: 'grammar',
    content:
      'The partnership agreement is set _____ expire at the end of the year.',
    choices: ['to', 'for', 'at', 'in'],
    answer: 'to',
    explanation:
      'be set to do は「〜する予定である・〜することになっている」という定型表現です。',
  },
  {
    id: 'gram-301',
    type: 'grammar',
    content:
      'We _____ like to invite you to the grand opening of our new store.',
    choices: ['would', 'will', 'should', 'could'],
    answer: 'would',
    explanation:
      'would like to do は「〜したいと思います」という丁寧な表現です。',
  },
  {
    id: 'gram-302',
    type: 'grammar',
    content: 'The quarterly earnings report is _____ on Thursday.',
    choices: ['due', 'due to', 'dated', 'scheduled'],
    answer: 'due',
    explanation:
      'be due on は「〜に提出期限がある」という表現です。due on Thursday で「木曜日が期限」という意味です。',
  },
  {
    id: 'gram-303',
    type: 'grammar',
    content:
      'The cost of the renovation was higher _____ originally estimated.',
    choices: ['than', 'as', 'that', 'from'],
    answer: 'than',
    explanation: '比較級の表現 higher than〜 で「〜より高い」という意味です。',
  },
  {
    id: 'gram-304',
    type: 'grammar',
    content:
      'The intern was assigned _____ a senior manager for on-the-job training.',
    choices: ['to', 'by', 'with', 'for'],
    answer: 'to',
    explanation:
      'be assigned to は「〜に配属される・割り当てられる」という表現です。',
  },
  {
    id: 'gram-305',
    type: 'grammar',
    content: 'A _____ of staff members attended the emergency meeting.',
    choices: ['number', 'group', 'set', 'series'],
    answer: 'number',
    explanation:
      'a number of は「多くの」という表現で、複数名詞と使います。a number of staff members で「多くのスタッフ」。',
  },
  {
    id: 'gram-306',
    type: 'grammar',
    content: 'The new system will be _____ across all departments by year end.',
    choices: ['implemented', 'implementing', 'implement', 'implementation'],
    answer: 'implemented',
    explanation:
      'will be の後に過去分詞で受動態を作ります。implemented（導入される）が正解です。',
  },
  {
    id: 'gram-307',
    type: 'grammar',
    content: 'The company is proud _____ its 50-year history of innovation.',
    choices: ['of', 'for', 'about', 'in'],
    answer: 'of',
    explanation: 'be proud of は「〜を誇りに思う」という定型表現です。',
  },
  {
    id: 'gram-308',
    type: 'grammar',
    content: 'The manager _____ the team to stay focused on their priorities.',
    choices: ['reminded', 'reminded to', 'reminded of', 'reminded about'],
    answer: 'reminded',
    explanation:
      'remind + 目的語 + to do の形で「〜に〜することを思い出させる」という意味です。',
  },
  {
    id: 'gram-309',
    type: 'grammar',
    content: 'The office renovation will _____ approximately three weeks.',
    choices: ['take', 'last', 'run', 'spend'],
    answer: 'take',
    explanation:
      'take は「（時間が）かかる」という意味です。will take approximately three weeks で「約3週間かかる」。',
  },
  {
    id: 'gram-310',
    type: 'grammar',
    content:
      'The board of directors met _____ discuss the acquisition proposal.',
    choices: ['to', 'for', 'in order', 'so that'],
    answer: 'to',
    explanation:
      '目的を表す to不定詞の副詞的用法です。met to discuss（話し合うために集まった）。',
  },
  {
    id: 'gram-311',
    type: 'grammar',
    content:
      'The HR department is _____ for processing all leave applications.',
    choices: ['responsible', 'responsibility', 'responded', 'responsibly'],
    answer: 'responsible',
    explanation:
      'be responsible for は「〜に責任がある」という定型表現です。形容詞 responsible が正解です。',
  },
  {
    id: 'gram-312',
    type: 'grammar',
    content: 'Sales are expected to rise _____ 20% in the coming quarter.',
    choices: ['by', 'to', 'at', 'up'],
    answer: 'by',
    explanation:
      '増減の幅を表すには by を使います。rise by 20%（20%上昇する）という表現です。',
  },
  {
    id: 'gram-313',
    type: 'grammar',
    content: 'The documents must be _____ in a secure location at all times.',
    choices: ['kept', 'keeping', 'keep', 'keeps'],
    answer: 'kept',
    explanation:
      'must be の後に過去分詞で受動態を作ります。kept（保管される）が正解です。',
  },
  {
    id: 'gram-314',
    type: 'grammar',
    content: 'The new employee has _____ responsibility for client relations.',
    choices: ['taken on', 'taken off', 'taken over', 'taken up'],
    answer: 'taken on',
    explanation:
      'take on responsibility は「責任を引き受ける」という句動詞です。',
  },
  {
    id: 'gram-315',
    type: 'grammar',
    content:
      'The report will be reviewed _____ the committee before publication.',
    choices: ['by', 'from', 'with', 'through'],
    answer: 'by',
    explanation:
      '受動態の動作主を表すのは by です。reviewed by the committee（委員会によってレビューされる）。',
  },
  {
    id: 'gram-316',
    type: 'grammar',
    content: "The CEO expressed _____ for the entire team's hard work.",
    choices: ['gratitude', 'grateful', 'gratefully', 'gratefulness'],
    answer: 'gratitude',
    explanation:
      '動詞 expressed の目的語として名詞 gratitude（感謝）が正解です。express gratitude for〜 で「〜に感謝を示す」。',
  },
  {
    id: 'gram-317',
    type: 'grammar',
    content: 'The company has been _____ since its founding in 1990.',
    choices: ['profitable', 'profit', 'profitably', 'profitability'],
    answer: 'profitable',
    explanation:
      'has been の後に補語として形容詞 profitable（収益性のある）が正解です。',
  },
  {
    id: 'gram-318',
    type: 'grammar',
    content:
      'Employees should _____ all sensitive information with discretion.',
    choices: ['handle', 'manage', 'operate', 'control'],
    answer: 'handle',
    explanation:
      'handle sensitive information は「機密情報を取り扱う」という表現です。',
  },
  {
    id: 'gram-319',
    type: 'grammar',
    content:
      'The new headquarters building is _____ the most modern in the city.',
    choices: ['among', 'between', 'in', 'within'],
    answer: 'among',
    explanation:
      'among は「（3つ以上の）〜の中で」という意味です。among the most modern で「最も現代的な〜の中で」。',
  },
  {
    id: 'gram-320',
    type: 'grammar',
    content:
      'The manager asked that everyone _____ the required training modules.',
    choices: ['complete', 'completes', 'completed', 'completing'],
    answer: 'complete',
    explanation:
      '要求を表す asked that〜 の後は仮定法現在（動詞の原形）を使います。',
  },
  {
    id: 'gram-321',
    type: 'grammar',
    content: 'Please _____ in mind that the deadline has been moved up.',
    choices: ['keep', 'bear', 'take', 'hold'],
    answer: 'bear',
    explanation:
      'bear in mind that〜 は「〜を心に留めてください」という定型表現です。',
  },
  {
    id: 'gram-322',
    type: 'grammar',
    content: "The company's success can be _____ to its dedicated workforce.",
    choices: ['attributed', 'attained', 'accounted', 'applied'],
    answer: 'attributed',
    explanation:
      'be attributed to は「〜に起因する・〜のおかげである」という定型表現です。',
  },
  {
    id: 'gram-323',
    type: 'grammar',
    content:
      '_____ a result of the restructuring, 50 positions were eliminated.',
    choices: ['As', 'For', 'Due', 'Because'],
    answer: 'As',
    explanation: 'as a result of は「〜の結果として」という定型表現です。',
  },
  {
    id: 'gram-324',
    type: 'grammar',
    content: 'The product recall was _____ issued due to safety concerns.',
    choices: ['voluntarily', 'voluntary', 'volunteer', 'voluntariness'],
    answer: 'voluntarily',
    explanation:
      '過去分詞 issued を修飾するので副詞 voluntarily（自発的に）が正解です。',
  },
  {
    id: 'gram-325',
    type: 'grammar',
    content: 'The terms of the contract are _____ to both parties.',
    choices: ['binding', 'bind', 'bound', 'binds'],
    answer: 'binding',
    explanation:
      'be binding on〜 は「〜を拘束する・〜に義務を負わせる」という表現です。binding to both parties で「両者に対して拘束力がある」。',
  },
  {
    id: 'gram-326',
    type: 'grammar',
    content:
      'The HR team is _____ a comprehensive review of all job descriptions.',
    choices: ['conducting', 'conducted', 'conduct', 'conduction'],
    answer: 'conducting',
    explanation: '現在進行形 is conducting（実施中である）が正解です。',
  },
  {
    id: 'gram-327',
    type: 'grammar',
    content:
      'The production line was shut _____ for maintenance over the weekend.',
    choices: ['down', 'off', 'out', 'away'],
    answer: 'down',
    explanation: 'shut down は「稼働停止にする」という句動詞です。',
  },
  {
    id: 'gram-328',
    type: 'grammar',
    content:
      'The company _____ customer privacy above all other considerations.',
    choices: ['places', 'puts', 'sets', 'keeps'],
    answer: 'places',
    explanation:
      'place something above は「〜を〜より上位に置く」という表現です。主語 The company（単数）に places が正解です。',
  },
  {
    id: 'gram-329',
    type: 'grammar',
    content: 'The staff _____ informed of the policy change via the intranet.',
    choices: ['were', 'was', 'are', 'have'],
    answer: 'were',
    explanation:
      'staff は集合名詞で複数扱いが一般的です。were informed（通知された）が正解です。',
  },
  {
    id: 'gram-330',
    type: 'grammar',
    content:
      "The presentation was very _____ and held the audience's attention.",
    choices: ['engaging', 'engaged', 'engagement', 'engagingly'],
    answer: 'engaging',
    explanation:
      'be動詞の後に補語として形容詞 engaging（興味を引く）が正解です。',
  },
  {
    id: 'gram-331',
    type: 'grammar',
    content: 'We regret _____ you that your application was not successful.',
    choices: ['to inform', 'informing', 'inform', 'information'],
    answer: 'to inform',
    explanation:
      'regret to do は「残念ながら〜しなければならない」という丁寧な表現です（後ろにくる内容はこれからのこと）。',
  },
  {
    id: 'gram-332',
    type: 'grammar',
    content:
      'All conference rooms are _____ on a first-come, first-served basis.',
    choices: ['allocated', 'allocating', 'allocate', 'allocation'],
    answer: 'allocated',
    explanation: '受動態の形 are allocated（割り当てられる）が正解です。',
  },
  {
    id: 'gram-333',
    type: 'grammar',
    content:
      'The project manager is _____ with the overall progress of the team.',
    choices: ['satisfied', 'satisfying', 'satisfy', 'satisfaction'],
    answer: 'satisfied',
    explanation: 'be satisfied with は「〜に満足している」という定型表現です。',
  },
  {
    id: 'gram-334',
    type: 'grammar',
    content: 'The meeting will begin _____ all key stakeholders have arrived.',
    choices: ['once', 'while', 'during', 'after'],
    answer: 'once',
    explanation:
      'once は「〜したらすぐに」という接続詞で、条件が満たされた後の動作を表します。',
  },
  {
    id: 'gram-335',
    type: 'grammar',
    content: 'We will _____ in touch with you once a decision has been made.',
    choices: ['be', 'get', 'keep', 'stay'],
    answer: 'get',
    explanation:
      'get in touch with は「〜と連絡を取る」という定型表現です。will get in touch（後で連絡します）。',
  },
  {
    id: 'gram-336',
    type: 'grammar',
    content: 'The pricing is _____ on the volume of products ordered.',
    choices: ['based', 'basing', 'base', 'basis'],
    answer: 'based',
    explanation:
      'be based on は「〜に基づいている」という定型表現です。過去分詞 based が正解です。',
  },
  {
    id: 'gram-337',
    type: 'grammar',
    content: 'The CFO warned _____ the risks of expanding too quickly.',
    choices: ['against', 'about', 'from', 'of'],
    answer: 'against',
    explanation: 'warn against は「〜に反対して警告する」という表現です。',
  },
  {
    id: 'gram-338',
    type: 'grammar',
    content:
      'Several changes were made _____ the feedback received from clients.',
    choices: ['based on', 'basing on', 'in basis of', 'as basis'],
    answer: 'based on',
    explanation: 'based on は「〜に基づいて」という前置詞句です。',
  },
  {
    id: 'gram-339',
    type: 'grammar',
    content:
      'The new branch will _____ in a significant boost to local employment.',
    choices: ['result', 'lead', 'bring', 'cause'],
    answer: 'result',
    explanation: 'result in は「〜という結果になる」という表現です。',
  },
  {
    id: 'gram-340',
    type: 'grammar',
    content:
      'The employees _____ with the highest performance ratings will be promoted.',
    choices: ['credited', 'rated', 'evaluated', 'assessed'],
    answer: 'rated',
    explanation:
      'employees rated with the highest performance ratings（最高評価を受けた従業員）という後置修飾の形です。',
  },
  {
    id: 'gram-341',
    type: 'grammar',
    content:
      'The supply chain disruption has _____ production schedules across the industry.',
    choices: ['disrupted', 'disrupting', 'disruption', 'disrupt'],
    answer: 'disrupted',
    explanation: '現在完了形 has disrupted（混乱させた）が正解です。',
  },
  {
    id: 'gram-342',
    type: 'grammar',
    content:
      'The team worked _____ to finalize the proposal before the deadline.',
    choices: ['diligently', 'diligent', 'diligence', 'diligently working'],
    answer: 'diligently',
    explanation:
      '動詞 worked を修飾するので副詞 diligently（勤勉に）が正解です。',
  },
  {
    id: 'gram-343',
    type: 'grammar',
    content:
      'The new policy will _____ effect from the beginning of next quarter.',
    choices: ['take', 'make', 'bring', 'put'],
    answer: 'take',
    explanation:
      'take effect は「効力を発する・施行される」という定型表現です。',
  },
  {
    id: 'gram-344',
    type: 'grammar',
    content:
      'The company is focused _____ building long-term relationships with clients.',
    choices: ['on', 'in', 'at', 'for'],
    answer: 'on',
    explanation: 'be focused on は「〜に集中している」という定型表現です。',
  },
  {
    id: 'gram-345',
    type: 'grammar',
    content: 'The decision to relocate was _____ after extensive deliberation.',
    choices: ['reached', 'made', 'taken', 'arrived'],
    answer: 'reached',
    explanation:
      'reach a decision（または make a decision）は「結論に達する」という表現です。',
  },
  {
    id: 'gram-346',
    type: 'grammar',
    content:
      "The employees are _____ about the company's new remote work policy.",
    choices: ['enthusiastic', 'enthusiasm', 'enthusiastically', 'enthuse'],
    answer: 'enthusiastic',
    explanation:
      'be動詞の後に補語として形容詞 enthusiastic（熱心な）が正解です。',
  },
  {
    id: 'gram-347',
    type: 'grammar',
    content:
      'The survey results will be presented _____ the entire company at the town hall.',
    choices: ['to', 'for', 'with', 'by'],
    answer: 'to',
    explanation:
      'present something to someone（〜に〜を発表する）という動詞の用法です。',
  },
  {
    id: 'gram-348',
    type: 'grammar',
    content: 'The committee _____ together once a month to review progress.',
    choices: ['convenes', 'convene', 'convened', 'convening'],
    answer: 'convenes',
    explanation:
      '主語 The committee（単数）に対して現在形 convenes が正解です。convene（集まる・招集する）。',
  },
  {
    id: 'gram-349',
    type: 'grammar',
    content:
      'It is _____ recommended that employees complete the cybersecurity training.',
    choices: ['strongly', 'strong', 'strength', 'strengthen'],
    answer: 'strongly',
    explanation:
      '形容詞 recommended を修飾するので副詞 strongly（強く）が正解です。',
  },
  {
    id: 'gram-350',
    type: 'grammar',
    content:
      'The company has _____ a reputation for delivering quality products.',
    choices: ['built', 'build', 'building', 'built up'],
    answer: 'built',
    explanation:
      '現在完了形 has built（築いた）が正解です。build a reputation for〜 で「〜で評判を確立する」。',
  },
  {
    id: 'gram-351',
    type: 'grammar',
    content: 'Please ensure all safety procedures are _____ at all times.',
    choices: ['followed', 'following', 'follow', 'follows'],
    answer: 'followed',
    explanation:
      'are の後に過去分詞で受動態を作ります。be followed（守られる）が正解です。',
  },
  {
    id: 'gram-352',
    type: 'grammar',
    content:
      'The company _____ to its clients that confidentiality will be maintained.',
    choices: ['assures', 'ensures', 'promises', 'confirms'],
    answer: 'assures',
    explanation: 'assure someone that〜 は「〜に〜を保証する」という表現です。',
  },
  {
    id: 'gram-353',
    type: 'grammar',
    content: 'The feedback from customers was _____ constructive and helpful.',
    choices: ['largely', 'large', 'larger', 'largest'],
    answer: 'largely',
    explanation:
      '形容詞 constructive を修飾するので副詞 largely（概ね）が正解です。',
  },
  {
    id: 'gram-354',
    type: 'grammar',
    content:
      'The product _____ for the award is well-designed and user-friendly.',
    choices: ['nominated', 'nominating', 'nomination', 'nominates'],
    answer: 'nominated',
    explanation:
      '過去分詞 nominated が名詞 product を後置修飾します。the product nominated for the award（賞にノミネートされた製品）。',
  },
  {
    id: 'gram-355',
    type: 'grammar',
    content: 'The company expects its costs _____ significantly next year.',
    choices: ['to decrease', 'decreasing', 'decreased', 'decrease'],
    answer: 'to decrease',
    explanation:
      'expect + 目的語 + to不定詞 の形をとります。expects its costs to decrease（コストが減少すると期待している）。',
  },
  {
    id: 'gram-356',
    type: 'grammar',
    content: 'The proposal was _____ approved by the entire board.',
    choices: ['unanimously', 'unanimous', 'unanimity', 'unification'],
    answer: 'unanimously',
    explanation:
      '過去分詞 approved を修飾するので副詞 unanimously（全会一致で）が正解です。',
  },
  {
    id: 'gram-357',
    type: 'grammar',
    content: 'The new hire was _____ her duties quickly and efficiently.',
    choices: ['learning', 'teaching', 'studying', 'performing'],
    answer: 'learning',
    explanation:
      'learn duties は「業務を覚える・習得する」という表現です。was learning（学んでいた）の形で進行中の行動を表します。',
  },
  {
    id: 'gram-358',
    type: 'grammar',
    content: 'The company has _____ significant challenges in the past year.',
    choices: ['faced', 'face', 'facing', 'faces'],
    answer: 'faced',
    explanation: '現在完了形 has faced（直面してきた）が正解です。',
  },
  {
    id: 'gram-359',
    type: 'grammar',
    content: 'The event was _____ despite the unfavorable weather conditions.',
    choices: [
      'well-attended',
      'good-attended',
      'largely attended',
      'many attended',
    ],
    answer: 'well-attended',
    explanation:
      'well-attended は「多くの参加者があった」という複合形容詞です。',
  },
  {
    id: 'gram-360',
    type: 'grammar',
    content: 'Our offices are _____ in 15 countries around the world.',
    choices: ['located', 'locating', 'location', 'locate'],
    answer: 'located',
    explanation:
      'be located in は「〜に位置している」という定型表現で、過去分詞 located が正解です。',
  },
  {
    id: 'gram-361',
    type: 'grammar',
    content:
      'The customer called to _____ a complaint about the delayed delivery.',
    choices: ['lodge', 'make', 'file', 'raise'],
    answer: 'lodge',
    explanation:
      'lodge a complaint は「正式に苦情を申し立てる」という表現です。',
  },
  {
    id: 'gram-362',
    type: 'grammar',
    content: '_____ the high demand, production capacity will be expanded.',
    choices: ['In response to', 'Due to', 'Because of', 'Owing to'],
    answer: 'In response to',
    explanation: 'in response to は「〜に応えて・〜を受けて」という表現です。',
  },
  {
    id: 'gram-363',
    type: 'grammar',
    content: 'The head office is _____ the subsidiary for the final figures.',
    choices: ['awaiting', 'waiting', 'expecting', 'anticipating'],
    answer: 'awaiting',
    explanation:
      'await は他動詞で「〜を待っている」という意味です。await the subsidiary（子会社を待っている）。',
  },
  {
    id: 'gram-364',
    type: 'grammar',
    content: 'The _____ version of the software will be available next month.',
    choices: ['updated', 'update', 'updating', 'updation'],
    answer: 'updated',
    explanation:
      '名詞 version を修飾するので形容詞的な過去分詞 updated（更新された）が正解です。',
  },
  {
    id: 'gram-365',
    type: 'grammar',
    content: 'The analyst predicted that the market _____ recover by mid-year.',
    choices: ['would', 'will', 'should', 'might'],
    answer: 'would',
    explanation:
      '過去形の動詞 predicted に続く間接話法では will → would に変わります。',
  },
  {
    id: 'gram-366',
    type: 'grammar',
    content:
      'The supervisor praised the team _____ its exceptional performance.',
    choices: ['for', 'about', 'on', 'with'],
    answer: 'for',
    explanation:
      'praise someone for〜 は「〜のことで〜を称賛する」という表現です。',
  },
  {
    id: 'gram-367',
    type: 'grammar',
    content:
      'The policy change was met _____ resistance from several departments.',
    choices: ['with', 'by', 'for', 'to'],
    answer: 'with',
    explanation:
      'be met with は「〜で迎えられる・〜を受ける」という定型表現です。was met with resistance（抵抗を受けた）。',
  },
  {
    id: 'gram-368',
    type: 'grammar',
    content:
      'The board of directors _____ a special meeting to address the crisis.',
    choices: ['called', 'called for', 'called off', 'called upon'],
    answer: 'called',
    explanation: 'call a meeting は「会議を招集する」という表現です。',
  },
  {
    id: 'gram-369',
    type: 'grammar',
    content:
      'The new regulations will apply to _____ foreign and domestic companies.',
    choices: ['both', 'either', 'neither', 'all'],
    answer: 'both',
    explanation:
      'both〜and〜 で「〜も〜も両方」という意味です。both foreign and domestic（外国・国内両方の）。',
  },
  {
    id: 'gram-370',
    type: 'grammar',
    content:
      'The employee _____ highest scores will receive a performance bonus.',
    choices: ['with', 'who', 'whose', 'which'],
    answer: 'with',
    explanation:
      'with highest scores（最高スコアを持つ）という前置詞句が名詞 employee を後置修飾します。',
  },
  {
    id: 'gram-371',
    type: 'grammar',
    content: 'The company had _____ anticipated the level of market demand.',
    choices: ['underestimated', 'overestimated', 'underestimate', 'estimates'],
    answer: 'underestimated',
    explanation:
      '過去完了形 had + 過去分詞の形です。underestimated（過小評価していた）が文脈に合います。',
  },
  {
    id: 'gram-372',
    type: 'grammar',
    content:
      'All correspondence should be directed _____ the communications department.',
    choices: ['to', 'for', 'at', 'toward'],
    answer: 'to',
    explanation:
      'be directed to は「〜に向けられる・〜に送られる」という表現です。',
  },
  {
    id: 'gram-373',
    type: 'grammar',
    content:
      'The company regularly donates _____ local charitable organizations.',
    choices: ['to', 'for', 'with', 'at'],
    answer: 'to',
    explanation: 'donate to は「〜に寄付する」という定型表現です。',
  },
  {
    id: 'gram-374',
    type: 'grammar',
    content: 'The new manager is _____ well-liked by her team members.',
    choices: ['already', 'yet', 'still', 'just'],
    answer: 'already',
    explanation:
      'already は「すでに・もう」という意味の副詞で、予想より早い状態を表します。',
  },
  {
    id: 'gram-375',
    type: 'grammar',
    content:
      'The proposal must _____ all legal requirements before being approved.',
    choices: ['meet', 'satisfy', 'fulfill', 'comply'],
    answer: 'meet',
    explanation: 'meet requirements は「要件を満たす」という定型表現です。',
  },
  {
    id: 'gram-376',
    type: 'grammar',
    content:
      'The software update is designed _____ improve system performance.',
    choices: ['to', 'for', 'in order', 'so as'],
    answer: 'to',
    explanation:
      'be designed to do は「〜するように設計されている」という定型表現です。',
  },
  {
    id: 'gram-377',
    type: 'grammar',
    content:
      "_____ the team's success, the manager was given a performance award.",
    choices: ['In recognition of', 'In response to', 'Due to', 'Considering'],
    answer: 'In recognition of',
    explanation:
      'in recognition of は「〜を認めて・〜に対する表彰として」という定型表現です。',
  },
  {
    id: 'gram-378',
    type: 'grammar',
    content:
      'The company has been _____ as a top employer for three consecutive years.',
    choices: ['recognized', 'recognizing', 'recognize', 'recognition'],
    answer: 'recognized',
    explanation:
      '現在完了の受動態 has been recognized（認定されてきた）が正解です。',
  },
  {
    id: 'gram-379',
    type: 'grammar',
    content: 'Management _____ the entire staff to attend the annual retreat.',
    choices: ['expects', 'expects of', 'expects for', 'expectations'],
    answer: 'expects',
    explanation:
      'expect + 目的語（to attend）の形です。expects the entire staff to attend（全スタッフが参加すると期待している）。',
  },
  {
    id: 'gram-380',
    type: 'grammar',
    content:
      'The new pricing model is _____ more competitive than the previous one.',
    choices: ['considerably', 'considerable', 'considerate', 'considerately'],
    answer: 'considerably',
    explanation:
      '比較級 more competitive を修飾するので副詞 considerably（かなり）が正解です。',
  },
  {
    id: 'gram-381',
    type: 'grammar',
    content:
      'The HR team has been _____ experienced professionals for the new division.',
    choices: ['recruiting', 'recruited', 'recruit', 'recruitment'],
    answer: 'recruiting',
    explanation:
      '現在完了進行形 has been recruiting（採用し続けている）が正解です。',
  },
  {
    id: 'gram-382',
    type: 'grammar',
    content: 'The seminar _____ place at the Hilton Hotel on March 15th.',
    choices: ['takes', 'takes part', 'takes place', 'is taking'],
    answer: 'takes place',
    explanation: 'take place は「開催される・行われる」という定型表現です。',
  },
  {
    id: 'gram-383',
    type: 'grammar',
    content:
      'Employees who _____ the training program will receive a certificate.',
    choices: ['complete', 'completed', 'completing', 'completion'],
    answer: 'complete',
    explanation:
      '関係詞節内の動詞として現在形 complete が正解です。who complete the training program（研修プログラムを修了した）。',
  },
  {
    id: 'gram-384',
    type: 'grammar',
    content: 'The budget _____ to be revised due to unexpected expenses.',
    choices: ['needs', 'need', 'needed', 'needing'],
    answer: 'needs',
    explanation:
      '主語 The budget（単数）に対して現在形 needs が正解です。need to be revised（改訂される必要がある）。',
  },
  {
    id: 'gram-385',
    type: 'grammar',
    content:
      'Our company is delighted _____ announce the launch of a new service.',
    choices: ['to', 'in', 'for', 'about'],
    answer: 'to',
    explanation:
      'be delighted to do は「〜できることを嬉しく思う」という定型表現です。',
  },
  {
    id: 'gram-386',
    type: 'grammar',
    content:
      'The product was well-received by consumers, _____ its sales exceeded projections.',
    choices: ['and', 'so', 'but', 'yet'],
    answer: 'and',
    explanation: '前の節の内容に追加情報を加える接続詞 and が正解です。',
  },
  {
    id: 'gram-387',
    type: 'grammar',
    content: 'The conference _____ by over 500 delegates from 40 countries.',
    choices: ['was attended', 'attended', 'has attended', 'attends'],
    answer: 'was attended',
    explanation:
      '受動態の過去形 was attended（出席された）が正解です。The conference was attended by〜（〜に出席された）。',
  },
  {
    id: 'gram-388',
    type: 'grammar',
    content: 'Please ensure the report is _____ before the 5 p.m. deadline.',
    choices: ['submitted', 'submitting', 'submission', 'submits'],
    answer: 'submitted',
    explanation:
      'be動詞の後に過去分詞で受動態を作ります。is submitted（提出される）が正解です。',
  },
  {
    id: 'gram-389',
    type: 'grammar',
    content:
      'The accountant identified several _____ in the financial statement.',
    choices: ['discrepancies', 'discrepancy', 'discrepant', 'discrepancies in'],
    answer: 'discrepancies',
    explanation:
      'several の後には複数形名詞が続きます。discrepancies（差異・食い違い）が正解です。',
  },
  {
    id: 'gram-390',
    type: 'grammar',
    content: 'The client specifically requested that the work _____ by June.',
    choices: ['be finished', 'is finished', 'will be finished', 'finishes'],
    answer: 'be finished',
    explanation:
      'requested that〜 の後は仮定法現在（動詞の原形）です。受動態なので be finished となります。',
  },
  {
    id: 'gram-391',
    type: 'grammar',
    content:
      'The company is _____ at increasing its market share in the region.',
    choices: ['aiming', 'aimed', 'aim', 'aims'],
    answer: 'aiming',
    explanation:
      'be動詞の後に現在分詞で進行形を作ります。is aiming（目指している）が正解です。',
  },
  {
    id: 'gram-392',
    type: 'grammar',
    content:
      'The team leader will be _____ to give a brief status update at the meeting.',
    choices: ['asked', 'asking', 'ask', 'asks'],
    answer: 'asked',
    explanation:
      'will be の後に過去分詞で受動態を作ります。be asked to do（〜するよう求められる）が正解です。',
  },
  {
    id: 'gram-393',
    type: 'grammar',
    content:
      'The new pricing structure is _____ to take effect starting next quarter.',
    choices: ['scheduled', 'scheduling', 'schedule', 'schedulable'],
    answer: 'scheduled',
    explanation:
      'be scheduled to do は「〜する予定である」という定型表現です。',
  },
  {
    id: 'gram-394',
    type: 'grammar',
    content:
      'The company has taken steps to _____ data security throughout the organization.',
    choices: ['strengthen', 'strong', 'strength', 'strengthen up'],
    answer: 'strengthen',
    explanation:
      'to の後には動詞の原形が続きます。strengthen（強化する）が正解です。',
  },
  {
    id: 'gram-395',
    type: 'grammar',
    content:
      'The review process is _____ to evaluate the performance of all staff.',
    choices: ['intended', 'intending', 'intend', 'intention'],
    answer: 'intended',
    explanation:
      'be intended to do は「〜することを意図している・〜のためのものである」という定型表現です。',
  },
  {
    id: 'gram-396',
    type: 'grammar',
    content: 'The latest data shows that the economy _____ at a faster rate.',
    choices: ['is growing', 'grows', 'has grown', 'had grown'],
    answer: 'is growing',
    explanation:
      '現在の進行中の状況を表す現在進行形 is growing（成長しつつある）が正解です。',
  },
  {
    id: 'gram-397',
    type: 'grammar',
    content:
      'The company will provide _____ for all costs associated with the business trip.',
    choices: ['reimbursement', 'reimburse', 'reimbursing', 'reimbursed'],
    answer: 'reimbursement',
    explanation:
      '動詞 provide の目的語として名詞 reimbursement（払い戻し）が正解です。',
  },
  {
    id: 'gram-398',
    type: 'grammar',
    content: "The sales figures are _____ with last year's performance.",
    choices: ['consistent', 'consistently', 'consistency', 'consist'],
    answer: 'consistent',
    explanation:
      'be consistent with は「〜と一致している・〜と変わらない」という定型表現です。形容詞 consistent が正解です。',
  },
  {
    id: 'gram-399',
    type: 'grammar',
    content:
      'The management _____ employees for their contributions to the project.',
    choices: ['acknowledged', 'acknowledging', 'acknowledge', 'acknowledgment'],
    answer: 'acknowledged',
    explanation:
      '過去形 acknowledged（認めた・表彰した）が正解です。acknowledge employees for〜（〜について従業員を称える）。',
  },
  {
    id: 'gram-400',
    type: 'grammar',
    content:
      'The new headquarters is equipped _____ state-of-the-art conference facilities.',
    choices: ['with', 'by', 'in', 'for'],
    answer: 'with',
    explanation:
      'be equipped with は「〜が備わっている・〜が設置されている」という定型表現です。',
  },
];
