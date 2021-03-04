const tileData = [
  [
    {
      name: 'start',
      extension: '.png',
      answer: 'START',
      text: {main: '英単語', sub: 'を入力してください（英大文字）'},
    },
  ],
  [
    {
      name: 'dog',
      extension: '.jpg',
      answer: [false, false, true, true, false, true, false, false, false],
      text: {main: '犬', sub: 'のタイルを選択してください'},
    },
    {
      name: 'fox',
      extension: '.jpg',
      answer: [false, false, true, false, false, true, false, false, true],
      text: {main: '狐', sub: 'のタイルを選択してください'},
    },
    {
      name: 'owl',
      extension: '.jpg',
      answer: [false, false, false, false, true, true, false, false, true],
      text: {main: '梟', sub: 'のタイルを選択してください'},
    },
  ],
  [
    {
      name: 'heart',
      extension: '.jpg',
      answer: [false, true, true, true, false, false, true, true, false],
      text: {main: 'ハート', sub: 'のタイルを選択してください'},
    },
    {
      name: 'smile',
      extension: '.jpg',
      answer: [false, false, true, true, true, true, true, false, false],
      text: {main: '笑顔', sub: 'のタイルを選択してください'},
    },
  ],
  [
    {
      name: 'zero',
      extension: '.png',
      answer: [false, false, true, false, false, true, true, false, true],
      text: {main: '0', sub: 'のタイルを選択してください'},
    },
    {
      name: 'two',
      extension: '.png',
      answer: [false, false, false, false, false, true, false, true, true],
      text: {main: '2', sub: 'のタイルを選択してください'},
    },
    {
      name: 'four',
      extension: '.png',
      answer: [false, false, true, false, false, true, true, true, false],
      text: {main: '4', sub: 'のタイルを選択してください'},
    },
    {
      name: 'six',
      extension: '.png',
      answer: [false, false, false, true, false, false, true, false, true],
      text: {main: '6', sub: 'のタイルを選択してください'},
    },
  ],
  [
    {
      name: 'last',
      extension: '.jpg',
      answer: [false, false, true, false, false, false, true, false, true],
      text: {main: 'あなたは人間ですか？', sub: '人間なら「はい」のタイルを選択してください'},
    }
  ],
];

export default tileData;