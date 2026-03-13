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
];
