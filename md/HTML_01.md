# フロントメモ
## HTML
- <>：ブラケット
- 「html:5」か「!」で`tab` =>テンプレ
- 文章をマークアップして意味を与える
- マークアップしない：プレーンテキスト
- `<a>〜</a>`の形式で書かれている部分：要素（element）
- href= の形式で書かれている部分：属性（attribute）
  - `<h1 align="center">test text</h1>`　=> 要素（全体）
    - h1：要素名
    - align="center"：属性
    - align：属性名、center：属性値

### タグ
- `h`タグ
  - heading（見出し）
  - h1〜h6まで存在
  
- `p`タグ
  - paragraph（段落）
  - タグの前後に適当な余白が作られる
  - 段落なので改行が与えられる

- `br`タグ
  - break（改行）
  - 終了タグは不要

- `a`タグ
  - acchor（ハイパーリンク）
  - `<a href=''>~~~</a>`

- `img`タグ
  - image（画像）
  - `<img src='' alt=''/>`
  - `src`：画像のパス
  -  `alt`：代替テキスト（画像が表示されなかった時に代わりに表示、読み上げ機能）
    - srcはサーバ内の同じディレクトリ（フォルダ）、web上のURL
  - 終了タグなし
    ```
    <img src="http:/../../../2021-08-04-19-14-23.png" alt="○○のロゴ"/>
    ```

- `ul`タグ
  - unordered list（順序なしリスト）
  - 子要素は`li`タグ

    ```
    <ul> 
      <li>a</li> 
      <li>b</li> 
    </ul>
    ```
  - `ul`タグの中に`li`タグを6つ入れるというテンプレ
    ```
    ul>li*6
    ```
  - `ul`タグを`ol`タグにすると順序付きリストになる
  
- `table`タグ
  - 表
  - 子要素
    - tr（table row）：表の一行
    - th（table header）：表の見出し
    - td（table data）：表の中身

## Emmetテンプレ
- 繰り返しの書き方
  ```
  <h3>test</h3>
  <ul>
    <li>aaa</li>
    <li>bbb</li>
  </ul>
  ```
  こういうタグの記述をしたい場合
  ```
  h3+ul>li*2
  ```

- id記述の省略
  ```
  <h1 id="test"> </h1>
  ```
  こういうタグの記述をしたい場合
  ```
  h1#test
  ```