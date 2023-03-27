//チュートリアル

// 変数
let ab = 'Hello World!';

// 定数
const abYou = 'He..Hello...Hello World';
console.log(abYou);

// 配列
let inoki = ['ran', 'ran', 'ru'];

// ループ文
// let index = 0;
// while(index < 5){ //(...)の条件を満たしたら、{...}が実行される
//   //繰り返したい命令
//   console.log(index);
//   index++;
// }

// let index2 = 0;
// while(index2 < inoki.length){ //(...)の条件を満たしたら、{...}が実行される
//   //繰り返したい命令
//   console.log(inoki[index2]);
//   index2++;
// }

// if, else文
if(inoki.length > 3){ // ()の条件を満たしたら、{}が実行される
  console.log('マック');
} else {
  console.log('ブック');
}

//関数
//同じ命令を何度も使いたい時
//任意のタイミングで命令を実行させたい時
const test = () => {
  if(inoki.length > 3){ // ()の条件を満たしたら、{}が実行される
    console.log('マック');
  } else {
    console.log('ブック');
  }
};

test();

//引数
const test2 = (arg) => {
  if(inoki.length > arg){ // ()の条件を満たしたら、{}が実行される
    console.log('マック');
  } else {
    console.log('ブック');
  }
};

//オブジェクト
//オブジェクトはデータの塊
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  //関数を入れることも可能
  goToilet: () => {
    console.log('heven');
  }
};

console.log(unko2);
console.log(unko2.size);

//windowというオブジェクト
// ブラウザの全体が持つオブジェクト
console.log(window.innerHeight);  //高さ
window.alert('Hi');  //windowを開いた時ポップアップを出せる

//documentというオブジェクト
//HTML...表示しているページ
console.log(document.getElementsByTagName('button')); //htmlの決まったtagを指定して取得する

//event
//例として、ボタンをクリックしたらアクションを起こす
//event: ユーザーがアクションをしたタイミングで何かをしたい時に使う
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  window.alert('Hello World!');
}); //引数を２つ指定できる





