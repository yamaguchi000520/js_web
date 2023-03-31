//一文の場合は下記で良い
// const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
// const answers = [
//   'スーパーファミコン',
//   'プレステーション２',
//   'Nintendo Switch',
//   'ニンテンドーDS'
// ];
// const correct = 'ニンテンドーDS';

const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレステーション２',
      'Nintendo Switch',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: '伊藤成里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [
      'MOTHER2',
      'スーパーマリオブラザーズ３',
      'スーパードンキーコング',
      '星野カービー'
    ],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: [
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル'
    ],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// HTMLのタグから持ってくるものは頭文字に$をつける
const $button = document.getElementsByTagName('button');


// 同じ指示を一つの変数にまとめる
// document.getElementsByTagName('button')[0].textContent = answers[0];
// document.getElementsByTagName('button')[1].textContent = answers[1];
// document.getElementsByTagName('button')[2].textContent = answers[2];
// document.getElementsByTagName('button')[3].textContent = answers[3];


// リファクタリング：　同じようなものを１つにきれいにする
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

// $button[0].addEventListener('click', () => {
//   if (correct === $button[0].textContent) { // ===は一致するかを比較する
//     window.alert('正解');
//   } else {
//     window.alert('不正解');
//   }
// });

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent){ // ===は一致するかを比較する
    window.alert('正解');
    // 正解だったらscoreを１足す
    score++;
  } else {
    window.alert('不正解');
  }

  //次の問題に移動する
  quizIndex++;
  if(quizIndex < quizLength){
    //問題数がまだあるならこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解すうは' + score + '/' + quizLength + 'です');
  }

};



//ボタンをクリックしたら正誤判定
// $button[0].addEventListener('click', (e) => { //eとはeventのオブジェクト（今回はMouseEvent）
//   clickHandler(e);
// });

// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// });

// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// });

// $button[3].addEventListener('click', (e) => {
//   clickHandler(e);
// });

// while文に変換
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};