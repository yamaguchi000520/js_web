//即時関数はどのjavascriptを書くときも入れておいた方がよい
//これを無しにすると「グローバルを汚染する」という意味合いになる
(() => {
  //ここに命令を書く

  //変数名に＄マークはDOM要素から持ってくる
  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  //querySelectorAll: DOM要素の中から条件に当てはまるDOMを取得する
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');

  //initはinitializeの略で初期化の意味になる
  const init = () => {
    //style.の１つ目の要素だけみえるようにしたい none => block
    $content[0].style.display = 'block';
  };
  init();

  //クリックイベント
  const handleClick = (e) => {
    //e.prevetDefault(): リンク要素を無効化させることができる
    e.preventDefault();

    //クリックされたnavとそのdataを取得
    //そのDOM要素を取得できる
    const $this = e.target;

    //targetVal, dataset：そのDOM要素のデータ属性をとる   nav: 属性名
    const targetVal = $this.dataset.nav;

    //対象外のnav, content全て一旦リセットする
    let index = 0;
    while(index < $nav.length){
      $content[index].style.display = 'none';
      $nav[index].style.display = 'none';
      index++;
    }

    //対象のコンテンツをアクティブ化する  動的（１つの）にコンテンツを取得できる
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';

    //選択したnav(タブ)にis-activeのクラスを追加する
    $nav[targetVal].classList.add('is-active');




    console.log('targetVal', targetVal);
  };

  //全nav要素に対して関数を適応・発火
  let index = 0;
  while (index < $nav.length){
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
  }

  $nav[0].addEventListener('click', (e) => handleClick(e));



}) ();