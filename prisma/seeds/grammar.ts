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
      'The proposal was rejected _____ of its high implementation costs.',
    choices: ['because', 'instead', 'regardless', 'in spite'],
    answer: 'because',
    explanation:
      'because of は「〜のために」という原因を表します。提案が却下された理由を説明しています。',
  },
  {
    id: 'gram-059',
    type: 'grammar',
    content:
      'The company is looking for candidates with _____ experience in project management.',
    choices: ['extensive', 'extend', 'extension', 'extensively'],
    answer: 'extensive',
    explanation:
      '名詞 experience を修飾するには形容詞 extensive（豊富な）が必要です。',
  },
  {
    id: 'gram-060',
    type: 'grammar',
    content:
      'Participants are encouraged to _____ any questions during the Q&A session.',
    choices: ['raise', 'rise', 'arise', 'rose'],
    answer: 'raise',
    explanation:
      'raise は他動詞で「〜を上げる、提起する」、rise は自動詞で「上がる」です。questions は目的語なので raise。',
  },
  {
    id: 'gram-061',
    type: 'grammar',
    content: 'The renovation project was completed ahead of _____.',
    choices: ['schedule', 'scheduled', 'scheduling', 'schedules'],
    answer: 'schedule',
    explanation:
      'ahead of schedule は「予定より早く」という定型表現です。前置詞 of の後に名詞 schedule。',
  },
  {
    id: 'gram-062',
    type: 'grammar',
    content:
      '_____ the economy improves, many businesses continue to struggle.',
    choices: ['Although', 'Because', 'Since', 'Therefore'],
    answer: 'Although',
    explanation:
      'although は「〜にもかかわらず」という譲歩を表す接続詞です。経済改善と苦戦の対比を表します。',
  },
  {
    id: 'gram-063',
    type: 'grammar',
    content: 'The contract clearly _____ the responsibilities of each party.',
    choices: ['outlines', 'outlining', 'outlined', 'outline'],
    answer: 'outlines',
    explanation:
      '主語 The contract は三人称単数で、一般的事実を述べるので現在形 outlines を使います。',
  },
  {
    id: 'gram-064',
    type: 'grammar',
    content:
      'Feedback from customers is _____ valuable for improving our services.',
    choices: ['extremely', 'extreme', 'extremity', 'extremeness'],
    answer: 'extremely',
    explanation:
      '形容詞 valuable を修飾するには副詞 extremely（極めて）が必要です。',
  },
  {
    id: 'gram-065',
    type: 'grammar',
    content: 'The shipment is expected to arrive _____ Wednesday and Friday.',
    choices: ['between', 'among', 'during', 'within'],
    answer: 'between',
    explanation:
      'between A and B は2つの間を表します。2つの曜日の間なので between が適切です。among は3つ以上。',
  },
  {
    id: 'gram-066',
    type: 'grammar',
    content:
      'The company will not proceed with the plan _____ it receives board approval.',
    choices: ['until', 'by', 'while', 'during'],
    answer: 'until',
    explanation:
      'not ... until で「〜するまで…しない」という意味です。承認を受けるまで進めないということ。',
  },
  {
    id: 'gram-067',
    type: 'grammar',
    content: 'Applicants must have at _____ five years of relevant experience.',
    choices: ['least', 'last', 'less', 'latest'],
    answer: 'least',
    explanation:
      'at least は「少なくとも」という定型表現です。最低条件を示します。',
  },
  {
    id: 'gram-068',
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
    id: 'gram-069',
    type: 'grammar',
    content: 'The new policy aims to _____ employee productivity.',
    choices: ['enhance', 'enhancement', 'enhanced', 'enhancing'],
    answer: 'enhance',
    explanation:
      'to の後には動詞の原形が続きます。aims to enhance で「向上させることを目指す」。',
  },
  {
    id: 'gram-070',
    type: 'grammar',
    content:
      'All inquiries should be _____ to the customer service department.',
    choices: ['directed', 'directing', 'direct', 'direction'],
    answer: 'directed',
    explanation:
      'should be directed は受動態で「〜に向けられるべきだ」という意味です。',
  },
  {
    id: 'gram-071',
    type: 'grammar',
    content: "The CEO made a _____ speech at the annual shareholders' meeting.",
    choices: ['compelling', 'compelled', 'compel', 'compellingly'],
    answer: 'compelling',
    explanation:
      '名詞 speech を修飾するには形容詞 compelling（説得力のある）が必要です。',
  },
  {
    id: 'gram-072',
    type: 'grammar',
    content:
      '_____ the training session, participants will receive a handbook.',
    choices: ['Prior to', 'Afterward', 'Meanwhile', 'Nevertheless'],
    answer: 'Prior to',
    explanation:
      'prior to は「〜の前に」という意味の前置詞句です。名詞（the training session）の前に使います。',
  },
  {
    id: 'gram-073',
    type: 'grammar',
    content:
      'The company is committed _____ providing excellent customer service.',
    choices: ['to', 'for', 'in', 'with'],
    answer: 'to',
    explanation:
      'committed to は「〜に尽力している」という定型表現です。to の後には動名詞 providing が続きます。',
  },
  {
    id: 'gram-074',
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
    id: 'gram-075',
    type: 'grammar',
    content: 'The review process _____ approximately two weeks to complete.',
    choices: ['takes', 'taking', 'taken', 'took'],
    answer: 'takes',
    explanation:
      '一般的事実を述べる文で、主語 The review process は三人称単数なので現在形 takes を使います。',
  },
  {
    id: 'gram-076',
    type: 'grammar',
    content: '_____ interested in applying for the position should contact HR.',
    choices: ['Those', 'That', 'These', 'This'],
    answer: 'Those',
    explanation:
      'those は「〜する人々」という意味で、those interested in で「〜に興味のある人々」。',
  },
  {
    id: 'gram-077',
    type: 'grammar',
    content:
      'The proposed changes were met with _____ from several department heads.',
    choices: ['resistance', 'resist', 'resistant', 'resisting'],
    answer: 'resistance',
    explanation:
      '前置詞 with の後には名詞が必要です。met with resistance で「抵抗にあった」。',
  },
  {
    id: 'gram-078',
    type: 'grammar',
    content:
      'The training program is designed to help employees develop _____ skills.',
    choices: ['their', 'them', 'they', 'theirs'],
    answer: 'their',
    explanation:
      '名詞 skills を修飾する所有格 their が必要です。help + O + 原形 + their + 名詞 の構造。',
  },
  {
    id: 'gram-079',
    type: 'grammar',
    content: 'Production will resume once the necessary parts _____.',
    choices: ['arrive', 'arrives', 'arriving', 'arrived'],
    answer: 'arrive',
    explanation:
      '主語 parts は複数形なので動詞は原形 arrive です。once 節の中は未来のことでも現在形を使います。',
  },
  {
    id: 'gram-080',
    type: 'grammar',
    content:
      'The seminar provided participants with _____ information about tax regulations.',
    choices: ['useful', 'usefully', 'usefulness', 'use'],
    answer: 'useful',
    explanation:
      '名詞 information を修飾するには形容詞 useful（有用な）が必要です。',
  },
  {
    id: 'gram-081',
    type: 'grammar',
    content: 'Please ensure that all equipment is returned in _____ condition.',
    choices: ['good', 'well', 'goodness', 'better'],
    answer: 'good',
    explanation:
      '名詞 condition を修飾するには形容詞 good が必要です。in good condition で「良い状態で」。',
  },
  {
    id: 'gram-082',
    type: 'grammar',
    content:
      'The company _____ its employees to attend professional development workshops.',
    choices: ['encourages', 'encouraging', 'encouraged', 'encourage'],
    answer: 'encourages',
    explanation:
      '主語 The company は三人称単数で、一般的な方針を述べるので現在形 encourages を使います。',
  },
  {
    id: 'gram-083',
    type: 'grammar',
    content:
      'The deadline for submissions has been extended _____ an additional two weeks.',
    choices: ['by', 'for', 'to', 'with'],
    answer: 'by',
    explanation:
      'extended by は「〜だけ延長された」という差分を表します。by an additional two weeks で「さらに2週間」。',
  },
  {
    id: 'gram-084',
    type: 'grammar',
    content:
      'The research _____ by the university has attracted international attention.',
    choices: ['conducted', 'conducting', 'conduct', 'conducts'],
    answer: 'conducted',
    explanation:
      '過去分詞 conducted が The research を後置修飾しています。「大学によって行われた研究」。',
  },
  {
    id: 'gram-085',
    type: 'grammar',
    content: 'The package will be delivered to _____ address is on file.',
    choices: ['whichever', 'whatever', 'wherever', 'however'],
    answer: 'whichever',
    explanation:
      'whichever address は「どちらの住所であっても」という意味です。名詞 address を修飾する複合関係形容詞。',
  },
  {
    id: 'gram-086',
    type: 'grammar',
    content:
      'Not only did the company increase profits, _____ it also expanded its market share.',
    choices: ['but', 'and', 'or', 'yet'],
    answer: 'but',
    explanation:
      'not only ... but (also) は「〜だけでなく…も」という相関接続詞です。',
  },
  {
    id: 'gram-087',
    type: 'grammar',
    content:
      'The consultant recommended that the company _____ its marketing strategy.',
    choices: ['revise', 'revises', 'revised', 'revising'],
    answer: 'revise',
    explanation: 'recommend that の後は仮定法現在で、動詞は原形を使います。',
  },
  {
    id: 'gram-088',
    type: 'grammar',
    content: 'The workshop will focus _____ on improving communication skills.',
    choices: ['primarily', 'primary', 'prime', 'primed'],
    answer: 'primarily',
    explanation: '動詞 focus を修飾するには副詞 primarily（主に）が必要です。',
  },
  {
    id: 'gram-089',
    type: 'grammar',
    content:
      'Employees who complete the certification _____ eligible for a pay raise.',
    choices: ['become', 'becomes', 'becoming', 'became'],
    answer: 'become',
    explanation:
      '主語は Employees（複数）なので動詞は原形の become です。一般的事実を述べる現在形。',
  },
  {
    id: 'gram-090',
    type: 'grammar',
    content: 'The proposal includes a _____ breakdown of the project costs.',
    choices: ['detailed', 'detail', 'detailing', 'details'],
    answer: 'detailed',
    explanation:
      '名詞 breakdown を修飾するには形容詞（過去分詞）detailed（詳細な）が必要です。',
  },
  {
    id: 'gram-091',
    type: 'grammar',
    content:
      'The event will be held at the convention center, _____ is located downtown.',
    choices: ['which', 'that', 'where', 'what'],
    answer: 'which',
    explanation:
      'コンマの後の非制限用法の関係代名詞は which を使います。that は非制限用法では使えません。',
  },
  {
    id: 'gram-092',
    type: 'grammar',
    content: 'The annual budget must be approved _____ the fiscal year begins.',
    choices: ['before', 'after', 'since', 'until'],
    answer: 'before',
    explanation:
      'before は「〜する前に」です。予算は会計年度開始前に承認される必要があるという論理です。',
  },
  {
    id: 'gram-093',
    type: 'grammar',
    content:
      'Market analysts predict that demand for the product will _____ significantly.',
    choices: ['grow', 'growth', 'growing', 'grew'],
    answer: 'grow',
    explanation:
      'will の後には動詞の原形が続きます。will grow significantly で「大幅に成長するだろう」。',
  },
  {
    id: 'gram-094',
    type: 'grammar',
    content:
      'The new regulations are _____ to take effect at the beginning of next year.',
    choices: ['expected', 'expecting', 'expect', 'expectation'],
    answer: 'expected',
    explanation:
      'are expected to は「〜すると予想されている」という受動態です。',
  },
  {
    id: 'gram-095',
    type: 'grammar',
    content:
      'The project manager ensured that all tasks were completed _____ the specified timeframe.',
    choices: ['within', 'along', 'through', 'across'],
    answer: 'within',
    explanation:
      'within は「〜以内に」という意味で、指定された期間内という意味に合います。',
  },
  {
    id: 'gram-096',
    type: 'grammar',
    content:
      'The company prides _____ on its commitment to environmental sustainability.',
    choices: ['itself', 'themselves', 'ourselves', 'himself'],
    answer: 'itself',
    explanation:
      'pride oneself on は「〜を誇りに思う」という定型表現です。主語 The company は単数なので itself。',
  },
  {
    id: 'gram-097',
    type: 'grammar',
    content:
      '_____ weather conditions may cause delays in the delivery schedule.',
    choices: ['Adverse', 'Adversely', 'Adversity', 'Adversary'],
    answer: 'Adverse',
    explanation:
      '名詞 weather conditions を修飾するには形容詞 adverse（不利な）が必要です。',
  },
  {
    id: 'gram-098',
    type: 'grammar',
    content:
      'The accountant is responsible for ensuring that all financial records are _____.',
    choices: ['accurate', 'accurately', 'accuracy', 'accurateness'],
    answer: 'accurate',
    explanation: 'are の後に補語として形容詞 accurate（正確な）が入ります。',
  },
  {
    id: 'gram-099',
    type: 'grammar',
    content:
      'The marketing campaign proved to be highly _____ in attracting new customers.',
    choices: ['effective', 'effectively', 'effect', 'effectiveness'],
    answer: 'effective',
    explanation:
      'to be の後に補語として形容詞 effective（効果的な）が入ります。highly effective で「非常に効果的」。',
  },
  {
    id: 'gram-100',
    type: 'grammar',
    content: 'She has been working at this company _____ five years.',
    choices: ['for', 'since', 'during', 'while'],
    answer: 'for',
    explanation:
      '期間を表す場合は for を使います。since は起点（since 2019）、during は特定の期間中（during the meeting）を表します。',
  },
  {
    id: 'gram-101',
    type: 'grammar',
    content: 'The budget was approved _____ the board of directors yesterday.',
    choices: ['by', 'from', 'with', 'through'],
    answer: 'by',
    explanation:
      '受動態の動作主は by で表します。「取締役会によって承認された」という意味になります。',
  },
  {
    id: 'gram-102',
    type: 'grammar',
    content: 'Please make sure all employees _____ the safety regulations.',
    choices: ['comply with', 'comply to', 'comply for', 'comply at'],
    answer: 'comply with',
    explanation:
      'comply with は「〜を遵守する」という意味の定型句です。with とセットで使われます。',
  },
  {
    id: 'gram-103',
    type: 'grammar',
    content: 'The conference will be held _____ Monday, March 15, at 9 a.m.',
    choices: ['on', 'in', 'at', 'by'],
    answer: 'on',
    explanation:
      '特定の日付・曜日には on を使います。at は時刻、in は月・年・季節に使います。',
  },
  {
    id: 'gram-104',
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
    id: 'gram-105',
    type: 'grammar',
    content:
      '_____ attending the seminar, she networked with industry leaders.',
    choices: ['While', 'During', 'For', 'Although'],
    answer: 'While',
    explanation:
      'while は接続詞で後に SV が続きます。ここでは while attending（〜しながら）という分詞構文的な用法です。during は前置詞で名詞句を続けます。',
  },
  {
    id: 'gram-106',
    type: 'grammar',
    content:
      'The _____ of the annual report has been postponed until further notice.',
    choices: ['publication', 'publish', 'published', 'publicly'],
    answer: 'publication',
    explanation:
      '冠詞 The の後には名詞が来ます。publication（出版・発行）が正解です。',
  },
  {
    id: 'gram-107',
    type: 'grammar',
    content: 'We need to _____ the deadline by at least two weeks.',
    choices: ['extend', 'expansion', 'extensive', 'extended'],
    answer: 'extend',
    explanation:
      'need to の後には動詞の原形が続きます。extend（延長する）が正解です。',
  },
  {
    id: 'gram-108',
    type: 'grammar',
    content:
      'Neither the manager _____ the employees were informed of the change.',
    choices: ['nor', 'or', 'and', 'but'],
    answer: 'nor',
    explanation: 'neither〜nor〜 は「〜でも〜でもない」という相関接続詞です。',
  },
  {
    id: 'gram-109',
    type: 'grammar',
    content: 'The proposal was so _____ that it was immediately approved.',
    choices: ['convincing', 'convinced', 'convince', 'convincingly'],
    answer: 'convincing',
    explanation:
      'so の後に形容詞が来て「非常に〜な」という意味になります。convincing（説得力のある）が正解です。',
  },
  {
    id: 'gram-110',
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
    id: 'gram-111',
    type: 'grammar',
    content: 'Sales figures have increased _____ compared to last year.',
    choices: ['significantly', 'significant', 'significance', 'signify'],
    answer: 'significantly',
    explanation:
      '動詞 increased を修飾するので副詞 significantly（著しく）が正解です。',
  },
  {
    id: 'gram-112',
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
    id: 'gram-113',
    type: 'grammar',
    content:
      'I would appreciate it _____ you could respond at your earliest convenience.',
    choices: ['if', 'that', 'whether', 'when'],
    answer: 'if',
    explanation:
      'I would appreciate it if〜 は「〜していただけると幸いです」という丁寧な定型表現です。',
  },
  {
    id: 'gram-114',
    type: 'grammar',
    content:
      'The new software system is _____ compatible with our existing hardware.',
    choices: ['fully', 'full', 'fullness', 'fulfill'],
    answer: 'fully',
    explanation:
      '形容詞 compatible を修飾するので副詞 fully（完全に）が正解です。',
  },
  {
    id: 'gram-115',
    type: 'grammar',
    content:
      '_____ the merger, the company became the largest in the industry.',
    choices: ['Following', 'Followed', 'Follow', 'To follow'],
    answer: 'Following',
    explanation:
      'Following〜 は「〜の後に」という前置詞的な分詞で、文頭で使われます。',
  },
  {
    id: 'gram-116',
    type: 'grammar',
    content:
      'The applicant _____ most qualified for the position will be contacted.',
    choices: ['deemed', 'deeming', 'deems', 'to deem'],
    answer: 'deemed',
    explanation:
      '関係代名詞節（who is deemed）の省略形で、過去分詞 deemed が名詞を後置修飾します。',
  },
  {
    id: 'gram-117',
    type: 'grammar',
    content: 'The quarterly results exceeded _____ expectations.',
    choices: ['our', 'us', 'we', 'ours'],
    answer: 'our',
    explanation: '名詞 expectations を修飾するので所有格の our が正解です。',
  },
  {
    id: 'gram-118',
    type: 'grammar',
    content:
      '_____ all the challenges, the team delivered the project on time.',
    choices: ['Despite', 'Although', 'Even if', 'Because of'],
    answer: 'Despite',
    explanation:
      'Despite は前置詞で「〜にもかかわらず」という意味です。後には名詞句が続きます。although は接続詞でSVが続きます。',
  },
  {
    id: 'gram-119',
    type: 'grammar',
    content:
      'The announcement _____ to all staff members via email this morning.',
    choices: ['was sent', 'sent', 'has send', 'sending'],
    answer: 'was sent',
    explanation:
      '受動態の過去形 was sent（送られた）が正解です。this morning は過去の時点を示します。',
  },
  {
    id: 'gram-120',
    type: 'grammar',
    content: 'Could you please _____ me know when the package arrives?',
    choices: ['let', 'make', 'have', 'get'],
    answer: 'let',
    explanation:
      'let me know は「知らせてください」という定型表現です。let + 目的語 + 動詞原形 の形をとります。',
  },
  {
    id: 'gram-121',
    type: 'grammar',
    content: 'The CEO emphasized the importance of _____ a diverse workforce.',
    choices: ['maintaining', 'maintain', 'maintained', 'maintenance'],
    answer: 'maintaining',
    explanation: '前置詞 of の後には動名詞（〜ing）が続きます。',
  },
  {
    id: 'gram-122',
    type: 'grammar',
    content:
      'We will proceed with the plan _____ we receive approval from management.',
    choices: ['once', 'while', 'despite', 'although'],
    answer: 'once',
    explanation:
      'once は「〜したらすぐに、〜次第」という接続詞です。条件が満たされた後の行動を表します。',
  },
  {
    id: 'gram-123',
    type: 'grammar',
    content:
      'The new policy applies to _____ employees, regardless of their position.',
    choices: ['all', 'every', 'each', 'whole'],
    answer: 'all',
    explanation:
      '複数名詞 employees の前には all を使います。every と each は単数名詞に使います。',
  },
  {
    id: 'gram-124',
    type: 'grammar',
    content: 'The training session will be _____ by an external consultant.',
    choices: ['conducted', 'conducting', 'conduct', 'conduction'],
    answer: 'conducted',
    explanation:
      'will be の後には過去分詞が来て受動態を形成します。conducted（実施される）が正解です。',
  },
  {
    id: 'gram-125',
    type: 'grammar',
    content: 'We are looking forward _____ working with your team.',
    choices: ['to', 'for', 'at', 'in'],
    answer: 'to',
    explanation:
      'look forward to doing は「〜することを楽しみにしている」という定型表現です。to は前置詞なので後に動名詞が続きます。',
  },
  {
    id: 'gram-126',
    type: 'grammar',
    content:
      'The product launch _____ scheduled for March has been moved to April.',
    choices: ['originally', 'original', 'origin', 'originate'],
    answer: 'originally',
    explanation:
      '過去分詞 scheduled を修飾するので副詞 originally（当初）が正解です。',
  },
  {
    id: 'gram-127',
    type: 'grammar',
    content:
      'Please ensure that the document is _____ reviewed before submission.',
    choices: ['carefully', 'careful', 'carefulness', 'caring'],
    answer: 'carefully',
    explanation:
      '過去分詞 reviewed を修飾するので副詞 carefully（注意深く）が正解です。形容詞 careful は名詞を修飾するため不可です。',
  },
  {
    id: 'gram-128',
    type: 'grammar',
    content:
      '_____ is required for the position is a minimum of five years of experience.',
    choices: ['What', 'That', 'Which', 'Who'],
    answer: 'What',
    explanation:
      'What is required〜 は名詞節で「必要なのは〜だ」という意味です。What が主語の先行詞を含む関係代名詞として機能します。',
  },
  {
    id: 'gram-129',
    type: 'grammar',
    content: 'The company has _____ expanded its operations to Southeast Asia.',
    choices: ['recently', 'recent', 'recency', 'recentness'],
    answer: 'recently',
    explanation:
      '動詞 expanded を修飾するので副詞 recently（最近）が正解です。',
  },
  {
    id: 'gram-130',
    type: 'grammar',
    content: 'The invoice must be paid _____ 30 days of receipt.',
    choices: ['within', 'during', 'between', 'along'],
    answer: 'within',
    explanation:
      'within は「〜以内に」という期限を表します。within 30 days で「30日以内に」という意味です。',
  },
  {
    id: 'gram-131',
    type: 'grammar',
    content: 'Ms. Chen is _____ for overseeing the quality control department.',
    choices: ['responsible', 'responsibility', 'responsibly', 'respond'],
    answer: 'responsible',
    explanation:
      'be responsible for doing は「〜に責任がある」という定型表現です。形容詞 responsible が正解です。',
  },
  {
    id: 'gram-132',
    type: 'grammar',
    content:
      'Candidates _____ have relevant experience will be given priority.',
    choices: ['who', 'whose', 'which', 'whom'],
    answer: 'who',
    explanation: '先行詞が人（Candidates）なので関係代名詞 who が正解です。',
  },
  {
    id: 'gram-133',
    type: 'grammar',
    content: 'The report must be _____ no later than Friday afternoon.',
    choices: ['submitted', 'submitting', 'submits', 'submission'],
    answer: 'submitted',
    explanation:
      'must be の後に過去分詞で受動態を作ります。submitted（提出された）が正解です。',
  },
  {
    id: 'gram-134',
    type: 'grammar',
    content: 'The _____ of the new product was met with great enthusiasm.',
    choices: ['introduction', 'introduce', 'introducing', 'introduced'],
    answer: 'introduction',
    explanation:
      '冠詞 The の後には名詞が来ます。introduction（導入・発表）が正解です。',
  },
  {
    id: 'gram-135',
    type: 'grammar',
    content: 'I am afraid _____ I will not be able to attend the meeting.',
    choices: ['that', 'which', 'what', 'if'],
    answer: 'that',
    explanation:
      'I am afraid that〜 は「残念ながら〜です」という定型表現です。that は名詞節を導く接続詞です。',
  },
  {
    id: 'gram-136',
    type: 'grammar',
    content: 'The new regulations will come _____ effect from January 1st.',
    choices: ['into', 'in', 'to', 'onto'],
    answer: 'into',
    explanation:
      'come into effect は「効力を発する・施行される」という定型表現です。',
  },
  {
    id: 'gram-137',
    type: 'grammar',
    content:
      '_____ the proposal is approved, construction will begin immediately.',
    choices: ['Provided that', 'Even though', 'In spite of', 'Regardless of'],
    answer: 'Provided that',
    explanation:
      'provided that は「〜という条件で、〜さえすれば」という条件を表す接続詞です。',
  },
  {
    id: 'gram-138',
    type: 'grammar',
    content:
      "The manager was pleased _____ the team's performance last quarter.",
    choices: ['with', 'about', 'at', 'for'],
    answer: 'with',
    explanation: 'be pleased with は「〜に満足している」という定型表現です。',
  },
  {
    id: 'gram-139',
    type: 'grammar',
    content: 'The company plans to hire _____ 50 new employees this year.',
    choices: ['approximately', 'approximate', 'approximation', 'approximating'],
    answer: 'approximately',
    explanation: '数詞 50 を修飾するので副詞 approximately（約）が正解です。',
  },
  {
    id: 'gram-140',
    type: 'grammar',
    content: 'The new policy is _____ to all departments without exception.',
    choices: ['applicable', 'apply', 'application', 'applied'],
    answer: 'applicable',
    explanation:
      'be applicable to は「〜に適用される」という表現です。形容詞 applicable が正解です。',
  },
  {
    id: 'gram-141',
    type: 'grammar',
    content: 'The director wants the team _____ the project ahead of schedule.',
    choices: ['to complete', 'completing', 'completed', 'completes'],
    answer: 'to complete',
    explanation: 'want + 目的語 + to不定詞 の形をとります。',
  },
  {
    id: 'gram-142',
    type: 'grammar',
    content: 'This task requires _____ attention to detail.',
    choices: ['careful', 'carefully', 'care', 'caring'],
    answer: 'careful',
    explanation:
      '名詞 attention を修飾するので形容詞 careful（注意深い）が正解です。',
  },
  {
    id: 'gram-143',
    type: 'grammar',
    content:
      'By the end of this year, she _____ with the company for a decade.',
    choices: ['will have been', 'will be', 'has been', 'would be'],
    answer: 'will have been',
    explanation:
      'by the end of this year という未来の時点までの継続を表すので、未来完了形 will have been が正解です。',
  },
  {
    id: 'gram-144',
    type: 'grammar',
    content: 'The meeting room is _____ for the presentation at 2 p.m.',
    choices: ['reserved', 'reserving', 'reserve', 'reservation'],
    answer: 'reserved',
    explanation:
      'be動詞の後に形容詞または過去分詞が続きます。reserved（予約されている）が正解です。',
  },
  {
    id: 'gram-145',
    type: 'grammar',
    content: 'Please _____ free to contact us if you have any questions.',
    choices: ['feel', 'make', 'take', 'get'],
    answer: 'feel',
    explanation:
      'Please feel free to〜 は「遠慮なく〜してください」という定型表現です。',
  },
  {
    id: 'gram-146',
    type: 'grammar',
    content: 'The factory _____ produce 10,000 units per day at full capacity.',
    choices: ['can', 'should', 'ought', 'must'],
    answer: 'can',
    explanation:
      '能力・可能性を表す助動詞 can（〜できる）が正解です。at full capacity（フル稼働で）という文脈に合います。',
  },
  {
    id: 'gram-147',
    type: 'grammar',
    content: "The client's _____ was incorporated into the final design.",
    choices: ['feedback', 'feed', 'feeder', 'feeding'],
    answer: 'feedback',
    explanation:
      "所有格 client's の後には名詞が来ます。feedback（フィードバック）が正解です。",
  },
  {
    id: 'gram-148',
    type: 'grammar',
    content: 'All participants are _____ to register in advance.',
    choices: ['encouraged', 'encouraging', 'encouragement', 'encourage'],
    answer: 'encouraged',
    explanation:
      'are の後に過去分詞で受動態を作ります。be encouraged to do（〜するよう促される）が正解です。',
  },
  {
    id: 'gram-149',
    type: 'grammar',
    content: 'The _____ between the two companies lasted over 20 years.',
    choices: ['partnership', 'partner', 'partnered', 'partnering'],
    answer: 'partnership',
    explanation:
      '冠詞 The の後には名詞が来ます。partnership（パートナーシップ・提携）が正解です。',
  },
  {
    id: 'gram-150',
    type: 'grammar',
    content: 'Staff members are advised _____ overtime without prior approval.',
    choices: ['not to work', 'not working', 'to not work', 'no working'],
    answer: 'not to work',
    explanation: 'be advised to do の否定形は be advised not to do です。',
  },
  {
    id: 'gram-151',
    type: 'grammar',
    content:
      'The committee will _____ a final decision after reviewing all applications.',
    choices: ['make', 'do', 'take', 'give'],
    answer: 'make',
    explanation: 'make a decision は「決定を下す」という定型表現です。',
  },
  {
    id: 'gram-152',
    type: 'grammar',
    content: 'The new branch office is _____ in downtown Tokyo.',
    choices: ['located', 'locating', 'locate', 'location'],
    answer: 'located',
    explanation:
      'be located in は「〜に位置している」という定型表現です。過去分詞 located が正解です。',
  },
  {
    id: 'gram-153',
    type: 'grammar',
    content: 'The seminar attracted more attendees _____ expected.',
    choices: ['than', 'as', 'that', 'which'],
    answer: 'than',
    explanation: '比較表現 more〜than「〜よりも多い」の構造です。',
  },
  {
    id: 'gram-154',
    type: 'grammar',
    content:
      '_____ approved by the safety committee, the equipment can be used.',
    choices: ['Once', 'Unless', 'Although', 'Without'],
    answer: 'Once',
    explanation:
      '分詞構文の前に once を置いて「〜されたら」という条件を表します。Once approved = Once it is approved。',
  },
  {
    id: 'gram-155',
    type: 'grammar',
    content: 'The company expects to _____ a profit in the second quarter.',
    choices: ['turn', 'make', 'take', 'earn'],
    answer: 'turn',
    explanation: 'turn a profit は「利益を上げる」という定型表現です。',
  },
  {
    id: 'gram-156',
    type: 'grammar',
    content: 'Customers _____ their orders online will receive a 10% discount.',
    choices: ['placing', 'placed', 'to place', 'place'],
    answer: 'placing',
    explanation:
      '現在分詞 placing が名詞 Customers を後置修飾します。Customers who place orders = Customers placing orders。',
  },
  {
    id: 'gram-157',
    type: 'grammar',
    content: 'The project was completed ahead of _____ by two weeks.',
    choices: ['schedule', 'schedules', 'scheduling', 'scheduled'],
    answer: 'schedule',
    explanation: 'ahead of schedule は「予定より早く」という定型表現です。',
  },
  {
    id: 'gram-158',
    type: 'grammar',
    content: "The company's _____ strategy focuses on sustainable growth.",
    choices: ['long-term', 'long term', 'longer term', 'longest term'],
    answer: 'long-term',
    explanation:
      '名詞 strategy を修飾する複合形容詞は通常ハイフンで結ばれます。long-term（長期的な）が正解です。',
  },
  {
    id: 'gram-159',
    type: 'grammar',
    content: 'The revised proposal was _____ to the client for review.',
    choices: ['forwarded', 'forwarding', 'forward', 'forwards'],
    answer: 'forwarded',
    explanation:
      'was の後に過去分詞で受動態を作ります。was forwarded（転送された）が正解です。',
  },
  {
    id: 'gram-160',
    type: 'grammar',
    content:
      'Please confirm _____ you will be attending the annual conference.',
    choices: ['whether', 'either', 'neither', 'both'],
    answer: 'whether',
    explanation: 'confirm whether〜 は「〜かどうかを確認する」という表現です。',
  },
  {
    id: 'gram-161',
    type: 'grammar',
    content: 'The company is _____ for providing excellent customer service.',
    choices: ['known', 'knowing', 'know', 'knowledge'],
    answer: 'known',
    explanation:
      'be known for は「〜で知られている」という定型表現です。過去分詞 known が正解です。',
  },
  {
    id: 'gram-162',
    type: 'grammar',
    content:
      '_____ additional information is needed, please contact our support team.',
    choices: ['If', 'While', 'Though', 'Until'],
    answer: 'If',
    explanation: 'if は条件を表す接続詞で「もし〜であれば」という意味です。',
  },
  {
    id: 'gram-163',
    type: 'grammar',
    content: 'The shareholders voted _____ favor of the new acquisition.',
    choices: ['in', 'for', 'to', 'with'],
    answer: 'in',
    explanation:
      'vote in favor of は「〜に賛成票を投じる」という定型表現です。',
  },
  {
    id: 'gram-164',
    type: 'grammar',
    content: 'The executive team has _____ several key initiatives this year.',
    choices: ['launched', 'launch', 'launching', 'to launch'],
    answer: 'launched',
    explanation:
      '現在完了形 has + 過去分詞の形です。launched（開始した）が正解です。',
  },
  {
    id: 'gram-165',
    type: 'grammar',
    content: 'Employees _____ work overtime will be compensated accordingly.',
    choices: ['who', 'which', 'whose', 'that'],
    answer: 'who',
    explanation:
      '先行詞が人（Employees）なので関係代名詞 who（またはthat）が正解です。',
  },
  {
    id: 'gram-166',
    type: 'grammar',
    content: 'The _____ of the new building will begin in the spring.',
    choices: ['construction', 'construct', 'constructed', 'constructing'],
    answer: 'construction',
    explanation:
      '冠詞 The の後には名詞が来ます。construction（建設）が正解です。',
  },
  {
    id: 'gram-167',
    type: 'grammar',
    content: 'Please _____ the attached file for more details.',
    choices: ['refer to', 'refer at', 'refer for', 'refer with'],
    answer: 'refer to',
    explanation: 'refer to は「〜を参照する」という定型表現です。',
  },
  {
    id: 'gram-168',
    type: 'grammar',
    content: 'The company has been _____ facing financial difficulties.',
    choices: ['reportedly', 'reported', 'report', 'reporting'],
    answer: 'reportedly',
    explanation: '文全体を修飾する副詞 reportedly（報道によると）が正解です。',
  },
  {
    id: 'gram-169',
    type: 'grammar',
    content: 'All expenses _____ during the business trip will be reimbursed.',
    choices: ['incurred', 'incurring', 'to incur', 'incurs'],
    answer: 'incurred',
    explanation:
      '過去分詞 incurred が名詞 expenses を後置修飾します。expenses incurred = expenses that were incurred（発生した費用）。',
  },
  {
    id: 'gram-170',
    type: 'grammar',
    content:
      'The marketing team is _____ a new campaign for the holiday season.',
    choices: ['developing', 'developed', 'development', 'develop'],
    answer: 'developing',
    explanation:
      'is の後に現在分詞で進行形を作ります。is developing（開発中である）が正解です。',
  },
  {
    id: 'gram-171',
    type: 'grammar',
    content: 'Staff members are required _____ safety gear at all times.',
    choices: ['to wear', 'wearing', 'wear', 'worn'],
    answer: 'to wear',
    explanation:
      'be required to do は「〜することが義務付けられている」という定型表現です。',
  },
  {
    id: 'gram-172',
    type: 'grammar',
    content:
      'We have _____ received your application and will review it shortly.',
    choices: ['successfully', 'successful', 'success', 'succeed'],
    answer: 'successfully',
    explanation:
      '動詞 received を修飾するので副詞 successfully（無事に）が正解です。',
  },
  {
    id: 'gram-173',
    type: 'grammar',
    content: 'The factory operates _____ a 24-hour schedule.',
    choices: ['on', 'in', 'by', 'at'],
    answer: 'on',
    explanation:
      'operate on a schedule は「スケジュールで稼働する」という表現です。on a 24-hour schedule で「24時間稼働で」。',
  },
  {
    id: 'gram-174',
    type: 'grammar',
    content: 'The board _____ the decision to expand into new markets.',
    choices: ['made', 'did', 'took', 'had'],
    answer: 'made',
    explanation: 'make a decision は「決定を下す」という定型表現です。',
  },
  {
    id: 'gram-175',
    type: 'grammar',
    content: 'The contract _____ between the two parties last week.',
    choices: ['was signed', 'signed', 'sign', 'has signed'],
    answer: 'was signed',
    explanation:
      '受動態の過去形 was signed（署名された）が正解です。last week は過去の時点を示します。',
  },
  {
    id: 'gram-176',
    type: 'grammar',
    content: 'The presentation will take place _____ the main conference hall.',
    choices: ['in', 'on', 'at', 'by'],
    answer: 'in',
    explanation:
      '建物の内部の空間を表すには in を使います。in the conference hall（会議ホールの中で）。',
  },
  {
    id: 'gram-177',
    type: 'grammar',
    content: 'The manager was not _____ of the changes in the schedule.',
    choices: ['aware', 'awake', 'alert', 'aware of'],
    answer: 'aware',
    explanation:
      'be aware of は「〜を知っている・気づいている」という表現です。aware が正解で、of は後に続いています。',
  },
  {
    id: 'gram-178',
    type: 'grammar',
    content:
      'The company will _____ with a local firm to expand its market reach.',
    choices: ['collaborate', 'collaborates', 'collaborated', 'collaborating'],
    answer: 'collaborate',
    explanation:
      'will の後には動詞の原形が続きます。collaborate（協力する）が正解です。',
  },
  {
    id: 'gram-179',
    type: 'grammar',
    content:
      'The employees _____ to work remotely showed increased productivity.',
    choices: ['allowed', 'allowing', 'allow', 'to allow'],
    answer: 'allowed',
    explanation:
      '過去分詞 allowed が名詞 employees を後置修飾します。employees (who were) allowed to work remotely。',
  },
  {
    id: 'gram-180',
    type: 'grammar',
    content: 'Please ensure that all documents are filed _____ order.',
    choices: ['in', 'on', 'by', 'at'],
    answer: 'in',
    explanation:
      'in order は「整理されて、順序よく」という意味です。filed in order で「整然とファイルされた」。',
  },
  {
    id: 'gram-181',
    type: 'grammar',
    content:
      'The customer complained _____ the quality of the delivered goods.',
    choices: ['about', 'for', 'at', 'to'],
    answer: 'about',
    explanation:
      'complain about は「〜について不平を言う」という定型表現です。',
  },
  {
    id: 'gram-182',
    type: 'grammar',
    content:
      'It is _____ that all participants submit their forms before the deadline.',
    choices: ['essential', 'essentially', 'essence', 'essentiality'],
    answer: 'essential',
    explanation:
      'It is essential that〜 の形で「〜することが不可欠だ」という意味です。形容詞 essential が正解です。',
  },
  {
    id: 'gram-183',
    type: 'grammar',
    content: 'The new office building is equipped _____ the latest technology.',
    choices: ['with', 'by', 'in', 'for'],
    answer: 'with',
    explanation: 'be equipped with は「〜が備わっている」という定型表現です。',
  },
  {
    id: 'gram-184',
    type: 'grammar',
    content: 'The budget for next year has _____ been finalized.',
    choices: ['not yet', 'yet not', 'already not', 'not already'],
    answer: 'not yet',
    explanation:
      'has not yet been finalized は「まだ確定していない」という現在完了の否定形です。not yet で「まだ〜ない」という意味です。',
  },
  {
    id: 'gram-185',
    type: 'grammar',
    content: 'The company was _____ in 1985 by two entrepreneurs.',
    choices: ['founded', 'founding', 'found', 'foundation'],
    answer: 'founded',
    explanation: '受動態の過去形 was founded（設立された）が正解です。',
  },
  {
    id: 'gram-186',
    type: 'grammar',
    content: 'We need to take _____ of the current market conditions.',
    choices: ['advantage', 'advantageous', 'advantages', 'advantageously'],
    answer: 'advantage',
    explanation: 'take advantage of は「〜を活用する」という定型表現です。',
  },
  {
    id: 'gram-187',
    type: 'grammar',
    content:
      'The new software will be rolled _____ to all departments next month.',
    choices: ['out', 'up', 'in', 'over'],
    answer: 'out',
    explanation: 'roll out は「展開する・導入する」という句動詞です。',
  },
  {
    id: 'gram-188',
    type: 'grammar',
    content:
      'The merger will _____ in significant cost savings for both companies.',
    choices: ['result', 'results', 'resulting', 'resulted'],
    answer: 'result',
    explanation:
      'will の後には動詞の原形が続きます。result in は「〜という結果になる」という表現です。',
  },
  {
    id: 'gram-189',
    type: 'grammar',
    content: 'The financial report should be _____ to all stakeholders.',
    choices: ['distributed', 'distributing', 'distribute', 'distribution'],
    answer: 'distributed',
    explanation:
      'should be の後に過去分詞で受動態を作ります。distributed（配布された）が正解です。',
  },
  {
    id: 'gram-190',
    type: 'grammar',
    content: 'The director suggested _____ the meeting to next Tuesday.',
    choices: ['postponing', 'to postpone', 'postpone', 'postponed'],
    answer: 'postponing',
    explanation:
      'suggest は動名詞を目的語にとります。suggest doing（〜することを提案する）の形です。',
  },
  {
    id: 'gram-191',
    type: 'grammar',
    content:
      'Customers who are not _____ with their purchase may request a refund.',
    choices: ['satisfied', 'satisfying', 'satisfy', 'satisfaction'],
    answer: 'satisfied',
    explanation:
      'be satisfied with は「〜に満足している」という定型表現です。過去分詞 satisfied が正解です。',
  },
  {
    id: 'gram-192',
    type: 'grammar',
    content: 'The team leader was _____ for the success of the project.',
    choices: ['credited', 'crediting', 'credit', 'creditable'],
    answer: 'credited',
    explanation: 'be credited for は「〜の功績を認められる」という表現です。',
  },
  {
    id: 'gram-193',
    type: 'grammar',
    content: 'The _____ in demand has led to production increases.',
    choices: ['surge', 'surging', 'surged', 'surgingly'],
    answer: 'surge',
    explanation: '冠詞 The の後には名詞が来ます。surge（急増）が正解です。',
  },
  {
    id: 'gram-194',
    type: 'grammar',
    content: 'The office will be closed _____ the national holiday.',
    choices: ['during', 'while', 'when', 'along'],
    answer: 'during',
    explanation:
      'during は前置詞で「〜の間」という意味です。後に名詞句が続きます。while は接続詞でSVが続きます。',
  },
  {
    id: 'gram-195',
    type: 'grammar',
    content: 'The issue was brought _____ the attention of senior management.',
    choices: ['to', 'for', 'at', 'in'],
    answer: 'to',
    explanation:
      "bring something to someone's attention は「〜を〜の注意に持ってくる」という定型表現です。",
  },
  {
    id: 'gram-196',
    type: 'grammar',
    content: 'The seminar is _____ to both members and non-members.',
    choices: ['open', 'opened', 'opening', 'openly'],
    answer: 'open',
    explanation:
      'be open to は「〜に開かれている・参加できる」という表現です。形容詞 open が正解です。',
  },
  {
    id: 'gram-197',
    type: 'grammar',
    content: 'The company has been in _____ for over a century.',
    choices: ['operation', 'operate', 'operated', 'operating'],
    answer: 'operation',
    explanation:
      'in operation は「稼働中・営業中」という定型表現です。前置詞 in の後には名詞が来ます。',
  },
  {
    id: 'gram-198',
    type: 'grammar',
    content:
      'The CEO announced that the company _____ 200 new stores next year.',
    choices: ['will open', 'has opened', 'was opening', 'had opened'],
    answer: 'will open',
    explanation:
      'next year という未来を示す表現があるため、未来形 will open が正解です。',
  },
  {
    id: 'gram-199',
    type: 'grammar',
    content: 'The safety inspection is _____ on a monthly basis.',
    choices: ['conducted', 'conducting', 'conduct', 'conduction'],
    answer: 'conducted',
    explanation:
      'is の後に過去分詞で受動態を作ります。conducted（実施される）が正解です。',
  },
  {
    id: 'gram-200',
    type: 'grammar',
    content: 'He is one of the _____ respected leaders in the industry.',
    choices: ['most', 'more', 'very', 'much'],
    answer: 'most',
    explanation:
      'one of the + 最上級 + 複数名詞 の形で「最も〜な〜の一つ」という意味です。',
  },
  {
    id: 'gram-201',
    type: 'grammar',
    content: 'The renovation of the office _____ two months to complete.',
    choices: ['took', 'take', 'taken', 'taking'],
    answer: 'took',
    explanation:
      '過去の事実を述べているので過去形 took が正解です。take は「（時間が）かかる」という意味です。',
  },
  {
    id: 'gram-202',
    type: 'grammar',
    content: 'Applications _____ after the deadline will not be considered.',
    choices: ['received', 'receiving', 'receive', 'reception'],
    answer: 'received',
    explanation:
      '過去分詞 received が名詞 Applications を後置修飾します。applications (that are) received after the deadline。',
  },
  {
    id: 'gram-203',
    type: 'grammar',
    content: 'The report _____ that sales have increased by 15% this quarter.',
    choices: ['indicates', 'indicate', 'indicated', 'indicating'],
    answer: 'indicates',
    explanation:
      '主語 The report（単数）に対して現在形の動詞 indicates が正解です。',
  },
  {
    id: 'gram-204',
    type: 'grammar',
    content: 'Customers can choose _____ three different subscription plans.',
    choices: ['from', 'among', 'between', 'within'],
    answer: 'from',
    explanation:
      'choose from は「〜の中から選ぶ」という表現で、3つ以上の選択肢に使います。',
  },
  {
    id: 'gram-205',
    type: 'grammar',
    content: 'The shipment is expected to arrive _____ the end of the week.',
    choices: ['by', 'until', 'before', 'at'],
    answer: 'by',
    explanation:
      'by は「〜までに」という期限を表します。by the end of the week で「今週末までに」という意味です。',
  },
  {
    id: 'gram-206',
    type: 'grammar',
    content:
      '_____ experience in project management is preferred for this role.',
    choices: ['Prior', 'Previous', 'Prior to', 'Formerly'],
    answer: 'Prior',
    explanation:
      '名詞 experience を修飾する形容詞として prior（以前の）が正解です。prior experience で「事前の経験」。',
  },
  {
    id: 'gram-207',
    type: 'grammar',
    content: "The company's profits have grown _____ over the past decade.",
    choices: ['steadily', 'steady', 'steadiness', 'steadied'],
    answer: 'steadily',
    explanation: '動詞 grown を修飾するので副詞 steadily（着実に）が正解です。',
  },
  {
    id: 'gram-208',
    type: 'grammar',
    content: 'The manager approved the expense report _____ any hesitation.',
    choices: ['without', 'unless', 'despite', 'although'],
    answer: 'without',
    explanation:
      'without は「〜なしに」という前置詞です。without hesitation で「ためらいなく」という意味です。',
  },
  {
    id: 'gram-209',
    type: 'grammar',
    content:
      'The project _____ been completed if the funding had not been cut.',
    choices: ['would have', 'will have', 'would', 'had'],
    answer: 'would have',
    explanation:
      '仮定法過去完了の帰結節では would have + 過去分詞 の形を使います。',
  },
  {
    id: 'gram-210',
    type: 'grammar',
    content: 'The company is committed _____ environmental sustainability.',
    choices: ['to', 'for', 'with', 'at'],
    answer: 'to',
    explanation:
      'be committed to は「〜に取り組んでいる・専念している」という定型表現です。',
  },
  {
    id: 'gram-211',
    type: 'grammar',
    content: 'The new employee was _____ warmly by her colleagues.',
    choices: ['welcomed', 'welcoming', 'welcome', 'welcomely'],
    answer: 'welcomed',
    explanation: '受動態の過去形 was welcomed（歓迎された）が正解です。',
  },
  {
    id: 'gram-212',
    type: 'grammar',
    content: 'The technical team _____ the issue within a few hours.',
    choices: ['resolved', 'resolving', 'resolution', 'resolve'],
    answer: 'resolved',
    explanation:
      '過去形 resolved（解決した）が正解です。主語 team に対する述語動詞です。',
  },
  {
    id: 'gram-213',
    type: 'grammar',
    content: 'The event was organized _____ raise funds for charity.',
    choices: ['to', 'for', 'in order', 'so as'],
    answer: 'to',
    explanation:
      '目的を表すto不定詞の副詞的用法です。was organized to raise funds で「資金調達のために開催された」。',
  },
  {
    id: 'gram-214',
    type: 'grammar',
    content:
      'Please be _____ that all travel arrangements are made in advance.',
    choices: ['sure', 'certain', 'aware', 'ready'],
    answer: 'sure',
    explanation:
      'Please be sure that〜 は「〜することを確認してください」という定型表現です。',
  },
  {
    id: 'gram-215',
    type: 'grammar',
    content: 'The workshop was _____ attended by over 200 professionals.',
    choices: ['well', 'good', 'much', 'highly'],
    answer: 'well',
    explanation:
      'well-attended は「多くの参加者がいる」という意味の複合形容詞です。well attended（参加者が多かった）が正解です。',
  },
  {
    id: 'gram-216',
    type: 'grammar',
    content: 'The HR department is in _____ of hiring for the new positions.',
    choices: ['charge', 'control', 'order', 'command'],
    answer: 'charge',
    explanation:
      'be in charge of は「〜を担当している・責任を持っている」という定型表現です。',
  },
  {
    id: 'gram-217',
    type: 'grammar',
    content:
      'The client will not accept the terms _____ some revisions are made.',
    choices: ['unless', 'if', 'when', 'while'],
    answer: 'unless',
    explanation: 'unless は「〜しない限り」という条件を表す接続詞です。',
  },
  {
    id: 'gram-218',
    type: 'grammar',
    content: 'Feedback from customers has been _____ positive.',
    choices: ['overwhelmingly', 'overwhelming', 'overwhelm', 'overwhelmed'],
    answer: 'overwhelmingly',
    explanation:
      '形容詞 positive を修飾するので副詞 overwhelmingly（圧倒的に）が正解です。',
  },
  {
    id: 'gram-219',
    type: 'grammar',
    content: 'The warehouse is _____ enough to store all the inventory.',
    choices: ['large', 'largely', 'largeness', 'enlarge'],
    answer: 'large',
    explanation:
      'be動詞の後に形容詞が補語として来ます。large enough to do で「〜できるほど十分に大きい」という意味です。',
  },
  {
    id: 'gram-220',
    type: 'grammar',
    content: 'The quarterly targets _____ as of last month.',
    choices: ['have been met', 'have met', 'were meeting', 'met'],
    answer: 'have been met',
    explanation:
      '現在完了の受動態 have been met（達成された）が正解です。as of last month（先月時点で）が時制のヒントです。',
  },
  {
    id: 'gram-221',
    type: 'grammar',
    content: 'The CEO will be _____ at the annual shareholders meeting.',
    choices: ['present', 'presence', 'presented', 'presently'],
    answer: 'present',
    explanation:
      'be present（出席している）という表現で、形容詞 present が正解です。',
  },
  {
    id: 'gram-222',
    type: 'grammar',
    content:
      '_____ the risk of delays, contingency plans have been established.',
    choices: ['Given', 'Give', 'Giving', 'To give'],
    answer: 'Given',
    explanation: 'Given〜 は「〜を考慮すると」という意味の前置詞的分詞です。',
  },
  {
    id: 'gram-223',
    type: 'grammar',
    content: 'The customer service team handles _____ 500 inquiries per day.',
    choices: ['up to', 'as far as', 'at most', 'no more'],
    answer: 'up to',
    explanation:
      'up to は「最大〜まで」という上限を表します。up to 500 inquiries で「最大500件の問い合わせ」。',
  },
  {
    id: 'gram-224',
    type: 'grammar',
    content:
      'The company is seeking candidates _____ can speak multiple languages.',
    choices: ['who', 'which', 'whose', 'what'],
    answer: 'who',
    explanation: '先行詞が人（candidates）なので関係代名詞 who が正解です。',
  },
  {
    id: 'gram-225',
    type: 'grammar',
    content: 'We appreciate your _____ in our products and services.',
    choices: ['interest', 'interested', 'interesting', 'interests'],
    answer: 'interest',
    explanation:
      '所有格 your の後には名詞が来ます。interest（関心・興味）が正解です。',
  },
  {
    id: 'gram-226',
    type: 'grammar',
    content:
      'The proposal was reviewed _____ the legal team before submission.',
    choices: ['by', 'from', 'with', 'through'],
    answer: 'by',
    explanation:
      '受動態の動作主を表すのは by です。reviewed by the legal team（法務チームによってレビューされた）。',
  },
  {
    id: 'gram-227',
    type: 'grammar',
    content: 'Management is _____ considering the option of outsourcing.',
    choices: ['currently', 'current', 'currency', 'currentness'],
    answer: 'currently',
    explanation:
      '動詞句 is considering を修飾するので副詞 currently（現在）が正解です。',
  },
  {
    id: 'gram-228',
    type: 'grammar',
    content:
      'The agreement will remain in _____ until either party terminates it.',
    choices: ['effect', 'force', 'place', 'power'],
    answer: 'effect',
    explanation:
      'remain in effect は「効力が続く・有効のまま」という定型表現です。',
  },
  {
    id: 'gram-229',
    type: 'grammar',
    content: 'Please _____ the enclosed form and return it to our office.',
    choices: ['complete', 'completing', 'completed', 'completion'],
    answer: 'complete',
    explanation:
      '命令文は動詞の原形で始まります。complete（記入する・完成させる）が正解です。',
  },
  {
    id: 'gram-230',
    type: 'grammar',
    content: 'The new product line _____ to customers across five countries.',
    choices: ['is available', 'available', 'is availability', 'available to'],
    answer: 'is available',
    explanation:
      'be available to は「〜が利用できる」という表現です。is available が述語動詞として正解です。',
  },
  {
    id: 'gram-231',
    type: 'grammar',
    content:
      'Prior to _____ a decision, all factors must be carefully considered.',
    choices: ['making', 'make', 'made', 'makes'],
    answer: 'making',
    explanation:
      'prior to は前置詞で、後には名詞または動名詞が続きます。prior to making（決定する前に）。',
  },
  {
    id: 'gram-232',
    type: 'grammar',
    content: 'The new software is _____ to download from the company website.',
    choices: ['free', 'freely', 'freedom', 'freed'],
    answer: 'free',
    explanation:
      'be free to do は「自由に〜できる」という表現で、また free to download で「無料でダウンロードできる」という意味にもなります。',
  },
  {
    id: 'gram-233',
    type: 'grammar',
    content: 'The company has achieved _____ growth over the past three years.',
    choices: ['remarkable', 'remarkably', 'remark', 'remarkableness'],
    answer: 'remarkable',
    explanation:
      '名詞 growth を修飾するので形容詞 remarkable（目覚ましい）が正解です。',
  },
  {
    id: 'gram-234',
    type: 'grammar',
    content: 'The new hire will be _____ with a company laptop and phone.',
    choices: ['provided', 'providing', 'provide', 'provision'],
    answer: 'provided',
    explanation:
      'be provided with は「〜を支給される」という受動態の定型表現です。',
  },
  {
    id: 'gram-235',
    type: 'grammar',
    content: '_____ the deadline approaches, the team is working overtime.',
    choices: ['As', 'While', 'Since', 'Because'],
    answer: 'As',
    explanation:
      'as は「〜するにつれて、〜するとき」という接続詞で、時間の経過に伴う変化を表します。',
  },
  {
    id: 'gram-236',
    type: 'grammar',
    content: 'The shipment has been _____ due to bad weather conditions.',
    choices: ['delayed', 'delaying', 'delay', 'delayance'],
    answer: 'delayed',
    explanation:
      '現在完了の受動態 has been delayed（遅延している）が正解です。',
  },
  {
    id: 'gram-237',
    type: 'grammar',
    content:
      'All meeting participants should _____ themselves before speaking.',
    choices: ['introduce', 'presents', 'identify', 'state'],
    answer: 'introduce',
    explanation: 'introduce themselves は「自己紹介する」という定型表現です。',
  },
  {
    id: 'gram-238',
    type: 'grammar',
    content: 'The company spokesperson declined _____ on the matter.',
    choices: ['to comment', 'commenting', 'comment', 'commented'],
    answer: 'to comment',
    explanation:
      'decline to do は「〜することを断る」という表現です。decline は to不定詞を目的語にとります。',
  },
  {
    id: 'gram-239',
    type: 'grammar',
    content:
      'The revised budget is _____ to be adopted at the next board meeting.',
    choices: ['expected', 'expecting', 'expect', 'expectation'],
    answer: 'expected',
    explanation:
      'be expected to do は「〜すると予想されている」という定型表現です。',
  },
  {
    id: 'gram-240',
    type: 'grammar',
    content:
      'The manager asked her team to _____ the problem as soon as possible.',
    choices: ['address', 'addressing', 'addressed', 'addresses'],
    answer: 'address',
    explanation:
      'ask someone to do の形で to の後には動詞の原形が続きます。address（取り組む・対処する）が正解です。',
  },
  {
    id: 'gram-241',
    type: 'grammar',
    content: 'The order will be shipped _____ 3-5 business days.',
    choices: ['within', 'in', 'for', 'during'],
    answer: 'within',
    explanation:
      'within は「〜以内に」という期限を表します。within 3-5 business days で「3〜5営業日以内に」。',
  },
  {
    id: 'gram-242',
    type: 'grammar',
    content: 'The _____ for the new product exceeded our projections by 30%.',
    choices: ['demand', 'demanding', 'demanded', 'demander'],
    answer: 'demand',
    explanation: '冠詞 The の後には名詞が来ます。demand（需要）が正解です。',
  },
  {
    id: 'gram-243',
    type: 'grammar',
    content:
      'The terms of the contract are subject _____ change without notice.',
    choices: ['to', 'for', 'at', 'by'],
    answer: 'to',
    explanation:
      'be subject to は「〜を受ける可能性がある・〜次第である」という定型表現です。',
  },
  {
    id: 'gram-244',
    type: 'grammar',
    content:
      '_____ submitting your application, you will receive a confirmation email.',
    choices: ['Upon', 'Once', 'After', 'When'],
    answer: 'Upon',
    explanation:
      'upon doing は「〜するとすぐに」という意味で、upon submitting で「提出後すぐに」という意味です。',
  },
  {
    id: 'gram-245',
    type: 'grammar',
    content: 'The training program is _____ for all new employees.',
    choices: ['mandatory', 'mandate', 'mandating', 'mandatorily'],
    answer: 'mandatory',
    explanation:
      'be動詞の後に補語として形容詞 mandatory（義務的な）が正解です。',
  },
  {
    id: 'gram-246',
    type: 'grammar',
    content:
      'The product has been _____ tested before being released to market.',
    choices: ['thoroughly', 'thorough', 'thoroughness', 'thoroughgoing'],
    answer: 'thoroughly',
    explanation:
      '過去分詞 tested を修飾するので副詞 thoroughly（徹底的に）が正解です。',
  },
  {
    id: 'gram-247',
    type: 'grammar',
    content: 'The candidate _____ the interview most effectively was selected.',
    choices: ['who handled', 'whose handled', 'which handled', 'whom handled'],
    answer: 'who handled',
    explanation: '先行詞が人（The candidate）で主格なので who が正解です。',
  },
  {
    id: 'gram-248',
    type: 'grammar',
    content: 'The company will _____ costs by streamlining its operations.',
    choices: ['cut', 'cutting', 'cuts', 'cutted'],
    answer: 'cut',
    explanation:
      'will の後には動詞の原形が続きます。cut costs（コストを削減する）が正解です。',
  },
  {
    id: 'gram-249',
    type: 'grammar',
    content: 'The customer was _____ a full refund for the defective product.',
    choices: ['issued', 'issuing', 'issue', 'issues'],
    answer: 'issued',
    explanation:
      '受動態の過去形 was issued（交付された）が正解です。be issued a refund で「返金を受ける」という意味です。',
  },
  {
    id: 'gram-250',
    type: 'grammar',
    content: 'Please forward your _____ to the HR department by Friday.',
    choices: ['resume', 'resumes', 'resuming', 'resumed'],
    answer: 'resume',
    explanation:
      '所有格 your の後には名詞が来ます。resume（履歴書）が正解です。',
  },
  {
    id: 'gram-251',
    type: 'grammar',
    content:
      'The new employee orientation will be held _____ the training center.',
    choices: ['at', 'in', 'on', 'by'],
    answer: 'at',
    explanation:
      '特定の場所や施設を指す場合は at を使います。at the training center（トレーニングセンターで）。',
  },
  {
    id: 'gram-252',
    type: 'grammar',
    content: 'The board agreed _____ proceed with the proposed strategy.',
    choices: ['to', 'for', 'on', 'in'],
    answer: 'to',
    explanation: 'agree to do は「〜することに同意する」という表現です。',
  },
  {
    id: 'gram-253',
    type: 'grammar',
    content: 'The results of the survey will be _____ next month.',
    choices: ['published', 'publishing', 'publish', 'publication'],
    answer: 'published',
    explanation:
      'will be の後に過去分詞で受動態を作ります。published（公表される）が正解です。',
  },
  {
    id: 'gram-254',
    type: 'grammar',
    content:
      'The _____ of goods from Asia has increased significantly this year.',
    choices: ['import', 'imports', 'importing', 'imported'],
    answer: 'import',
    explanation: '冠詞 The の後には名詞が来ます。import（輸入）が正解です。',
  },
  {
    id: 'gram-255',
    type: 'grammar',
    content: 'The company _____ great lengths to ensure customer satisfaction.',
    choices: ['goes', 'go', 'went', 'gone'],
    answer: 'goes',
    explanation:
      'go to great lengths は「多大な努力をする」という定型表現です。主語 The company（単数）に合わせて goes が正解です。',
  },
  {
    id: 'gram-256',
    type: 'grammar',
    content: 'The building _____ the headquarters is located downtown.',
    choices: ['housing', 'housed', 'house', 'to house'],
    answer: 'housing',
    explanation:
      '現在分詞 housing（収容している）が名詞 building を後置修飾します。',
  },
  {
    id: 'gram-257',
    type: 'grammar',
    content: 'Please let us know _____ you have any dietary restrictions.',
    choices: ['if', 'whether', 'that', 'what'],
    answer: 'if',
    explanation:
      'let us know if〜 は「〜かどうか知らせてください」という定型表現です。',
  },
  {
    id: 'gram-258',
    type: 'grammar',
    content:
      'Employees are encouraged to _____ professional development opportunities.',
    choices: ['seek', 'seeking', 'sought', 'seeks'],
    answer: 'seek',
    explanation:
      'be encouraged to do の形で、to の後には動詞の原形が続きます。seek（追求する）が正解です。',
  },
  {
    id: 'gram-259',
    type: 'grammar',
    content: 'The new regulation is aimed _____ reducing carbon emissions.',
    choices: ['at', 'to', 'for', 'in'],
    answer: 'at',
    explanation:
      'be aimed at doing は「〜することを目的としている」という定型表現です。',
  },
  {
    id: 'gram-260',
    type: 'grammar',
    content:
      'The conference is _____ at professionals in the financial sector.',
    choices: ['targeted', 'targeting', 'target', 'targets'],
    answer: 'targeted',
    explanation:
      'be targeted at は「〜を対象としている」という定型表現です。過去分詞 targeted が正解です。',
  },
  {
    id: 'gram-261',
    type: 'grammar',
    content: 'We need to _____ the contract terms with the supplier.',
    choices: ['renegotiate', 'renegotiation', 'renegotiating', 'renegotiated'],
    answer: 'renegotiate',
    explanation:
      'need to の後には動詞の原形が続きます。renegotiate（再交渉する）が正解です。',
  },
  {
    id: 'gram-262',
    type: 'grammar',
    content:
      'The revised plan was submitted to management _____ review and approval.',
    choices: ['for', 'to', 'with', 'at'],
    answer: 'for',
    explanation:
      'for review and approval は「レビューと承認のために」という目的を表す表現です。',
  },
  {
    id: 'gram-263',
    type: 'grammar',
    content:
      'The hotel accommodation has been arranged _____ the visiting delegation.',
    choices: ['for', 'to', 'with', 'by'],
    answer: 'for',
    explanation: 'arranged for は「〜のために手配された」という表現です。',
  },
  {
    id: 'gram-264',
    type: 'grammar',
    content: 'The team celebrated _____ the annual sales target early.',
    choices: ['having achieved', 'to achieve', 'achieving', 'achievement of'],
    answer: 'having achieved',
    explanation:
      '完了動名詞 having achieved は「達成したこと」という過去の動作を表します。celebrate having done で「〜したことを祝う」。',
  },
  {
    id: 'gram-265',
    type: 'grammar',
    content: 'The CEO _____ the company as a leader in sustainable innovation.',
    choices: ['positions', 'position', 'positioned', 'positioning'],
    answer: 'positions',
    explanation: '主語 The CEO（単数）に対して現在形 positions が正解です。',
  },
  {
    id: 'gram-266',
    type: 'grammar',
    content: 'The safety procedures must be followed _____ exception.',
    choices: ['without', 'with no', 'with any', 'regardless'],
    answer: 'without',
    explanation: 'without exception は「例外なく」という定型表現です。',
  },
  {
    id: 'gram-267',
    type: 'grammar',
    content:
      'The committee will _____ its final report at the end of the month.',
    choices: ['release', 'releasing', 'released', 'releases'],
    answer: 'release',
    explanation:
      'will の後には動詞の原形が続きます。release（発表する・公開する）が正解です。',
  },
  {
    id: 'gram-268',
    type: 'grammar',
    content: 'The project was completed _____ budget and on schedule.',
    choices: ['under', 'within', 'below', 'at'],
    answer: 'under',
    explanation:
      'under budget は「予算内で」という定型表現です。on schedule（予定通りに）とセットで使われます。',
  },
  {
    id: 'gram-269',
    type: 'grammar',
    content:
      "The company's annual revenue _____ $50 million for the first time.",
    choices: ['exceeded', 'exceeded over', 'surpassed over', 'went over'],
    answer: 'exceeded',
    explanation:
      'exceed は「〜を超える」という他動詞で、over は不要です。exceed $50 million で「5000万ドルを超えた」。',
  },
  {
    id: 'gram-270',
    type: 'grammar',
    content:
      'Customer _____ has been a top priority since the company was founded.',
    choices: ['satisfaction', 'satisfying', 'satisfactory', 'satisfy'],
    answer: 'satisfaction',
    explanation:
      '主語位置の名詞として customer satisfaction（顧客満足）が正解です。',
  },
  {
    id: 'gram-271',
    type: 'grammar',
    content: 'The proposal was _____ rejected by the investment committee.',
    choices: ['unanimously', 'unanimous', 'unanimity', 'unanimousness'],
    answer: 'unanimously',
    explanation:
      '過去分詞 rejected を修飾するので副詞 unanimously（全会一致で）が正解です。',
  },
  {
    id: 'gram-272',
    type: 'grammar',
    content:
      'The CEO will be speaking _____ behalf of the entire organization.',
    choices: ['on', 'in', 'for', 'at'],
    answer: 'on',
    explanation: 'on behalf of は「〜を代表して」という定型表現です。',
  },
  {
    id: 'gram-273',
    type: 'grammar',
    content: 'The financial statements _____ audited on an annual basis.',
    choices: ['are', 'were', 'have', 'will'],
    answer: 'are',
    explanation:
      '定期的に繰り返される事実を表す現在形の受動態 are audited（監査される）が正解です。',
  },
  {
    id: 'gram-274',
    type: 'grammar',
    content:
      'All goods must be _____ before they are accepted into the warehouse.',
    choices: ['inspected', 'inspecting', 'inspect', 'inspection'],
    answer: 'inspected',
    explanation:
      'must be の後に過去分詞で受動態を作ります。inspected（検査された）が正解です。',
  },
  {
    id: 'gram-275',
    type: 'grammar',
    content: 'The new regulation _____ into force on January 1st.',
    choices: ['comes', 'come', 'came', 'is coming'],
    answer: 'comes',
    explanation:
      '確定した未来の予定は現在形で表せます。come into force（施行される）で主語 regulation（単数）に comes が正解です。',
  },
  {
    id: 'gram-276',
    type: 'grammar',
    content: 'The report _____ be ready for distribution by tomorrow morning.',
    choices: ['should', 'ought', 'needs', 'has'],
    answer: 'should',
    explanation:
      'should は義務・期待を表す助動詞で「〜のはずだ・〜すべき」という意味です。',
  },
  {
    id: 'gram-277',
    type: 'grammar',
    content:
      'The workshop focuses _____ practical skills for business communication.',
    choices: ['on', 'at', 'in', 'for'],
    answer: 'on',
    explanation: 'focus on は「〜に焦点を当てる」という定型表現です。',
  },
  {
    id: 'gram-278',
    type: 'grammar',
    content:
      "_____ to the company's website, you can find all relevant information.",
    choices: ['By referring', 'Refer', 'If refer', 'When referred'],
    answer: 'By referring',
    explanation:
      'by doing は「〜することによって」という手段を表します。By referring to（参照することによって）が正解です。',
  },
  {
    id: 'gram-279',
    type: 'grammar',
    content: 'All employees _____ report any suspicious activity to security.',
    choices: ['must', 'might', 'could', 'may'],
    answer: 'must',
    explanation:
      'must は強い義務を表す助動詞で「〜しなければならない」という意味です。',
  },
  {
    id: 'gram-280',
    type: 'grammar',
    content: 'The new branch will serve customers _____ the northern region.',
    choices: ['throughout', 'through', 'across from', 'about'],
    answer: 'throughout',
    explanation:
      'throughout は「〜全体にわたって」という意味の前置詞です。throughout the northern region で「北部地域全体で」。',
  },
  {
    id: 'gram-281',
    type: 'grammar',
    content:
      'The marketing strategy proved _____ effective in the Asian market.',
    choices: ['highly', 'high', 'height', 'heightened'],
    answer: 'highly',
    explanation:
      '形容詞 effective を修飾するので副詞 highly（非常に）が正解です。',
  },
  {
    id: 'gram-282',
    type: 'grammar',
    content: 'The HR director _____ the job offer to the top candidate.',
    choices: ['extended', 'extended out', 'extended to', 'gave'],
    answer: 'extended',
    explanation:
      'extend a job offer は「内定を出す・オファーをする」という定型表現です。',
  },
  {
    id: 'gram-283',
    type: 'grammar',
    content: 'The team will meet every Tuesday _____ discuss project updates.',
    choices: ['to', 'for', 'in order', 'so as'],
    answer: 'to',
    explanation:
      '目的を表す to不定詞の副詞的用法です。meet to discuss（話し合うために集まる）。',
  },
  {
    id: 'gram-284',
    type: 'grammar',
    content:
      'The price increase has been attributed _____ rising material costs.',
    choices: ['to', 'for', 'by', 'from'],
    answer: 'to',
    explanation:
      'be attributed to は「〜に起因する・〜のせいにされる」という定型表現です。',
  },
  {
    id: 'gram-285',
    type: 'grammar',
    content:
      'Employees are _____ their first performance review after 90 days.',
    choices: ['given', 'giving', 'give', 'gave'],
    answer: 'given',
    explanation:
      '受動態 are given（与えられる）が正解です。be given a review で「評価を受ける」という意味です。',
  },
  {
    id: 'gram-286',
    type: 'grammar',
    content: 'The new product is expected to _____ a significant market share.',
    choices: ['capture', 'capturing', 'captured', 'capture for'],
    answer: 'capture',
    explanation:
      'be expected to do の形で、to の後には動詞の原形が続きます。capture market share（市場シェアを獲得する）。',
  },
  {
    id: 'gram-287',
    type: 'grammar',
    content: 'The manager spoke _____ the importance of work-life balance.',
    choices: ['about', 'for', 'at', 'to'],
    answer: 'about',
    explanation: 'speak about は「〜について話す」という表現です。',
  },
  {
    id: 'gram-288',
    type: 'grammar',
    content:
      'The company _____ to expand into the European market within five years.',
    choices: ['aims', 'aim', 'aimed', 'aiming'],
    answer: 'aims',
    explanation:
      '主語 The company（単数）に対して現在形 aims が正解です。aim to do（〜することを目指す）。',
  },
  {
    id: 'gram-289',
    type: 'grammar',
    content: 'The client wanted to ensure _____ the delivery was on time.',
    choices: ['that', 'if', 'whether', 'which'],
    answer: 'that',
    explanation:
      'ensure that〜 は「〜を確認する・保証する」という定型表現です。',
  },
  {
    id: 'gram-290',
    type: 'grammar',
    content: 'The safety audit will be _____ by an independent firm.',
    choices: ['carried out', 'carried on', 'carried through', 'carried off'],
    answer: 'carried out',
    explanation: 'carry out は「実施する・実行する」という句動詞です。',
  },
  {
    id: 'gram-291',
    type: 'grammar',
    content: 'All staff are _____ to take part in the annual company survey.',
    choices: ['invited', 'inviting', 'invite', 'invitation'],
    answer: 'invited',
    explanation:
      '受動態 are invited（招待されている）が正解です。be invited to do（〜するよう招待される）。',
  },
  {
    id: 'gram-292',
    type: 'grammar',
    content:
      'The project _____ well until the team encountered unexpected setbacks.',
    choices: ['was progressing', 'has progressed', 'progresses', 'progress'],
    answer: 'was progressing',
    explanation:
      '過去のある時点での進行中の動作を表す過去進行形 was progressing が正解です。',
  },
  {
    id: 'gram-293',
    type: 'grammar',
    content:
      'Our customer service team is available _____ a.m. to 9 p.m. daily.',
    choices: ['from 9', 'since 9', 'between 9', 'as of 9'],
    answer: 'from 9',
    explanation:
      'from〜to〜 は「〜から〜まで」という時間の範囲を表します。from 9 a.m. to 9 p.m. が正解です。',
  },
  {
    id: 'gram-294',
    type: 'grammar',
    content:
      'The manager took _____ of the opportunity to promote the new product.',
    choices: ['advantage', 'use', 'benefit', 'control'],
    answer: 'advantage',
    explanation: 'take advantage of は「〜を活用する」という定型表現です。',
  },
  {
    id: 'gram-295',
    type: 'grammar',
    content:
      'The workshop is _____ to participants with prior knowledge of Excel.',
    choices: ['limited', 'limiting', 'limit', 'limitation'],
    answer: 'limited',
    explanation:
      'be limited to は「〜に限定されている」という定型表現です。過去分詞 limited が正解です。',
  },
  {
    id: 'gram-296',
    type: 'grammar',
    content: 'The figures _____ in the table represent quarterly revenue.',
    choices: ['shown', 'showing', 'show', 'shows'],
    answer: 'shown',
    explanation:
      '過去分詞 shown が名詞 figures を後置修飾します。figures shown in the table（表に示されている数字）。',
  },
  {
    id: 'gram-297',
    type: 'grammar',
    content:
      'The partnership agreement is set _____ expire at the end of the year.',
    choices: ['to', 'for', 'at', 'in'],
    answer: 'to',
    explanation:
      'be set to do は「〜する予定である・〜することになっている」という定型表現です。',
  },
  {
    id: 'gram-298',
    type: 'grammar',
    content:
      'We _____ like to invite you to the grand opening of our new store.',
    choices: ['would', 'will', 'should', 'could'],
    answer: 'would',
    explanation:
      'would like to do は「〜したいと思います」という丁寧な表現です。',
  },
  {
    id: 'gram-299',
    type: 'grammar',
    content: 'The quarterly earnings report is _____ on Thursday.',
    choices: ['due', 'due to', 'dated', 'scheduled'],
    answer: 'due',
    explanation:
      'be due on は「〜に提出期限がある」という表現です。due on Thursday で「木曜日が期限」という意味です。',
  },
  {
    id: 'gram-300',
    type: 'grammar',
    content:
      'The cost of the renovation was higher _____ originally estimated.',
    choices: ['than', 'as', 'that', 'from'],
    answer: 'than',
    explanation: '比較級の表現 higher than〜 で「〜より高い」という意味です。',
  },
  {
    id: 'gram-301',
    type: 'grammar',
    content:
      'The intern was assigned _____ a senior manager for on-the-job training.',
    choices: ['to', 'by', 'with', 'for'],
    answer: 'to',
    explanation:
      'be assigned to は「〜に配属される・割り当てられる」という表現です。',
  },
  {
    id: 'gram-302',
    type: 'grammar',
    content: 'A _____ of staff members attended the emergency meeting.',
    choices: ['number', 'group', 'set', 'series'],
    answer: 'number',
    explanation:
      'a number of は「多くの」という表現で、複数名詞と使います。a number of staff members で「多くのスタッフ」。',
  },
  {
    id: 'gram-303',
    type: 'grammar',
    content: 'The new system will be _____ across all departments by year end.',
    choices: ['implemented', 'implementing', 'implement', 'implementation'],
    answer: 'implemented',
    explanation:
      'will be の後に過去分詞で受動態を作ります。implemented（導入される）が正解です。',
  },
  {
    id: 'gram-304',
    type: 'grammar',
    content: 'The company is proud _____ its 50-year history of innovation.',
    choices: ['of', 'for', 'about', 'in'],
    answer: 'of',
    explanation: 'be proud of は「〜を誇りに思う」という定型表現です。',
  },
  {
    id: 'gram-305',
    type: 'grammar',
    content: 'The manager _____ the team to stay focused on their priorities.',
    choices: ['reminded', 'reminded to', 'reminded of', 'reminded about'],
    answer: 'reminded',
    explanation:
      'remind + 目的語 + to do の形で「〜に〜することを思い出させる」という意味です。',
  },
  {
    id: 'gram-306',
    type: 'grammar',
    content: 'The office renovation will _____ approximately three weeks.',
    choices: ['take', 'last', 'run', 'spend'],
    answer: 'take',
    explanation:
      'take は「（時間が）かかる」という意味です。will take approximately three weeks で「約3週間かかる」。',
  },
  {
    id: 'gram-307',
    type: 'grammar',
    content:
      'The board of directors met _____ discuss the acquisition proposal.',
    choices: ['to', 'for', 'in order', 'so that'],
    answer: 'to',
    explanation:
      '目的を表す to不定詞の副詞的用法です。met to discuss（話し合うために集まった）。',
  },
  {
    id: 'gram-308',
    type: 'grammar',
    content:
      'The HR department is _____ for processing all leave applications.',
    choices: ['responsible', 'responsibility', 'responded', 'responsibly'],
    answer: 'responsible',
    explanation:
      'be responsible for は「〜に責任がある」という定型表現です。形容詞 responsible が正解です。',
  },
  {
    id: 'gram-309',
    type: 'grammar',
    content: 'Sales are expected to rise _____ 20% in the coming quarter.',
    choices: ['by', 'to', 'at', 'up'],
    answer: 'by',
    explanation:
      '増減の幅を表すには by を使います。rise by 20%（20%上昇する）という表現です。',
  },
  {
    id: 'gram-310',
    type: 'grammar',
    content: 'The documents must be _____ in a secure location at all times.',
    choices: ['kept', 'keeping', 'keep', 'keeps'],
    answer: 'kept',
    explanation:
      'must be の後に過去分詞で受動態を作ります。kept（保管される）が正解です。',
  },
  {
    id: 'gram-311',
    type: 'grammar',
    content: 'The new employee has _____ responsibility for client relations.',
    choices: ['taken on', 'taken off', 'taken over', 'taken up'],
    answer: 'taken on',
    explanation:
      'take on responsibility は「責任を引き受ける」という句動詞です。',
  },
  {
    id: 'gram-312',
    type: 'grammar',
    content:
      'The report will be reviewed _____ the committee before publication.',
    choices: ['by', 'from', 'with', 'through'],
    answer: 'by',
    explanation:
      '受動態の動作主を表すのは by です。reviewed by the committee（委員会によってレビューされる）。',
  },
  {
    id: 'gram-313',
    type: 'grammar',
    content: "The CEO expressed _____ for the entire team's hard work.",
    choices: ['gratitude', 'grateful', 'gratefully', 'gratefulness'],
    answer: 'gratitude',
    explanation:
      '動詞 expressed の目的語として名詞 gratitude（感謝）が正解です。express gratitude for〜 で「〜に感謝を示す」。',
  },
  {
    id: 'gram-314',
    type: 'grammar',
    content: 'The company has been _____ since its founding in 1990.',
    choices: ['profitable', 'profit', 'profitably', 'profitability'],
    answer: 'profitable',
    explanation:
      'has been の後に補語として形容詞 profitable（収益性のある）が正解です。',
  },
  {
    id: 'gram-315',
    type: 'grammar',
    content:
      'Employees should _____ all sensitive information with discretion.',
    choices: ['handle', 'manage', 'operate', 'control'],
    answer: 'handle',
    explanation:
      'handle sensitive information は「機密情報を取り扱う」という表現です。',
  },
  {
    id: 'gram-316',
    type: 'grammar',
    content:
      'The new headquarters building is _____ the most modern in the city.',
    choices: ['among', 'between', 'in', 'within'],
    answer: 'among',
    explanation:
      'among は「（3つ以上の）〜の中で」という意味です。among the most modern で「最も現代的な〜の中で」。',
  },
  {
    id: 'gram-317',
    type: 'grammar',
    content:
      'The manager asked that everyone _____ the required training modules.',
    choices: ['complete', 'completes', 'completed', 'completing'],
    answer: 'complete',
    explanation:
      '要求を表す asked that〜 の後は仮定法現在（動詞の原形）を使います。',
  },
  {
    id: 'gram-318',
    type: 'grammar',
    content: 'Please _____ in mind that the deadline has been moved up.',
    choices: ['keep', 'bear', 'take', 'hold'],
    answer: 'bear',
    explanation:
      'bear in mind that〜 は「〜を心に留めてください」という定型表現です。',
  },
  {
    id: 'gram-319',
    type: 'grammar',
    content: "The company's success can be _____ to its dedicated workforce.",
    choices: ['attributed', 'attained', 'accounted', 'applied'],
    answer: 'attributed',
    explanation:
      'be attributed to は「〜に起因する・〜のおかげである」という定型表現です。',
  },
  {
    id: 'gram-320',
    type: 'grammar',
    content:
      '_____ a result of the restructuring, 50 positions were eliminated.',
    choices: ['As', 'For', 'Due', 'Because'],
    answer: 'As',
    explanation: 'as a result of は「〜の結果として」という定型表現です。',
  },
  {
    id: 'gram-321',
    type: 'grammar',
    content: 'The product recall was _____ issued due to safety concerns.',
    choices: ['voluntarily', 'voluntary', 'volunteer', 'voluntariness'],
    answer: 'voluntarily',
    explanation:
      '過去分詞 issued を修飾するので副詞 voluntarily（自発的に）が正解です。',
  },
  {
    id: 'gram-322',
    type: 'grammar',
    content: 'The terms of the contract are _____ to both parties.',
    choices: ['binding', 'bind', 'bound', 'binds'],
    answer: 'binding',
    explanation:
      'be binding（拘束力がある）が正解です。The terms are binding to both parties で「契約条件は両者を拘束する」という意味になります。binding は形容詞として使われています。',
  },
  {
    id: 'gram-323',
    type: 'grammar',
    content:
      'The HR team is _____ a comprehensive review of all job descriptions.',
    choices: ['conducting', 'conducted', 'conduct', 'conduction'],
    answer: 'conducting',
    explanation: '現在進行形 is conducting（実施中である）が正解です。',
  },
  {
    id: 'gram-324',
    type: 'grammar',
    content:
      'The production line was shut _____ for maintenance over the weekend.',
    choices: ['down', 'off', 'out', 'away'],
    answer: 'down',
    explanation: 'shut down は「稼働停止にする」という句動詞です。',
  },
  {
    id: 'gram-325',
    type: 'grammar',
    content:
      'The company _____ customer privacy above all other considerations.',
    choices: ['places', 'puts', 'sets', 'keeps'],
    answer: 'places',
    explanation:
      'place something above は「〜を〜より上位に置く」という表現です。主語 The company（単数）に places が正解です。',
  },
  {
    id: 'gram-326',
    type: 'grammar',
    content: 'The staff _____ informed of the policy change via the intranet.',
    choices: ['were', 'was', 'are', 'have'],
    answer: 'were',
    explanation:
      'staff は集合名詞で複数扱いが一般的です。were informed（通知された）が正解です。',
  },
  {
    id: 'gram-327',
    type: 'grammar',
    content:
      "The presentation was very _____ and held the audience's attention.",
    choices: ['engaging', 'engaged', 'engagement', 'engagingly'],
    answer: 'engaging',
    explanation:
      'be動詞の後に補語として形容詞 engaging（興味を引く）が正解です。',
  },
  {
    id: 'gram-328',
    type: 'grammar',
    content: 'We regret _____ you that your application was not successful.',
    choices: ['to inform', 'informing', 'inform', 'information'],
    answer: 'to inform',
    explanation:
      'regret to do は「残念ながら〜しなければならない」という丁寧な表現です（後ろにくる内容はこれからのこと）。',
  },
  {
    id: 'gram-329',
    type: 'grammar',
    content:
      'All conference rooms are _____ on a first-come, first-served basis.',
    choices: ['allocated', 'allocating', 'allocate', 'allocation'],
    answer: 'allocated',
    explanation: '受動態の形 are allocated（割り当てられる）が正解です。',
  },
  {
    id: 'gram-330',
    type: 'grammar',
    content:
      'The project manager is _____ with the overall progress of the team.',
    choices: ['satisfied', 'satisfying', 'satisfy', 'satisfaction'],
    answer: 'satisfied',
    explanation: 'be satisfied with は「〜に満足している」という定型表現です。',
  },
  {
    id: 'gram-331',
    type: 'grammar',
    content: 'The meeting will begin _____ all key stakeholders have arrived.',
    choices: ['once', 'while', 'during', 'after'],
    answer: 'once',
    explanation:
      'once は「〜したらすぐに」という接続詞で、条件が満たされた後の動作を表します。',
  },
  {
    id: 'gram-332',
    type: 'grammar',
    content: 'We will _____ in touch with you once a decision has been made.',
    choices: ['be', 'get', 'keep', 'stay'],
    answer: 'get',
    explanation:
      'get in touch with は「〜と連絡を取る」という定型表現です。will get in touch（後で連絡します）。',
  },
  {
    id: 'gram-333',
    type: 'grammar',
    content: 'The pricing is _____ on the volume of products ordered.',
    choices: ['based', 'basing', 'base', 'basis'],
    answer: 'based',
    explanation:
      'be based on は「〜に基づいている」という定型表現です。過去分詞 based が正解です。',
  },
  {
    id: 'gram-334',
    type: 'grammar',
    content: 'The CFO warned _____ the risks of expanding too quickly.',
    choices: ['against', 'about', 'from', 'of'],
    answer: 'against',
    explanation: 'warn against は「〜に反対して警告する」という表現です。',
  },
  {
    id: 'gram-335',
    type: 'grammar',
    content:
      'Several changes were made _____ the feedback received from clients.',
    choices: ['based on', 'basing on', 'in basis of', 'as basis'],
    answer: 'based on',
    explanation: 'based on は「〜に基づいて」という前置詞句です。',
  },
  {
    id: 'gram-336',
    type: 'grammar',
    content:
      'The new branch will _____ in a significant boost to local employment.',
    choices: ['result', 'lead', 'bring', 'cause'],
    answer: 'result',
    explanation: 'result in は「〜という結果になる」という表現です。',
  },
  {
    id: 'gram-337',
    type: 'grammar',
    content:
      'The employees _____ with the highest performance ratings will be promoted.',
    choices: ['credited', 'rated', 'evaluated', 'assessed'],
    answer: 'rated',
    explanation:
      'employees rated with the highest performance ratings（最高評価を受けた従業員）という後置修飾の形です。',
  },
  {
    id: 'gram-338',
    type: 'grammar',
    content:
      'The supply chain disruption has _____ production schedules across the industry.',
    choices: ['disrupted', 'disrupting', 'disruption', 'disrupt'],
    answer: 'disrupted',
    explanation: '現在完了形 has disrupted（混乱させた）が正解です。',
  },
  {
    id: 'gram-339',
    type: 'grammar',
    content:
      'The team worked _____ to finalize the proposal before the deadline.',
    choices: ['diligently', 'diligent', 'diligence', 'diligently working'],
    answer: 'diligently',
    explanation:
      '動詞 worked を修飾するので副詞 diligently（勤勉に）が正解です。',
  },
  {
    id: 'gram-340',
    type: 'grammar',
    content:
      'The new policy will _____ effect from the beginning of next quarter.',
    choices: ['take', 'make', 'bring', 'put'],
    answer: 'take',
    explanation:
      'take effect は「効力を発する・施行される」という定型表現です。',
  },
  {
    id: 'gram-341',
    type: 'grammar',
    content:
      'The company is focused _____ building long-term relationships with clients.',
    choices: ['on', 'in', 'at', 'for'],
    answer: 'on',
    explanation: 'be focused on は「〜に集中している」という定型表現です。',
  },
  {
    id: 'gram-342',
    type: 'grammar',
    content: 'The decision to relocate was _____ after extensive deliberation.',
    choices: ['reached', 'made', 'taken', 'arrived'],
    answer: 'reached',
    explanation:
      'reach a decision（または make a decision）は「結論に達する」という表現です。',
  },
  {
    id: 'gram-343',
    type: 'grammar',
    content:
      "The employees are _____ about the company's new remote work policy.",
    choices: ['enthusiastic', 'enthusiasm', 'enthusiastically', 'enthuse'],
    answer: 'enthusiastic',
    explanation:
      'be動詞の後に補語として形容詞 enthusiastic（熱心な）が正解です。',
  },
  {
    id: 'gram-344',
    type: 'grammar',
    content:
      'The survey results will be presented _____ the entire company at the town hall.',
    choices: ['to', 'for', 'with', 'by'],
    answer: 'to',
    explanation:
      'present something to someone（〜に〜を発表する）という動詞の用法です。',
  },
  {
    id: 'gram-345',
    type: 'grammar',
    content: 'The committee _____ together once a month to review progress.',
    choices: ['convenes', 'convene', 'convened', 'convening'],
    answer: 'convenes',
    explanation:
      '主語 The committee（単数）に対して現在形 convenes が正解です。convene（集まる・招集する）。',
  },
  {
    id: 'gram-346',
    type: 'grammar',
    content:
      'It is _____ recommended that employees complete the cybersecurity training.',
    choices: ['strongly', 'strong', 'strength', 'strengthen'],
    answer: 'strongly',
    explanation:
      '形容詞 recommended を修飾するので副詞 strongly（強く）が正解です。',
  },
  {
    id: 'gram-347',
    type: 'grammar',
    content:
      'The company has _____ a reputation for delivering quality products.',
    choices: ['built', 'build', 'building', 'built up'],
    answer: 'built',
    explanation:
      '現在完了形 has built（築いた）が正解です。build a reputation for〜 で「〜で評判を確立する」。',
  },
  {
    id: 'gram-348',
    type: 'grammar',
    content: 'Please ensure all safety procedures are _____ at all times.',
    choices: ['followed', 'following', 'follow', 'follows'],
    answer: 'followed',
    explanation:
      'are の後に過去分詞で受動態を作ります。be followed（守られる）が正解です。',
  },
  {
    id: 'gram-349',
    type: 'grammar',
    content:
      'The company _____ to its clients that confidentiality will be maintained.',
    choices: ['assures', 'ensures', 'promises', 'confirms'],
    answer: 'assures',
    explanation: 'assure someone that〜 は「〜に〜を保証する」という表現です。',
  },
  {
    id: 'gram-350',
    type: 'grammar',
    content: 'The feedback from customers was _____ constructive and helpful.',
    choices: ['largely', 'large', 'larger', 'largest'],
    answer: 'largely',
    explanation:
      '形容詞 constructive を修飾するので副詞 largely（概ね）が正解です。',
  },
  {
    id: 'gram-351',
    type: 'grammar',
    content:
      'The product _____ for the award is well-designed and user-friendly.',
    choices: ['nominated', 'nominating', 'nomination', 'nominates'],
    answer: 'nominated',
    explanation:
      '過去分詞 nominated が名詞 product を後置修飾します。the product nominated for the award（賞にノミネートされた製品）。',
  },
  {
    id: 'gram-352',
    type: 'grammar',
    content: 'The company expects its costs _____ significantly next year.',
    choices: ['to decrease', 'decreasing', 'decreased', 'decrease'],
    answer: 'to decrease',
    explanation:
      'expect + 目的語 + to不定詞 の形をとります。expects its costs to decrease（コストが減少すると期待している）。',
  },
  {
    id: 'gram-353',
    type: 'grammar',
    content: 'The proposal was _____ approved by the entire board.',
    choices: ['unanimously', 'unanimous', 'unanimity', 'unification'],
    answer: 'unanimously',
    explanation:
      '過去分詞 approved を修飾するので副詞 unanimously（全会一致で）が正解です。',
  },
  {
    id: 'gram-354',
    type: 'grammar',
    content: 'The company has _____ significant challenges in the past year.',
    choices: ['faced', 'face', 'facing', 'faces'],
    answer: 'faced',
    explanation: '現在完了形 has faced（直面してきた）が正解です。',
  },
  {
    id: 'gram-355',
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
    id: 'gram-356',
    type: 'grammar',
    content: 'Our offices are _____ in 15 countries around the world.',
    choices: ['located', 'locating', 'location', 'locate'],
    answer: 'located',
    explanation:
      'be located in は「〜に位置している」という定型表現で、過去分詞 located が正解です。',
  },
  {
    id: 'gram-357',
    type: 'grammar',
    content: 'The _____ version of the software will be available next month.',
    choices: ['updated', 'update', 'updating', 'updation'],
    answer: 'updated',
    explanation:
      '名詞 version を修飾するので形容詞的な過去分詞 updated（更新された）が正解です。',
  },
  {
    id: 'gram-358',
    type: 'grammar',
    content: 'The analyst predicted that the market _____ recover by mid-year.',
    choices: ['would', 'will', 'should', 'might'],
    answer: 'would',
    explanation:
      '過去形の動詞 predicted に続く間接話法では will → would に変わります。',
  },
  {
    id: 'gram-359',
    type: 'grammar',
    content:
      'The supervisor praised the team _____ its exceptional performance.',
    choices: ['for', 'about', 'on', 'with'],
    answer: 'for',
    explanation:
      'praise someone for〜 は「〜のことで〜を称賛する」という表現です。',
  },
  {
    id: 'gram-360',
    type: 'grammar',
    content:
      'The policy change was met _____ resistance from several departments.',
    choices: ['with', 'by', 'for', 'to'],
    answer: 'with',
    explanation:
      'be met with は「〜で迎えられる・〜を受ける」という定型表現です。was met with resistance（抵抗を受けた）。',
  },
  {
    id: 'gram-361',
    type: 'grammar',
    content:
      'The employee _____ highest scores will receive a performance bonus.',
    choices: ['with', 'who', 'whose', 'which'],
    answer: 'with',
    explanation:
      'with highest scores（最高スコアを持つ）という前置詞句が名詞 employee を後置修飾します。',
  },
  {
    id: 'gram-362',
    type: 'grammar',
    content: 'The company had _____ anticipated the level of market demand.',
    choices: ['underestimated', 'overestimated', 'underestimate', 'estimates'],
    answer: 'underestimated',
    explanation:
      '過去完了形 had + 過去分詞の形です。underestimated（過小評価していた）が文脈に合います。',
  },
  {
    id: 'gram-363',
    type: 'grammar',
    content:
      'All correspondence should be directed _____ the communications department.',
    choices: ['to', 'for', 'at', 'toward'],
    answer: 'to',
    explanation:
      'be directed to は「〜に向けられる・〜に送られる」という表現です。',
  },
  {
    id: 'gram-364',
    type: 'grammar',
    content:
      'The company regularly donates _____ local charitable organizations.',
    choices: ['to', 'for', 'with', 'at'],
    answer: 'to',
    explanation: 'donate to は「〜に寄付する」という定型表現です。',
  },
  {
    id: 'gram-365',
    type: 'grammar',
    content: 'The new manager is _____ well-liked by her team members.',
    choices: ['already', 'yet', 'still', 'just'],
    answer: 'already',
    explanation:
      'already は「すでに・もう」という意味の副詞で、予想より早い状態を表します。',
  },
  {
    id: 'gram-366',
    type: 'grammar',
    content:
      'The proposal must _____ all legal requirements before being approved.',
    choices: ['meet', 'satisfy', 'fulfill', 'comply'],
    answer: 'meet',
    explanation: 'meet requirements は「要件を満たす」という定型表現です。',
  },
  {
    id: 'gram-367',
    type: 'grammar',
    content:
      'The software update is designed _____ improve system performance.',
    choices: ['to', 'for', 'in order', 'so as'],
    answer: 'to',
    explanation:
      'be designed to do は「〜するように設計されている」という定型表現です。',
  },
  {
    id: 'gram-368',
    type: 'grammar',
    content:
      "_____ the team's success, the manager was given a performance award.",
    choices: ['In recognition of', 'In response to', 'Due to', 'Considering'],
    answer: 'In recognition of',
    explanation:
      'in recognition of は「〜を認めて・〜に対する表彰として」という定型表現です。',
  },
  {
    id: 'gram-369',
    type: 'grammar',
    content:
      'The company has been _____ as a top employer for three consecutive years.',
    choices: ['recognized', 'recognizing', 'recognize', 'recognition'],
    answer: 'recognized',
    explanation:
      '現在完了の受動態 has been recognized（認定されてきた）が正解です。',
  },
  {
    id: 'gram-370',
    type: 'grammar',
    content:
      'The new pricing model is _____ more competitive than the previous one.',
    choices: ['considerably', 'considerable', 'considerate', 'considerately'],
    answer: 'considerably',
    explanation:
      '比較級 more competitive を修飾するので副詞 considerably（かなり）が正解です。',
  },
  {
    id: 'gram-371',
    type: 'grammar',
    content:
      'The HR team has been _____ experienced professionals for the new division.',
    choices: ['recruiting', 'recruited', 'recruit', 'recruitment'],
    answer: 'recruiting',
    explanation:
      '現在完了進行形 has been recruiting（採用し続けている）が正解です。',
  },
  {
    id: 'gram-372',
    type: 'grammar',
    content: 'The seminar _____ place at the Hilton Hotel on March 15th.',
    choices: ['takes', 'takes part', 'takes place', 'is taking'],
    answer: 'takes place',
    explanation: 'take place は「開催される・行われる」という定型表現です。',
  },
  {
    id: 'gram-373',
    type: 'grammar',
    content:
      'Employees who _____ the training program will receive a certificate.',
    choices: ['complete', 'completed', 'completing', 'completion'],
    answer: 'complete',
    explanation:
      '関係詞節内の動詞として現在形 complete が正解です。who complete the training program（研修プログラムを修了した）。',
  },
  {
    id: 'gram-374',
    type: 'grammar',
    content: 'The budget _____ to be revised due to unexpected expenses.',
    choices: ['needs', 'need', 'needed', 'needing'],
    answer: 'needs',
    explanation:
      '主語 The budget（単数）に対して現在形 needs が正解です。need to be revised（改訂される必要がある）。',
  },
  {
    id: 'gram-375',
    type: 'grammar',
    content:
      'Our company is delighted _____ announce the launch of a new service.',
    choices: ['to', 'in', 'for', 'about'],
    answer: 'to',
    explanation:
      'be delighted to do は「〜できることを嬉しく思う」という定型表現です。',
  },
  {
    id: 'gram-376',
    type: 'grammar',
    content:
      'The product was well-received by consumers, _____ its sales exceeded projections.',
    choices: ['and', 'so', 'but', 'yet'],
    answer: 'and',
    explanation: '前の節の内容に追加情報を加える接続詞 and が正解です。',
  },
  {
    id: 'gram-377',
    type: 'grammar',
    content: 'The conference _____ by over 500 delegates from 40 countries.',
    choices: ['was attended', 'attended', 'has attended', 'attends'],
    answer: 'was attended',
    explanation:
      '受動態の過去形 was attended（出席された）が正解です。The conference was attended by〜（〜に出席された）。',
  },
  {
    id: 'gram-378',
    type: 'grammar',
    content: 'Please ensure the report is _____ before the 5 p.m. deadline.',
    choices: ['submitted', 'submitting', 'submission', 'submits'],
    answer: 'submitted',
    explanation:
      'be動詞の後に過去分詞で受動態を作ります。is submitted（提出される）が正解です。',
  },
  {
    id: 'gram-379',
    type: 'grammar',
    content:
      'The accountant identified several _____ in the financial statement.',
    choices: ['discrepancies', 'discrepancy', 'discrepant', 'discrepancies in'],
    answer: 'discrepancies',
    explanation:
      'several の後には複数形名詞が続きます。discrepancies（差異・食い違い）が正解です。',
  },
  {
    id: 'gram-380',
    type: 'grammar',
    content: 'The client specifically requested that the work _____ by June.',
    choices: ['be finished', 'is finished', 'will be finished', 'finishes'],
    answer: 'be finished',
    explanation:
      'requested that〜 の後は仮定法現在（動詞の原形）です。受動態なので be finished となります。',
  },
  {
    id: 'gram-381',
    type: 'grammar',
    content:
      'The company is _____ at increasing its market share in the region.',
    choices: ['aiming', 'aimed', 'aim', 'aims'],
    answer: 'aiming',
    explanation:
      'be動詞の後に現在分詞で進行形を作ります。is aiming（目指している）が正解です。',
  },
  {
    id: 'gram-382',
    type: 'grammar',
    content:
      'The team leader will be _____ to give a brief status update at the meeting.',
    choices: ['asked', 'asking', 'ask', 'asks'],
    answer: 'asked',
    explanation:
      'will be の後に過去分詞で受動態を作ります。be asked to do（〜するよう求められる）が正解です。',
  },
  {
    id: 'gram-383',
    type: 'grammar',
    content:
      'The new pricing structure is _____ to take effect starting next quarter.',
    choices: ['scheduled', 'scheduling', 'schedule', 'schedulable'],
    answer: 'scheduled',
    explanation:
      'be scheduled to do は「〜する予定である」という定型表現です。',
  },
  {
    id: 'gram-384',
    type: 'grammar',
    content:
      'The review process is _____ to evaluate the performance of all staff.',
    choices: ['intended', 'intending', 'intend', 'intention'],
    answer: 'intended',
    explanation:
      'be intended to do は「〜することを意図している・〜のためのものである」という定型表現です。',
  },
  {
    id: 'gram-385',
    type: 'grammar',
    content: "The sales figures are _____ with last year's performance.",
    choices: ['consistent', 'consistently', 'consistency', 'consist'],
    answer: 'consistent',
    explanation:
      'be consistent with は「〜と一致している・〜と変わらない」という定型表現です。形容詞 consistent が正解です。',
  },
  {
    id: 'gram-386',
    type: 'grammar',
    content:
      'The management _____ employees for their contributions to the project.',
    choices: ['acknowledged', 'acknowledging', 'acknowledge', 'acknowledgment'],
    answer: 'acknowledged',
    explanation:
      '過去形 acknowledged（認めた・表彰した）が正解です。acknowledge employees for〜（〜について従業員を称える）。',
  },
  {
    id: 'gram-387',
    type: 'grammar',
    content:
      'The new headquarters is equipped _____ state-of-the-art conference facilities.',
    choices: ['with', 'by', 'in', 'for'],
    answer: 'with',
    explanation:
      'be equipped with は「〜が備わっている・〜が設置されている」という定型表現です。',
  },
  {
    id: 'gram-388',
    type: 'grammar',
    content: 'The project deadline _____ extended by two weeks.',
    choices: ['has been', 'have been', 'was been', 'is been'],
    answer: 'has been',
    explanation: '現在完了の受動態 has been extended（延長された）が正解です。',
  },
  {
    id: 'gram-389',
    type: 'grammar',
    content: 'The invoice _____ payment within 30 days of receipt.',
    choices: ['requires', 'requiring', 'required', 'requirement'],
    answer: 'requires',
    explanation: '主語 The invoice（単数）に対して現在形 requires が正解です。',
  },
  {
    id: 'gram-390',
    type: 'grammar',
    content: 'The candidate was hired _____ her extensive industry experience.',
    choices: ['because of', 'although', 'despite', 'unless'],
    answer: 'because of',
    explanation:
      'because of は前置詞句で「〜のために」という理由を表します。後に名詞句が続きます。',
  },
  {
    id: 'gram-391',
    type: 'grammar',
    content:
      'The company has _____ its customer base by 40% in just two years.',
    choices: ['expanded', 'expanding', 'expansion', 'expand'],
    answer: 'expanded',
    explanation: '現在完了形 has expanded（拡大した）が正解です。',
  },
  {
    id: 'gram-392',
    type: 'grammar',
    content: 'Tickets for the gala dinner are _____ on a first-come basis.',
    choices: ['available', 'availability', 'availably', 'avail'],
    answer: 'available',
    explanation:
      'be available（入手可能である）という表現で形容詞 available が正解です。',
  },
  {
    id: 'gram-393',
    type: 'grammar',
    content:
      'The management team is looking _____ ways to reduce operating costs.',
    choices: ['for', 'at', 'into', 'through'],
    answer: 'for',
    explanation: 'look for は「〜を探している」という句動詞です。',
  },
  {
    id: 'gram-394',
    type: 'grammar',
    content: 'We have _____ the decision to postpone the product launch.',
    choices: ['made', 'done', 'taken', 'given'],
    answer: 'made',
    explanation: 'make a decision は「決定を下す」という定型表現です。',
  },
  {
    id: 'gram-395',
    type: 'grammar',
    content: 'The document should be _____ in PDF format before submission.',
    choices: ['saved', 'saving', 'save', 'saves'],
    answer: 'saved',
    explanation:
      'should be の後に過去分詞で受動態を作ります。saved（保存された）が正解です。',
  },
  {
    id: 'gram-396',
    type: 'grammar',
    content:
      'The policy was reviewed _____ to ensure compliance with new regulations.',
    choices: ['thoroughly', 'thorough', 'thoroughness', 'through'],
    answer: 'thoroughly',
    explanation:
      '動詞 reviewed を修飾するので副詞 thoroughly（徹底的に）が正解です。',
  },
  {
    id: 'gram-397',
    type: 'grammar',
    content: 'The new headquarters will be _____ in the financial district.',
    choices: ['situated', 'situating', 'situate', 'situation'],
    answer: 'situated',
    explanation:
      'will be situated は受動態未来形で「〜に位置する予定」という意味です。',
  },
  {
    id: 'gram-398',
    type: 'grammar',
    content:
      'Employees _____ the company car must follow the vehicle use policy.',
    choices: ['using', 'used', 'use', 'to use'],
    answer: 'using',
    explanation: '現在分詞 using が名詞 Employees を後置修飾します。',
  },
  {
    id: 'gram-399',
    type: 'grammar',
    content: 'All staff are expected _____ the mandatory fire drill on Friday.',
    choices: ['to attend', 'attending', 'attend', 'attendance'],
    answer: 'to attend',
    explanation:
      'be expected to do は「〜することが期待されている」という定型表現です。',
  },
  {
    id: 'gram-400',
    type: 'grammar',
    content:
      'The director asked that the final report _____ by Monday morning.',
    choices: ['be submitted', 'is submitted', 'will be submitted', 'submits'],
    answer: 'be submitted',
    explanation:
      'asked that〜 の後は仮定法現在（動詞の原形）です。受動態なので be submitted となります。',
  },
  {
    id: 'gram-401',
    type: 'grammar',
    content: 'The memo was _____ to all department heads via internal email.',
    choices: ['circulated', 'circulating', 'circulate', 'circulation'],
    answer: 'circulated',
    explanation: '受動態の過去形 was circulated（回覧された）が正解です。',
  },
  {
    id: 'gram-402',
    type: 'grammar',
    content: 'The branch manager was _____ with a distinguished service award.',
    choices: ['presented', 'presenting', 'present', 'presentation'],
    answer: 'presented',
    explanation: 'be presented with は「〜を授与される」という定型表現です。',
  },
  {
    id: 'gram-403',
    type: 'grammar',
    content:
      'Staff who _____ to transfer to the new location will be prioritized.',
    choices: ['wish', 'wishing', 'wishes', 'wished'],
    answer: 'wish',
    explanation: '関係詞節内の動詞として現在形 wish が正解です。',
  },
  {
    id: 'gram-404',
    type: 'grammar',
    content: 'The office will remain _____ during the public holiday.',
    choices: ['closed', 'closing', 'close', 'closure'],
    answer: 'closed',
    explanation:
      'remain closed（閉まっている）という表現で、過去分詞 closed が補語として正解です。',
  },
  {
    id: 'gram-405',
    type: 'grammar',
    content:
      'The team put _____ a lot of effort into developing the new system.',
    choices: ['in', 'on', 'up', 'over'],
    answer: 'in',
    explanation: 'put in effort は「努力を注ぎ込む」という句動詞です。',
  },
  {
    id: 'gram-406',
    type: 'grammar',
    content: 'Employees are _____ to submit their timesheets every Friday.',
    choices: ['required', 'requesting', 'request', 'requirement'],
    answer: 'required',
    explanation:
      'be required to do は「〜することが義務付けられている」という定型表現です。',
  },
  {
    id: 'gram-407',
    type: 'grammar',
    content:
      '_____ the high cost, the board approved the investment unanimously.',
    choices: ['Despite', 'Although', 'Because of', 'Due to'],
    answer: 'Despite',
    explanation:
      'despite は前置詞で「〜にもかかわらず」という意味です。後には名詞句が続きます。',
  },
  {
    id: 'gram-408',
    type: 'grammar',
    content: 'The new manager has _____ a positive impact on team morale.',
    choices: ['had', 'made', 'given', 'done'],
    answer: 'had',
    explanation:
      'have an impact on は「〜に影響を与える」という表現です。has had（現在完了）が正解です。',
  },
  {
    id: 'gram-409',
    type: 'grammar',
    content: 'The client is not yet _____ of the schedule change.',
    choices: ['aware', 'knowing', 'informed', 'notified'],
    answer: 'aware',
    explanation: 'be aware of は「〜を知っている」という定型表現です。',
  },
  {
    id: 'gram-410',
    type: 'grammar',
    content: 'The construction project is expected _____ in the spring.',
    choices: ['to begin', 'beginning', 'begun', 'begins'],
    answer: 'to begin',
    explanation:
      'be expected to do は「〜すると予想されている」という定型表現です。',
  },
  {
    id: 'gram-411',
    type: 'grammar',
    content:
      'The updated guidelines will be sent _____ all team members shortly.',
    choices: ['to', 'for', 'at', 'by'],
    answer: 'to',
    explanation:
      'send something to someone（〜に〜を送る）という動詞の用法です。',
  },
  {
    id: 'gram-412',
    type: 'grammar',
    content: 'The director was _____ with the level of detail in the proposal.',
    choices: ['impressed', 'impressing', 'impression', 'impress'],
    answer: 'impressed',
    explanation: 'be impressed with は「〜に感銘を受ける」という定型表現です。',
  },
  {
    id: 'gram-413',
    type: 'grammar',
    content:
      'The company _____ considerable progress in reducing its carbon footprint.',
    choices: ['has made', 'has done', 'has taken', 'has achieved'],
    answer: 'has made',
    explanation:
      'make progress は「進歩する」という定型表現です。has made（現在完了）が正解です。',
  },
  {
    id: 'gram-414',
    type: 'grammar',
    content:
      'The assistant _____ her manager with scheduling and correspondence.',
    choices: ['assists', 'assist', 'assisting', 'assistance'],
    answer: 'assists',
    explanation:
      '主語 The assistant（単数）に対して現在形 assists が正解です。',
  },
  {
    id: 'gram-415',
    type: 'grammar',
    content:
      'Employees are entitled _____ three weeks of paid vacation per year.',
    choices: ['to', 'for', 'in', 'with'],
    answer: 'to',
    explanation:
      'be entitled to は「〜を受ける権利がある」という定型表現です。',
  },
  {
    id: 'gram-416',
    type: 'grammar',
    content: 'The sales data was compiled _____ a variety of sources.',
    choices: ['from', 'by', 'with', 'of'],
    answer: 'from',
    explanation: 'compile from は「〜から集める・まとめる」という表現です。',
  },
  {
    id: 'gram-417',
    type: 'grammar',
    content: 'The new product line was launched _____ than expected.',
    choices: ['earlier', 'earliest', 'early', 'more early'],
    answer: 'earlier',
    explanation:
      '比較級の副詞 earlier（より早く）が正解です。than と組み合わせて使います。',
  },
  {
    id: 'gram-418',
    type: 'grammar',
    content:
      'The company is _____ to making a positive difference in the community.',
    choices: ['dedicated', 'dedicating', 'dedicate', 'dedication'],
    answer: 'dedicated',
    explanation:
      'be dedicated to は「〜に専念している・〜に取り組んでいる」という定型表現です。',
  },
  {
    id: 'gram-419',
    type: 'grammar',
    content: 'Please read the attached memo _____ attending the briefing.',
    choices: ['before', 'prior', 'ahead', 'in front of'],
    answer: 'before',
    explanation:
      'before は接続詞・前置詞として「〜の前に」という意味です。before attending（参加する前に）。',
  },
  {
    id: 'gram-420',
    type: 'grammar',
    content:
      '_____ the survey results are analyzed, a report will be prepared.',
    choices: ['Once', 'Since', 'Although', 'Whereas'],
    answer: 'Once',
    explanation:
      'Once は「〜したらすぐに」という接続詞で、条件成立後の行動を表します。',
  },
  {
    id: 'gram-421',
    type: 'grammar',
    content:
      'The management team held a _____ meeting to address the urgent issue.',
    choices: ['special', 'specially', 'specialty', 'specialize'],
    answer: 'special',
    explanation:
      '名詞 meeting を修飾するので形容詞 special（特別な）が正解です。',
  },
  {
    id: 'gram-422',
    type: 'grammar',
    content: 'The manager praised the team _____ their outstanding results.',
    choices: ['for', 'on', 'about', 'with'],
    answer: 'for',
    explanation:
      'praise someone for〜 は「〜のことで〜を称賛する」という表現です。',
  },
  {
    id: 'gram-423',
    type: 'grammar',
    content: 'The conference registration fee _____ accommodation and meals.',
    choices: ['includes', 'including', 'included', 'inclusion'],
    answer: 'includes',
    explanation: '主語 fee（単数）に対して現在形 includes が正解です。',
  },
  {
    id: 'gram-424',
    type: 'grammar',
    content: 'The contract will be valid _____ both parties sign it.',
    choices: ['once', 'while', 'unless', 'since'],
    answer: 'once',
    explanation: 'once は「〜したら・〜次第」という条件の接続詞です。',
  },
  {
    id: 'gram-425',
    type: 'grammar',
    content: 'The company _____ great importance to employee well-being.',
    choices: ['attaches', 'gives', 'places', 'puts'],
    answer: 'attaches',
    explanation:
      'attach importance to は「〜を重要視する」という定型表現です。',
  },
  {
    id: 'gram-426',
    type: 'grammar',
    content:
      'The board approved the merger, _____ the legal team had raised concerns.',
    choices: ['even though', 'because', 'provided that', 'as long as'],
    answer: 'even though',
    explanation:
      'even though は「〜であるにもかかわらず」という強い逆接の接続詞です。',
  },
  {
    id: 'gram-427',
    type: 'grammar',
    content:
      'The training materials are available _____ download on the intranet.',
    choices: ['for', 'to', 'in', 'at'],
    answer: 'for',
    explanation:
      'available for download は「ダウンロード可能」という定型表現です。',
  },
  {
    id: 'gram-428',
    type: 'grammar',
    content:
      'Participation in the wellness program is _____ but strongly encouraged.',
    choices: ['voluntary', 'voluntarily', 'volunteer', 'voluntariness'],
    answer: 'voluntary',
    explanation: 'be動詞の補語として形容詞 voluntary（自発的な）が正解です。',
  },
  {
    id: 'gram-429',
    type: 'grammar',
    content:
      'The company has been _____ market leadership for more than a decade.',
    choices: ['maintaining', 'maintained', 'maintain', 'maintenance'],
    answer: 'maintaining',
    explanation:
      '現在完了進行形 has been maintaining（維持し続けている）が正解です。',
  },
  {
    id: 'gram-430',
    type: 'grammar',
    content: 'The manager _____ employees to take initiative on new projects.',
    choices: ['encourages', 'encouraging', 'encouragement', 'encouraged'],
    answer: 'encourages',
    explanation:
      '主語 The manager（単数）に対して現在形 encourages が正解です。',
  },
  {
    id: 'gram-431',
    type: 'grammar',
    content:
      'Our product warranty is _____ for a period of two years from purchase.',
    choices: ['valid', 'validity', 'validate', 'validly'],
    answer: 'valid',
    explanation:
      'be valid for〜 は「〜の期間有効である」という表現です。形容詞 valid が正解です。',
  },
  {
    id: 'gram-432',
    type: 'grammar',
    content:
      '_____ the benefits package, the company also offers flexible working hours.',
    choices: ['In addition to', 'Apart to', 'Beside', 'Furthermore'],
    answer: 'In addition to',
    explanation:
      'in addition to は「〜に加えて」という前置詞句です。後には名詞または動名詞が続きます。',
  },
  {
    id: 'gram-433',
    type: 'grammar',
    content: 'The price reduction has _____ a surge in customer demand.',
    choices: ['triggered', 'trigger', 'triggering', 'triggers'],
    answer: 'triggered',
    explanation: '現在完了形 has triggered（引き起こした）が正解です。',
  },
  {
    id: 'gram-434',
    type: 'grammar',
    content:
      'The team leader made _____ that all deadlines were clearly communicated.',
    choices: ['sure', 'certain', 'clear', 'aware'],
    answer: 'sure',
    explanation: 'make sure that〜 は「〜を確実にする」という定型表現です。',
  },
  {
    id: 'gram-435',
    type: 'grammar',
    content: 'The policy is in _____ with international safety standards.',
    choices: ['compliance', 'compliant', 'comply', 'complying'],
    answer: 'compliance',
    explanation:
      'in compliance with は「〜に従って・〜に準拠して」という定型表現です。',
  },
  {
    id: 'gram-436',
    type: 'grammar',
    content:
      'Customer _____ scores have improved significantly over the past year.',
    choices: ['satisfaction', 'satisfying', 'satisfied', 'satisfy'],
    answer: 'satisfaction',
    explanation:
      '複合名詞 customer satisfaction scores（顧客満足度スコア）の形で名詞 satisfaction が正解です。',
  },
  {
    id: 'gram-437',
    type: 'grammar',
    content: 'The conference room _____ to accommodate up to 30 participants.',
    choices: ['is designed', 'designs', 'designed', 'is designing'],
    answer: 'is designed',
    explanation:
      'is designed to do は「〜するように設計されている」という定型表現です。',
  },
  {
    id: 'gram-438',
    type: 'grammar',
    content:
      'The company is _____ in its commitment to delivering quality service.',
    choices: ['unwavering', 'wavering', 'unwaveringly', 'waver'],
    answer: 'unwavering',
    explanation:
      'be動詞の後に補語として形容詞 unwavering（揺るぎない）が正解です。',
  },
  {
    id: 'gram-439',
    type: 'grammar',
    content: 'The new software _____ all previous versions in terms of speed.',
    choices: ['outperforms', 'overperforms', 'outperformed', 'outperforming'],
    answer: 'outperforms',
    explanation:
      '主語 The new software（単数）に対して現在形 outperforms（上回る）が正解です。',
  },
  {
    id: 'gram-440',
    type: 'grammar',
    content: 'The committee will look _____ the allegations immediately.',
    choices: ['into', 'after', 'over', 'through'],
    answer: 'into',
    explanation: 'look into は「〜を調査する」という句動詞です。',
  },
  {
    id: 'gram-441',
    type: 'grammar',
    content:
      'The CEO was quoted _____ saying the company will double its revenue.',
    choices: ['as', 'for', 'in', 'by'],
    answer: 'as',
    explanation:
      'be quoted as saying〜 は「〜と述べたと引用される」という定型表現です。',
  },
  {
    id: 'gram-442',
    type: 'grammar',
    content:
      'The marketing team worked _____ to launch the campaign before Christmas.',
    choices: ['hard', 'hardly', 'harder', 'hardness'],
    answer: 'hard',
    explanation:
      'work hard は「懸命に働く」という表現で、hard は副詞として使われます。',
  },
  {
    id: 'gram-443',
    type: 'grammar',
    content:
      'The company _____ a long history of innovation in the technology sector.',
    choices: ['boasts', 'boasting', 'boasted', 'boast'],
    answer: 'boasts',
    explanation:
      '主語 The company（単数）に対して現在形 boasts（誇っている）が正解です。',
  },
  {
    id: 'gram-444',
    type: 'grammar',
    content:
      'The intern was _____ responsible for managing the social media accounts.',
    choices: ['primarily', 'primary', 'prime', 'primer'],
    answer: 'primarily',
    explanation:
      '形容詞 responsible を修飾するので副詞 primarily（主に）が正解です。',
  },
  {
    id: 'gram-445',
    type: 'grammar',
    content:
      'The customer _____ about the billing error and was quickly refunded.',
    choices: ['complained', 'complaining', 'complaint', 'complains'],
    answer: 'complained',
    explanation: '過去形 complained（苦情を言った）が正解です。',
  },
  {
    id: 'gram-446',
    type: 'grammar',
    content: 'The project will be executed _____ strict quality standards.',
    choices: [
      'in accordance with',
      'in accordance to',
      'according with',
      'accorded to',
    ],
    answer: 'in accordance with',
    explanation: 'in accordance with は「〜に従って」という定型表現です。',
  },
  {
    id: 'gram-447',
    type: 'grammar',
    content:
      'The operations manager ensured _____ all tasks were completed on time.',
    choices: ['that', 'which', 'if', 'what'],
    answer: 'that',
    explanation: 'ensure that〜 は「〜を確実にする」という定型表現です。',
  },
  {
    id: 'gram-448',
    type: 'grammar',
    content:
      'The company _____ its environmental policy to align with new legislation.',
    choices: ['revised', 'revising', 'revision', 'revise'],
    answer: 'revised',
    explanation: '過去形 revised（改訂した）が正解です。',
  },
  {
    id: 'gram-449',
    type: 'grammar',
    content:
      'The newly appointed director brings _____ experience in global markets.',
    choices: ['extensive', 'extensively', 'extension', 'extend'],
    answer: 'extensive',
    explanation:
      '名詞 experience を修飾するので形容詞 extensive（豊富な）が正解です。',
  },
  {
    id: 'gram-450',
    type: 'grammar',
    content:
      'The proposal was _____ well-received by both clients and management.',
    choices: ['equally', 'equal', 'equalize', 'equals'],
    answer: 'equally',
    explanation:
      '過去分詞 received を修飾するので副詞 equally（等しく）が正解です。',
  },
  {
    id: 'gram-451',
    type: 'grammar',
    content:
      'The company is _____ to all feedback from customers and partners.',
    choices: ['receptive', 'reception', 'receptively', 'receive'],
    answer: 'receptive',
    explanation:
      'be receptive to は「〜を受け入れる姿勢がある」という表現です。形容詞 receptive が正解です。',
  },
  {
    id: 'gram-452',
    type: 'grammar',
    content: 'The delivery _____ to arrive between 9 a.m. and 12 p.m.',
    choices: ['is scheduled', 'scheduled', 'schedules', 'scheduling'],
    answer: 'is scheduled',
    explanation:
      'be scheduled to do は「〜する予定である」という定型表現です。',
  },
  {
    id: 'gram-453',
    type: 'grammar',
    content: 'Employees _____ performance reviews twice a year.',
    choices: ['receive', 'receives', 'receiving', 'received'],
    answer: 'receive',
    explanation: '主語 Employees（複数）に対して現在形 receive が正解です。',
  },
  {
    id: 'gram-454',
    type: 'grammar',
    content:
      'The conference _____ earlier than expected due to technical issues.',
    choices: ['ended', 'ending', 'ends', 'end'],
    answer: 'ended',
    explanation: '過去形 ended（終了した）が正解です。',
  },
  {
    id: 'gram-455',
    type: 'grammar',
    content: 'The CEO _____ an open-door policy throughout his tenure.',
    choices: ['maintained', 'maintaining', 'maintains', 'maintenance'],
    answer: 'maintained',
    explanation:
      '過去形 maintained（維持した）が正解です。throughout his tenure（在任中ずっと）という文脈に合います。',
  },
  {
    id: 'gram-456',
    type: 'grammar',
    content:
      'The proposal is _____ the review stage and will soon be finalized.',
    choices: ['at', 'in', 'on', 'by'],
    answer: 'at',
    explanation:
      'at the review stage（審査段階にある）という表現で at が正解です。',
  },
  {
    id: 'gram-457',
    type: 'grammar',
    content:
      'The new branch will serve _____ 10,000 customers in its first year.',
    choices: ['approximately', 'approximate', 'approximation', 'approximated'],
    answer: 'approximately',
    explanation:
      '数字 10,000 を修飾するので副詞 approximately（約）が正解です。',
  },
  {
    id: 'gram-458',
    type: 'grammar',
    content:
      'The company _____ a strong emphasis on continuous learning and development.',
    choices: ['places', 'puts', 'lays', 'sets'],
    answer: 'places',
    explanation: 'place emphasis on は「〜を重視する」という定型表現です。',
  },
  {
    id: 'gram-459',
    type: 'grammar',
    content: 'The policy applies to all staff, _____ of their seniority level.',
    choices: ['regardless', 'irrespective', 'despite', 'notwithstanding'],
    answer: 'regardless',
    explanation: 'regardless of は「〜にかかわらず」という定型表現です。',
  },
  {
    id: 'gram-460',
    type: 'grammar',
    content:
      'The management team _____ over the strategic direction of the company.',
    choices: ['deliberated', 'deliberating', 'deliberation', 'deliberate'],
    answer: 'deliberated',
    explanation: '過去形 deliberated（熟慮した）が正解です。',
  },
  {
    id: 'gram-461',
    type: 'grammar',
    content: 'The new facility is _____ state-of-the-art equipment throughout.',
    choices: ['fitted with', 'fitting with', 'fit for', 'fits with'],
    answer: 'fitted with',
    explanation: 'be fitted with は「〜が設置されている」という定型表現です。',
  },
  {
    id: 'gram-462',
    type: 'grammar',
    content:
      'The sales figures _____ a 20% increase compared to the previous quarter.',
    choices: ['show', 'shows', 'showing', 'shown'],
    answer: 'show',
    explanation:
      '主語 The sales figures（複数）に対して現在形 show が正解です。',
  },
  {
    id: 'gram-463',
    type: 'grammar',
    content:
      'Please forward all inquiries _____ the customer service department.',
    choices: ['to', 'for', 'at', 'toward'],
    answer: 'to',
    explanation: 'forward something to〜 は「〜に転送する」という表現です。',
  },
  {
    id: 'gram-464',
    type: 'grammar',
    content:
      'The candidates _____ for the position will be contacted next week.',
    choices: ['shortlisted', 'shortlisting', 'shortlist', 'shortlists'],
    answer: 'shortlisted',
    explanation:
      '過去分詞 shortlisted が candidates を後置修飾します。candidates shortlisted for〜（〜に選抜された候補者）。',
  },
  {
    id: 'gram-465',
    type: 'grammar',
    content: 'The new system will eliminate _____ errors in data entry.',
    choices: ['manual', 'manually', 'manualize', 'manuals'],
    answer: 'manual',
    explanation:
      '名詞 errors を修飾するので形容詞 manual（手作業による）が正解です。',
  },
  {
    id: 'gram-466',
    type: 'grammar',
    content:
      'The contract _____ several important clauses that were previously missing.',
    choices: ['includes', 'including', 'included', 'inclusion'],
    answer: 'includes',
    explanation:
      '主語 The contract（単数）に対して現在形 includes が正解です。',
  },
  {
    id: 'gram-467',
    type: 'grammar',
    content: 'The intern is _____ a great job of handling customer inquiries.',
    choices: ['doing', 'making', 'performing', 'accomplishing'],
    answer: 'doing',
    explanation:
      'do a great job of doing は「〜をうまくやっている」という定型表現です。',
  },
  {
    id: 'gram-468',
    type: 'grammar',
    content: 'The workshop _____ skills in project management and leadership.',
    choices: ['covers', 'covering', 'covered', 'coverage'],
    answer: 'covers',
    explanation:
      '主語 The workshop（単数）に対して現在形 covers が正解です。cover（カバーする・扱う）。',
  },
  {
    id: 'gram-469',
    type: 'grammar',
    content:
      'The data _____ in the report is based on a sample of 1,000 customers.',
    choices: ['presented', 'presenting', 'presents', 'present'],
    answer: 'presented',
    explanation:
      '過去分詞 presented が名詞 data を後置修飾します。data presented in the report（報告書に示されたデータ）。',
  },
  {
    id: 'gram-470',
    type: 'grammar',
    content: 'The negotiations _____ after both sides reached a compromise.',
    choices: ['concluded', 'concluding', 'conclusion', 'conclude'],
    answer: 'concluded',
    explanation: '過去形 concluded（終結した）が正解です。',
  },
  {
    id: 'gram-471',
    type: 'grammar',
    content:
      'The HR manager suggested that the training program _____ updated annually.',
    choices: ['be', 'is', 'will be', 'would be'],
    answer: 'be',
    explanation:
      'suggested that〜 の後は仮定法現在（動詞の原形）を使います。受動態なので be updated となります。',
  },
  {
    id: 'gram-472',
    type: 'grammar',
    content:
      'The company _____ the contract after the vendor failed to meet deadlines.',
    choices: ['terminated', 'terminating', 'termination', 'terminates'],
    answer: 'terminated',
    explanation: '過去形 terminated（解約した）が正解です。',
  },
  {
    id: 'gram-473',
    type: 'grammar',
    content:
      'The market analysis _____ that demand for the product is growing.',
    choices: ['suggests', 'suggesting', 'suggested', 'suggestion'],
    answer: 'suggests',
    explanation:
      '主語 The market analysis（単数）に対して現在形 suggests が正解です。',
  },
  {
    id: 'gram-474',
    type: 'grammar',
    content: 'The director has _____ concerns about the project timeline.',
    choices: ['raised', 'risen', 'arose', 'arising'],
    answer: 'raised',
    explanation:
      '現在完了形 has raised（提起した）が正解です。raise concerns（懸念を示す）という表現です。',
  },
  {
    id: 'gram-475',
    type: 'grammar',
    content: 'The lease for the office space _____ next March.',
    choices: ['expires', 'expiring', 'expired', 'expiration'],
    answer: 'expires',
    explanation:
      '主語 The lease（単数）に対して現在形 expires が正解です。次の3月という近い未来を現在形で表しています。',
  },
  {
    id: 'gram-476',
    type: 'grammar',
    content:
      'The board _____ the merger proposal after months of deliberation.',
    choices: ['endorsed', 'endorsing', 'endorsement', 'endorses'],
    answer: 'endorsed',
    explanation: '過去形 endorsed（承認した）が正解です。',
  },
  {
    id: 'gram-477',
    type: 'grammar',
    content: 'The new pricing _____ into effect from the first of next month.',
    choices: ['takes', 'comes', 'goes', 'gets'],
    answer: 'takes',
    explanation:
      'take effect は「効力を発する・施行される」という定型表現です。',
  },
  {
    id: 'gram-478',
    type: 'grammar',
    content: 'The director _____ the new hire with a warm welcome.',
    choices: ['greeted', 'greeting', 'greets', 'greet'],
    answer: 'greeted',
    explanation: '過去形 greeted（迎えた）が正解です。',
  },
  {
    id: 'gram-479',
    type: 'grammar',
    content:
      'The company will hold a _____ review of its strategic objectives.',
    choices: [
      'comprehensive',
      'comprehensively',
      'comprehend',
      'comprehension',
    ],
    answer: 'comprehensive',
    explanation:
      '名詞 review を修飾するので形容詞 comprehensive（包括的な）が正解です。',
  },
  {
    id: 'gram-480',
    type: 'grammar',
    content:
      'The job posting _____ on the company website and major job boards.',
    choices: ['appeared', 'appearing', 'appears', 'appearance'],
    answer: 'appeared',
    explanation: '過去形 appeared（掲載された）が正解です。',
  },
  {
    id: 'gram-481',
    type: 'grammar',
    content:
      'Employees who _____ outstanding results will be eligible for a bonus.',
    choices: ['deliver', 'delivers', 'delivered', 'delivering'],
    answer: 'deliver',
    explanation:
      '関係詞節内の動詞として現在形 deliver が正解です。who deliver outstanding results（優れた成果を出した）。',
  },
  {
    id: 'gram-482',
    type: 'grammar',
    content:
      'The company _____ strong ties with the local community for decades.',
    choices: ['has maintained', 'maintained', 'maintains', 'is maintaining'],
    answer: 'has maintained',
    explanation:
      'for decades（数十年間）という継続期間があるので現在完了形 has maintained が正解です。',
  },
  {
    id: 'gram-483',
    type: 'grammar',
    content:
      'The committee _____ the applications and will announce its decision next week.',
    choices: ['has reviewed', 'reviewing', 'reviews', 'reviewed'],
    answer: 'has reviewed',
    explanation:
      '現在完了形 has reviewed（審査した）が正解です。その結果（will announce）につながります。',
  },
  {
    id: 'gram-484',
    type: 'grammar',
    content: 'The office is _____ accessible to people with disabilities.',
    choices: ['fully', 'full', 'fullness', 'fulfillment'],
    answer: 'fully',
    explanation:
      '形容詞 accessible を修飾するので副詞 fully（完全に）が正解です。',
  },
  {
    id: 'gram-485',
    type: 'grammar',
    content:
      'The new employee was assigned _____ the accounts receivable team.',
    choices: ['to', 'for', 'at', 'in'],
    answer: 'to',
    explanation: 'be assigned to は「〜に配属される」という定型表現です。',
  },
  {
    id: 'gram-486',
    type: 'grammar',
    content:
      'All policies are _____ review on an annual basis to ensure relevance.',
    choices: ['subject to', 'subjected', 'subjected to', 'under'],
    answer: 'subject to',
    explanation:
      'be subject to は「〜の対象である・〜を受ける可能性がある」という定型表現です。',
  },
  {
    id: 'gram-487',
    type: 'grammar',
    content:
      'The project team _____ regular progress meetings throughout the development phase.',
    choices: ['held', 'holding', 'holds', 'hold'],
    answer: 'held',
    explanation:
      '過去形 held（開催した）が正解です。throughout the development phase（開発フェーズ全体で）という過去の期間を示す表現があります。',
  },
  {
    id: 'gram-488',
    type: 'grammar',
    content:
      'The new regulation will have a _____ impact on the manufacturing industry.',
    choices: ['significant', 'significantly', 'significance', 'signify'],
    answer: 'significant',
    explanation:
      '名詞 impact を修飾するので形容詞 significant（重大な）が正解です。',
  },
  {
    id: 'gram-489',
    type: 'grammar',
    content:
      'The company has _____ significant investments in renewable energy.',
    choices: ['made', 'done', 'taken', 'set'],
    answer: 'made',
    explanation:
      'make investments は「投資をする」という定型表現です。has made（現在完了）が正解です。',
  },
  {
    id: 'gram-490',
    type: 'grammar',
    content:
      'The revised proposal _____ approval from all three committee members.',
    choices: ['received', 'receiving', 'receives', 'receipt'],
    answer: 'received',
    explanation: '過去形 received（受け取った・得た）が正解です。',
  },
  {
    id: 'gram-491',
    type: 'grammar',
    content:
      'The staff are _____ to take advantage of the flexible work arrangements.',
    choices: ['free', 'freed', 'freely', 'freedom'],
    answer: 'free',
    explanation:
      'be free to do は「自由に〜できる」という定型表現です。形容詞 free が正解です。',
  },
  {
    id: 'gram-492',
    type: 'grammar',
    content:
      'The company is _____ to comply with all environmental regulations.',
    choices: ['committed', 'committing', 'commitment', 'commits'],
    answer: 'committed',
    explanation:
      'be committed to doing は「〜することに専念している」という定型表現です。',
  },
  {
    id: 'gram-493',
    type: 'grammar',
    content:
      'The internship program is open _____ recent graduates from any field.',
    choices: ['to', 'for', 'at', 'with'],
    answer: 'to',
    explanation:
      'be open to は「〜に開かれている・〜が参加できる」という表現です。',
  },
  {
    id: 'gram-494',
    type: 'grammar',
    content: 'The manager _____ the team to prepare a detailed action plan.',
    choices: ['instructed', 'instructing', 'instruction', 'instructs'],
    answer: 'instructed',
    explanation:
      '過去形 instructed（指示した）が正解です。instruct + 目的語 + to不定詞 の形をとります。',
  },
  {
    id: 'gram-495',
    type: 'grammar',
    content:
      'The company has been _____ its product portfolio to meet diverse needs.',
    choices: ['diversifying', 'diversified', 'diversify', 'diversification'],
    answer: 'diversifying',
    explanation:
      '現在完了進行形 has been diversifying（多様化し続けている）が正解です。',
  },
  {
    id: 'gram-496',
    type: 'grammar',
    content: 'The company _____ its three-year expansion plan last quarter.',
    choices: ['completed', 'completing', 'completion', 'completes'],
    answer: 'completed',
    explanation: '過去形 completed（完了した）が正解です。',
  },
  {
    id: 'gram-497',
    type: 'grammar',
    content:
      'The manager was _____ to have such a dedicated and talented team.',
    choices: ['fortunate', 'fortunately', 'fortune', 'fortuned'],
    answer: 'fortunate',
    explanation:
      'be fortunate to do は「〜できて幸運だ」という表現です。形容詞 fortunate が正解です。',
  },
  {
    id: 'gram-498',
    type: 'grammar',
    content:
      'The candidate _____ fluent in three languages was selected for the role.',
    choices: ['who was', 'whose', 'which was', 'whom was'],
    answer: 'who was',
    explanation:
      '先行詞 The candidate（人）に対して関係代名詞 who が正解です。',
  },
  {
    id: 'gram-499',
    type: 'grammar',
    content:
      'The new policy is intended _____ improve productivity across all departments.',
    choices: ['to', 'for', 'in order', 'so as'],
    answer: 'to',
    explanation:
      'be intended to do は「〜することを目的としている」という定型表現です。',
  },
  {
    id: 'gram-500',
    type: 'grammar',
    content:
      'The director was _____ about the upcoming changes to the organizational structure.',
    choices: ['transparent', 'transparently', 'transparency', 'transparence'],
    answer: 'transparent',
    explanation:
      'be transparent about は「〜について透明性がある・正直である」という表現です。形容詞 transparent が正解です。',
  },
  {
    id: 'gram-501',
    type: 'grammar',
    content:
      'The company offers _____ relocation assistance to new hires from other cities.',
    choices: ['generous', 'generously', 'generosity', 'generousness'],
    answer: 'generous',
    explanation:
      '名詞 assistance を修飾するので形容詞 generous（手厚い）が正解です。',
  },
  {
    id: 'gram-502',
    type: 'grammar',
    content:
      'The job description clearly _____ the responsibilities and qualifications required.',
    choices: ['outlines', 'outlining', 'outlined', 'outlinement'],
    answer: 'outlines',
    explanation:
      '主語 The job description（単数）に対して現在形 outlines が正解です。',
  },
  {
    id: 'gram-503',
    type: 'grammar',
    content: 'By the time the CEO arrived, the team _____ the presentation.',
    choices: [
      'had already finished',
      'already finished',
      'has already finished',
      'was finishing',
    ],
    answer: 'had already finished',
    explanation:
      'by the time〜 という基準点の前に完了した出来事を表す過去完了形 had finished が正解です。',
  },
  {
    id: 'gram-504',
    type: 'grammar',
    content:
      'The success of the campaign _____ on effective coordination between departments.',
    choices: ['depends', 'depending', 'depended', 'dependence'],
    answer: 'depends',
    explanation:
      '主語 The success（単数）に対して現在形 depends が正解です。depend on は「〜次第だ」という表現です。',
  },
  {
    id: 'gram-505',
    type: 'grammar',
    content:
      'The company will be _____ a new line of eco-friendly products next spring.',
    choices: ['launching', 'launched', 'launch', 'launches'],
    answer: 'launching',
    explanation: '未来進行形 will be launching（発売する予定）が正解です。',
  },
  {
    id: 'gram-506',
    type: 'grammar',
    content:
      'The project _____ significantly from the additional resources provided.',
    choices: ['benefited', 'benefiting', 'benefits', 'benefit'],
    answer: 'benefited',
    explanation:
      '過去形 benefited（恩恵を受けた）が正解です。benefit from（〜から恩恵を受ける）という表現です。',
  },
  {
    id: 'gram-507',
    type: 'grammar',
    content:
      'The position requires _____ with both technical and business teams.',
    choices: ['collaboration', 'collaborating', 'collaborate', 'collaborative'],
    answer: 'collaboration',
    explanation:
      '他動詞 requires の目的語として名詞 collaboration（協業）が正解です。require は名詞または動名詞を目的語に取ります。',
  },
  {
    id: 'gram-508',
    type: 'grammar',
    content:
      'The plant manager ensured that all workers _____ the proper safety gear.',
    choices: ['wore', 'wear', 'wearing', 'worn'],
    answer: 'wore',
    explanation:
      '間接目的語節の時制は主節に合わせます。ensured that〜 の後に過去形 wore（着用していた）が正解です。',
  },
  {
    id: 'gram-509',
    type: 'grammar',
    content:
      'The company is seeking individuals _____ a passion for customer service.',
    choices: ['with', 'who have', 'having', 'that has'],
    answer: 'with',
    explanation:
      'with a passion for〜（〜への情熱を持つ）という前置詞句が名詞 individuals を後置修飾します。',
  },
  {
    id: 'gram-510',
    type: 'grammar',
    content:
      'The company has _____ its commitment to reducing carbon emissions by 2030.',
    choices: ['reaffirmed', 'reaffirming', 'reaffirm', 'reaffirmation'],
    answer: 'reaffirmed',
    explanation: '現在完了形 has reaffirmed（再確認した）が正解です。',
  },
  {
    id: 'gram-511',
    type: 'grammar',
    content:
      'The shipment _____ customs clearance and will be delivered tomorrow.',
    choices: ['has cleared', 'cleared', 'is clearing', 'was cleared'],
    answer: 'has cleared',
    explanation:
      '現在完了形 has cleared（通関した）が正解です。その結果（will be delivered）につながります。',
  },
  {
    id: 'gram-512',
    type: 'grammar',
    content: 'The staff handbook _____ all company policies and procedures.',
    choices: ['covers', 'covering', 'is covered', 'coverage'],
    answer: 'covers',
    explanation:
      '主語 The staff handbook（単数）に対して現在形 covers（網羅している）が正解です。',
  },
  {
    id: 'gram-513',
    type: 'grammar',
    content:
      'The proposal _____ to reduce staffing levels was met with opposition.',
    choices: ['to', 'for', 'aimed at', 'intended to'],
    answer: 'to',
    explanation:
      'to不定詞句 to reduce staffing levels が名詞 The proposal を修飾します。',
  },
  {
    id: 'gram-514',
    type: 'grammar',
    content:
      'The seminar is designed _____ professionals at all levels of experience.',
    choices: ['for', 'to', 'at', 'with'],
    answer: 'for',
    explanation: 'be designed for は「〜向けに設計されている」という表現です。',
  },
  {
    id: 'gram-515',
    type: 'grammar',
    content:
      'The committee met _____ reach a consensus on the proposed changes.',
    choices: ['to', 'in order to', 'so as to', 'for'],
    answer: 'to',
    explanation:
      '目的を表す to不定詞の副詞的用法です。met to reach（〜に達するために会合した）。',
  },
  {
    id: 'gram-516',
    type: 'grammar',
    content:
      'The technician _____ the equipment before the presentation began.',
    choices: ['checked', 'checking', 'checks', 'check'],
    answer: 'checked',
    explanation:
      '過去形 checked（確認した）が正解です。before the presentation began（発表が始まる前に）という過去の状況を示します。',
  },
  {
    id: 'gram-517',
    type: 'grammar',
    content:
      'The company provides _____ support to new hires during their onboarding period.',
    choices: ['extensive', 'extensively', 'extension', 'extent'],
    answer: 'extensive',
    explanation:
      '名詞 support を修飾するので形容詞 extensive（手厚い）が正解です。',
  },
  {
    id: 'gram-518',
    type: 'grammar',
    content: 'All suggestions for improvement are _____ encouraged.',
    choices: ['warmly', 'warm', 'warmth', 'warming'],
    answer: 'warmly',
    explanation:
      '過去分詞 encouraged を修飾するので副詞 warmly（温かく）が正解です。',
  },
  {
    id: 'gram-519',
    type: 'grammar',
    content:
      'The product will be discontinued _____ the end of this fiscal year.',
    choices: ['by', 'until', 'at', 'in'],
    answer: 'by',
    explanation:
      'by は「〜までに」という期限を表します。by the end of this fiscal year（今期末までに）。',
  },
  {
    id: 'gram-520',
    type: 'grammar',
    content:
      'The company _____ that customer data is handled with the utmost care.',
    choices: ['ensures', 'ensuring', 'ensured', 'ensurance'],
    answer: 'ensures',
    explanation:
      '主語 The company（単数）に対して現在形 ensures が正解です。ensure that〜（〜を確実にする）。',
  },
  {
    id: 'gram-521',
    type: 'grammar',
    content: 'The team has been working _____ on the quarterly report.',
    choices: [
      'collaboratively',
      'collaborative',
      'collaboration',
      'collaborate',
    ],
    answer: 'collaboratively',
    explanation:
      '動詞句 has been working を修飾するので副詞 collaboratively（協力して）が正解です。',
  },
  {
    id: 'gram-522',
    type: 'grammar',
    content:
      'The audit results revealed _____ improvements in financial controls.',
    choices: ['significant', 'significantly', 'significance', 'signify'],
    answer: 'significant',
    explanation:
      '名詞 improvements を修飾するので形容詞 significant（著しい）が正解です。',
  },
  {
    id: 'gram-523',
    type: 'grammar',
    content:
      'The company _____ to provide a safe and inclusive work environment.',
    choices: ['strives', 'striving', 'strived', 'strife'],
    answer: 'strives',
    explanation:
      '主語 The company（単数）に対して現在形 strives が正解です。strive to do（〜しようと努力する）。',
  },
  {
    id: 'gram-524',
    type: 'grammar',
    content:
      'The presentation was so _____ that the audience applauded enthusiastically.',
    choices: ['compelling', 'compelled', 'compel', 'compellingly'],
    answer: 'compelling',
    explanation:
      'so の後に形容詞が来て「非常に〜な」という意味になります。compelling（説得力のある・魅力的な）が正解です。',
  },
  {
    id: 'gram-525',
    type: 'grammar',
    content: 'The staff handbook is _____ upon request from the HR department.',
    choices: ['available', 'availability', 'availably', 'availing'],
    answer: 'available',
    explanation:
      'be available upon request（要望に応じて入手可能）という定型表現で形容詞 available が正解です。',
  },
  {
    id: 'gram-526',
    type: 'grammar',
    content: 'The company _____ a new policy to address workplace harassment.',
    choices: ['implemented', 'implementing', 'implements', 'implementation'],
    answer: 'implemented',
    explanation: '過去形 implemented（実施した）が正解です。',
  },
  {
    id: 'gram-527',
    type: 'grammar',
    content:
      'The manager requested that the team _____ the report by Thursday.',
    choices: ['complete', 'completes', 'completed', 'completing'],
    answer: 'complete',
    explanation: 'requested that〜 の後は仮定法現在（動詞の原形）を使います。',
  },
  {
    id: 'gram-528',
    type: 'grammar',
    content:
      'The board of directors _____ an emergency meeting to discuss the crisis.',
    choices: ['convened', 'convening', 'convenes', 'convene'],
    answer: 'convened',
    explanation: '過去形 convened（招集した）が正解です。',
  },
  {
    id: 'gram-529',
    type: 'grammar',
    content:
      'The team lead _____ the project efficiently despite having limited resources.',
    choices: ['managed', 'managing', 'manages', 'management'],
    answer: 'managed',
    explanation:
      '過去形 managed（管理した）が正解です。manage the project（プロジェクトを管理する）。',
  },
  {
    id: 'gram-530',
    type: 'grammar',
    content:
      'Employees who _____ five years with the company are eligible for additional benefits.',
    choices: ['have completed', 'completing', 'completes', 'completed'],
    answer: 'have completed',
    explanation: '関係詞節内で継続を表す現在完了形 have completed が正解です。',
  },
  {
    id: 'gram-531',
    type: 'grammar',
    content: 'The agreement _____ that both parties share the costs equally.',
    choices: ['stipulates', 'stipulating', 'stipulated', 'stipulation'],
    answer: 'stipulates',
    explanation:
      '主語 The agreement（単数）に対して現在形 stipulates（定めている）が正解です。',
  },
  {
    id: 'gram-532',
    type: 'grammar',
    content:
      'The architect presented a _____ design for the new corporate campus.',
    choices: ['detailed', 'detailing', 'detail', 'details'],
    answer: 'detailed',
    explanation:
      '名詞 design を修飾するので形容詞 detailed（詳細な）が正解です。',
  },
  {
    id: 'gram-533',
    type: 'grammar',
    content:
      'The consultant _____ several recommendations to improve efficiency.',
    choices: ['offered', 'offering', 'offers', 'offer'],
    answer: 'offered',
    explanation: '過去形 offered（提案した）が正解です。',
  },
  {
    id: 'gram-534',
    type: 'grammar',
    content: 'The new equipment is _____ with the existing infrastructure.',
    choices: ['compatible', 'compatibility', 'compatibly', 'compatible to'],
    answer: 'compatible',
    explanation:
      'be compatible with は「〜と互換性がある」という定型表現です。形容詞 compatible が正解です。',
  },
  {
    id: 'gram-535',
    type: 'grammar',
    content:
      'The CEO gave a speech _____ the importance of innovation and adaptability.',
    choices: ['highlighting', 'highlight', 'highlighted', 'highlights'],
    answer: 'highlighting',
    explanation:
      '現在分詞 highlighting が前の名詞節に付加して「〜を強調しながら」という分詞構文です。',
  },
  {
    id: 'gram-536',
    type: 'grammar',
    content: 'The product met all _____ requirements for safety certification.',
    choices: ['necessary', 'necessarily', 'necessity', 'necessitate'],
    answer: 'necessary',
    explanation:
      '名詞 requirements を修飾するので形容詞 necessary（必要な）が正解です。',
  },
  {
    id: 'gram-537',
    type: 'grammar',
    content:
      'The company _____ its headquarters from London to Singapore last year.',
    choices: ['relocated', 'relocating', 'relocation', 'relocates'],
    answer: 'relocated',
    explanation:
      '過去形 relocated（移転した）が正解です。last year という過去の時点が示されています。',
  },
  {
    id: 'gram-538',
    type: 'grammar',
    content:
      'The financial year _____ on March 31st for most companies in Japan.',
    choices: ['ends', 'ending', 'ended', 'end'],
    answer: 'ends',
    explanation:
      '一般的な事実を述べているので現在形 ends が正解です。主語 The financial year（単数）に合わせます。',
  },
  {
    id: 'gram-539',
    type: 'grammar',
    content: 'The branch office _____ 50 full-time and 20 part-time employees.',
    choices: ['employs', 'employed', 'employing', 'employment'],
    answer: 'employs',
    explanation:
      '主語 The branch office（単数）に対して現在形 employs（雇用している）が正解です。',
  },
  {
    id: 'gram-540',
    type: 'grammar',
    content:
      'The research team presented its _____ at the international symposium.',
    choices: ['findings', 'finding', 'found', 'founds'],
    answer: 'findings',
    explanation:
      '所有格 its の後に名詞が来ます。findings（調査結果）は通常複数形で使います。',
  },
  {
    id: 'gram-541',
    type: 'grammar',
    content:
      'The company _____ all reasonable accommodations for employees with disabilities.',
    choices: ['provides', 'providing', 'provided', 'provision'],
    answer: 'provides',
    explanation: '主語 The company（単数）に対して現在形 provides が正解です。',
  },
  {
    id: 'gram-542',
    type: 'grammar',
    content:
      'The manager _____ the team on the new expense reporting procedures.',
    choices: ['briefed', 'briefing', 'briefs', 'brief'],
    answer: 'briefed',
    explanation:
      '過去形 briefed（説明した）が正解です。brief someone on〜（〜について〜に説明する）。',
  },
  {
    id: 'gram-543',
    type: 'grammar',
    content:
      'The operations team is responsible _____ ensuring timely delivery.',
    choices: ['for', 'of', 'in', 'with'],
    answer: 'for',
    explanation:
      'be responsible for doing は「〜することに責任がある」という定型表現です。',
  },
  {
    id: 'gram-544',
    type: 'grammar',
    content:
      'The company _____ the industry standard for customer response time.',
    choices: ['has set', 'set', 'setting', 'sets'],
    answer: 'has set',
    explanation:
      '現在完了形 has set（設定した）が正解です。現時点での状況につながります。',
  },
  {
    id: 'gram-545',
    type: 'grammar',
    content:
      'The project will proceed _____ we receive confirmation from the client.',
    choices: ['once', 'while', 'although', 'whenever'],
    answer: 'once',
    explanation:
      'once は「〜したらすぐに」という接続詞で条件の充足を表します。',
  },
  {
    id: 'gram-546',
    type: 'grammar',
    content: 'The contractor is _____ with all local building regulations.',
    choices: ['familiar', 'familiarity', 'familiarly', 'familiarize'],
    answer: 'familiar',
    explanation:
      'be familiar with は「〜をよく知っている」という定型表現です。形容詞 familiar が正解です。',
  },
  {
    id: 'gram-547',
    type: 'grammar',
    content:
      "The CEO expressed confidence _____ the company's ability to meet its targets.",
    choices: ['in', 'about', 'with', 'on'],
    answer: 'in',
    explanation:
      'express confidence in は「〜に対して信頼を示す」という定型表現です。',
  },
  {
    id: 'gram-548',
    type: 'grammar',
    content:
      'The analyst _____ that consumer confidence would rise in the second half.',
    choices: ['predicted', 'predicting', 'predicts', 'prediction'],
    answer: 'predicted',
    explanation: '過去形 predicted（予測した）が正解です。',
  },
  {
    id: 'gram-549',
    type: 'grammar',
    content:
      'The meeting room will be available _____ 2 p.m. and 4 p.m. tomorrow.',
    choices: ['between', 'from', 'during', 'within'],
    answer: 'between',
    explanation:
      'between A and B で「AとBの間に」という意味です。between 2 p.m. and 4 p.m.（午後2時から4時の間）。',
  },
  {
    id: 'gram-550',
    type: 'grammar',
    content:
      'The event was held _____ raise awareness of mental health in the workplace.',
    choices: ['to', 'for', 'in order', 'so that'],
    answer: 'to',
    explanation:
      '目的を表す to不定詞の副詞的用法です。held to raise awareness（意識を高めるために開催された）。',
  },
  {
    id: 'gram-551',
    type: 'grammar',
    content:
      "The team's _____ approach to problem-solving impressed the client.",
    choices: ['innovative', 'innovatively', 'innovation', 'innovate'],
    answer: 'innovative',
    explanation:
      '名詞 approach を修飾するので形容詞 innovative（革新的な）が正解です。',
  },
  {
    id: 'gram-552',
    type: 'grammar',
    content: 'The manager _____ a clear agenda before the meeting started.',
    choices: ['set', 'setting', 'sets', 'has set'],
    answer: 'set',
    explanation:
      '過去形 set（設定した）が正解です。before the meeting started という過去の時制に合わせます。',
  },
  {
    id: 'gram-553',
    type: 'grammar',
    content:
      'The team worked _____ to ensure the product launch went smoothly.',
    choices: ['efficiently', 'efficient', 'efficiency', 'efficiencies'],
    answer: 'efficiently',
    explanation:
      '動詞 worked を修飾するので副詞 efficiently（効率的に）が正解です。',
  },
  {
    id: 'gram-554',
    type: 'grammar',
    content:
      'The proposal _____ the executive team will be evaluated carefully.',
    choices: ['submitted by', 'submitting by', 'submitted to', 'submitting to'],
    answer: 'submitted by',
    explanation:
      '過去分詞句 submitted by〜 が名詞 The proposal を後置修飾します。submitted by the executive team（経営チームが提出した）。',
  },
  {
    id: 'gram-555',
    type: 'grammar',
    content:
      'The application process consists _____ three stages: a written test, group discussion, and interview.',
    choices: ['of', 'in', 'from', 'with'],
    answer: 'of',
    explanation: 'consist of は「〜で構成されている」という定型表現です。',
  },
  {
    id: 'gram-556',
    type: 'grammar',
    content:
      'The company invested _____ in training programs for new employees.',
    choices: ['heavily', 'heavy', 'heaviness', 'heavier'],
    answer: 'heavily',
    explanation:
      '動詞 invested を修飾するので副詞 heavily（多大に）が正解です。invest heavily in〜（〜に多大な投資をする）。',
  },
  {
    id: 'gram-557',
    type: 'grammar',
    content:
      'The IT department is responsible _____ maintaining all computer systems.',
    choices: ['for', 'of', 'in', 'to'],
    answer: 'for',
    explanation:
      'be responsible for doing は「〜することに責任がある」という定型表現です。',
  },
  {
    id: 'gram-558',
    type: 'grammar',
    content:
      'The company will offer _____ packages to attract and retain top talent.',
    choices: ['competitive', 'competitively', 'competition', 'compete'],
    answer: 'competitive',
    explanation:
      '名詞 packages を修飾するので形容詞 competitive（競争力のある）が正解です。',
  },
  {
    id: 'gram-559',
    type: 'grammar',
    content:
      'The CEO _____ her support for the new initiative at the town hall.',
    choices: ['expressed', 'expressing', 'expression', 'expresses'],
    answer: 'expressed',
    explanation:
      '過去形 expressed（表明した）が正解です。express support for〜（〜への支持を表明する）。',
  },
  {
    id: 'gram-560',
    type: 'grammar',
    content:
      'The department is tasked _____ improving the customer onboarding experience.',
    choices: ['with', 'to', 'for', 'at'],
    answer: 'with',
    explanation:
      'be tasked with doing は「〜することを任される」という定型表現です。',
  },
  {
    id: 'gram-561',
    type: 'grammar',
    content: 'The quarterly bonus is _____ on individual and team performance.',
    choices: ['based', 'basing', 'basis', 'base'],
    answer: 'based',
    explanation:
      'be based on は「〜に基づいている」という定型表現です。過去分詞 based が正解です。',
  },
  {
    id: 'gram-562',
    type: 'grammar',
    content:
      'The company provided _____ assistance to employees affected by the layoffs.',
    choices: ['financial', 'financially', 'finance', 'finances'],
    answer: 'financial',
    explanation:
      '名詞 assistance を修飾するので形容詞 financial（財政的な）が正解です。',
  },
  {
    id: 'gram-563',
    type: 'grammar',
    content:
      'The assistant was _____ responsible for scheduling and travel arrangements.',
    choices: ['mainly', 'main', 'mostly', 'majority'],
    answer: 'mainly',
    explanation:
      '形容詞 responsible を修飾するので副詞 mainly（主に）が正解です。',
  },
  {
    id: 'gram-564',
    type: 'grammar',
    content:
      'The team leader _____ that the project was progressing as planned.',
    choices: ['confirmed', 'confirming', 'confirms', 'confirmation'],
    answer: 'confirmed',
    explanation: '過去形 confirmed（確認した）が正解です。',
  },
  {
    id: 'gram-565',
    type: 'grammar',
    content:
      'The report _____ a comprehensive overview of the current market landscape.',
    choices: ['provides', 'providing', 'provided', 'provision'],
    answer: 'provides',
    explanation: '主語 The report（単数）に対して現在形 provides が正解です。',
  },
  {
    id: 'gram-566',
    type: 'grammar',
    content: 'The audit _____ several areas where cost savings could be made.',
    choices: ['identified', 'identifying', 'identifies', 'identification'],
    answer: 'identified',
    explanation: '過去形 identified（特定した）が正解です。',
  },
  {
    id: 'gram-567',
    type: 'grammar',
    content:
      'Employees _____ to the new health insurance plan must enroll before Friday.',
    choices: ['switching', 'switched', 'switch', 'switches'],
    answer: 'switching',
    explanation:
      '現在分詞 switching が Employees を後置修飾します。Employees switching to〜（〜に切り替える従業員）。',
  },
  {
    id: 'gram-568',
    type: 'grammar',
    content:
      'The company has _____ steps to address the concerns raised by employees.',
    choices: ['taken', 'made', 'done', 'set'],
    answer: 'taken',
    explanation:
      'take steps to do は「〜するための措置を講じる」という定型表現です。has taken（現在完了）が正解です。',
  },
  {
    id: 'gram-569',
    type: 'grammar',
    content:
      'The manager confirmed that the report _____ by the end of the day.',
    choices: ['would be ready', 'will be ready', 'is ready', 'was ready'],
    answer: 'would be ready',
    explanation:
      '過去形 confirmed に続く間接話法では will → would に変わります。',
  },
  {
    id: 'gram-570',
    type: 'grammar',
    content: 'The policy covers all employees, _____ full-time or part-time.',
    choices: ['whether', 'either', 'both', 'neither'],
    answer: 'whether',
    explanation: 'whether〜or〜 は「〜であれ〜であれ」という相関接続詞です。',
  },
  {
    id: 'gram-571',
    type: 'grammar',
    content: 'The factory has _____ its production capacity by 25% this year.',
    choices: ['increased', 'increasing', 'increases', 'increase'],
    answer: 'increased',
    explanation: '現在完了形 has increased（増加させた）が正解です。',
  },
  {
    id: 'gram-572',
    type: 'grammar',
    content:
      'The board _____ to postpone the vote until more information was available.',
    choices: ['decided', 'deciding', 'decides', 'decision'],
    answer: 'decided',
    explanation:
      '過去形 decided（決定した）が正解です。decide to do（〜することを決める）。',
  },
  {
    id: 'gram-573',
    type: 'grammar',
    content: 'The team leader _____ the members about the upcoming changes.',
    choices: ['briefed', 'briefing', 'briefs', 'brief'],
    answer: 'briefed',
    explanation:
      '過去形 briefed（説明した）が正解です。brief someone about〜。',
  },
  {
    id: 'gram-574',
    type: 'grammar',
    content:
      'The company _____ its brand identity through consistent messaging.',
    choices: ['reinforces', 'reinforcing', 'reinforce', 'reinforcement'],
    answer: 'reinforces',
    explanation:
      '主語 The company（単数）に対して現在形 reinforces が正解です。',
  },
  {
    id: 'gram-575',
    type: 'grammar',
    content: 'The draft budget is _____ review and subject to revision.',
    choices: ['under', 'in', 'at', 'for'],
    answer: 'under',
    explanation: 'under review は「審査中」という定型表現です。',
  },
  {
    id: 'gram-576',
    type: 'grammar',
    content:
      'The two companies entered _____ a strategic partnership last month.',
    choices: ['into', 'in', 'to', 'for'],
    answer: 'into',
    explanation:
      'enter into a partnership は「パートナーシップを結ぶ」という定型表現です。',
  },
  {
    id: 'gram-577',
    type: 'grammar',
    content: 'The offer is valid _____ 14 days from the date of issue.',
    choices: ['for', 'during', 'within', 'in'],
    answer: 'for',
    explanation: '期間を表す for が正解です。valid for 14 days（14日間有効）。',
  },
  {
    id: 'gram-578',
    type: 'grammar',
    content:
      'The company is _____ known for its excellent after-sales service.',
    choices: ['widely', 'wide', 'wideness', 'widen'],
    answer: 'widely',
    explanation: '形容詞 known を修飾するので副詞 widely（広く）が正解です。',
  },
  {
    id: 'gram-579',
    type: 'grammar',
    content:
      'The production team _____ its output by 15% since adopting the new process.',
    choices: ['has improved', 'improved', 'is improving', 'improves'],
    answer: 'has improved',
    explanation:
      'since〜 という継続期間があるので現在完了形 has improved が正解です。',
  },
  {
    id: 'gram-580',
    type: 'grammar',
    content:
      'The issue was resolved _____ without needing to escalate to management.',
    choices: ['internally', 'internal', 'interior', 'inside'],
    answer: 'internally',
    explanation:
      '動詞 resolved を修飾するので副詞 internally（社内で）が正解です。',
  },
  {
    id: 'gram-581',
    type: 'grammar',
    content:
      'The assistant _____ all travel arrangements for the executive team.',
    choices: ['coordinates', 'coordinating', 'coordinated', 'coordination'],
    answer: 'coordinates',
    explanation:
      '主語 The assistant（単数）に対して現在形 coordinates（調整する）が正解です。',
  },
  {
    id: 'gram-582',
    type: 'grammar',
    content:
      'The marketing team _____ a campaign that resonated strongly with consumers.',
    choices: ['developed', 'developing', 'development', 'develops'],
    answer: 'developed',
    explanation: '過去形 developed（開発した）が正解です。',
  },
  {
    id: 'gram-583',
    type: 'grammar',
    content:
      'The new software _____ the productivity of the accounting department.',
    choices: ['enhanced', 'enhancing', 'enhancement', 'enhance'],
    answer: 'enhanced',
    explanation: '過去形 enhanced（向上させた）が正解です。',
  },
  {
    id: 'gram-584',
    type: 'grammar',
    content:
      'The analyst _____ that the new product would capture a 15% market share.',
    choices: ['estimated', 'estimating', 'estimates', 'estimation'],
    answer: 'estimated',
    explanation: '過去形 estimated（見積もった）が正解です。',
  },
  {
    id: 'gram-585',
    type: 'grammar',
    content:
      'The legal team will look _____ the matter and provide an opinion by Friday.',
    choices: ['into', 'after', 'over', 'at'],
    answer: 'into',
    explanation: 'look into は「〜を調査する」という句動詞です。',
  },
  {
    id: 'gram-586',
    type: 'grammar',
    content: 'The firm has _____ its operations to reduce overhead costs.',
    choices: ['streamlined', 'streamlining', 'streamline', 'streamlines'],
    answer: 'streamlined',
    explanation: '現在完了形 has streamlined（合理化した）が正解です。',
  },
  {
    id: 'gram-587',
    type: 'grammar',
    content:
      'The board of directors _____ the acquisition proposal for further review.',
    choices: ['tabled', 'tabling', 'tables', 'table'],
    answer: 'tabled',
    explanation: '過去形 tabled（棚上げにした）が正解です。',
  },
  {
    id: 'gram-588',
    type: 'grammar',
    content:
      'The executive team _____ the company through a period of significant growth.',
    choices: ['guided', 'guiding', 'guidance', 'guides'],
    answer: 'guided',
    explanation: '過去形 guided（導いた）が正解です。',
  },
  {
    id: 'gram-589',
    type: 'grammar',
    content:
      'The supply chain manager is responsible _____ coordinating with multiple vendors.',
    choices: ['for', 'of', 'in', 'to'],
    answer: 'for',
    explanation:
      'be responsible for doing は「〜することに責任がある」という定型表現です。',
  },
  {
    id: 'gram-590',
    type: 'grammar',
    content:
      'The company _____ its annual charity gala for the 10th consecutive year.',
    choices: ['hosted', 'hosting', 'hosts', 'host'],
    answer: 'hosted',
    explanation: '過去形 hosted（主催した）が正解です。',
  },
  {
    id: 'gram-591',
    type: 'grammar',
    content:
      "The new employees quickly adapted _____ the company's working culture.",
    choices: ['to', 'at', 'in', 'for'],
    answer: 'to',
    explanation: 'adapt to は「〜に適応する」という定型表現です。',
  },
  {
    id: 'gram-592',
    type: 'grammar',
    content:
      "The company's _____ results were announced at the shareholder meeting.",
    choices: ['annual', 'annually', 'annualize', 'anniversary'],
    answer: 'annual',
    explanation:
      '名詞 results を修飾するので形容詞 annual（年次の）が正解です。',
  },
  {
    id: 'gram-593',
    type: 'grammar',
    content:
      'The company has _____ a policy against accepting gifts from vendors.',
    choices: ['established', 'establishing', 'establishment', 'establishes'],
    answer: 'established',
    explanation: '現在完了形 has established（制定した）が正解です。',
  },
  {
    id: 'gram-594',
    type: 'grammar',
    content:
      'The CEO has _____ that the company will achieve its five-year targets.',
    choices: ['confirmed', 'confirming', 'confirmation', 'confirms'],
    answer: 'confirmed',
    explanation: '現在完了形 has confirmed（確認した）が正解です。',
  },
  {
    id: 'gram-595',
    type: 'grammar',
    content:
      'The hiring decision was _____ based on qualifications and experience.',
    choices: ['solely', 'sole', 'alone', 'only'],
    answer: 'solely',
    explanation:
      '過去分詞 based を修飾するので副詞 solely（もっぱら）が正解です。',
  },
  {
    id: 'gram-596',
    type: 'grammar',
    content:
      'The company _____ its suppliers to maintain high quality standards.',
    choices: ['requires', 'requiring', 'required', 'requirement'],
    answer: 'requires',
    explanation: '主語 The company（単数）に対して現在形 requires が正解です。',
  },
  {
    id: 'gram-597',
    type: 'grammar',
    content: 'All bids _____ must be received by 5 p.m. on the closing date.',
    choices: ['submitted', 'submitting', 'submit', 'submits'],
    answer: 'submitted',
    explanation:
      '過去分詞 submitted が bids を後置修飾します。bids submitted（提出された入札）。',
  },
  {
    id: 'gram-598',
    type: 'grammar',
    content:
      'The board approved the annual budget _____ any significant revisions.',
    choices: ['without', 'with no', 'absent of', 'lacking'],
    answer: 'without',
    explanation:
      'without は「〜なしに」という前置詞です。without any significant revisions（大きな改訂なしに）。',
  },
  {
    id: 'gram-599',
    type: 'grammar',
    content: 'The company has been _____ over the past five years.',
    choices: ['thriving', 'thrived', 'thrive', 'thrives'],
    answer: 'thriving',
    explanation:
      '現在完了進行形 has been thriving（繁栄し続けている）が正解です。',
  },
  {
    id: 'gram-600',
    type: 'grammar',
    content:
      'The head office has _____ the branch office to handle the negotiation.',
    choices: ['authorized', 'authorizing', 'authorization', 'authorize'],
    answer: 'authorized',
    explanation: '現在完了形 has authorized（承認した）が正解です。',
  },
  {
    id: 'gram-601',
    type: 'grammar',
    content:
      'The employees _____ excellent results through dedicated teamwork.',
    choices: ['achieved', 'achieving', 'achieves', 'achievement'],
    answer: 'achieved',
    explanation: '過去形 achieved（達成した）が正解です。',
  },
  {
    id: 'gram-602',
    type: 'grammar',
    content: 'The application process consists _____ three stages.',
    choices: ['of', 'in', 'from', 'with'],
    answer: 'of',
    explanation: 'consist of は「〜で構成されている」という定型表現です。',
  },
  {
    id: 'gram-603',
    type: 'grammar',
    content:
      'The company launched the product _____ extensive market research.',
    choices: ['following', 'after conducting', 'after', 'subsequent to'],
    answer: 'following',
    explanation:
      'following は「〜の後に」という前置詞的用法で、following extensive research（広範な調査の後に）。',
  },
  {
    id: 'gram-604',
    type: 'grammar',
    content:
      'The factory _____ operate at full capacity during the holiday season.',
    choices: ['will', 'shall', 'is', 'does'],
    answer: 'will',
    explanation:
      '未来の予定を表す will が正解です。will operate（稼働する予定）。',
  },
  {
    id: 'gram-605',
    type: 'grammar',
    content: 'The position _____ strong analytical and communication skills.',
    choices: ['requires', 'requiring', 'required', 'requirement'],
    answer: 'requires',
    explanation:
      '主語 The position（単数）に対して現在形 requires が正解です。',
  },
  {
    id: 'gram-606',
    type: 'grammar',
    content:
      'The office renovation _____ disruption to normal business operations.',
    choices: ['caused', 'causing', 'causes', 'cause'],
    answer: 'caused',
    explanation:
      '過去形 caused（引き起こした）が正解です。cause disruption to（〜に支障をきたす）。',
  },
  {
    id: 'gram-607',
    type: 'grammar',
    content: 'The shipment was delayed _____ adverse weather conditions.',
    choices: ['due to', 'because', 'owing', 'result of'],
    answer: 'due to',
    explanation:
      'due to は前置詞句で「〜のために」という理由を表します。後に名詞句が続きます。',
  },
  {
    id: 'gram-608',
    type: 'grammar',
    content: 'Customers _____ with our service may request a full refund.',
    choices: ['dissatisfied', 'unsatisfied', 'satisfied', 'not satisfied'],
    answer: 'dissatisfied',
    explanation:
      '後置修飾の過去分詞 dissatisfied（不満な）が正解です。Customers dissatisfied with〜（〜に不満な顧客）。',
  },
  {
    id: 'gram-609',
    type: 'grammar',
    content: 'The office _____ under renovation for the past two months.',
    choices: ['has been', 'has', 'is', 'was'],
    answer: 'has been',
    explanation:
      'for the past two months という継続期間があるので現在完了形 has been（〜である）が正解です。',
  },
  {
    id: 'gram-610',
    type: 'grammar',
    content: 'The supplier was selected _____ a competitive bidding process.',
    choices: ['through', 'by', 'via', 'with'],
    answer: 'through',
    explanation:
      'through a bidding process（入札プロセスを通じて）という表現です。',
  },
  {
    id: 'gram-611',
    type: 'grammar',
    content:
      'The manager spoke _____ the importance of maintaining work-life balance.',
    choices: ['about', 'on', 'regarding', 'of'],
    answer: 'about',
    explanation: 'speak about は「〜について話す」という定型表現です。',
  },
  {
    id: 'gram-612',
    type: 'grammar',
    content:
      'This role is _____ for individuals with a background in data analytics.',
    choices: ['ideal', 'ideally', 'idealize', 'idealism'],
    answer: 'ideal',
    explanation:
      'be ideal for は「〜に最適である」という表現です。形容詞 ideal が正解です。',
  },
  {
    id: 'gram-613',
    type: 'grammar',
    content:
      'The report _____ that the company needs to diversify its revenue streams.',
    choices: ['concludes', 'concluding', 'conclusion', 'concluded'],
    answer: 'concludes',
    explanation:
      '主語 The report（単数）に対して現在形 concludes（結論付けている）が正解です。',
  },
  {
    id: 'gram-614',
    type: 'grammar',
    content:
      "The company's profits rose _____ compared to the same period last year.",
    choices: ['sharply', 'sharp', 'sharpness', 'sharper'],
    answer: 'sharply',
    explanation: '動詞 rose を修飾するので副詞 sharply（急激に）が正解です。',
  },
  {
    id: 'gram-615',
    type: 'grammar',
    content:
      'Parking is _____ for visitors on the ground floor of the building.',
    choices: ['available', 'availability', 'availably', 'availing'],
    answer: 'available',
    explanation:
      'be available（利用できる）という表現で形容詞 available が正解です。',
  },
  {
    id: 'gram-616',
    type: 'grammar',
    content:
      'The company has been _____ cited as one of the best places to work.',
    choices: ['consistently', 'consistent', 'consistency', 'consist'],
    answer: 'consistently',
    explanation:
      '過去分詞 cited を修飾するので副詞 consistently（継続的に）が正解です。',
  },
  {
    id: 'gram-617',
    type: 'grammar',
    content: 'The workshop is open _____ recent graduates from any field.',
    choices: ['to', 'for', 'at', 'with'],
    answer: 'to',
    explanation:
      'be open to は「〜に開かれている・〜が参加できる」という表現です。',
  },
  {
    id: 'gram-618',
    type: 'grammar',
    content: 'The manager _____ all travel expenses promptly after each trip.',
    choices: ['reimburses', 'reimbursing', 'reimbursed', 'reimbursement'],
    answer: 'reimburses',
    explanation:
      '主語 The manager（単数）に対して現在形 reimburses（払い戻す）が正解です。',
  },
  {
    id: 'gram-619',
    type: 'grammar',
    content:
      'The operations manager _____ the project efficiently despite limited resources.',
    choices: ['handled', 'handling', 'handles', 'handle'],
    answer: 'handled',
    explanation: '過去形 handled（処理した）が正解です。',
  },
  {
    id: 'gram-620',
    type: 'grammar',
    content:
      'The team has been working _____ on the new sustainability initiative.',
    choices: [
      'collaboratively',
      'collaborative',
      'collaboration',
      'collaborate',
    ],
    answer: 'collaboratively',
    explanation:
      '動詞句 has been working を修飾するので副詞 collaboratively（協力して）が正解です。',
  },
  {
    id: 'gram-621',
    type: 'grammar',
    content:
      'The project benefited _____ the additional resources provided by management.',
    choices: ['from', 'by', 'with', 'through'],
    answer: 'from',
    explanation: 'benefit from は「〜から恩恵を受ける」という定型表現です。',
  },
  {
    id: 'gram-622',
    type: 'grammar',
    content:
      'The company has been _____ profitable since its founding in 1990.',
    choices: ['consistently', 'consistent', 'consistency', 'consist'],
    answer: 'consistently',
    explanation:
      '形容詞 profitable を修飾するので副詞 consistently（一貫して）が正解です。',
  },
  {
    id: 'gram-623',
    type: 'grammar',
    content:
      'The director _____ the new policy to the staff at the all-hands meeting.',
    choices: ['explained', 'explaining', 'explanation', 'explains'],
    answer: 'explained',
    explanation: '過去形 explained（説明した）が正解です。',
  },
  {
    id: 'gram-624',
    type: 'grammar',
    content:
      'The quarterly report _____ that revenue grew by 12% year over year.',
    choices: ['shows', 'showing', 'shown', 'showed'],
    answer: 'shows',
    explanation:
      '主語 The quarterly report（単数）に対して現在形 shows が正解です。',
  },
  {
    id: 'gram-625',
    type: 'grammar',
    content:
      'The new regulation _____ all manufacturers to label their products clearly.',
    choices: ['requires', 'requiring', 'required', 'requirement'],
    answer: 'requires',
    explanation:
      '主語 The new regulation（単数）に対して現在形 requires が正解です。require + 目的語 + to〜。',
  },
  {
    id: 'gram-626',
    type: 'grammar',
    content:
      'The company _____ to expand its digital services over the next two years.',
    choices: ['plans', 'planning', 'planned', 'plan'],
    answer: 'plans',
    explanation:
      '主語 The company（単数）に対して現在形 plans が正解です。plan to do（〜する計画を立てている）。',
  },
  {
    id: 'gram-627',
    type: 'grammar',
    content: 'The results of the satisfaction survey _____ encouraging.',
    choices: ['were', 'was', 'are being', 'has been'],
    answer: 'were',
    explanation: '主語 The results（複数）に対して過去形 were が正解です。',
  },
  {
    id: 'gram-628',
    type: 'grammar',
    content:
      'The company _____ its suppliers to adhere to ethical sourcing standards.',
    choices: ['expects', 'expecting', 'expectation', 'expected'],
    answer: 'expects',
    explanation:
      '主語 The company（単数）に対して現在形 expects が正解です。expect + 目的語 + to do の形をとります。',
  },
  {
    id: 'gram-629',
    type: 'grammar',
    content:
      'The new headquarters building is equipped _____ the latest technology.',
    choices: ['with', 'by', 'in', 'for'],
    answer: 'with',
    explanation: 'be equipped with は「〜が備わっている」という定型表現です。',
  },
  {
    id: 'gram-630',
    type: 'grammar',
    content:
      'The candidate _____ impressed the interviewers with her in-depth knowledge.',
    choices: ['clearly', 'clear', 'clarity', 'clarify'],
    answer: 'clearly',
    explanation:
      '動詞 impressed を修飾するので副詞 clearly（明らかに）が正解です。',
  },
  {
    id: 'gram-631',
    type: 'grammar',
    content:
      'The company has _____ its operating expenses by 15% this fiscal year.',
    choices: ['reduced', 'reducing', 'reduction', 'reduces'],
    answer: 'reduced',
    explanation: '現在完了形 has reduced（削減した）が正解です。',
  },
  {
    id: 'gram-632',
    type: 'grammar',
    content:
      'The seminar will cover _____ strategies for business development.',
    choices: ['effective', 'effectively', 'effectiveness', 'effect'],
    answer: 'effective',
    explanation:
      '名詞 strategies を修飾するので形容詞 effective（効果的な）が正解です。',
  },
  {
    id: 'gram-633',
    type: 'grammar',
    content:
      'The new software update _____ several bugs that users had reported.',
    choices: ['addressed', 'addressing', 'addresses', 'address'],
    answer: 'addressed',
    explanation: '過去形 addressed（対処した）が正解です。',
  },
  {
    id: 'gram-634',
    type: 'grammar',
    content:
      'The company has _____ strong ties with the local community for decades.',
    choices: ['maintained', 'maintaining', 'maintains', 'is maintaining'],
    answer: 'maintained',
    explanation:
      '現在完了形 has maintained（維持してきた）が正解です。for decades という継続期間が示されています。',
  },
  {
    id: 'gram-635',
    type: 'grammar',
    content: 'The CEO _____ the company as a global leader in clean energy.',
    choices: ['envisions', 'envisioning', 'envision', 'envisioned'],
    answer: 'envisions',
    explanation:
      '主語 The CEO（単数）に対して現在形 envisions（思い描いている）が正解です。',
  },
  {
    id: 'gram-636',
    type: 'grammar',
    content: 'The company has been _____ since its founding.',
    choices: ['profitable', 'profit', 'profitably', 'profitability'],
    answer: 'profitable',
    explanation:
      'has been の後に補語として形容詞 profitable（収益性のある）が正解です。',
  },
  {
    id: 'gram-637',
    type: 'grammar',
    content:
      'The company has _____ its workforce by 10% through natural attrition.',
    choices: ['reduced', 'reducing', 'reduction', 'reduces'],
    answer: 'reduced',
    explanation: '現在完了形 has reduced（削減した）が正解です。',
  },
  {
    id: 'gram-638',
    type: 'grammar',
    content:
      'The manager _____ to the team on the new expense reporting procedures.',
    choices: ['briefed', 'briefing', 'briefs', 'brief'],
    answer: 'briefed',
    explanation:
      '過去形 briefed（説明した）が正解です。brief someone on〜（〜について説明する）。',
  },
  {
    id: 'gram-639',
    type: 'grammar',
    content: 'The conference room is _____ for the presentation at 2 p.m.',
    choices: ['reserved', 'reserving', 'reserve', 'reservation'],
    answer: 'reserved',
    explanation:
      'be reserved（予約されている）という表現で、過去分詞 reserved が正解です。',
  },
  {
    id: 'gram-640',
    type: 'grammar',
    content:
      'The revised proposal was submitted to management _____ review and approval.',
    choices: ['for', 'to', 'with', 'at'],
    answer: 'for',
    explanation:
      'for review and approval は「レビューと承認のために」という目的を表す表現です。',
  },
  {
    id: 'gram-641',
    type: 'grammar',
    content: 'The firm is dedicated _____ providing high-quality legal advice.',
    choices: ['to', 'for', 'at', 'in'],
    answer: 'to',
    explanation:
      'be dedicated to doing は「〜することに専念している」という定型表現です。',
  },
  {
    id: 'gram-642',
    type: 'grammar',
    content:
      'The company has a policy _____ accepting gifts from business partners.',
    choices: ['regarding', 'regard to', 'with regard', 'in regard'],
    answer: 'regarding',
    explanation:
      'regarding は「〜に関して」という前置詞で、名詞 policy を修飾します。',
  },
  {
    id: 'gram-643',
    type: 'grammar',
    content:
      'The company has a reputation _____ delivering projects on time and on budget.',
    choices: ['for', 'of', 'in', 'with'],
    answer: 'for',
    explanation:
      'have a reputation for doing は「〜することで評判がある」という定型表現です。',
  },
  {
    id: 'gram-644',
    type: 'grammar',
    content:
      'The company is looking _____ qualified candidates for the new position.',
    choices: ['for', 'at', 'into', 'through'],
    answer: 'for',
    explanation: 'look for は「〜を探している」という句動詞です。',
  },
  {
    id: 'gram-645',
    type: 'grammar',
    content:
      'The company has _____ to become one of the most trusted brands in the industry.',
    choices: ['grown', 'growing', 'grow', 'growth'],
    answer: 'grown',
    explanation:
      '現在完了形 has grown（成長した）が正解です。grow to become〜（〜になるまでに成長する）。',
  },

  {
    id: 'gram-646',
    type: 'grammar',
    content: 'The meeting was postponed _____ the CEO was unavailable.',
    choices: ['because', 'despite', 'although', 'during'],
    answer: 'because',
    explanation:
      '理由を表す接続詞 because（〜なので）が正解です。despite は前置詞で節を取れません。although は逆接、during は前置詞です。',
  },
  {
    id: 'gram-647',
    type: 'grammar',
    content:
      '_____ the budget was reduced, the team completed the project successfully.',
    choices: ['Although', 'Because', 'Unless', 'Since'],
    answer: 'Although',
    explanation:
      '逆接を表す従属接続詞 although（〜にもかかわらず）が正解です。because は理由、unless は否定条件、since は理由または時間を表します。',
  },
  {
    id: 'gram-648',
    type: 'grammar',
    content:
      'We will cancel the product launch _____ we receive approval from the legal team.',
    choices: ['unless', 'although', 'whereas', 'moreover'],
    answer: 'unless',
    explanation:
      '否定条件を表す従属接続詞 unless（〜しない限り）が正解です。「法務チームの承認を得ない限りキャンセルする」という意味になります。',
  },
  {
    id: 'gram-649',
    type: 'grammar',
    content:
      'The domestic market is shrinking, _____ the overseas market is growing rapidly.',
    choices: ['whereas', 'unless', 'so that', 'provided that'],
    answer: 'whereas',
    explanation:
      '対比を表す従属接続詞 whereas（一方で〜）が正解です。二つの対照的な状況を並べる際に用います。',
  },
  {
    id: 'gram-650',
    type: 'grammar',
    content:
      'The sales figures improved _____ the new marketing campaign was launched.',
    choices: ['once', 'unless', 'whereas', 'even though'],
    answer: 'once',
    explanation:
      '時間を表す従属接続詞 once（〜するとすぐに、〜したら）が正解です。新しいキャンペーン開始後に売上が改善したという流れを表します。',
  },
  {
    id: 'gram-651',
    type: 'grammar',
    content: 'You may take Friday off _____ you finish the report by Thursday.',
    choices: ['provided that', 'although', 'whereas', 'meanwhile'],
    answer: 'provided that',
    explanation:
      '条件を表す従属接続詞 provided that（〜という条件で）が正解です。unless と異なり肯定条件を表します。',
  },
  {
    id: 'gram-652',
    type: 'grammar',
    content:
      "The team worked overtime _____ they could meet the client's deadline.",
    choices: ['so that', 'although', 'unless', 'whereas'],
    answer: 'so that',
    explanation:
      '目的を表す従属接続詞 so that（〜するために）が正解です。後ろには助動詞 could / can / would などを伴うことが多いです。',
  },
  {
    id: 'gram-653',
    type: 'grammar',
    content:
      '_____ the new system is more expensive, it offers better security features.',
    choices: ['Even though', 'Unless', 'Once', 'So that'],
    answer: 'Even though',
    explanation:
      '強い逆接を表す従属接続詞 even though（〜であるにもかかわらず）が正解です。although より譲歩の意味が強調されます。',
  },
  {
    id: 'gram-654',
    type: 'grammar',
    content:
      'The report was submitted on time; _____, the client was not satisfied with the content.',
    choices: ['however', 'therefore', 'furthermore', 'consequently'],
    answer: 'however',
    explanation:
      '逆接を表す接続副詞 however（しかしながら）が正解です。セミコロンの後に置かれ、前の文と対照的な内容を導きます。',
  },
  {
    id: 'gram-655',
    type: 'grammar',
    content:
      'Sales declined significantly last quarter; _____, the company decided to restructure.',
    choices: ['consequently', 'however', 'meanwhile', 'nevertheless'],
    answer: 'consequently',
    explanation:
      '結果を表す接続副詞 consequently（その結果）が正解です。前の原因から当然生じる結果を表します。',
  },
  {
    id: 'gram-656',
    type: 'grammar',
    content:
      'The proposal lacked sufficient data; _____, the board rejected it.',
    choices: ['therefore', 'nevertheless', 'meanwhile', 'otherwise'],
    answer: 'therefore',
    explanation:
      '結論・理由を表す接続副詞 therefore（それゆえに）が正解です。consequently と似ていますが、論理的帰結を強調します。',
  },
  {
    id: 'gram-657',
    type: 'grammar',
    content:
      'The new software has some bugs; _____, we will proceed with the rollout as planned.',
    choices: ['nevertheless', 'therefore', 'consequently', 'furthermore'],
    answer: 'nevertheless',
    explanation:
      '逆接を表す接続副詞 nevertheless（それにもかかわらず）が正解です。however より書き言葉的・フォーマルな表現です。',
  },
  {
    id: 'gram-658',
    type: 'grammar',
    content:
      'The new policy reduces costs; _____, it improves employee satisfaction.',
    choices: ['furthermore', 'however', 'otherwise', 'consequently'],
    answer: 'furthermore',
    explanation:
      '追加情報を加える接続副詞 furthermore（さらに）が正解です。moreover と同義で、前の内容に情報を追加します。',
  },
  {
    id: 'gram-659',
    type: 'grammar',
    content:
      'The engineering team was finalizing the design; _____, the sales team was preparing the pitch.',
    choices: ['meanwhile', 'therefore', 'nevertheless', 'furthermore'],
    answer: 'meanwhile',
    explanation:
      '同時進行を表す接続副詞 meanwhile（その間に）が正解です。二つの出来事が同時に進行していることを示します。',
  },
  {
    id: 'gram-660',
    type: 'grammar',
    content:
      'You must submit the expense report by Friday; _____, it will not be processed this month.',
    choices: ['otherwise', 'meanwhile', 'furthermore', 'nevertheless'],
    answer: 'otherwise',
    explanation:
      '否定条件の結果を表す接続副詞 otherwise（さもなければ）が正解です。前の条件が満たされない場合の結果を表します。',
  },
  {
    id: 'gram-661',
    type: 'grammar',
    content:
      'The product received positive reviews; _____, the company increased its production capacity.',
    choices: ['moreover', 'however', 'otherwise', 'whereas'],
    answer: 'moreover',
    explanation:
      '追加情報を加える接続副詞 moreover（さらに、その上）が正解です。前の内容に続く追加の情報を導きます。',
  },
  {
    id: 'gram-662',
    type: 'grammar',
    content:
      '_____ the price increase nor the delivery delay affected our customer loyalty.',
    choices: ['Neither', 'Both', 'Either', 'Not only'],
    answer: 'Neither',
    explanation:
      '相関接続詞 neither A nor B（AもBも〜ない）が正解です。二つの事柄をどちらも否定するときに使います。',
  },
  {
    id: 'gram-663',
    type: 'grammar',
    content:
      '_____ the marketing team and the sales team contributed to the record revenue.',
    choices: ['Both', 'Either', 'Neither', 'Not only'],
    answer: 'Both',
    explanation:
      '相関接続詞 both A and B（AとBの両方）が正解です。二つの主語を肯定的に並列するときに使います。',
  },
  {
    id: 'gram-664',
    type: 'grammar',
    content: 'Not only did the CEO resign, _____ the CFO also stepped down.',
    choices: ['but also', 'and also', 'or also', 'nor also'],
    answer: 'but also',
    explanation:
      '相関接続詞 not only A but also B（AだけでなくBも）の後半部が正解です。Not only が文頭に来ると倒置が起きます。',
  },
  {
    id: 'gram-665',
    type: 'grammar',
    content: 'You can submit the application _____ by email or in person.',
    choices: ['either', 'neither', 'both', 'not only'],
    answer: 'either',
    explanation:
      '相関接続詞 either A or B（AかBのどちらか）が正解です。二つの選択肢のどちらかを選ぶ場合に使います。',
  },
  {
    id: 'gram-666',
    type: 'grammar',
    content:
      '_____ the conference call was rescheduled, all participants were notified promptly.',
    choices: ['Once', 'Unless', 'Whereas', 'Moreover'],
    answer: 'Once',
    explanation:
      '時間を表す従属接続詞 once（〜するとすぐに）が正解です。会議の変更が決まった直後に通知されたという流れを表します。',
  },
  {
    id: 'gram-667',
    type: 'grammar',
    content:
      'The HR department will finalize the new policy _____ it receives input from all department heads.',
    choices: ['once', 'although', 'whereas', 'so that'],
    answer: 'once',
    explanation:
      '従属接続詞 once（〜したら）が正解です。全部門長からのフィードバックを受けてから方針を確定するという条件付きの時間関係を表します。',
  },
  {
    id: 'gram-668',
    type: 'grammar',
    content:
      '_____ our competitors lower their prices, we will have to reconsider our pricing strategy.',
    choices: ['If', 'Although', 'Whereas', 'So that'],
    answer: 'If',
    explanation:
      '条件を表す従属接続詞 if（もし〜ならば）が正解です。競合他社の動向に応じた戦略見直しという仮定条件を表します。',
  },
  {
    id: 'gram-669',
    type: 'grammar',
    content:
      'The factory will halt production _____ the safety inspection reveals any violations.',
    choices: ['if', 'although', 'whereas', 'furthermore'],
    answer: 'if',
    explanation:
      '条件を表す従属接続詞 if（もし〜ならば）が正解です。安全検査で違反が発見された場合の対応を表す条件文です。',
  },
  {
    id: 'gram-670',
    type: 'grammar',
    content:
      'The manager kept the project on track _____ facing numerous setbacks.',
    choices: ['despite', 'although', 'because', 'unless'],
    answer: 'despite',
    explanation:
      '前置詞 despite（〜にもかかわらず）が正解です。despite の後には名詞句または動名詞が続きます。although は接続詞で節を導きます。',
  },
  {
    id: 'gram-671',
    type: 'grammar',
    content:
      'The contract will be signed _____ both parties agree to the revised terms.',
    choices: ['provided that', 'whereas', 'although', 'meanwhile'],
    answer: 'provided that',
    explanation:
      '条件を表す従属接続詞 provided that（〜という条件で）が正解です。if と置き換え可能ですが、よりフォーマルな表現です。',
  },
  {
    id: 'gram-672',
    type: 'grammar',
    content:
      'The new office layout was designed _____ employees could collaborate more effectively.',
    choices: ['so that', 'although', 'unless', 'whereas'],
    answer: 'so that',
    explanation:
      '目的を表す従属接続詞 so that（〜するように）が正解です。後ろに could が続き、設計の意図・目的を表します。',
  },
  {
    id: 'gram-673',
    type: 'grammar',
    content:
      'The training session will be recorded _____ employees who missed it can watch it later.',
    choices: ['so that', 'although', 'unless', 'once'],
    answer: 'so that',
    explanation:
      '目的を表す従属接続詞 so that（〜するために）が正解です。欠席した社員への配慮という目的を表しています。',
  },
  {
    id: 'gram-674',
    type: 'grammar',
    content:
      'The product launch was successful; _____, we plan to expand into new markets.',
    choices: ['consequently', 'however', 'otherwise', 'whereas'],
    answer: 'consequently',
    explanation:
      '結果を表す接続副詞 consequently（その結果）が正解です。成功という原因から、新市場参入という結果を論理的に導きます。',
  },
  {
    id: 'gram-675',
    type: 'grammar',
    content:
      'The candidate had impressive qualifications; _____, she lacked the required industry experience.',
    choices: ['however', 'therefore', 'furthermore', 'consequently'],
    answer: 'however',
    explanation:
      '逆接を表す接続副詞 however（しかしながら）が正解です。資格の良さと経験不足という対照的な内容をつなぎます。',
  },
  {
    id: 'gram-676',
    type: 'grammar',
    content:
      'The annual report was thorough and well-written; _____, the financial data contained several errors.',
    choices: ['nevertheless', 'moreover', 'therefore', 'consequently'],
    answer: 'nevertheless',
    explanation:
      '逆接を表す接続副詞 nevertheless（それにもかかわらず）が正解です。報告書の質の良さにもかかわらず誤りがあるという逆接関係を示します。',
  },
  {
    id: 'gram-677',
    type: 'grammar',
    content:
      'The new policy covers travel reimbursement; _____, it addresses remote work arrangements.',
    choices: ['moreover', 'however', 'otherwise', 'meanwhile'],
    answer: 'moreover',
    explanation:
      '追加を表す接続副詞 moreover（さらに）が正解です。出張経費に加えてリモートワークも扱うという追加情報を導きます。',
  },
  {
    id: 'gram-678',
    type: 'grammar',
    content:
      '_____ the revenue increased, the profit margin remained the same.',
    choices: ['Although', 'Because', 'Once', 'Provided that'],
    answer: 'Although',
    explanation:
      '逆接を表す従属接続詞 although（〜であるにもかかわらず）が正解です。売上増加にもかかわらず利益率が変わらないという逆接を表します。',
  },
  {
    id: 'gram-679',
    type: 'grammar',
    content:
      'Please confirm attendance by Thursday; _____, we cannot guarantee seating.',
    choices: ['otherwise', 'moreover', 'furthermore', 'nevertheless'],
    answer: 'otherwise',
    explanation:
      '否定的結果を表す接続副詞 otherwise（さもなければ）が正解です。木曜日までに確認しない場合の結果を述べています。',
  },
  {
    id: 'gram-680',
    type: 'grammar',
    content:
      'The engineering team was testing the prototype; _____, the design team was refining the branding.',
    choices: ['meanwhile', 'therefore', 'consequently', 'moreover'],
    answer: 'meanwhile',
    explanation:
      '同時進行を表す接続副詞 meanwhile（その間に）が正解です。二つのチームが同時に異なる作業を進めている状況を表します。',
  },
  {
    id: 'gram-681',
    type: 'grammar',
    content:
      'The project was delivered ahead of schedule; _____, the team received a bonus.',
    choices: ['therefore', 'however', 'otherwise', 'whereas'],
    answer: 'therefore',
    explanation:
      '因果関係を表す接続副詞 therefore（それゆえに）が正解です。スケジュール前倒しという原因からボーナスという結果を導きます。',
  },
  {
    id: 'gram-682',
    type: 'grammar',
    content:
      '_____ she is a junior employee, her analysis impressed the entire executive team.',
    choices: ['Although', 'Because', 'Once', 'Unless'],
    answer: 'Although',
    explanation:
      '逆接を表す従属接続詞 although（〜であるにもかかわらず）が正解です。若手であるにもかかわらず高い評価を得たという逆接を表します。',
  },
  {
    id: 'gram-683',
    type: 'grammar',
    content:
      'The office will remain closed _____ all renovation work is complete.',
    choices: ['until', 'although', 'whereas', 'moreover'],
    answer: 'until',
    explanation:
      '時間を表す従属接続詞 until（〜するまで）が正解です。改装工事が完了するまでの継続状態を表します。by（〜までに）とは異なり継続を表します。',
  },
  {
    id: 'gram-684',
    type: 'grammar',
    content:
      "Both the quality _____ the delivery time must meet the client's standards.",
    choices: ['and', 'or', 'nor', 'but'],
    answer: 'and',
    explanation:
      '相関接続詞 both A and B（AとBの両方）の and が正解です。品質と納期の両方が基準を満たす必要があることを表します。',
  },
  {
    id: 'gram-685',
    type: 'grammar',
    content:
      'Either the procurement team _____ the finance team is responsible for the discrepancy.',
    choices: ['or', 'and', 'nor', 'but'],
    answer: 'or',
    explanation:
      '相関接続詞 either A or B（AかBのどちらか）の or が正解です。いずれか一方が責任を負うという選択関係を表します。',
  },
  {
    id: 'gram-686',
    type: 'grammar',
    content:
      'Not only was the presentation informative, _____ it was also highly engaging.',
    choices: ['but', 'and', 'or', 'nor'],
    answer: 'but',
    explanation:
      '相関接続詞 not only A but also B（AだけでなくBも）の but が正解です。not only が文頭に来ると倒置が起き、but also が続きます。',
  },
  {
    id: 'gram-687',
    type: 'grammar',
    content:
      'The system update will be implemented _____ all testing phases are successfully completed.',
    choices: ['once', 'although', 'whereas', 'otherwise'],
    answer: 'once',
    explanation:
      '時間・条件を表す従属接続詞 once（〜したら）が正解です。テスト完了を条件にシステム更新を行うという意味を表します。',
  },
  {
    id: 'gram-688',
    type: 'grammar',
    content:
      'The investment will be approved _____ the risk assessment shows acceptable results.',
    choices: ['provided that', 'although', 'whereas', 'meanwhile'],
    answer: 'provided that',
    explanation:
      '条件を表す従属接続詞 provided that（〜という条件で）が正解です。リスク評価の結果が条件となる文脈に適しています。',
  },
  {
    id: 'gram-689',
    type: 'grammar',
    content:
      'The marketing budget was cut; _____, the campaign achieved record engagement.',
    choices: ['nevertheless', 'therefore', 'consequently', 'furthermore'],
    answer: 'nevertheless',
    explanation:
      '逆接を表す接続副詞 nevertheless（それにもかかわらず）が正解です。予算削減という逆境の中でも成果を上げたという逆説的状況を表します。',
  },
  {
    id: 'gram-690',
    type: 'grammar',
    content:
      '_____ the negotiations were lengthy, the final agreement satisfied both parties.',
    choices: ['Although', 'Because', 'Provided that', 'So that'],
    answer: 'Although',
    explanation:
      '逆接を表す従属接続詞 although（〜にもかかわらず）が正解です。交渉の長さにもかかわらず双方が満足という逆接関係を表します。',
  },
  {
    id: 'gram-691',
    type: 'grammar',
    content:
      'The supervisor will approve overtime requests _____ they are submitted before the deadline.',
    choices: ['provided that', 'although', 'whereas', 'however'],
    answer: 'provided that',
    explanation:
      '条件を表す従属接続詞 provided that（〜という条件で）が正解です。期限前提出という条件付きの承認を表します。',
  },
  {
    id: 'gram-692',
    type: 'grammar',
    content:
      'The head office handles international contracts, _____ the regional offices manage local accounts.',
    choices: ['whereas', 'although', 'because', 'so that'],
    answer: 'whereas',
    explanation:
      '対比を表す従属接続詞 whereas（一方で〜）が正解です。本社と地域オフィスそれぞれの役割の対比を表します。',
  },
  {
    id: 'gram-693',
    type: 'grammar',
    content:
      'Neither the price increase _____ the product shortage discouraged loyal customers.',
    choices: ['nor', 'or', 'and', 'but'],
    answer: 'nor',
    explanation:
      '相関接続詞 neither A nor B（AもBも〜ない）の nor が正解です。価格上昇も品不足も顧客離れにつながらなかったという否定の並列を表します。',
  },
  {
    id: 'gram-694',
    type: 'grammar',
    content:
      'The company launched not only a new product line _____ also a new loyalty program.',
    choices: ['but', 'and', 'or', 'nor'],
    answer: 'but',
    explanation:
      '相関接続詞 not only A but also B（AだけでなくBも）の but が正解です。新製品ラインに加えてロイヤリティプログラムも導入したことを強調します。',
  },
  {
    id: 'gram-695',
    type: 'grammar',
    content:
      '_____ the new system is installed, all employees will receive training.',
    choices: ['Once', 'Although', 'Whereas', 'So that'],
    answer: 'Once',
    explanation:
      '時間を表す従属接続詞 once（〜したら）が正解です。システム導入完了後に研修が行われるという時間的順序を表します。',
  },
  {
    id: 'gram-696',
    type: 'grammar',
    content:
      'The vendor failed to deliver on time; _____, we had to find an alternative supplier.',
    choices: ['consequently', 'nevertheless', 'moreover', 'whereas'],
    answer: 'consequently',
    explanation:
      '結果を表す接続副詞 consequently（その結果）が正解です。納期遅延という原因から代替業者探しという結果を導きます。',
  },
  {
    id: 'gram-697',
    type: 'grammar',
    content:
      'The merger is expected to reduce costs; _____, it may create new revenue streams.',
    choices: ['furthermore', 'however', 'otherwise', 'consequently'],
    answer: 'furthermore',
    explanation:
      '追加情報を加える接続副詞 furthermore（さらに）が正解です。コスト削減に加えて新たな収益源という追加メリットを述べています。',
  },
  {
    id: 'gram-698',
    type: 'grammar',
    content:
      "The HR team was preparing onboarding materials; _____, IT was setting up the new hires' workstations.",
    choices: ['meanwhile', 'therefore', 'consequently', 'moreover'],
    answer: 'meanwhile',
    explanation:
      '同時進行を表す接続副詞 meanwhile（その間に）が正解です。人事と IT が同時並行で新入社員の受け入れ準備をしている状況を表します。',
  },
  {
    id: 'gram-699',
    type: 'grammar',
    content:
      'All requests must be submitted in writing; _____, they will not be considered.',
    choices: ['otherwise', 'moreover', 'meanwhile', 'nevertheless'],
    answer: 'otherwise',
    explanation:
      '否定的結果を表す接続副詞 otherwise（さもなければ）が正解です。書面提出しない場合は審査されないという条件を表します。',
  },
  {
    id: 'gram-700',
    type: 'grammar',
    content:
      '_____ cost was a concern, the company chose the more reliable supplier.',
    choices: ['Although', 'Because', 'Unless', 'Once'],
    answer: 'Although',
    explanation:
      '逆接を表す従属接続詞 although（〜にもかかわらず）が正解です。コストが懸念されたにもかかわらず信頼性を優先したという逆接関係を表します。',
  },
  {
    id: 'gram-701',
    type: 'grammar',
    content:
      'The pilot program will be expanded _____ the initial results are positive.',
    choices: ['if', 'although', 'whereas', 'otherwise'],
    answer: 'if',
    explanation:
      '条件を表す従属接続詞 if（もし〜ならば）が正解です。試験プログラムの結果次第で拡大するという条件文です。',
  },
  {
    id: 'gram-702',
    type: 'grammar',
    content:
      'The new regulations require detailed reporting; _____, companies must also update their compliance systems.',
    choices: ['moreover', 'however', 'otherwise', 'whereas'],
    answer: 'moreover',
    explanation:
      '追加を表す接続副詞 moreover（さらに）が正解です。詳細報告の義務に加え、コンプライアンスシステムの更新も求められるという追加要件を表します。',
  },
  {
    id: 'gram-703',
    type: 'grammar',
    content:
      'The sales team exceeded their targets, _____ the operations team struggled to keep pace.',
    choices: ['whereas', 'although', 'because', 'unless'],
    answer: 'whereas',
    explanation:
      '対比を表す従属接続詞 whereas（一方で〜）が正解です。営業チームの成功と運営チームの苦戦という対照的な状況を表します。',
  },
  {
    id: 'gram-704',
    type: 'grammar',
    content:
      'The employee _____ designed the new interface received a commendation from the CEO.',
    choices: ['who', 'whom', 'whose', 'which'],
    answer: 'who',
    explanation:
      '関係代名詞 who（先行詞が人・主格）が正解です。先行詞 the employee を修飾し、その後に動詞 designed が続くため主格の who を使います。',
  },
  {
    id: 'gram-705',
    type: 'grammar',
    content:
      'The candidate _____ resume impressed the hiring manager was invited for an interview.',
    choices: ['whose', 'who', 'whom', 'which'],
    answer: 'whose',
    explanation:
      '所有格の関係代名詞 whose（先行詞が人・所有格）が正解です。candidate の resume（履歴書）という所有関係を表します。',
  },
  {
    id: 'gram-706',
    type: 'grammar',
    content:
      'The consultant _____ the company hired had extensive experience in mergers.',
    choices: ['whom', 'who', 'whose', 'which'],
    answer: 'whom',
    explanation:
      '目的格の関係代名詞 whom（先行詞が人・目的格）が正解です。hired の目的語となる先行詞を修飾するため whom を使います。',
  },
  {
    id: 'gram-707',
    type: 'grammar',
    content:
      'The contract _____ was signed last month includes a penalty clause.',
    choices: ['which', 'who', 'whom', 'whose'],
    answer: 'which',
    explanation:
      '関係代名詞 which（先行詞が物・主格）が正解です。先行詞 the contract を修飾し、後ろに was signed という動詞句が続くため主格の which を使います。',
  },
  {
    id: 'gram-708',
    type: 'grammar',
    content:
      'The software _____ the IT department recommended was too expensive for our budget.',
    choices: ['that', 'who', 'whom', 'whose'],
    answer: 'that',
    explanation:
      '関係代名詞 that（先行詞が物・目的格）が正解です。recommended の目的語に当たる先行詞を修飾します。物を指す場合、which または that を使います。',
  },
  {
    id: 'gram-709',
    type: 'grammar',
    content:
      'The branch office _____ the merger will be announced is in Singapore.',
    choices: ['where', 'which', 'when', 'that'],
    answer: 'where',
    explanation:
      '関係副詞 where（場所を表す先行詞）が正解です。the branch office という場所を先行詞とし、そこでアナウンスが行われることを表します。',
  },
  {
    id: 'gram-710',
    type: 'grammar',
    content:
      'The quarter _____ the company achieved its highest revenue was the third quarter.',
    choices: ['when', 'where', 'which', 'whose'],
    answer: 'when',
    explanation:
      '関係副詞 when（時を表す先行詞）が正解です。the quarter という時間的先行詞を修飾します。',
  },
  {
    id: 'gram-711',
    type: 'grammar',
    content:
      'The auditor explained the reason _____ the discrepancy had gone unnoticed.',
    choices: ['why', 'when', 'where', 'which'],
    answer: 'why',
    explanation:
      '関係副詞 why（理由を表す先行詞 the reason）が正解です。the reason why〜（〜という理由）という形で使います。',
  },
  {
    id: 'gram-712',
    type: 'grammar',
    content:
      'The manager promoted the employee _____ consistently delivered the best results.',
    choices: ['who', 'whom', 'whose', 'which'],
    answer: 'who',
    explanation:
      '主格の関係代名詞 who（先行詞が人）が正解です。the employee を先行詞とし、後ろに動詞 delivered が続くため主格の who を使います。',
  },
  {
    id: 'gram-713',
    type: 'grammar',
    content:
      'The vendor _____ products we tested last month has submitted a new proposal.',
    choices: ['whose', 'who', 'whom', 'which'],
    answer: 'whose',
    explanation:
      '所有格の関係代名詞 whose（先行詞が物または人・所有格）が正解です。vendor の products という所有関係を表します。',
  },
  {
    id: 'gram-714',
    type: 'grammar',
    content:
      'The department head to _____ I submitted the report approved it immediately.',
    choices: ['whom', 'who', 'whose', 'which'],
    answer: 'whom',
    explanation:
      '前置詞 to + 目的格関係代名詞 whom の形が正解です。フォーマルな文体では前置詞を関係代名詞の前に置き、to whom の形にします。',
  },
  {
    id: 'gram-715',
    type: 'grammar',
    content:
      'The project in _____ she invested three years was finally completed.',
    choices: ['which', 'that', 'whom', 'whose'],
    answer: 'which',
    explanation:
      '前置詞 in + 関係代名詞 which の形が正解です。前置詞を関係代名詞の前に置く場合は that は使えず、which を使います。',
  },
  {
    id: 'gram-716',
    type: 'grammar',
    content:
      'The CEO presented the annual report, _____ highlighted strong growth in all regions.',
    choices: ['which', 'that', 'who', 'whom'],
    answer: 'which',
    explanation:
      '非制限用法の関係代名詞 which（, which）が正解です。コンマの後に置かれ、先行詞の annual report に追加情報を加えます。非制限用法では that は使えません。',
  },
  {
    id: 'gram-717',
    type: 'grammar',
    content:
      'The finance director, _____ has 20 years of experience, will lead the audit.',
    choices: ['who', 'whom', 'whose', 'which'],
    answer: 'who',
    explanation:
      '非制限用法の関係代名詞 who（, who）が正解です。先行詞が人の場合、コンマの後に who を使い補足情報を加えます。',
  },
  {
    id: 'gram-718',
    type: 'grammar',
    content:
      'The new policy, _____ implementation begins next month, will affect all employees.',
    choices: ['whose', 'which', 'who', 'that'],
    answer: 'whose',
    explanation:
      '非制限用法の所有格関係代名詞 whose（, whose）が正解です。コンマの後に置かれ、the new policy の implementation という所有関係を表します。',
  },
  {
    id: 'gram-719',
    type: 'grammar',
    content:
      'The investor, _____ the board had been hoping to impress, left the meeting early.',
    choices: ['whom', 'who', 'whose', 'which'],
    answer: 'whom',
    explanation:
      '非制限用法の目的格関係代名詞 whom（, whom）が正解です。コンマの後に置かれ、impress の目的語に当たる先行詞を受けます。',
  },
  {
    id: 'gram-720',
    type: 'grammar',
    content:
      'The conference center, _____ the annual summit is held, was renovated last year.',
    choices: ['where', 'which', 'when', 'whose'],
    answer: 'where',
    explanation:
      '非制限用法の関係副詞 where（, where）が正解です。場所を表す先行詞 the conference center に対して補足情報を加えます。',
  },
  {
    id: 'gram-721',
    type: 'grammar',
    content:
      'The company hired a consultant _____ specializes in supply chain optimization.',
    choices: ['who', 'whom', 'whose', 'which'],
    answer: 'who',
    explanation:
      '主格の関係代名詞 who（先行詞が人）が正解です。先行詞 a consultant を修飾し、後ろに動詞 specializes が続くため主格の who を使います。',
  },
  {
    id: 'gram-722',
    type: 'grammar',
    content:
      'The report _____ findings were controversial was presented to the board.',
    choices: ['whose', 'which', 'who', 'that'],
    answer: 'whose',
    explanation:
      '所有格の関係代名詞 whose が正解です。the report の findings（調査結果）という所有関係を表します。先行詞が物でも whose は使えます。',
  },
  {
    id: 'gram-723',
    type: 'grammar',
    content:
      'The employees _____ the company relocated received generous relocation packages.',
    choices: ['whom', 'who', 'whose', 'which'],
    answer: 'whom',
    explanation:
      '目的格の関係代名詞 whom が正解です。relocated の目的語に当たる先行詞 the employees を修飾します。',
  },
  {
    id: 'gram-724',
    type: 'grammar',
    content:
      'The committee approved every proposal _____ was submitted before the deadline.',
    choices: ['that', 'who', 'whom', 'whose'],
    answer: 'that',
    explanation:
      '関係代名詞 that（先行詞が物・主格）が正解です。every や all など限定的な先行詞が続く場合、that が好まれます。',
  },
  {
    id: 'gram-725',
    type: 'grammar',
    content:
      'The department for _____ the budget has been allocated will begin hiring next quarter.',
    choices: ['which', 'that', 'whom', 'whose'],
    answer: 'which',
    explanation:
      '前置詞 for + 関係代名詞 which の形が正解です。前置詞を先行させる場合は that は使えず which を使います。',
  },
  {
    id: 'gram-726',
    type: 'grammar',
    content:
      'The analyst _____ predicted the market downturn was praised for her foresight.',
    choices: ['who', 'whom', 'whose', 'which'],
    answer: 'who',
    explanation:
      '主格の関係代名詞 who（先行詞が人）が正解です。the analyst を先行詞とし、後に動詞 predicted が続くため主格 who を使います。',
  },
  {
    id: 'gram-727',
    type: 'grammar',
    content:
      'The city _____ our headquarters is located has a thriving business community.',
    choices: ['where', 'which', 'when', 'that'],
    answer: 'where',
    explanation:
      '関係副詞 where（場所を表す先行詞）が正解です。the city という場所を先行詞とし、本社が所在する場所であることを表します。',
  },
  {
    id: 'gram-728',
    type: 'grammar',
    content:
      'The fiscal year _____ the company went public was extremely significant.',
    choices: ['when', 'where', 'which', 'whose'],
    answer: 'when',
    explanation:
      '関係副詞 when（時を表す先行詞）が正解です。the fiscal year という時間的な先行詞を修飾します。',
  },
  {
    id: 'gram-729',
    type: 'grammar',
    content:
      'The director explained the circumstances _____ the error had occurred.',
    choices: ['under which', 'for whom', 'by whose', 'with that'],
    answer: 'under which',
    explanation:
      '前置詞 under + 関係代名詞 which の形が正解です。「その状況のもとでエラーが起きた」という意味で、前置詞 under が文脈上必要です。',
  },
  {
    id: 'gram-730',
    type: 'grammar',
    content:
      'The executive, _____ approval is required, is currently traveling abroad.',
    choices: ['whose', 'who', 'whom', 'which'],
    answer: 'whose',
    explanation:
      '非制限用法の所有格関係代名詞 whose（, whose）が正解です。the executive の approval（承認）という所有関係を表す非制限的修飾です。',
  },
  {
    id: 'gram-731',
    type: 'grammar',
    content:
      'The IT infrastructure, _____ was upgraded last year, now supports remote work.',
    choices: ['which', 'that', 'who', 'whose'],
    answer: 'which',
    explanation:
      '非制限用法の関係代名詞 which（, which）が正解です。コンマを挟んで先行詞 the IT infrastructure に補足情報を追加します。非制限用法では that は使えません。',
  },
  {
    id: 'gram-732',
    type: 'grammar',
    content: 'The client _____ order was delayed has requested a full refund.',
    choices: ['whose', 'who', 'whom', 'which'],
    answer: 'whose',
    explanation:
      '所有格の関係代名詞 whose（先行詞が人・所有格）が正解です。the client の order（注文）という所有関係を表します。',
  },
  {
    id: 'gram-733',
    type: 'grammar',
    content:
      'The agreement _____ they reached after months of negotiation is legally binding.',
    choices: ['that', 'who', 'whose', 'whom'],
    answer: 'that',
    explanation:
      '目的格の関係代名詞 that（先行詞が物）が正解です。reached の目的語に当たる先行詞 the agreement を修飾します。which も可能ですが、that の方が自然です。',
  },
  {
    id: 'gram-734',
    type: 'grammar',
    content:
      'The manager with _____ I worked closely left the company last spring.',
    choices: ['whom', 'who', 'which', 'whose'],
    answer: 'whom',
    explanation:
      '前置詞 with + 目的格関係代名詞 whom の形が正解です。フォーマルな文体で前置詞を先行させる場合、目的格の whom を使います。',
  },
  {
    id: 'gram-735',
    type: 'grammar',
    content:
      'The warehouse _____ we store our inventory is located outside the city.',
    choices: ['where', 'which', 'that', 'whose'],
    answer: 'where',
    explanation:
      '関係副詞 where（場所を表す先行詞）が正解です。the warehouse という場所を先行詞とし、在庫を保管する場所であることを表します。',
  },
  {
    id: 'gram-736',
    type: 'grammar',
    content:
      'All employees _____ have not yet completed the compliance training must do so by Friday.',
    choices: ['who', 'whom', 'whose', 'which'],
    answer: 'who',
    explanation:
      '主格の関係代名詞 who（先行詞が人）が正解です。all employees を先行詞とし、後ろに have not completed という動詞句が続くため主格の who を使います。',
  },
  {
    id: 'gram-737',
    type: 'grammar',
    content:
      'The strategy _____ the board adopted proved to be highly effective.',
    choices: ['that', 'who', 'whose', 'whom'],
    answer: 'that',
    explanation:
      '目的格の関係代名詞 that（先行詞が物）が正解です。adopted の目的語に当たる先行詞 the strategy を修飾します。',
  },
  {
    id: 'gram-738',
    type: 'grammar',
    content:
      'The period _____ the company experienced its fastest growth was between 2018 and 2022.',
    choices: ['when', 'where', 'which', 'whose'],
    answer: 'when',
    explanation:
      '関係副詞 when（時を表す先行詞）が正解です。the period という時間的な先行詞を修飾します。in which と言い換えることもできます。',
  },
  {
    id: 'gram-739',
    type: 'grammar',
    content:
      'The HR director, _____ we consulted about the new policy, suggested several improvements.',
    choices: ['whom', 'who', 'whose', 'which'],
    answer: 'whom',
    explanation:
      '非制限用法の目的格関係代名詞 whom（, whom）が正解です。コンマを挟んで補足情報を加え、consulted の目的語として機能します。',
  },
  {
    id: 'gram-740',
    type: 'grammar',
    content:
      'The acquisition deal, _____ terms were kept confidential, closed last Thursday.',
    choices: ['whose', 'which', 'that', 'who'],
    answer: 'whose',
    explanation:
      '非制限用法の所有格関係代名詞 whose（, whose）が正解です。the acquisition deal の terms（条件）という所有関係を非制限的に修飾します。',
  },
  {
    id: 'gram-741',
    type: 'grammar',
    content:
      'The country _____ the new manufacturing plant will be built has favorable tax policies.',
    choices: ['where', 'which', 'when', 'whose'],
    answer: 'where',
    explanation:
      '関係副詞 where（場所を表す先行詞）が正解です。the country という場所を先行詞とし、工場建設の場所であることを表します。',
  },
  {
    id: 'gram-742',
    type: 'grammar',
    content:
      'The reason _____ the proposal was rejected remains unclear to the team.',
    choices: ['why', 'when', 'where', 'which'],
    answer: 'why',
    explanation:
      '関係副詞 why（理由を表す先行詞 the reason）が正解です。the reason why〜（〜という理由）の形で提案が却下された理由を表します。',
  },
  {
    id: 'gram-743',
    type: 'grammar',
    content:
      'The recruiter _____ contacted me about the position was very professional.',
    choices: ['who', 'whom', 'whose', 'which'],
    answer: 'who',
    explanation:
      '主格の関係代名詞 who（先行詞が人）が正解です。the recruiter を先行詞とし、後ろに動詞 contacted が続くため主格の who を使います。',
  },

  {
    id: 'gram-744',
    type: 'grammar',
    content:
      'If the company _____ more in R&D, it would have a competitive advantage.',
    choices: ['invested', 'invests', 'investing', 'will invest'],
    answer: 'invested',
    explanation:
      '仮定法過去の文です。現在の事実に反する仮定には過去形を使います。',
  },
  {
    id: 'gram-745',
    type: 'grammar',
    content:
      'If the negotiations _____ earlier, we would have signed the contract by now.',
    choices: ['had started', 'started', 'have started', 'would start'],
    answer: 'had started',
    explanation:
      '仮定法過去完了の文です。過去の事実に反する仮定には had + 過去分詞を使います。',
  },
  {
    id: 'gram-746',
    type: 'grammar',
    content: "I wish the board _____ our proposal at last month's meeting.",
    choices: ['had approved', 'approved', 'would approve', 'approves'],
    answer: 'had approved',
    explanation:
      'I wish + 仮定法過去完了の構文です。過去の実現しなかった願望を表します。',
  },
  {
    id: 'gram-747',
    type: 'grammar',
    content: 'If we _____ the deadline, we could submit the report on time.',
    choices: ['extended', 'extend', 'had extended', 'will extend'],
    answer: 'extended',
    explanation:
      '仮定法過去の文です。現在・未来の事実に反する仮定を表し、if節に過去形を使います。',
  },
  {
    id: 'gram-748',
    type: 'grammar',
    content:
      'The CEO acts as if he _____ the only person capable of making decisions.',
    choices: ['were', 'is', 'was', 'be'],
    answer: 'were',
    explanation:
      'as if + 仮定法過去の構文です。事実に反する様子を表す場合、be動詞はwereを用います。',
  },
  {
    id: 'gram-749',
    type: 'grammar',
    content:
      "It's time the marketing team _____ a new strategy for the Asian market.",
    choices: ['developed', 'develop', 'has developed', 'will develop'],
    answer: 'developed',
    explanation:
      "It's time + 仮定法過去の構文です。「もう〜すべき時だ」という意味で過去形を使います。",
  },
  {
    id: 'gram-750',
    type: 'grammar',
    content:
      'If the merger _____ approved, we would have expanded into three new markets.',
    choices: ['had been', 'was', 'were', 'has been'],
    answer: 'had been',
    explanation:
      '仮定法過去完了の受動態の文です。過去の実現しなかった仮定を表します。',
  },
  {
    id: 'gram-751',
    type: 'grammar',
    content:
      'I wish our logistics partner _____ more reliable shipping options.',
    choices: ['offered', 'offers', 'had offered', 'would offer'],
    answer: 'offered',
    explanation:
      'I wish + 仮定法過去の構文です。現在の事実に反する願望を表します。',
  },
  {
    id: 'gram-752',
    type: 'grammar',
    content:
      'The committee recommends that all employees _____ the compliance training by Friday.',
    choices: ['complete', 'completes', 'completed', 'completing'],
    answer: 'complete',
    explanation:
      'recommend that + 仮定法現在（原形）の構文です。提案・要求を表す動詞の後のthat節では動詞の原形を使います。',
  },
  {
    id: 'gram-753',
    type: 'grammar',
    content: 'If the budget _____ larger, we could hire more engineers.',
    choices: ['were', 'is', 'was', 'had been'],
    answer: 'were',
    explanation:
      '仮定法過去の文です。be動詞の仮定法過去はwereを使います（人称に関わらず）。',
  },
  {
    id: 'gram-754',
    type: 'grammar',
    content:
      'The supervisor suggested that the intern _____ the client presentation.',
    choices: ['prepare', 'prepares', 'prepared', 'preparing'],
    answer: 'prepare',
    explanation:
      'suggest that + 仮定法現在（原形）の構文です。提案を表す動詞の後のthat節では動詞の原形を使います。',
  },
  {
    id: 'gram-755',
    type: 'grammar',
    content:
      'If the factory had operated at full capacity, production _____ by 40 percent.',
    choices: [
      'would have increased',
      'would increase',
      'had increased',
      'increased',
    ],
    answer: 'would have increased',
    explanation:
      '仮定法過去完了の帰結節です。if節が had + p.p. のとき、主節は would have + p.p. になります。',
  },
  {
    id: 'gram-756',
    type: 'grammar',
    content: 'She talks as if she _____ all the details of the contract.',
    choices: ['knew', 'knows', 'had known', 'know'],
    answer: 'knew',
    explanation:
      'as if + 仮定法過去の構文です。現在の事実に反する様子を表すため過去形を使います。',
  },
  {
    id: 'gram-757',
    type: 'grammar',
    content:
      'The HR director requested that the applicant _____ a background check form.',
    choices: ['submit', 'submits', 'submitted', 'submitting'],
    answer: 'submit',
    explanation:
      'request that + 仮定法現在（原形）の構文です。要求を表す動詞の後のthat節では動詞の原形を使います。',
  },
  {
    id: 'gram-758',
    type: 'grammar',
    content:
      'If the investor _____ the risk report beforehand, he might not have withdrawn.',
    choices: ['had read', 'read', 'has read', 'would read'],
    answer: 'had read',
    explanation:
      '仮定法過去完了の文です。過去の実現しなかった仮定を表し、if節にはhad + 過去分詞を使います。',
  },
  {
    id: 'gram-759',
    type: 'grammar',
    content: 'I wish the conference _____ held in a more accessible location.',
    choices: ['were', 'is', 'was', 'had been'],
    answer: 'were',
    explanation:
      'I wish + 仮定法過去の構文です。現在の事実に反する願望を表し、be動詞はwereを使います。',
  },
  {
    id: 'gram-760',
    type: 'grammar',
    content:
      'The client insists that the delivery _____ made before the end of the month.',
    choices: ['be', 'is', 'was', 'will be'],
    answer: 'be',
    explanation:
      'insist that + 仮定法現在（原形）の構文です。要求・主張を表す動詞の後のthat節ではbe動詞の原形beを使います。',
  },
  {
    id: 'gram-761',
    type: 'grammar',
    content:
      'If the product launch _____ postponed, we would have missed the holiday season.',
    choices: ['had not been', 'was not', 'were not', 'has not been'],
    answer: 'had not been',
    explanation:
      '仮定法過去完了の否定形です。過去の事実に反する仮定を表すif節にはhad + been（受動態）を使います。',
  },
  {
    id: 'gram-762',
    type: 'grammar',
    content: "It's high time the company _____ its outdated IT infrastructure.",
    choices: ['upgraded', 'upgrades', 'has upgraded', 'upgrade'],
    answer: 'upgraded',
    explanation:
      "It's high time + 仮定法過去の構文です。「とっくに〜すべき時だ」という強調の意味を持ちます。",
  },
  {
    id: 'gram-763',
    type: 'grammar',
    content:
      'If the team _____ better communication tools, collaboration would improve dramatically.',
    choices: ['had', 'has', 'will have', 'having'],
    answer: 'had',
    explanation:
      '仮定法過去の文です。現在の事実に反する仮定を表し、if節には過去形を使います。',
  },
  {
    id: 'gram-764',
    type: 'grammar',
    content: 'The manager proposed that the team _____ weekly status meetings.',
    choices: ['hold', 'holds', 'held', 'holding'],
    answer: 'hold',
    explanation:
      'propose that + 仮定法現在（原形）の構文です。提案を表す動詞の後のthat節では動詞の原形を使います。',
  },
  {
    id: 'gram-765',
    type: 'grammar',
    content: 'She acts as if the project _____ already completed last week.',
    choices: ['had been', 'was', 'were', 'has been'],
    answer: 'had been',
    explanation:
      'as if + 仮定法過去完了の構文です。過去の事実に反する様子を表すためhad + p.p.を使います。',
  },
  {
    id: 'gram-766',
    type: 'grammar',
    content:
      'If the sales figures _____ more accurate, the forecast would have been reliable.',
    choices: ['had been', 'were', 'are', 'will be'],
    answer: 'had been',
    explanation:
      '仮定法過去完了の文です。過去の実現しなかった条件を表し、if節にはhad + been（過去分詞）を使います。',
  },
  {
    id: 'gram-767',
    type: 'grammar',
    content: 'I wish the vendor _____ us a better price on the bulk order.',
    choices: ['had given', 'gave', 'gives', 'would give'],
    answer: 'had given',
    explanation:
      'I wish + 仮定法過去完了の構文です。過去の実現しなかった願望を表します。',
  },
  {
    id: 'gram-768',
    type: 'grammar',
    content:
      'The board demands that a full audit _____ conducted before the acquisition.',
    choices: ['be', 'is', 'was', 'being'],
    answer: 'be',
    explanation:
      'demand that + 仮定法現在（原形）の構文です。要求を表す動詞の後のthat節ではbe動詞の原形beを使います。',
  },
  {
    id: 'gram-769',
    type: 'grammar',
    content:
      'If only the accounting department _____ the error in the quarterly report.',
    choices: ['had caught', 'caught', 'catches', 'would catch'],
    answer: 'had caught',
    explanation:
      'If only + 仮定法過去完了の構文です。過去への後悔や強い願望を表します。',
  },
  {
    id: 'gram-770',
    type: 'grammar',
    content:
      'If I _____ the CEO, I would restructure the entire sales department.',
    choices: ['were', 'am', 'was', 'be'],
    answer: 'were',
    explanation:
      '仮定法過去の文です。現在の事実に反する仮定を表し、be動詞はwereを使います（人称に関わらず）。',
  },
  {
    id: 'gram-771',
    type: 'grammar',
    content:
      'The union representative requested that overtime pay _____ increased by 10 percent.',
    choices: ['be', 'is', 'was', 'were'],
    answer: 'be',
    explanation:
      'request that + 仮定法現在（原形）の構文です。要求を表す動詞の後のthat節ではbe動詞の原形beを使います。',
  },
  {
    id: 'gram-772',
    type: 'grammar',
    content: "This quarter's revenue is _____ than the forecast predicted.",
    choices: ['higher', 'highest', 'high', 'more high'],
    answer: 'higher',
    explanation:
      '比較級の文です。2つのものを比較する場合、形容詞にerを付けた比較級を使います。',
  },
  {
    id: 'gram-773',
    type: 'grammar',
    content:
      'Our new office in Singapore is the _____ equipped branch in the Asia-Pacific region.',
    choices: ['best', 'better', 'more', 'most'],
    answer: 'best',
    explanation:
      '最上級の文です。3つ以上の中での最高を表すにはbestを使います（goodの最上級）。',
  },
  {
    id: 'gram-774',
    type: 'grammar',
    content:
      'The domestic market is not _____ large _____ the international market.',
    choices: ['as / as', 'so / than', 'more / than', 'as / than'],
    answer: 'as / as',
    explanation:
      'as ... as構文の否定形です。「〜ほど…でない」はnot as + 形容詞 + asで表します。',
  },
  {
    id: 'gram-775',
    type: 'grammar',
    content:
      'The _____ the number of subscribers, the higher the advertising revenue.',
    choices: ['greater', 'greatest', 'great', 'greatly'],
    answer: 'greater',
    explanation:
      'the + 比較級, the + 比較級の構文です。「〜すればするほど…」を表します。',
  },
  {
    id: 'gram-776',
    type: 'grammar',
    content:
      'The project was completed _____ than expected, saving the client significant costs.',
    choices: ['sooner', 'soonest', 'soon', 'more soon'],
    answer: 'sooner',
    explanation:
      '比較級の文です。soonの比較級はsooner（不規則変化ではなく規則変化）を使います。',
  },
  {
    id: 'gram-777',
    type: 'grammar',
    content:
      'This is the _____ complex contract our legal team has ever reviewed.',
    choices: ['most', 'more', 'much', 'many'],
    answer: 'most',
    explanation:
      '最上級の文です。複数音節の形容詞の最上級はmost + 形容詞で表します。',
  },
  {
    id: 'gram-778',
    type: 'grammar',
    content:
      'Our customer satisfaction score is _____ as high as our closest competitor.',
    choices: ['twice', 'two times', 'double', 'second'],
    answer: 'twice',
    explanation:
      '倍数表現です。「2倍…と同じくらい」はtwice as + 形容詞 + asで表します。',
  },
  {
    id: 'gram-779',
    type: 'grammar',
    content: 'No _____ than 500 employees attended the annual company retreat.',
    choices: ['fewer', 'less', 'little', 'few'],
    answer: 'fewer',
    explanation:
      'no fewer than構文です。「少なくとも〜」という意味で、可算名詞の場合はfewerを使います。',
  },
  {
    id: 'gram-780',
    type: 'grammar',
    content:
      'The merger talks proved _____ difficult than either party had anticipated.',
    choices: ['more', 'most', 'much', 'many'],
    answer: 'more',
    explanation:
      '比較級の文です。difficultは多音節語のためmore difficultの形で比較級を作ります。',
  },
  {
    id: 'gram-781',
    type: 'grammar',
    content:
      'Among all the candidates, Ms. Tanaka demonstrated the _____ leadership potential.',
    choices: ['greatest', 'greater', 'great', 'greatly'],
    answer: 'greatest',
    explanation:
      '最上級の文です。3者以上の中での最高を表す場合はthe + 最上級を使います。',
  },
  {
    id: 'gram-782',
    type: 'grammar',
    content:
      'The revised budget is _____ three times _____ the original estimate.',
    choices: [
      'more than / as much as',
      'as much as / than',
      'less than / as',
      'no more / than',
    ],
    answer: 'more than / as much as',
    explanation:
      '倍数表現と比較の組み合わせです。「〜倍以上」はmore than + 数字 + times as much asで表します。',
  },
  {
    id: 'gram-783',
    type: 'grammar',
    content:
      'Processing time with the new system is three times _____ than with the old one.',
    choices: ['faster', 'fastest', 'fast', 'as fast'],
    answer: 'faster',
    explanation:
      '倍数比較級の文です。「〜倍より…だ」はtimes + 比較級 + thanで表します。',
  },
  {
    id: 'gram-784',
    type: 'grammar',
    content:
      'The _____ experienced the manager is, the more effectively the team performs.',
    choices: ['more', 'most', 'much', 'many'],
    answer: 'more',
    explanation:
      'the + 比較級, the + 比較級の構文です。「〜すればするほど…」を表します。',
  },
  {
    id: 'gram-785',
    type: 'grammar',
    content:
      'Our annual turnover was no _____ than $5 million last fiscal year.',
    choices: ['more', 'less', 'fewer', 'much'],
    answer: 'more',
    explanation:
      'no more than構文です。「せいぜい〜に過ぎない」という意味で、数量の上限を強調します。',
  },
  {
    id: 'gram-786',
    type: 'grammar',
    content:
      'The new production line is _____ efficient as the manual process.',
    choices: ['less', 'fewer', 'little', 'least'],
    answer: 'less',
    explanation:
      'less ... than構文です。「〜ほど…でない」という意味で、less + 形容詞を使います。',
  },
  {
    id: 'gram-787',
    type: 'grammar',
    content:
      'Customer retention is _____ important than customer acquisition for sustainable growth.',
    choices: ['more', 'most', 'much', 'many'],
    answer: 'more',
    explanation:
      '比較級の文です。importantは多音節語のためmore importantの形で比較級を作ります。',
  },
  {
    id: 'gram-788',
    type: 'grammar',
    content:
      'The Tokyo office is _____ than the Osaka office in terms of headcount.',
    choices: ['larger', 'largest', 'large', 'more large'],
    answer: 'larger',
    explanation:
      '比較級の文です。largeの比較級はlarger（語尾にrを付ける）です。',
  },
  {
    id: 'gram-789',
    type: 'grammar',
    content:
      'Of all the marketing channels, social media proved the _____ cost-effective.',
    choices: ['most', 'more', 'much', 'many'],
    answer: 'most',
    explanation:
      '最上級の文です。複数音節の形容詞の最上級はthe most + 形容詞で表します。',
  },
  {
    id: 'gram-790',
    type: 'grammar',
    content: "The company's profits grew _____ rapidly in Q3 than in Q2.",
    choices: ['more', 'most', 'much', 'very'],
    answer: 'more',
    explanation:
      '副詞の比較級の文です。rapidlyの比較級はmore rapidlyと表します。',
  },
  {
    id: 'gram-791',
    type: 'grammar',
    content:
      "This year's training program is as _____ as last year's in terms of content.",
    choices: [
      'comprehensive',
      'more comprehensive',
      'most comprehensive',
      'comprehensively',
    ],
    answer: 'comprehensive',
    explanation:
      'as ... as構文では形容詞の原形を使います。「〜と同じくらい…だ」を表します。',
  },
  {
    id: 'gram-792',
    type: 'grammar',
    content:
      'The _____ the competition, the greater the need for product differentiation.',
    choices: ['fiercer', 'fiercest', 'fierce', 'fiercely'],
    answer: 'fiercer',
    explanation:
      'the + 比較級, the + 比較級の構文です。「〜すればするほど…」を表します。',
  },
  {
    id: 'gram-793',
    type: 'grammar',
    content:
      'Our production costs are now _____ lower than those of our main competitor.',
    choices: ['significantly', 'significant', 'most', 'very'],
    answer: 'significantly',
    explanation:
      '比較級を修飾する副詞です。significantly（大幅に）は比較級の前に置いて程度を強調します。',
  },
  {
    id: 'gram-794',
    type: 'grammar',
    content:
      'No fewer _____ 200 applications were received for the director position.',
    choices: ['than', 'as', 'then', 'that'],
    answer: 'than',
    explanation:
      'no fewer than構文です。「少なくとも〜」という意味で、fewerの後にthanを続けます。',
  },
  {
    id: 'gram-795',
    type: 'grammar',
    content:
      'Sales in the European market were _____ better than projected for this quarter.',
    choices: ['considerably', 'considerable', 'most', 'so'],
    answer: 'considerably',
    explanation:
      '比較級を強調する副詞です。considerably（かなり）は比較級の前に置いて使います。',
  },
  {
    id: 'gram-796',
    type: 'grammar',
    content: 'The latest model is twice as _____ as its predecessor.',
    choices: ['powerful', 'more powerful', 'powerfully', 'most powerful'],
    answer: 'powerful',
    explanation:
      '倍数表現のas ... as構文では形容詞の原形を使います。twice as + 形容詞原形 + asの形になります。',
  },
  {
    id: 'gram-797',
    type: 'grammar',
    content: "The Q4 results were the _____ in the company's 20-year history.",
    choices: ['best', 'better', 'good', 'well'],
    answer: 'best',
    explanation: '最上級の文です。goodの最上級はbest（不規則変化）です。',
  },
  {
    id: 'gram-798',
    type: 'grammar',
    content:
      'The new recruitment process is _____ more streamlined than the old one.',
    choices: ['even', 'very', 'so', 'such'],
    answer: 'even',
    explanation:
      '比較級を強調する副詞です。evenは比較級の前に置いて「さらに」「一層」を表します。',
  },
  {
    id: 'gram-799',
    type: 'grammar',
    content:
      'Employee productivity here is three times _____ than at our other locations.',
    choices: ['higher', 'highest', 'high', 'as high'],
    answer: 'higher',
    explanation:
      '倍数比較級の文です。「〜倍より…だ」はtimes + 比較級 + thanで表します。',
  },
  {
    id: 'gram-800',
    type: 'grammar',
    content: 'The training budget this year is _____ than it was last year.',
    choices: ['higher', 'highest', 'high', 'as high'],
    answer: 'higher',
    explanation:
      '比較級の文です。2つのものを比較する場合、形容詞にerを付けた比較級とthanを使います。',
  },
  {
    id: 'gram-801',
    type: 'grammar',
    content:
      'The number of employees, _____ with contract workers, exceeds 500.',
    choices: ['together', 'along', 'combined', 'including'],
    answer: 'together',
    explanation:
      'together withは付帯表現です。主語はThe number of employeesのみで動詞は単数（exceeds）になります。',
  },
  {
    id: 'gram-802',
    type: 'grammar',
    content:
      'The director, along with his two assistants, _____ attending the summit next week.',
    choices: ['is', 'are', 'were', 'have been'],
    answer: 'is',
    explanation:
      'along withは付帯表現です。主語はThe directorのみ（単数）なので動詞はisになります。',
  },
  {
    id: 'gram-803',
    type: 'grammar',
    content:
      'Each of the regional managers _____ required to submit a monthly performance report.',
    choices: ['is', 'are', 'were', 'have been'],
    answer: 'is',
    explanation:
      'each of + 複数名詞は主語として単数扱いです。主語はeach（単数）なので動詞はisになります。',
  },
  {
    id: 'gram-804',
    type: 'grammar',
    content:
      'Neither the CFO nor the department heads _____ aware of the data breach.',
    choices: ['were', 'was', 'is', 'are'],
    answer: 'were',
    explanation:
      'neither A nor Bの主語動詞一致では、動詞はBに一致します。Bのdepartment heads（複数）に合わせてwereになります。',
  },
  {
    id: 'gram-805',
    type: 'grammar',
    content:
      'A number of clients _____ expressed concerns about the new pricing policy.',
    choices: ['have', 'has', 'is', 'was'],
    answer: 'have',
    explanation:
      'a number of + 複数名詞は複数扱いです。「多くの〜」という意味で複数動詞haveを使います。',
  },
  {
    id: 'gram-806',
    type: 'grammar',
    content:
      'The number of complaints received this quarter _____ declined significantly.',
    choices: ['has', 'have', 'are', 'were'],
    answer: 'has',
    explanation:
      'the number of + 複数名詞は単数扱いです。主語はthe number（単数）なので動詞はhasになります。',
  },
  {
    id: 'gram-807',
    type: 'grammar',
    content:
      'Every department head and team leader _____ expected to attend the strategy session.',
    choices: ['is', 'are', 'were', 'have been'],
    answer: 'is',
    explanation:
      'every A and B は単数扱いです。主語はevery...（単数）なので動詞はisになります。',
  },
  {
    id: 'gram-808',
    type: 'grammar',
    content:
      'The new equipment _____ arrived and is being installed on the factory floor.',
    choices: ['has', 'have', 'are', 'were'],
    answer: 'has',
    explanation:
      '不可算名詞のequipmentは単数扱いです。主語はequipment（単数）なので動詞はhasになります。',
  },
  {
    id: 'gram-809',
    type: 'grammar',
    content:
      'Either the project manager or the team members _____ responsible for the error.',
    choices: ['are', 'is', 'was', 'has been'],
    answer: 'are',
    explanation:
      'either A or Bの主語動詞一致では、動詞はBに一致します。Bのthe team members（複数）に合わせてareになります。',
  },
  {
    id: 'gram-810',
    type: 'grammar',
    content:
      'The financial information _____ been updated to reflect the latest market conditions.',
    choices: ['has', 'have', 'are', 'were'],
    answer: 'has',
    explanation:
      '不可算名詞のinformationは単数扱いです。主語はinformation（単数）なので動詞はhasになります。',
  },
  {
    id: 'gram-811',
    type: 'grammar',
    content:
      'The CEO, as well as the board members, _____ planning to visit the new facility.',
    choices: ['is', 'are', 'were', 'have been'],
    answer: 'is',
    explanation:
      'as well asは付帯表現です。主語はThe CEO（単数）なので動詞はisになります。',
  },
  {
    id: 'gram-812',
    type: 'grammar',
    content:
      'Neither the draft proposal nor the final report _____ been submitted yet.',
    choices: ['has', 'have', 'are', 'were'],
    answer: 'has',
    explanation:
      'neither A nor Bの主語動詞一致では、動詞はBに一致します。Bのthe final report（単数）に合わせてhasになります。',
  },
  {
    id: 'gram-813',
    type: 'grammar',
    content:
      'All the feedback from the customer survey _____ been compiled into a single report.',
    choices: ['has', 'have', 'are', 'were'],
    answer: 'has',
    explanation:
      '不可算名詞のfeedbackは単数扱いです。主語はfeedback（単数）なので動詞はhasになります。',
  },
  {
    id: 'gram-814',
    type: 'grammar',
    content:
      'Each product variant and its packaging _____ inspected before shipment.',
    choices: ['is', 'are', 'were', 'have been'],
    answer: 'is',
    explanation:
      'each A and Bは単数扱いです。eachが付くと全体が単数扱いになり、動詞はisになります。',
  },
  {
    id: 'gram-815',
    type: 'grammar',
    content:
      'The staff, together with the management, _____ agreed to the new work schedule.',
    choices: ['has', 'have', 'are', 'were'],
    answer: 'has',
    explanation:
      'together withは付帯表現です。主語はThe staff（集合名詞・単数扱い）なので動詞はhasになります。',
  },
  {
    id: 'gram-816',
    type: 'grammar',
    content:
      'A number of measures _____ been taken to improve workplace safety.',
    choices: ['have', 'has', 'is', 'was'],
    answer: 'have',
    explanation:
      'a number of + 複数名詞は複数扱いです。「多くの〜」という意味でhaveを使います。',
  },
  {
    id: 'gram-817',
    type: 'grammar',
    content:
      'Every piece of equipment in the laboratory _____ regularly calibrated.',
    choices: ['is', 'are', 'were', 'have been'],
    answer: 'is',
    explanation:
      'every + 単数名詞は単数扱いです。主語はevery piece（単数）なので動詞はisになります。',
  },
  {
    id: 'gram-818',
    type: 'grammar',
    content:
      'Neither the marketing strategy nor the product design _____ been finalized.',
    choices: ['has', 'have', 'are', 'were'],
    answer: 'has',
    explanation:
      'neither A nor Bの主語動詞一致では、動詞はBに一致します。Bのthe product design（単数）に合わせてhasになります。',
  },
  {
    id: 'gram-819',
    type: 'grammar',
    content:
      'The new software, along with its user manuals, _____ distributed to all employees.',
    choices: ['was', 'were', 'have been', 'are'],
    answer: 'was',
    explanation:
      'along withは付帯表現です。主語はThe new software（単数）なので動詞はwasになります。',
  },
  {
    id: 'gram-820',
    type: 'grammar',
    content:
      'Either the department manager or the team leader _____ responsible for approving leave requests.',
    choices: ['is', 'are', 'were', 'have been'],
    answer: 'is',
    explanation:
      'either A or Bの主語動詞一致では、動詞はBに一致します。Bのthe team leader（単数）に合わせてisになります。',
  },
  {
    id: 'gram-821',
    type: 'grammar',
    content:
      'The progress of the ongoing projects _____ reviewed every Friday.',
    choices: ['is', 'are', 'were', 'have been'],
    answer: 'is',
    explanation:
      '主語はThe progress（単数）です。of以下の修飾語に引きずられず、主語の核となる名詞に動詞を一致させます。',
  },
  {
    id: 'gram-822',
    type: 'grammar',
    content:
      'The research data _____ suggesting that consumer behavior has shifted significantly.',
    choices: ['is', 'are', 'were', 'have been'],
    answer: 'is',
    explanation:
      '不可算名詞のdata（この文脈では集合的に使用）は単数扱いです。主語はdata（単数）なのでisになります。',
  },
  {
    id: 'gram-823',
    type: 'grammar',
    content: 'All companies must _____ local environmental regulations.',
    choices: ['comply with', 'comply to', 'comply at', 'comply on'],
    answer: 'comply with',
    explanation:
      '前置詞のコロケーションです。comply withは「〜に従う、〜を遵守する」という固定表現です。',
  },
  {
    id: 'gram-824',
    type: 'grammar',
    content:
      'The sudden increase in demand could _____ supply chain disruptions.',
    choices: ['result in', 'result to', 'result on', 'result at'],
    answer: 'result in',
    explanation:
      '前置詞のコロケーションです。result inは「〜という結果になる」という固定表現です。',
  },
  {
    id: 'gram-825',
    type: 'grammar',
    content: 'The sales team needs to _____ the drop in customer renewals.',
    choices: ['account for', 'account to', 'account on', 'account with'],
    answer: 'account for',
    explanation:
      '前置詞のコロケーションです。account forは「〜を説明する、〜の理由を明らかにする」という固定表現です。',
  },
  {
    id: 'gram-826',
    type: 'grammar',
    content: 'The project is scheduled to begin _____ April 1st.',
    choices: ['on', 'in', 'at', 'by'],
    answer: 'on',
    explanation:
      '時間の前置詞です。特定の日付の前にはonを使います（on April 1st）。',
  },
  {
    id: 'gram-827',
    type: 'grammar',
    content:
      "The annual shareholders' meeting is held _____ the third quarter every year.",
    choices: ['in', 'on', 'at', 'during'],
    answer: 'in',
    explanation:
      '時間の前置詞です。quarter（四半期）などの期間の前にはinを使います。',
  },
  {
    id: 'gram-828',
    type: 'grammar',
    content: 'Please submit your expense reports _____ the end of the month.',
    choices: ['by', 'until', 'at', 'in'],
    answer: 'by',
    explanation:
      '時間の前置詞です。「〜までに」という期限を表す場合はbyを使います。untilは継続的な動作に使います。',
  },
  {
    id: 'gram-829',
    type: 'grammar',
    content:
      'The new branch office will be located _____ the financial district.',
    choices: ['in', 'on', 'at', 'by'],
    answer: 'in',
    explanation:
      '場所の前置詞です。地区・地域・都市などの広い場所にはinを使います。',
  },
  {
    id: 'gram-830',
    type: 'grammar',
    content:
      'The legal team is working _____ a solution to the patent dispute.',
    choices: ['on', 'at', 'in', 'for'],
    answer: 'on',
    explanation:
      '前置詞のコロケーションです。work onは「〜に取り組む」という固定表現です。',
  },
  {
    id: 'gram-831',
    type: 'grammar',
    content:
      '_____ addition to the base salary, employees receive a performance bonus.',
    choices: ['In', 'On', 'At', 'By'],
    answer: 'In',
    explanation:
      '前置詞句です。in addition toは「〜に加えて」という意味の固定表現です。',
  },
  {
    id: 'gram-832',
    type: 'grammar',
    content:
      'The merger was completed _____ spite of initial regulatory hurdles.',
    choices: ['in', 'on', 'at', 'by'],
    answer: 'in',
    explanation:
      '前置詞句です。in spite ofは「〜にもかかわらず」という意味の固定表現です。',
  },
  {
    id: 'gram-833',
    type: 'grammar',
    content:
      'The representative signed the contract _____ behalf of the company.',
    choices: ['on', 'in', 'at', 'by'],
    answer: 'on',
    explanation:
      '前置詞句です。on behalf ofは「〜を代表して、〜のために」という意味の固定表現です。',
  },
  {
    id: 'gram-834',
    type: 'grammar',
    content: 'The conference will be held _____ the Grand Hotel downtown.',
    choices: ['at', 'in', 'on', 'by'],
    answer: 'at',
    explanation:
      '場所の前置詞です。特定の建物・施設・地点を指す場合はatを使います。',
  },
  {
    id: 'gram-835',
    type: 'grammar',
    content:
      'Due _____ the economic downturn, the company revised its annual targets.',
    choices: ['to', 'for', 'on', 'at'],
    answer: 'to',
    explanation:
      '前置詞のコロケーションです。due toは「〜が原因で、〜のせいで」という意味の固定表現です。',
  },
  {
    id: 'gram-836',
    type: 'grammar',
    content:
      "The IT department is responsible _____ maintaining the company's network infrastructure.",
    choices: ['for', 'to', 'on', 'at'],
    answer: 'for',
    explanation:
      '前置詞のコロケーションです。responsible forは「〜に対して責任がある」という固定表現です。',
  },
  {
    id: 'gram-837',
    type: 'grammar',
    content:
      'The new policy will apply _____ all full-time and part-time employees.',
    choices: ['to', 'for', 'on', 'at'],
    answer: 'to',
    explanation:
      '前置詞のコロケーションです。apply toは「〜に適用される」という固定表現です。',
  },
  {
    id: 'gram-838',
    type: 'grammar',
    content:
      'The marketing team will present their strategy _____ Monday morning.',
    choices: ['on', 'in', 'at', 'by'],
    answer: 'on',
    explanation:
      '時間の前置詞です。特定の曜日の前にはonを使います（on Monday）。',
  },
  {
    id: 'gram-839',
    type: 'grammar',
    content:
      '_____ accordance with company policy, all purchases over $500 require approval.',
    choices: ['In', 'On', 'At', 'By'],
    answer: 'In',
    explanation:
      '前置詞句です。in accordance withは「〜に従って、〜に基づいて」という意味の固定表現です。',
  },
  {
    id: 'gram-840',
    type: 'grammar',
    content:
      'The client insisted _____ receiving a full refund for the defective products.',
    choices: ['on', 'for', 'to', 'at'],
    answer: 'on',
    explanation:
      '前置詞のコロケーションです。insist onは「〜を強く主張する、〜に固執する」という固定表現です。',
  },
  {
    id: 'gram-841',
    type: 'grammar',
    content: 'The company was fined _____ violating safety regulations.',
    choices: ['for', 'to', 'on', 'with'],
    answer: 'for',
    explanation:
      '前置詞のコロケーションです。be fined forは「〜の理由で罰金を科される」という固定表現です。',
  },
  {
    id: 'gram-842',
    type: 'grammar',
    content: 'The budget was cut _____ half due to the restructuring plan.',
    choices: ['by', 'to', 'in', 'at'],
    answer: 'by',
    explanation:
      '前置詞のコロケーションです。cut by halfは「半分に削減される」という表現で、割合・量の変化にはbyを使います。',
  },
  {
    id: 'gram-843',
    type: 'grammar',
    content:
      'The team worked _____ a tight deadline to deliver the final product on time.',
    choices: ['under', 'with', 'in', 'on'],
    answer: 'under',
    explanation:
      '前置詞のコロケーションです。work under a deadlineは「締め切りの下で働く、締め切りに追われながら働く」という表現です。',
  },
  {
    id: 'gram-844',
    type: 'grammar',
    content: 'The head office is located _____ the 15th floor of the building.',
    choices: ['on', 'in', 'at', 'by'],
    answer: 'on',
    explanation:
      '場所の前置詞です。フロア（階）の前にはonを使います（on the 15th floor）。',
  },
  {
    id: 'gram-845',
    type: 'grammar',
    content:
      'Our company was founded _____ 2005 by two former university professors.',
    choices: ['in', 'on', 'at', 'by'],
    answer: 'in',
    explanation: '時間の前置詞です。年の前にはinを使います（in 2005）。',
  },
  {
    id: 'gram-846',
    type: 'grammar',
    content:
      'Pursuant _____ the terms of the agreement, payment is due within 30 days.',
    choices: ['to', 'for', 'on', 'at'],
    answer: 'to',
    explanation:
      '前置詞のコロケーションです。pursuant toは法律・ビジネス文書で「〜に従って」という意味の固定表現です。',
  },
  {
    id: 'gram-847',
    type: 'grammar',
    content:
      'The new product was developed _____ response to customer feedback.',
    choices: ['in', 'on', 'at', 'by'],
    answer: 'in',
    explanation:
      '前置詞句です。in response toは「〜に対応して、〜に応えて」という意味の固定表現です。',
  },
  {
    id: 'gram-848',
    type: 'grammar',
    content:
      'The company succeeded _____ reducing operational costs by 20 percent.',
    choices: ['in', 'on', 'at', 'with'],
    answer: 'in',
    explanation:
      '前置詞のコロケーションです。succeed inは「〜に成功する」という固定表現です。',
  },
  {
    id: 'gram-849',
    type: 'grammar',
    content:
      'Please refer _____ the attached document for full details of the proposal.',
    choices: ['to', 'for', 'on', 'at'],
    answer: 'to',
    explanation:
      '前置詞のコロケーションです。refer toは「〜を参照する」という固定表現です。',
  },
  {
    id: 'gram-850',
    type: 'grammar',
    content:
      '_____ the contrary, the new regulation has actually benefited small businesses.',
    choices: ['On', 'In', 'At', 'By'],
    answer: 'On',
    explanation:
      '前置詞句です。on the contraryは「それどころか、むしろ反対に」という意味の固定表現です。',
  },
  {
    id: 'gram-851',
    type: 'grammar',
    content:
      'The merger deal fell _____ at the last minute due to disagreements over valuation.',
    choices: ['through', 'out', 'in', 'down'],
    answer: 'through',
    explanation:
      '前置詞のコロケーションです。fall throughは「（計画・交渉などが）失敗に終わる、頓挫する」という固定表現です。',
  },
  {
    id: 'gram-852',
    type: 'grammar',
    content:
      'The contract was awarded _____ the company with the most competitive bid.',
    choices: ['to', 'for', 'at', 'on'],
    answer: 'to',
    explanation:
      '前置詞のコロケーションです。award toは「〜に授与する・与える」という固定表現です。',
  },
  {
    id: 'gram-853',
    type: 'grammar',
    content:
      'The research findings are consistent _____ the predictions made in the initial report.',
    choices: ['with', 'to', 'for', 'on'],
    answer: 'with',
    explanation:
      '前置詞のコロケーションです。consistent withは「〜と一致している、〜と矛盾しない」という固定表現です。',
  },
  {
    id: 'gram-854',
    type: 'grammar',
    content:
      "The company's growth is attributable _____ its strong customer service culture.",
    choices: ['to', 'for', 'on', 'at'],
    answer: 'to',
    explanation:
      '前置詞のコロケーションです。attributable toは「〜に起因する、〜のおかげだ」という固定表現です。',
  },
  {
    id: 'gram-855',
    type: 'grammar',
    content:
      'The new branch will cater _____ high-net-worth individual clients.',
    choices: ['to', 'for', 'on', 'at'],
    answer: 'to',
    explanation:
      '前置詞のコロケーションです。cater toは「〜のニーズに応える、〜に対応する」という固定表現です。',
  },
  {
    id: 'gram-856',
    type: 'grammar',
    content:
      'The audit team will look _____ all financial transactions from the past fiscal year.',
    choices: ['into', 'at', 'for', 'on'],
    answer: 'into',
    explanation:
      '前置詞のコロケーションです。look intoは「〜を調査する」という固定表現です。',
  },

  {
    id: 'gram-857',
    type: 'grammar',
    content:
      'The report _____ by the research team last quarter showed promising results.',
    choices: ['compiled', 'compiling', 'to compile', 'compile'],
    answer: 'compiled',
    explanation:
      '後置修飾の過去分詞です。名詞 report を後ろから修飾するとき、受動の意味を持つ場合は過去分詞を使います。',
  },
  {
    id: 'gram-858',
    type: 'grammar',
    content:
      '_____ all the client feedback, the project manager revised the proposal.',
    choices: ['Having reviewed', 'Reviewed', 'To review', 'Reviews'],
    answer: 'Having reviewed',
    explanation:
      '分詞構文（完了形）です。主節の動作より前に完了した動作を表すとき、Having + 過去分詞を使います。',
  },
  {
    id: 'gram-859',
    type: 'grammar',
    content:
      'The documents _____ in the safe were retrieved by the legal team this morning.',
    choices: ['stored', 'storing', 'store', 'to store'],
    answer: 'stored',
    explanation:
      '後置修飾の過去分詞です。documents が「保管される」という受動の関係にあるため、過去分詞 stored を使います。',
  },
  {
    id: 'gram-860',
    type: 'grammar',
    content:
      '_____ in the annual report, the company achieved record-breaking revenue last year.',
    choices: ['Written', 'Writing', 'Having written', 'Write'],
    answer: 'Written',
    explanation:
      '分詞構文の過去分詞です。Written in the annual report は「年次報告書に記載されているように」という意味の受動的な分詞構文です。',
  },
  {
    id: 'gram-861',
    type: 'grammar',
    content:
      'The executive team observed the employees _____ the new manufacturing process.',
    choices: ['demonstrating', 'demonstrated', 'to demonstrate', 'demonstrate'],
    answer: 'demonstrating',
    explanation:
      '知覚動詞 observed の補語として使う現在分詞です。「〜しているところを」という進行中の動作を表すとき現在分詞を使います。',
  },
  {
    id: 'gram-862',
    type: 'grammar',
    content:
      'The marketing team worked _____ to meet the product launch deadline.',
    choices: ['diligently', 'diligent', 'diligence', 'more diligent'],
    answer: 'diligently',
    explanation:
      '動詞 worked を修飾するので副詞 diligently（勤勉に）が正解です。形容詞 diligent は名詞を修飾します。',
  },
  {
    id: 'gram-863',
    type: 'grammar',
    content:
      'The _____ of the new software system took three months to complete.',
    choices: ['implementation', 'implement', 'implemented', 'implementally'],
    answer: 'implementation',
    explanation:
      '冠詞 The の後ろに来る主語の位置なので名詞 implementation（実装）が正解です。動詞 implement を名詞化した形です。',
  },
  {
    id: 'gram-864',
    type: 'grammar',
    content:
      'The CEO made an _____ decision to restructure the entire sales department.',
    choices: [
      'unprecedented',
      'precedent',
      'unprecedentedly',
      'unprecedentedness',
    ],
    answer: 'unprecedented',
    explanation:
      '名詞 decision を修飾する形容詞 unprecedented（前例のない）が正解です。副詞や名詞は名詞を直接修飾できません。',
  },
  {
    id: 'gram-865',
    type: 'grammar',
    content:
      'The negotiations proceeded _____ despite the initial disagreements between the two parties.',
    choices: ['smoothly', 'smooth', 'smoothness', 'smoother'],
    answer: 'smoothly',
    explanation:
      '動詞 proceeded を修飾するので副詞 smoothly（円滑に）が正解です。形容詞 smooth は名詞を修飾する役割を持ちます。',
  },
  {
    id: 'gram-866',
    type: 'grammar',
    content:
      'We need someone with _____ knowledge of international trade regulations.',
    choices: ['extensive', 'extent', 'extensively', 'extend'],
    answer: 'extensive',
    explanation:
      '名詞 knowledge を修飾する形容詞 extensive（広範な）が正解です。副詞 extensively は名詞を直接修飾できません。',
  },
  {
    id: 'gram-867',
    type: 'grammar',
    content:
      'The board approved the _____ of three new regional offices across Southeast Asia.',
    choices: ['establishment', 'establish', 'established', 'establishing'],
    answer: 'establishment',
    explanation:
      '冠詞 the と前置詞 of に挟まれた位置なので名詞 establishment（設立）が正解です。動詞 establish の名詞形です。',
  },
  {
    id: 'gram-868',
    type: 'grammar',
    content:
      'The human resources department announced a _____ review of all compensation packages.',
    choices: [
      'comprehensive',
      'comprehend',
      'comprehensively',
      'comprehension',
    ],
    answer: 'comprehensive',
    explanation:
      '名詞 review を修飾する形容詞 comprehensive（包括的な）が正解です。名詞 comprehension は「理解」という意味で文脈に合いません。',
  },
  {
    id: 'gram-869',
    type: 'grammar',
    content:
      'The consultant analyzed the data _____ before presenting her findings to the board.',
    choices: ['carefully', 'careful', 'carefulness', 'more careful'],
    answer: 'carefully',
    explanation:
      '動詞 analyzed を修飾するので副詞 carefully（注意深く）が正解です。形容詞 careful は述語補語または名詞修飾に使います。',
  },
  {
    id: 'gram-870',
    type: 'grammar',
    content:
      "The company's _____ strategy focuses on digital marketing and social media outreach.",
    choices: ['promotional', 'promote', 'promotion', 'promotionally'],
    answer: 'promotional',
    explanation:
      '名詞 strategy を修飾する形容詞 promotional（販促の）が正解です。名詞 promotion は形容詞的用法として直接後続の名詞を修飾できません。',
  },
  {
    id: 'gram-871',
    type: 'grammar',
    content:
      'The new employee demonstrated _____ in handling complex client inquiries.',
    choices: ['proficiency', 'proficient', 'proficiently', 'proficientness'],
    answer: 'proficiency',
    explanation:
      '動詞 demonstrated の目的語となる名詞 proficiency（熟練）が正解です。形容詞 proficient は名詞の位置には置けません。',
  },
  {
    id: 'gram-872',
    type: 'grammar',
    content:
      'All employees are required to complete the _____ training program by the end of the month.',
    choices: ['mandatory', 'mandate', 'mandatorily', 'mandating'],
    answer: 'mandatory',
    explanation:
      '名詞 training program を修飾する形容詞 mandatory（義務的な）が正解です。動詞 mandate は名詞の前に置けません。',
  },
  {
    id: 'gram-873',
    type: 'grammar',
    content:
      'The factory operates _____ to maximize productivity and minimize downtime.',
    choices: ['continuously', 'continuous', 'continuity', 'continue'],
    answer: 'continuously',
    explanation:
      '動詞 operates を修飾するので副詞 continuously（継続的に）が正解です。形容詞 continuous は名詞を修飾します。',
  },
  {
    id: 'gram-874',
    type: 'grammar',
    content:
      'There was a significant _____ in the number of customer complaints after the policy change.',
    choices: ['reduction', 'reduce', 'reduced', 'reducing'],
    answer: 'reduction',
    explanation:
      '冠詞 a と形容詞 significant の後ろに来る名詞 reduction（削減）が正解です。動詞 reduce は名詞として使えません。',
  },
  {
    id: 'gram-875',
    type: 'grammar',
    content:
      'The audit team examined the financial records _____ to identify any discrepancies.',
    choices: ['thoroughly', 'thorough', 'thoroughness', 'more thorough'],
    answer: 'thoroughly',
    explanation:
      '動詞 examined を修飾するので副詞 thoroughly（徹底的に）が正解です。形容詞 thorough は名詞を修飾します。',
  },
  {
    id: 'gram-876',
    type: 'grammar',
    content:
      'The _____ of the quarterly earnings report will be held on Friday afternoon.',
    choices: ['presentation', 'present', 'presented', 'presenting'],
    answer: 'presentation',
    explanation:
      '冠詞 The の後ろに続く主語の位置なので名詞 presentation（発表）が正解です。動詞 present の名詞形です。',
  },
  {
    id: 'gram-877',
    type: 'grammar',
    content:
      'The merger was _____ approved by shareholders at the annual general meeting.',
    choices: ['unanimously', 'unanimous', 'unanimity', 'more unanimous'],
    answer: 'unanimously',
    explanation:
      '受動態の動詞 was approved を修飾するので副詞 unanimously（全会一致で）が正解です。形容詞 unanimous は名詞を修飾します。',
  },
  {
    id: 'gram-878',
    type: 'grammar',
    content:
      'Her _____ approach to problem-solving has earned her recognition throughout the company.',
    choices: ['innovative', 'innovate', 'innovation', 'innovatively'],
    answer: 'innovative',
    explanation:
      '名詞 approach を修飾する形容詞 innovative（革新的な）が正解です。名詞 innovation は「イノベーション」という意味になります。',
  },
  {
    id: 'gram-879',
    type: 'grammar',
    content:
      'The contract specifies the _____ under which either party may terminate the agreement.',
    choices: ['conditions', 'conditional', 'conditionally', 'condition'],
    answer: 'conditions',
    explanation:
      '定冠詞 the の後ろで前置詞 under の目的語となる名詞 conditions（条件）が正解です。文脈上複数形が適切です。',
  },
  {
    id: 'gram-880',
    type: 'grammar',
    content:
      'The sales representative responded to every customer inquiry _____ and professionally.',
    choices: ['promptly', 'prompt', 'promptness', 'more prompt'],
    answer: 'promptly',
    explanation:
      '動詞 responded を修飾するので副詞 promptly（迅速に）が正解です。and で並列する professionally も副詞であることから副詞が正解と判断できます。',
  },
  {
    id: 'gram-881',
    type: 'grammar',
    content:
      'The workshop provided participants with _____ skills in project management.',
    choices: ['practical', 'practice', 'practically', 'practicing'],
    answer: 'practical',
    explanation:
      '名詞 skills を修飾する形容詞 practical（実践的な）が正解です。副詞 practically は「ほとんど」という意味にもなり文脈に合いません。',
  },
  {
    id: 'gram-882',
    type: 'grammar',
    content:
      'The _____ of a new customer loyalty program increased repeat sales by 20 percent.',
    choices: ['introduction', 'introduce', 'introduced', 'introducing'],
    answer: 'introduction',
    explanation:
      '冠詞 The の後ろに続く主語となる名詞 introduction（導入）が正解です。動詞 introduce の名詞形です。',
  },
  {
    id: 'gram-883',
    type: 'grammar',
    content:
      'The advertising campaign was _____ successful in reaching the target demographic.',
    choices: ['remarkably', 'remarkable', 'remarkability', 'remark'],
    answer: 'remarkably',
    explanation:
      '形容詞 successful を修飾するので副詞 remarkably（著しく）が正解です。形容詞が形容詞を修飾することはできません。',
  },
  {
    id: 'gram-884',
    type: 'grammar',
    content:
      'The finance department requires _____ documentation for all expense reimbursements.',
    choices: ['sufficient', 'sufficiency', 'sufficiently', 'suffice'],
    answer: 'sufficient',
    explanation:
      '名詞 documentation を修飾する形容詞 sufficient（十分な）が正解です。副詞 sufficiently は名詞を直接修飾できません。',
  },
  {
    id: 'gram-885',
    type: 'grammar',
    content:
      'The company has shown _____ growth in its European market over the past two years.',
    choices: ['substantial', 'substance', 'substantially', 'substantiate'],
    answer: 'substantial',
    explanation:
      '名詞 growth を修飾する形容詞 substantial（実質的な）が正解です。副詞 substantially は名詞を直接修飾できません。',
  },
  {
    id: 'gram-886',
    type: 'grammar',
    content:
      'Please respond to the invitation _____ so we can finalize the venue capacity.',
    choices: ['promptly', 'prompt', 'promptness', 'prompted'],
    answer: 'promptly',
    explanation:
      '命令文の動詞 respond を修飾するので副詞 promptly（迅速に）が正解です。形容詞 prompt は名詞を修飾します。',
  },
  {
    id: 'gram-887',
    type: 'grammar',
    content:
      'The _____ of the new data privacy policy will affect all departments within the organization.',
    choices: ['enforcement', 'enforce', 'enforced', 'enforcing'],
    answer: 'enforcement',
    explanation:
      '冠詞 The の後ろに続く主語の位置なので名詞 enforcement（施行）が正解です。動詞 enforce の名詞形です。',
  },
  {
    id: 'gram-888',
    type: 'grammar',
    content:
      'The team leader communicated the project requirements _____ to avoid any misunderstandings.',
    choices: ['clearly', 'clear', 'clarity', 'clearest'],
    answer: 'clearly',
    explanation:
      '動詞 communicated を修飾するので副詞 clearly（明確に）が正解です。名詞 clarity は「明確さ」という意味で動詞を修飾できません。',
  },
  {
    id: 'gram-889',
    type: 'grammar',
    content:
      'The merger is expected to generate _____ cost savings over the next five years.',
    choices: ['significant', 'significance', 'significantly', 'signify'],
    answer: 'significant',
    explanation:
      '名詞 cost savings を修飾する形容詞 significant（重要な）が正解です。副詞 significantly は名詞を直接修飾できません。',
  },
  {
    id: 'gram-890',
    type: 'grammar',
    content:
      'The HR department _____ applications from candidates with international experience.',
    choices: ['welcomes', 'welcome', 'welcoming', 'welcomed'],
    answer: 'welcomes',
    explanation:
      '主語 The HR department（三人称単数）に対する現在形の動詞なので三単現の s が付いた welcomes が正解です。',
  },
  {
    id: 'gram-891',
    type: 'grammar',
    content:
      'The _____ feedback from clients helped the development team improve the application.',
    choices: ['constructive', 'construct', 'construction', 'constructively'],
    answer: 'constructive',
    explanation:
      '名詞 feedback を修飾する形容詞 constructive（建設的な）が正解です。名詞 construction は「建設・建築」という意味で文脈に合いません。',
  },
  {
    id: 'gram-892',
    type: 'grammar',
    content:
      'The proposal was _____ rejected by the investment committee due to insufficient data.',
    choices: ['ultimately', 'ultimate', 'ultimatum', 'more ultimate'],
    answer: 'ultimately',
    explanation:
      '受動態の動詞句 was rejected を修飾するので副詞 ultimately（最終的に）が正解です。名詞 ultimatum は「最後通牒」という意味です。',
  },
  {
    id: 'gram-893',
    type: 'grammar',
    content:
      'The company needs to _____ its supply chain to reduce operational costs.',
    choices: ['streamline', 'streamlined', 'streamlining', 'streamlines'],
    answer: 'streamline',
    explanation:
      'to 不定詞の後ろには動詞の原形が来ます。streamline（合理化する）の原形が正解です。',
  },
  {
    id: 'gram-894',
    type: 'grammar',
    content:
      "The director gave a _____ speech at the company's 50th anniversary celebration.",
    choices: ['memorable', 'memory', 'memorably', 'memorize'],
    answer: 'memorable',
    explanation:
      '名詞 speech を修飾する形容詞 memorable（記憶に残る）が正解です。副詞 memorably は名詞を直接修飾できません。',
  },
  {
    id: 'gram-895',
    type: 'grammar',
    content:
      'The customer service team handles all complaints _____ and with great care.',
    choices: ['efficiently', 'efficient', 'efficiency', 'more efficient'],
    answer: 'efficiently',
    explanation:
      '動詞 handles を修飾するので副詞 efficiently（効率的に）が正解です。and で並列する with great care も副詞句であることから副詞が正解と判断できます。',
  },
  {
    id: 'gram-896',
    type: 'grammar',
    content:
      'The _____ of the new product line exceeded the expectations of the marketing department.',
    choices: ['performance', 'perform', 'performed', 'performing'],
    answer: 'performance',
    explanation:
      '冠詞 The の後ろに続く主語の位置なので名詞 performance（パフォーマンス）が正解です。動詞 perform の名詞形です。',
  },
  {
    id: 'gram-897',
    type: 'grammar',
    content:
      'The training seminar was _____ attended by over two hundred employees across all divisions.',
    choices: ['well', 'good', 'goodness', 'better'],
    answer: 'well',
    explanation:
      '受動態の動詞句 was attended を修飾するので副詞 well が正解です。well-attended（多くの参加者が集まった）という形で使われます。',
  },
  {
    id: 'gram-898',
    type: 'grammar',
    content:
      'The new branch office will require _____ investment in infrastructure and technology.',
    choices: ['considerable', 'consider', 'considerably', 'consideration'],
    answer: 'considerable',
    explanation:
      '名詞 investment を修飾する形容詞 considerable（かなりの）が正解です。副詞 considerably は名詞を直接修飾できません。',
  },
  {
    id: 'gram-899',
    type: 'grammar',
    content:
      'The project manager _____ all team members about the revised timeline last Friday.',
    choices: ['notified', 'notify', 'notification', 'notifying'],
    answer: 'notified',
    explanation:
      '主語 The project manager に対する過去形の動詞 notified（通知した）が正解です。last Friday という過去を示す表現から過去形を選びます。',
  },
  {
    id: 'gram-900',
    type: 'grammar',
    content:
      'The financial analyst presented a _____ breakdown of the quarterly revenue figures.',
    choices: ['detailed', 'detail', 'detailing', 'detailedly'],
    answer: 'detailed',
    explanation:
      '名詞 breakdown を修飾する形容詞的な過去分詞 detailed（詳細な）が正解です。名詞 detail を形容詞として使うことはできません。',
  },
  {
    id: 'gram-901',
    type: 'grammar',
    content:
      'The company _____ a joint venture with a leading technology firm in Silicon Valley.',
    choices: ['announced', 'announcement', 'announcing', 'announces'],
    answer: 'announced',
    explanation:
      '主語 The company に対する過去形の動詞 announced（発表した）が正解です。名詞 announcement は述語動詞にはなれません。',
  },
  {
    id: 'gram-902',
    type: 'grammar',
    content:
      'It is _____ important that all staff members attend the mandatory safety training.',
    choices: ['vitally', 'vital', 'vitality', 'vitalize'],
    answer: 'vitally',
    explanation:
      '形容詞 important を修飾するので副詞 vitally（極めて）が正解です。形容詞が形容詞を修飾することはできません。',
  },
  {
    id: 'gram-903',
    type: 'grammar',
    content:
      'The _____ of the annual report must be approved by the board before distribution.',
    choices: ['content', 'contentment', 'contently', 'contented'],
    answer: 'content',
    explanation:
      '冠詞 The の後ろで主語となる名詞 content（内容）が正解です。contentment は「満足感」という意味で文脈に合いません。',
  },
  {
    id: 'gram-904',
    type: 'grammar',
    content:
      'The IT department has developed a _____ solution to address the network security issues.',
    choices: ['robust', 'robustness', 'robustly', 'robustify'],
    answer: 'robust',
    explanation:
      '名詞 solution を修飾する形容詞 robust（強固な）が正解です。副詞 robustly は名詞を直接修飾できません。',
  },
  {
    id: 'gram-905',
    type: 'grammar',
    content:
      'The accounting department _____ all invoices within 30 days of receipt.',
    choices: ['processes', 'process', 'processing', 'processed'],
    answer: 'processes',
    explanation:
      '主語 The accounting department（三人称単数）に対する現在形なので三単現の s が付いた processes が正解です。',
  },
  {
    id: 'gram-906',
    type: 'grammar',
    content:
      'The regional director made a _____ effort to visit each branch office personally.',
    choices: ['concerted', 'concert', 'concertedly', 'concerting'],
    answer: 'concerted',
    explanation:
      '名詞 effort を修飾する形容詞的な過去分詞 concerted（一致協力した）が正解です。a concerted effort は「一致団結した努力」という慣用表現です。',
  },
  {
    id: 'gram-907',
    type: 'grammar',
    content:
      'The product recall was handled _____ by the public relations department to minimize damage.',
    choices: ['swiftly', 'swift', 'swiftness', 'more swift'],
    answer: 'swiftly',
    explanation:
      '受動態の動詞句 was handled を修飾するので副詞 swiftly（迅速に）が正解です。形容詞 swift は名詞を修飾します。',
  },
  {
    id: 'gram-908',
    type: 'grammar',
    content:
      'Senior management is seeking candidates with _____ experience in supply chain management.',
    choices: ['proven', 'prove', 'proof', 'proving'],
    answer: 'proven',
    explanation:
      '名詞 experience を修飾する形容詞的な過去分詞 proven（実証された）が正解です。proof は名詞で「証拠」という意味です。',
  },
  {
    id: 'gram-909',
    type: 'grammar',
    content:
      'The _____ from the customer survey will be used to improve our service quality.',
    choices: ['insights', 'insightful', 'insightfully', 'insight'],
    answer: 'insights',
    explanation:
      '冠詞 The の後ろで主語となる名詞の複数形 insights（洞察、知見）が正解です。文脈上複数形が適切です。',
  },
  {
    id: 'gram-910',
    type: 'grammar',
    content:
      'The legal team reviewed the contract _____ before the signing ceremony.',
    choices: [
      'meticulously',
      'meticulous',
      'meticulousness',
      'more meticulous',
    ],
    answer: 'meticulously',
    explanation:
      '動詞 reviewed を修飾するので副詞 meticulously（細心の注意を払って）が正解です。形容詞 meticulous は名詞を修飾します。',
  },
  {
    id: 'gram-911',
    type: 'grammar',
    content:
      'The _____ in employee morale was evident after the new benefits package was introduced.',
    choices: ['improvement', 'improve', 'improved', 'improving'],
    answer: 'improvement',
    explanation:
      '冠詞 The の後ろで主語となる名詞 improvement（改善）が正解です。動詞 improve の名詞形です。',
  },
  {
    id: 'gram-912',
    type: 'grammar',
    content:
      "The proposal outlined an _____ plan for expanding the company's digital presence.",
    choices: ['ambitious', 'ambition', 'ambitiously', 'ambitionize'],
    answer: 'ambitious',
    explanation:
      '名詞 plan を修飾する形容詞 ambitious（意欲的な）が正解です。名詞 ambition は「野心」という意味で名詞修飾には使えません。',
  },
  {
    id: 'gram-913',
    type: 'grammar',
    content:
      'All employees must _____ their identification badges at all times while on company premises.',
    choices: ['display', 'displayed', 'displaying', 'displays'],
    answer: 'display',
    explanation:
      '助動詞 must の後ろには動詞の原形が来ます。display（提示する）の原形が正解です。',
  },
  {
    id: 'gram-914',
    type: 'grammar',
    content:
      'The decision to outsource IT support proved to be _____ cost-effective for the company.',
    choices: ['highly', 'high', 'height', 'higher'],
    answer: 'highly',
    explanation:
      '形容詞 cost-effective を修飾するので副詞 highly（非常に）が正解です。形容詞 high は「高い」という意味で形容詞を修飾できません。',
  },
  {
    id: 'gram-915',
    type: 'grammar',
    content:
      'The _____ to launch the product in Asian markets was supported by extensive market research.',
    choices: ['decision', 'decide', 'decisive', 'decisively'],
    answer: 'decision',
    explanation:
      '冠詞 The の後ろで主語となる名詞 decision（決定）が正解です。後続の to 不定詞 to launch が decision を修飾しています。',
  },
  {
    id: 'gram-916',
    type: 'grammar',
    content:
      'The new regulation will _____ all companies to submit environmental impact reports annually.',
    choices: ['require', 'requirement', 'required', 'requiring'],
    answer: 'require',
    explanation:
      '助動詞 will の後ろには動詞の原形が来ます。require（要求する）の原形が正解です。',
  },
  {
    id: 'gram-917',
    type: 'grammar',
    content:
      'The conference room is _____ equipped with the latest presentation technology.',
    choices: ['fully', 'full', 'fullness', 'fuller'],
    answer: 'fully',
    explanation:
      '過去分詞 equipped を修飾するので副詞 fully（完全に）が正解です。形容詞 full は名詞を修飾します。',
  },
  {
    id: 'gram-918',
    type: 'grammar',
    content:
      "The company's _____ to customer satisfaction is reflected in its high retention rate.",
    choices: ['commitment', 'commit', 'committed', 'committing'],
    answer: 'commitment',
    explanation:
      '冠詞 The の後ろで主語となる名詞 commitment（コミットメント、取り組み）が正解です。後続の前置詞 to との組み合わせで「〜へのコミットメント」を表します。',
  },
  {
    id: 'gram-919',
    type: 'grammar',
    content:
      'The market research team conducts _____ surveys to track consumer preferences.',
    choices: ['periodic', 'period', 'periodically', 'periodical'],
    answer: 'periodic',
    explanation:
      '名詞 surveys を修飾する形容詞 periodic（定期的な）が正解です。副詞 periodically は名詞を直接修飾できません。periodical は名詞（定期刊行物）としての用法が主です。',
  },
  {
    id: 'gram-920',
    type: 'grammar',
    content:
      'The budget committee _____ additional funding for the marketing campaign next quarter.',
    choices: ['allocated', 'allocation', 'allocating', 'allocate'],
    answer: 'allocated',
    explanation:
      '主語 The budget committee に対する過去形の動詞 allocated（配分した）が正解です。名詞 allocation は述語動詞にはなれません。',
  },
  {
    id: 'gram-921',
    type: 'grammar',
    content:
      "The shareholders expressed _____ satisfaction with the company's financial performance.",
    choices: ['considerable', 'consider', 'considerably', 'consideration'],
    answer: 'considerable',
    explanation:
      '名詞 satisfaction を修飾する形容詞 considerable（かなりの）が正解です。副詞 considerably は名詞を直接修飾できません。',
  },
  {
    id: 'gram-922',
    type: 'grammar',
    content:
      'The sales figures _____ that our new product line is resonating well with customers.',
    choices: ['indicate', 'indication', 'indicated', 'indicating'],
    answer: 'indicate',
    explanation:
      '主語 The sales figures（複数形）に対する現在形の動詞 indicate（示す）が正解です。現在の傾向を述べているので現在形を使います。',
  },
  {
    id: 'gram-923',
    type: 'grammar',
    content:
      'The company offered _____ incentives to retain its top-performing employees.',
    choices: ['generous', 'generosity', 'generously', 'generate'],
    answer: 'generous',
    explanation:
      '名詞 incentives を修飾する形容詞 generous（寛大な、手厚い）が正解です。副詞 generously は名詞を直接修飾できません。',
  },
  {
    id: 'gram-924',
    type: 'grammar',
    content:
      'The _____ of the new office building is scheduled for the end of next year.',
    choices: ['completion', 'complete', 'completed', 'completing'],
    answer: 'completion',
    explanation:
      '冠詞 The の後ろで主語となる名詞 completion（完成）が正解です。動詞 complete の名詞形です。',
  },
  {
    id: 'gram-925',
    type: 'grammar',
    content:
      'The IT security team responded _____ to the data breach and contained the threat.',
    choices: ['immediately', 'immediate', 'immediacy', 'more immediate'],
    answer: 'immediately',
    explanation:
      '動詞 responded を修飾するので副詞 immediately（即座に）が正解です。形容詞 immediate は名詞を修飾します。',
  },
  {
    id: 'gram-926',
    type: 'grammar',
    content:
      'The project team needs to _____ its progress to senior management on a weekly basis.',
    choices: ['report', 'reported', 'reporting', 'reports'],
    answer: 'report',
    explanation:
      'to 不定詞の後ろには動詞の原形が来ます。report（報告する）の原形が正解です。',
  },
  {
    id: 'gram-927',
    type: 'grammar',
    content:
      "The company's _____ approach to employee wellness has improved overall productivity.",
    choices: ['holistic', 'holism', 'holistically', 'holistically'],
    answer: 'holistic',
    explanation:
      '名詞 approach を修飾する形容詞 holistic（全体的な）が正解です。副詞 holistically は名詞を直接修飾できません。',
  },
  {
    id: 'gram-928',
    type: 'grammar',
    content:
      "The marketing director _____ a bold strategy that transformed the brand's image.",
    choices: ['devised', 'devise', 'devising', 'devised'],
    answer: 'devised',
    explanation:
      '主語 The marketing director に対する過去形の動詞 devised（考案した）が正解です。文脈が過去の出来事を説明していることから過去形を選びます。',
  },
  {
    id: 'gram-929',
    type: 'grammar',
    content:
      'The _____ of new safety regulations will be enforced starting from January 1st.',
    choices: ['implementation', 'implement', 'implementing', 'implemented'],
    answer: 'implementation',
    explanation:
      '冠詞 The の後ろで主語となる名詞 implementation（実施）が正解です。動詞 implement の名詞形です。',
  },
  {
    id: 'gram-930',
    type: 'grammar',
    content:
      'The CEO addressed the employees _____ before announcing the structural changes.',
    choices: ['personally', 'personal', 'personality', 'more personal'],
    answer: 'personally',
    explanation:
      '動詞 addressed を修飾するので副詞 personally（直接、個人的に）が正解です。形容詞 personal は名詞を修飾します。',
  },
  {
    id: 'gram-931',
    type: 'grammar',
    content:
      'The board expects the new CEO to bring _____ change to the organization.',
    choices: [
      'transformative',
      'transformation',
      'transformatively',
      'transform',
    ],
    answer: 'transformative',
    explanation:
      '名詞 change を修飾する形容詞 transformative（変革をもたらす）が正解です。名詞 transformation は「変革」という意味で名詞修飾には直接使えません。',
  },
  {
    id: 'gram-932',
    type: 'grammar',
    content:
      'The procurement team _____ bids from five different vendors for the equipment purchase.',
    choices: ['solicited', 'solicit', 'soliciting', 'solicitation'],
    answer: 'solicited',
    explanation:
      '主語 The procurement team に対する過去形の動詞 solicited（募集した）が正解です。名詞 solicitation は述語動詞にはなれません。',
  },
  {
    id: 'gram-933',
    type: 'grammar',
    content:
      "The company's _____ record in meeting project deadlines won it the prestigious contract.",
    choices: ['impressive', 'impression', 'impressively', 'impress'],
    answer: 'impressive',
    explanation:
      '名詞 record を修飾する形容詞 impressive（印象的な）が正解です。名詞 impression は「印象」という意味で名詞修飾には使えません。',
  },
  {
    id: 'gram-934',
    type: 'grammar',
    content:
      "Senior management will _____ the budget proposal at next week's board meeting.",
    choices: ['review', 'reviewed', 'reviewing', 'reviews'],
    answer: 'review',
    explanation:
      '助動詞 will の後ろには動詞の原形が来ます。review（審査する）の原形が正解です。',
  },
  {
    id: 'gram-935',
    type: 'grammar',
    content:
      'The _____ in the global supply chain led to significant delays in product deliveries.',
    choices: ['disruption', 'disrupt', 'disruptive', 'disruptively'],
    answer: 'disruption',
    explanation:
      '冠詞 The の後ろで主語となる名詞 disruption（混乱）が正解です。形容詞 disruptive は名詞を修飾します。',
  },
  {
    id: 'gram-936',
    type: 'grammar',
    content:
      'The employee handbook outlines the procedures for filing a _____ complaint.',
    choices: ['formal', 'form', 'formally', 'formality'],
    answer: 'formal',
    explanation:
      '名詞 complaint を修飾する形容詞 formal（正式な）が正解です。副詞 formally は名詞を直接修飾できません。',
  },
  {
    id: 'gram-937',
    type: 'grammar',
    content:
      'The company _____ an industry award for excellence in customer service last year.',
    choices: ['received', 'receive', 'receiving', 'reception'],
    answer: 'received',
    explanation:
      '主語 The company に対する過去形の動詞 received（受け取った）が正解です。last year という過去を示す表現から過去形を選びます。',
  },
  {
    id: 'gram-938',
    type: 'grammar',
    content:
      'The sales team must _____ all leads within 24 hours to maintain our response standards.',
    choices: ['follow up', 'followed up', 'following up', 'follows up'],
    answer: 'follow up',
    explanation:
      '助動詞 must の後ろには動詞の原形が来ます。follow up（フォローアップする）の原形が正解です。',
  },
  {
    id: 'gram-939',
    type: 'grammar',
    content:
      'The _____ between the two departments has greatly improved workflow efficiency.',
    choices: [
      'collaboration',
      'collaborate',
      'collaborative',
      'collaboratively',
    ],
    answer: 'collaboration',
    explanation:
      '冠詞 The の後ろで主語となる名詞 collaboration（協働）が正解です。動詞 collaborate の名詞形です。',
  },
  {
    id: 'gram-940',
    type: 'grammar',
    content:
      'The client was _____ impressed by the professionalism of our consulting team.',
    choices: ['extremely', 'extreme', 'extremity', 'more extreme'],
    answer: 'extremely',
    explanation:
      '形容詞 impressed を修飾するので副詞 extremely（非常に）が正解です。形容詞 extreme は名詞を修飾します。',
  },
  {
    id: 'gram-941',
    type: 'grammar',
    content:
      'The company plans to _____ its workforce by 15 percent over the coming fiscal year.',
    choices: ['expand', 'expansion', 'expanding', 'expanded'],
    answer: 'expand',
    explanation:
      'to 不定詞の後ろには動詞の原形が来ます。expand（拡大する）の原形が正解です。',
  },
  {
    id: 'gram-942',
    type: 'grammar',
    content:
      'The _____ of the new product was a collaborative effort between engineering and marketing.',
    choices: ['development', 'develop', 'developed', 'developer'],
    answer: 'development',
    explanation:
      '冠詞 The の後ろで主語となる名詞 development（開発）が正解です。動詞 develop の名詞形です。',
  },
  {
    id: 'gram-943',
    type: 'grammar',
    content:
      'Please ensure that all client data is stored _____ and in compliance with GDPR.',
    choices: ['securely', 'secure', 'security', 'more secure'],
    answer: 'securely',
    explanation:
      '受動態の動詞句 is stored を修飾するので副詞 securely（安全に）が正解です。形容詞 secure は名詞を修飾します。',
  },
  {
    id: 'gram-944',
    type: 'grammar',
    content:
      "The company's _____ growth strategy focuses on entering emerging markets in Asia.",
    choices: ['aggressive', 'aggression', 'aggressively', 'aggress'],
    answer: 'aggressive',
    explanation:
      '名詞 growth strategy を修飾する形容詞 aggressive（積極的な）が正解です。名詞 aggression は「攻撃性」という意味で文脈に合いません。',
  },
  {
    id: 'gram-945',
    type: 'grammar',
    content:
      'The operations manager _____ the team to adopt lean manufacturing principles.',
    choices: ['encouraged', 'encouragement', 'encouraging', 'encourage'],
    answer: 'encouraged',
    explanation:
      '主語 The operations manager に対する過去形の動詞 encouraged（促した）が正解です。名詞 encouragement は述語動詞にはなれません。',
  },
  {
    id: 'gram-946',
    type: 'grammar',
    content:
      'The annual performance review process is _____ structured to be fair and transparent.',
    choices: ['carefully', 'careful', 'carefulness', 'more careful'],
    answer: 'carefully',
    explanation:
      '受動態の動詞句 is structured を修飾するので副詞 carefully（注意深く）が正解です。形容詞 careful は名詞を修飾します。',
  },
  {
    id: 'gram-947',
    type: 'grammar',
    content:
      'The new procurement policy aims to _____ wasteful spending across all departments.',
    choices: ['eliminate', 'elimination', 'eliminating', 'eliminated'],
    answer: 'eliminate',
    explanation:
      'to 不定詞の後ろには動詞の原形が来ます。eliminate（排除する）の原形が正解です。',
  },
  {
    id: 'gram-948',
    type: 'grammar',
    content:
      "The _____ of the new corporate headquarters symbolizes the company's ambition for growth.",
    choices: ['construction', 'construct', 'constructive', 'constructing'],
    answer: 'construction',
    explanation:
      '冠詞 The の後ろで主語となる名詞 construction（建設）が正解です。形容詞 constructive は「建設的な」という意味で文脈に合いません。',
  },
  {
    id: 'gram-949',
    type: 'grammar',
    content:
      "The client _____ the team's dedication and attention to detail in the final presentation.",
    choices: ['appreciated', 'appreciate', 'appreciating', 'appreciation'],
    answer: 'appreciated',
    explanation:
      '主語 The client に対する過去形の動詞 appreciated（感謝した）が正解です。名詞 appreciation は述語動詞にはなれません。',
  },
  {
    id: 'gram-950',
    type: 'grammar',
    content:
      'The new policy requires employees to work _____ with colleagues from different cultural backgrounds.',
    choices: [
      'collaboratively',
      'collaborative',
      'collaboration',
      'collaborate',
    ],
    answer: 'collaboratively',
    explanation:
      '動詞 work を修飾するので副詞 collaboratively（協力して）が正解です。形容詞 collaborative は名詞を修飾します。',
  },
  {
    id: 'gram-951',
    type: 'grammar',
    content:
      'The revised budget allocates a _____ portion of funds to employee training and development.',
    choices: ['substantial', 'substance', 'substantially', 'substantiate'],
    answer: 'substantial',
    explanation:
      '名詞 portion を修飾する形容詞 substantial（相当な）が正解です。副詞 substantially は名詞を直接修飾できません。',
  },
  {
    id: 'gram-952',
    type: 'grammar',
    content:
      'Management _____ all employees to submit their expense reports by the 15th of each month.',
    choices: ['reminds', 'remind', 'reminder', 'reminding'],
    answer: 'reminds',
    explanation:
      '主語 Management（三人称単数扱い）に対する現在形なので三単現の s が付いた reminds が正解です。',
  },
  {
    id: 'gram-953',
    type: 'grammar',
    content:
      'The _____ conditions in the global economy have made it difficult to forecast future growth.',
    choices: ['volatile', 'volatility', 'volatilely', 'volatilize'],
    answer: 'volatile',
    explanation:
      '名詞 conditions を修飾する形容詞 volatile（不安定な）が正解です。名詞 volatility は「変動性」という意味で名詞修飾には使えません。',
  },
  {
    id: 'gram-954',
    type: 'grammar',
    content:
      'The marketing team crafted _____ content that resonated strongly with the target audience.',
    choices: ['compelling', 'compel', 'compelled', 'compellingly'],
    answer: 'compelling',
    explanation:
      '名詞 content を修飾する形容詞的な現在分詞 compelling（説得力のある）が正解です。副詞 compellingly は名詞を直接修飾できません。',
  },
  {
    id: 'gram-955',
    type: 'grammar',
    content:
      'The research and development team is responsible for _____ new technologies.',
    choices: ['exploring', 'explored', 'explore', 'exploration'],
    answer: 'exploring',
    explanation:
      '前置詞 for の後ろには動名詞が来ます。exploring（探求すること）が正解です。be responsible for doing で「〜する責任がある」という表現です。',
  },
  {
    id: 'gram-956',
    type: 'grammar',
    content:
      'The HR manager stressed the _____ of maintaining confidentiality in personnel matters.',
    choices: ['importance', 'important', 'importantly', 'importantness'],
    answer: 'importance',
    explanation:
      '冠詞 the と前置詞 of に挟まれた位置なので名詞 importance（重要性）が正解です。形容詞 important は名詞として使えません。',
  },
  {
    id: 'gram-957',
    type: 'grammar',
    content:
      'The company _____ its annual sustainability report to stakeholders last week.',
    choices: ['distributed', 'distribute', 'distributing', 'distribution'],
    answer: 'distributed',
    explanation:
      '主語 The company に対する過去形の動詞 distributed（配布した）が正解です。last week という過去を示す表現から過去形を選びます。',
  },
  {
    id: 'gram-958',
    type: 'grammar',
    content:
      'The new CEO is _____ committed to fostering a culture of inclusion and diversity.',
    choices: ['deeply', 'deep', 'depth', 'deeper'],
    answer: 'deeply',
    explanation:
      '形容詞 committed を修飾するので副詞 deeply（深く）が正解です。形容詞が形容詞を修飾することはできません。',
  },
  {
    id: 'gram-959',
    type: 'grammar',
    content:
      'The _____ between our company and local communities has strengthened our brand reputation.',
    choices: ['partnership', 'partner', 'partnering', 'partnered'],
    answer: 'partnership',
    explanation:
      '冠詞 The の後ろで主語となる名詞 partnership（パートナーシップ）が正解です。動詞 partner の名詞形です。',
  },
  {
    id: 'gram-960',
    type: 'grammar',
    content:
      'The board expects the management team to act _____ in all business dealings.',
    choices: ['ethically', 'ethical', 'ethics', 'more ethical'],
    answer: 'ethically',
    explanation:
      '動詞 act を修飾するので副詞 ethically（倫理的に）が正解です。形容詞 ethical は名詞を修飾します。',
  },
  {
    id: 'gram-961',
    type: 'grammar',
    content:
      "The quarterly earnings exceeded analysts' _____ by a significant margin.",
    choices: ['expectations', 'expect', 'expected', 'expecting'],
    answer: 'expectations',
    explanation:
      '動詞 exceeded の目的語となる名詞の複数形 expectations（期待）が正解です。動詞 expect の名詞形の複数形です。',
  },
  {
    id: 'gram-962',
    type: 'grammar',
    content:
      'The project was completed _____ despite the numerous challenges encountered along the way.',
    choices: ['successfully', 'successful', 'success', 'more successful'],
    answer: 'successfully',
    explanation:
      '受動態の動詞句 was completed を修飾するので副詞 successfully（うまく）が正解です。形容詞 successful は名詞を修飾します。',
  },
  {
    id: 'gram-963',
    type: 'grammar',
    content:
      'The _____ of the new ERP system will take place over the next six months.',
    choices: ['rollout', 'roll out', 'rolling out', 'rolled out'],
    answer: 'rollout',
    explanation:
      '冠詞 The の後ろで主語となる名詞 rollout（展開、導入）が正解です。複合名詞として一語で書きます。',
  },
  {
    id: 'gram-964',
    type: 'grammar',
    content:
      'The new regulation has made it _____ for businesses to report carbon emissions annually.',
    choices: ['mandatory', 'mandate', 'mandatorily', 'mandated'],
    answer: 'mandatory',
    explanation:
      'it is mandatory for ... to do という形式主語構文の補語の位置なので形容詞 mandatory（義務的な）が正解です。',
  },
  {
    id: 'gram-965',
    type: 'grammar',
    content:
      'The procurement specialist _____ three different vendors before selecting the best option.',
    choices: ['evaluated', 'evaluate', 'evaluation', 'evaluating'],
    answer: 'evaluated',
    explanation:
      '主語 The procurement specialist に対する過去形の動詞 evaluated（評価した）が正解です。名詞 evaluation は述語動詞にはなれません。',
  },
  {
    id: 'gram-966',
    type: 'grammar',
    content:
      'It is _____ that we finalize the contract before the fiscal year ends.',
    choices: ['imperative', 'imperatively', 'imperativeness', 'imperatively'],
    answer: 'imperative',
    explanation:
      'It is ... that の補語の位置なので形容詞 imperative（不可欠な）が正解です。副詞 imperatively は補語には使えません。',
  },
  {
    id: 'gram-967',
    type: 'grammar',
    content:
      'The audit revealed _____ discrepancies in the financial records from last year.',
    choices: ['several', 'severally', 'severity', 'severe'],
    answer: 'several',
    explanation:
      '複数名詞 discrepancies を修飾する数量形容詞 several（いくつかの）が正解です。形容詞 severe は「深刻な」という意味で文脈に合いません。',
  },
  {
    id: 'gram-968',
    type: 'grammar',
    content:
      "The company's _____ to the market was accelerated by strong demand from corporate clients.",
    choices: ['expansion', 'expand', 'expansive', 'expansively'],
    answer: 'expansion',
    explanation:
      '冠詞 The の後ろで主語となる名詞 expansion（拡大）が正解です。形容詞 expansive は「広大な」という意味で文脈に合いません。',
  },
  {
    id: 'gram-969',
    type: 'grammar',
    content:
      'The revised proposal was received _____ by all members of the executive committee.',
    choices: ['favorably', 'favorable', 'favor', 'more favorable'],
    answer: 'favorably',
    explanation:
      '受動態の動詞句 was received を修飾するので副詞 favorably（好意的に）が正解です。形容詞 favorable は名詞を修飾します。',
  },
  {
    id: 'gram-970',
    type: 'grammar',
    content:
      'The team leader must _____ all risks before proceeding with the project.',
    choices: ['assess', 'assessment', 'assessed', 'assessing'],
    answer: 'assess',
    explanation:
      '助動詞 must の後ろには動詞の原形が来ます。assess（評価する）の原形が正解です。',
  },
  {
    id: 'gram-971',
    type: 'grammar',
    content:
      'The _____ of the budget proposal surprised everyone at the board meeting.',
    choices: ['rejection', 'reject', 'rejected', 'rejecting'],
    answer: 'rejection',
    explanation:
      '冠詞 The の後ろで主語となる名詞 rejection（却下）が正解です。動詞 reject の名詞形です。',
  },
  {
    id: 'gram-972',
    type: 'grammar',
    content:
      'The employee benefits package was _____ redesigned to attract and retain top talent.',
    choices: ['completely', 'complete', 'completion', 'more complete'],
    answer: 'completely',
    explanation:
      '受動態の動詞句 was redesigned を修飾するので副詞 completely（完全に）が正解です。形容詞 complete は名詞を修飾します。',
  },
  {
    id: 'gram-973',
    type: 'grammar',
    content:
      'The executive team is looking to _____ a partnership with a leading logistics company.',
    choices: ['forge', 'forged', 'forging', "forge's"],
    answer: 'forge',
    explanation:
      'to 不定詞の後ろには動詞の原形が来ます。forge（築く）の原形が正解です。',
  },
  {
    id: 'gram-974',
    type: 'grammar',
    content:
      'The sales data revealed _____ trends in consumer behavior during the holiday season.',
    choices: ['interesting', 'interest', 'interested', 'interestingly'],
    answer: 'interesting',
    explanation:
      '名詞 trends を修飾する形容詞的な現在分詞 interesting（興味深い）が正解です。interested は「（人が）興味を持っている」という意味で文脈に合いません。',
  },
  {
    id: 'gram-975',
    type: 'grammar',
    content:
      'The _____ of the new product launch was overshadowed by an unexpected competitor announcement.',
    choices: ['excitement', 'excite', 'exciting', 'excited'],
    answer: 'excitement',
    explanation:
      '冠詞 The の後ろで主語となる名詞 excitement（興奮、期待感）が正解です。動詞 excite の名詞形です。',
  },
  {
    id: 'gram-976',
    type: 'grammar',
    content:
      'The legal department strongly _____ against signing the contract without further review.',
    choices: ['advised', 'advice', 'advising', 'advisory'],
    answer: 'advised',
    explanation:
      '主語 The legal department に対する過去形の動詞 advised（忠告した）が正解です。名詞 advice は述語動詞にはなれません。',
  },
  {
    id: 'gram-977',
    type: 'grammar',
    content:
      'The board has _____ approved the merger after months of due diligence.',
    choices: ['finally', 'final', 'finality', 'finalize'],
    answer: 'finally',
    explanation:
      '現在完了の動詞句 has approved を修飾するので副詞 finally（ついに）が正解です。形容詞 final は名詞を修飾します。',
  },
  {
    id: 'gram-978',
    type: 'grammar',
    content:
      "The _____ of the new pricing structure will be announced at next month's sales conference.",
    choices: ['introduction', 'introduce', 'introductory', 'introducing'],
    answer: 'introduction',
    explanation:
      '冠詞 The の後ろで主語となる名詞 introduction（導入）が正解です。形容詞 introductory は「入門的な」という意味で名詞として使えません。',
  },
  {
    id: 'gram-979',
    type: 'grammar',
    content:
      'The project coordinator _____ regular status updates to keep all stakeholders informed.',
    choices: ['provides', 'provision', 'providing', 'provided'],
    answer: 'provides',
    explanation:
      '主語 The project coordinator（三人称単数）に対する現在形なので三単現の s が付いた provides が正解です。',
  },
  {
    id: 'gram-980',
    type: 'grammar',
    content:
      'The financial model is _____ complex and requires specialist knowledge to interpret.',
    choices: ['highly', 'high', 'height', 'higher'],
    answer: 'highly',
    explanation:
      '形容詞 complex を修飾するので副詞 highly（非常に）が正解です。high は形容詞・副詞ですが「高く、高い」という物理的な意味が主で、程度副詞には highly を使います。',
  },
  {
    id: 'gram-981',
    type: 'grammar',
    content:
      "The company's _____ to environmental responsibility sets it apart from its competitors.",
    choices: ['dedication', 'dedicate', 'dedicated', 'dedicating'],
    answer: 'dedication',
    explanation:
      '冠詞 The の後ろで主語となる名詞 dedication（献身、取り組み）が正解です。動詞 dedicate の名詞形です。',
  },
  {
    id: 'gram-982',
    type: 'grammar',
    content:
      'The factory must _____ production levels to meet the increased demand from overseas markets.',
    choices: ['increase', 'increased', 'increasing', 'increment'],
    answer: 'increase',
    explanation:
      '助動詞 must の後ろには動詞の原形が来ます。increase（増やす）の原形が正解です。',
  },
  {
    id: 'gram-983',
    type: 'grammar',
    content:
      "The manager was _____ pleased with the team's performance during the product rollout.",
    choices: ['particularly', 'particular', 'particularity', 'more particular'],
    answer: 'particularly',
    explanation:
      '形容詞 pleased を修飾するので副詞 particularly（特に）が正解です。形容詞 particular は名詞を修飾します。',
  },
  {
    id: 'gram-984',
    type: 'grammar',
    content:
      'The _____ of a dedicated customer service hotline has significantly improved response times.',
    choices: ['launch', 'launched', 'launching', 'launcher'],
    answer: 'launch',
    explanation:
      '冠詞 The の後ろで主語となる名詞 launch（立ち上げ）が正解です。動詞 launch の名詞形です。',
  },
  {
    id: 'gram-985',
    type: 'grammar',
    content:
      'The vendor offered _____ payment terms to secure the large corporate account.',
    choices: ['flexible', 'flexibility', 'flexibly', 'flex'],
    answer: 'flexible',
    explanation:
      '名詞 payment terms を修飾する形容詞 flexible（柔軟な）が正解です。副詞 flexibly は名詞を直接修飾できません。',
  },
  {
    id: 'gram-986',
    type: 'grammar',
    content:
      'The department head _____ the new system to the team during the morning briefing.',
    choices: ['demonstrated', 'demonstration', 'demonstrating', 'demonstrate'],
    answer: 'demonstrated',
    explanation:
      '主語 The department head に対する過去形の動詞 demonstrated（実演した）が正解です。名詞 demonstration は述語動詞にはなれません。',
  },
  {
    id: 'gram-987',
    type: 'grammar',
    content:
      'The proposal was received _____ by the client, who requested only minor modifications.',
    choices: ['positively', 'positive', 'positivity', 'more positive'],
    answer: 'positively',
    explanation:
      '受動態の動詞句 was received を修飾するので副詞 positively（好意的に）が正解です。形容詞 positive は名詞を修飾します。',
  },
  {
    id: 'gram-988',
    type: 'grammar',
    content:
      'The finance team has worked _____ to prepare the year-end financial statements.',
    choices: ['tirelessly', 'tireless', 'tirelessness', 'more tireless'],
    answer: 'tirelessly',
    explanation:
      '現在完了の動詞句 has worked を修飾するので副詞 tirelessly（精力的に）が正解です。形容詞 tireless は名詞を修飾します。',
  },
  {
    id: 'gram-989',
    type: 'grammar',
    content:
      'The new onboarding program was designed to help employees _____ into their new roles quickly.',
    choices: ['transition', 'transitional', 'transitioning', 'transitioned'],
    answer: 'transition',
    explanation:
      'to 不定詞の後ろには動詞の原形が来ます。help someone do という構文で動詞の原形 transition（移行する）が正解です。',
  },
  {
    id: 'gram-990',
    type: 'grammar',
    content:
      'The negotiation team maintained a _____ stance throughout the contract discussions.',
    choices: ['firm', 'firmly', 'firmness', 'firmer'],
    answer: 'firm',
    explanation:
      '名詞 stance を修飾する形容詞 firm（毅然とした）が正解です。副詞 firmly は名詞を直接修飾できません。',
  },
  {
    id: 'gram-991',
    type: 'grammar',
    content:
      'The research team has been analyzing the data _____ for the past three weeks.',
    choices: ['extensively', 'extensive', 'extension', 'more extensive'],
    answer: 'extensively',
    explanation:
      '動詞 analyzing を修飾するので副詞 extensively（広範に、徹底的に）が正解です。形容詞 extensive は名詞を修飾します。',
  },
  {
    id: 'gram-992',
    type: 'grammar',
    content:
      'The _____ of the financial forecast depends on the accuracy of the underlying assumptions.',
    choices: ['reliability', 'reliable', 'reliably', 'rely'],
    answer: 'reliability',
    explanation:
      '冠詞 The の後ろで主語となる名詞 reliability（信頼性）が正解です。形容詞 reliable は「信頼できる」という意味で名詞として使えません。',
  },
  {
    id: 'gram-993',
    type: 'grammar',
    content:
      "The sales director _____ the team to exceed last year's record-breaking sales performance.",
    choices: ['challenged', 'challenge', 'challenging', 'challengeable'],
    answer: 'challenged',
    explanation:
      '主語 The sales director に対する過去形の動詞 challenged（挑戦させた）が正解です。challenge someone to do で「〜するよう奮起させる」という意味です。',
  },
  {
    id: 'gram-994',
    type: 'grammar',
    content:
      "The management team issued a _____ statement to reassure investors about the company's stability.",
    choices: ['reassuring', 'reassurance', 'reassuringly', 'reassured'],
    answer: 'reassuring',
    explanation:
      '名詞 statement を修飾する形容詞的な現在分詞 reassuring（安心させる）が正解です。名詞 reassurance は「安心感」という意味で名詞修飾には使えません。',
  },
  {
    id: 'gram-995',
    type: 'grammar',
    content:
      'All meeting rooms must be _____ after use to ensure availability for other teams.',
    choices: ['vacated', 'vacate', 'vacating', 'vacation'],
    answer: 'vacated',
    explanation:
      '受動態の must be の後ろには過去分詞が来ます。vacated（空けられた）が正解です。vacation は「休暇」という意味で文脈に合いません。',
  },
  {
    id: 'gram-996',
    type: 'grammar',
    content:
      'The company _____ a significant investment in cybersecurity infrastructure last fiscal year.',
    choices: ['made', 'make', 'making', 'makes'],
    answer: 'made',
    explanation:
      '主語 The company に対する過去形の動詞 made（した）が正解です。last fiscal year という過去を示す表現から過去形を選びます。',
  },
  {
    id: 'gram-997',
    type: 'grammar',
    content:
      'The team has _____ worked on this project for the past six months without interruption.',
    choices: ['been', 'be', 'being', 'is'],
    answer: 'been',
    explanation:
      '現在完了進行形（has been working）の構成要素として been が正解です。has + been + 現在分詞で継続中の動作を表します。',
  },
  {
    id: 'gram-998',
    type: 'grammar',
    content:
      'By the time the CEO arrived, the board members _____ discussing the agenda for over an hour.',
    choices: ['had been', 'have been', 'were', 'are'],
    answer: 'had been',
    explanation:
      '過去完了進行形（had been discussing）の構成要素として had been が正解です。By the time という過去の基準時点よりも前から継続していた動作を表す時制です。',
  },
  {
    id: 'gram-999',
    type: 'grammar',
    content:
      'The quarterly report _____ before the client requested it last Thursday.',
    choices: [
      'had already been sent',
      'has already been sent',
      'was already sent',
      'is already sent',
    ],
    answer: 'had already been sent',
    explanation:
      '過去完了の受動態（had already been sent）が正解です。過去の時点（last Thursday）よりも前に完了していた動作を表す時制です。',
  },
  {
    id: 'gram-1000',
    type: 'grammar',
    content:
      'The company _____ its annual revenue target by the end of September, two months ahead of schedule.',
    choices: ['surpassed', 'had surpassed', 'has surpassed', 'surpasses'],
    answer: 'surpassed',
    explanation:
      '単純過去形（surpassed）が正解です。過去の完了した出来事を述べており、過去完了を使うには過去の別の基準点が必要ですが、この文にはそれがありません。',
  },
];
