const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
const answers = [
  'スーパーファミコン',
  'プレステーション２',
  'Nintendo Switch',
  'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';

console.log();

document.getElementById('js-question').textContent = question;

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

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  };
};

setupQuiz();

// $button[0].addEventListener('click', () => {
//   if (correct === $button[0].textContent) { // ===は一致するかを比較する
//     window.alert('正解');
//   } else {
//     window.alert('不正解');
//   }
// });

// $button[1].addEventListener('click', () => {
//   if (correct === $button[1].textContent) { // ===は一致するかを比較する
//     window.alert('正解');
//   } else {
//     window.alert('不正解');
//   }
// });

// $button[2].addEventListener('click', () => {
//   if (correct === $button[2].textContent) { // ===は一致するかを比較する
//     window.alert('正解');
//   } else {
//     window.alert('不正解');
//   }
// });

// $button[3].addEventListener('click', () => {
//   if (correct === $button[3].textContent) { // ===は一致するかを比較する
//     window.alert('正解');
//   } else {
//     window.alert('不正解');
//   }
// });

//ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', (e) => { //eとはeventのオブジェクト（今回はMouseEvent）
  if (correct === e.target.textContent) { // ===は一致するかを比較する
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
});


