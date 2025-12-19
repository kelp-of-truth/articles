---
title: ブルアカのゲーム内告知にブラウザからアクセスができたと言う話
tags:
  - ゲーム
  - ブルーアーカイブ
  - ブルアカ
date: 2025-03-09
description: ブルアカのゲーム内告知に、ブラウザからアクセスをすることができた。それだけ。
thumbnail: https://kelpoftruth.com/articles/assets/media/e59jimr8xXeGUMZB.jpg
---

## ゲーム内告知にブラウザからアクセス
ゲーム内告知(お知らせ)の挙動がWebページに似ていたので色々試してみたところブラウザからアクセスができた。

<br>

HTMLで書かれている。フォントはウェブフォントの[Kosugi Maru](https://fonts.google.com/specimen/Kosugi+Maru)。
![ブラウザからアクセスした告知ページ。簡単なHTMLで書かれている・](https://kelpoftruth.com/articles/assets/media/9DYaPri3Kw7bDD9b.png)
![文字のStyle。FontはKosugi Maruが使用されている。](https://kelpoftruth.com/articles/assets/media/QFfXb2xfyUUZMCnB.png)






## 対策はしないのか？
[CORS](https://developer.mozilla.org/ja/docs/Web/HTTP/Guides/CORS)を使用すれば対策できそうではあるが...アクセスされても問題ないのだろうか。
以下は`2025/3/9`時点で確認できた告知のURLの一部。

```
prod/867/3244/index185687394.html
prod/869/3247/index982467491.html
prod/870/3250/index259833851.html
prod/871/3251/index898467098.html
```

`prod`はそのままの意味。prodの一つ下と更にその一つ下のディレクトリだが、ここは連番っぽく見えるものの番号が飛んでいる。
告知順に番号を振っているわけではなく、カテゴリーごとに分けられているのだろう。
ファイル名は`index[乱数].html`という形式になっているため、過去のページにアクセスするのは困難。





## 調べたら他にも出てきた
Googleでさきほどのドメインとサブドメインを検索してみたところ、2021年くらいの告知が3つ見つかった。クローラのブロックはしていないらしい。~~雑過ぎない？~~
最近の告知は出てこなかったので、現在はすでにブロックしているのかもしれない。
