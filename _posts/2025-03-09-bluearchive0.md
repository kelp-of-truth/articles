---
layout: new_default
title: ブラウザのゲーム内告知にブラウザからアクセスができたと言う話
tags:
  - ゲーム
  - ブルーアーカイブ
  - ブルアカ
date: 2025-03-09
description: ブルアカのゲーム内告知に、ブラウザからアクセスをすることができた。それだけ。
---

## ゲーム内告知はwebページだった
ゲーム内告知(お知らせ)のフォントがゲーム内のものと違って、ウェブフォントらしきものだった。その他にも挙動がWebページに似ていたので色々試してみたらアクセスができた。
![ゲーム内告知(お知らせ)](https://kelpoftruth.com/articles/assets/media/e59jimr8xXeGUMZB.jpg)

<br>

当たり前だがWebページはHTMLで書かれていて、フォントはウェブフォントの[Kosugi Maru](https://fonts.google.com/specimen/Kosugi+Maru)を使用していた。
![ブラウザからアクセスしたもの](https://kelpoftruth.com/articles/assets/media/9DYaPri3Kw7bDD9b.png)
![文字のStyle](https://kelpoftruth.com/articles/assets/media/QFfXb2xfyUUZMCnB.png)






## 対策はしないのか？
CORSを使用すれば対策できそうではあるけど...アクセスされても問題ないのだろうか。とは言え、運営的にはブラウザからアクセスされることは想定していないと思うので、ドメインは伏せておく。
以下は`2025/3/9`時点で確認したときに来ていた告知のURLの一部だ。

```
prod/867/3244/index185687394.html
prod/869/3247/index982467491.html
prod/870/3250/index259833851.html
prod/871/3251/index898467098.html
```

`prod`はそのままの意味。prodの一つ下と更にその一つ下のディレクトリだが、ここは連番っぽく見えるものの番号が飛んでいる。
告知順に番号を振っているわけではなく、カテゴリーごとに分けられているのだろう。
ファイル名は`index[乱数].html`という形式になっているため、「過去の告知にアクセス仕放題！」みないなことはできなさそう。