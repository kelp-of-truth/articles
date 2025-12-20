---
title: Windows版Apple Musicが使いづらすぎる！！
tags:
  - Apple Music
  - 音楽
  - ソフトウェア
date: 2025-12-20
description: Windows版Apple Musicが使いづらすぎるので代替案を考えてみた。
thumbnail: https://kelpoftruth.com/articles/assets/media/tnXSRrSrXowHbA2H.jpg
---

## 前置き
まずAppleは自社OS以外のソフト開発が雑。特にWindows。iTunesもなかなかひどかったが、その代替として出てきたApple Musicはさらにひどい。UIは好みなのだが、如何せんバグが多い。そして重い。そんなわけでWindowsでApple Musicを聴く代替案をいくつか考えた。

## 動作環境
- OS: Windows10
- CPU: 12th Gen Intel(R) Core(TM) i7-12700K 3.60GHz
- メモリ: 32GB
- GPU: NVIDIA GeForce RTX 3070 (8GB)

## Web版Apple Music
まず真っ先に出て来るのがWeb版のApple Musicだ。[https://music.apple.com/jp/home](https://music.apple.com/jp/home)を開き、Apple Musicに契約しているiCloudアカウントでログインすればすぐ使える。
Web版は目立ったバグもなく、デスクトップ版よりも使いやすい。これで解決めでたしめでたし...とはならない。Web版Apple Musicは重大な問題を抱えている。それはハイレゾ音源に対応していないことだ。せっかくSpotifyより100円高いApple Musicに契約しているのに、ハイレゾ音源が再生できないのなら意味がない。
~~Apple Musicの最たる利点を潰してしまっている、こんなの論外である。~~
「そもそもハイレゾってなんだよ」って方にはWeb版がオススメ。というかぶっちゃけこれが安牌な気がする。

## FLACをダウンロードして聞く
グレーゾーンじゃんね。ブラック寄りのグレー。最悪アカウントが停止される可能性もある。私はSpotifyでこれをやってアカウントが凍結した、から怖くて試してない。気になる人は自己責任でやってみてネ。<br>
> [Appleメディアサービス利用規約](https://www.apple.com/legal/internet-services/itunes/jp/terms.html)

## Androidエミュレーター上で再生する
かなり回りくどい手。だがこれくらいする価値はあるのかもしれない。
AndroidエミュレーターをWindowsにインストールし、Androidの仮想環境上でGoogle PlayからApple Musicをインストールして使う。
この方法ならばハイレゾにも対応している[^1]。それに、バグまみれで重いデスクトップ版よりはAndroid版の方が使いやすい。
問題点は、何かとWindowsとの互換性がないことだ。例えば、再生/停止をするのにエミュレータのウィンドウにいちいちフォーカスをしなければならない。
まあエミュレータなのだから当たり前である。何かを得れば何かを失う…うん。

## Androidエミュレータってどれがいいの？
Windows上で動くAndroidエミュレータで私が知っているものだと、
[NoxPlayer](https://jp.bignox.com/)、
[BlueStacks](https://www.bluestacks.com/ja/index.html)、
[MuMuPlayer](https://www.mumuplayer.com/jp/)
がある。
Noxは起動が遅い、MuMuは他ゲーで普段使いしているので除外。よって消去法的にBlueStacksを選んだ。
ただ、消去法ではなくともBlueStacksが無難だろう。起動構成はOSがAndroid11、CPUは4コア、メモリが4GB。ここはお好みで。

<br>

**以下、戯言である。[まとめ](#まとめ)までスキップ推奨**

<br>

## そもそもApple Musicである必要
そもそもApple Musicである必要はあるのか？ハイレゾ音源で聴きたいならAmazon Musicでもいいはずだ。(プライム会員なら980円で契約できるらしいし。)
私はAmazon Musicユーザーではないため使用感はわからない。そこで、Windows版Amazon Musicをインストールし、少し触ってみたところロルバしだした。これはApple Musicよりもひどいかもしれない。

## Throw away Windows
Windows版を出してくれているだけAppleにも温情はあるのかもしれない。
だがここであえてWindowsOS搭載のPCの使用をやめてMacBookを使う。バグに悩まされる心配もないしハッピー。
~~これがAppleの囲い込み戦略である。~~
なによりスタバでイキれる(ここ大事)。

## まとめ

|   | メリット | デメリット  |
|---|---|---|
| **Web版** | 簡単。ステーションなどの機能も使える。 | ハイレゾに対応していない。曲のダウンロードができない。 |
| **FLAC保存** | ハイレゾに対応。オフラインでも聞ける。 | 利用規約的にグレーゾーンっぽい。PCの容量圧迫。 |
| **Androidエミュレータ** | ハイレゾに対応。ステーションなどの機能も使える。 | エミュレータの安全性は不明。PCの性能的に厳しい場合あり。アクセシビリティに難あり。 |

## 余談
人間の可聴範囲は広くても20\~20kHzと言われている[^2]。（私も19\~20kHzあたりを超えると聞こえなくなってくる。）
ハイレゾで96kHz出すことにこだわるのはロマンでしかないように思える。しかし、聞こえなくても効果はある[^2]らしいので全く無意味って訳でもなさそう。

## 参考
- [高音聞こえないオヤジにハイレゾ音源の意味はある？](https://pc.watch.impress.co.jp/docs/news/1083636.html)
- [Windows11にApple Music v1.4をインストールして使用してみた。](https://note.com/mellboard/n/nef64504cb7fd)
- [Apple MusicをArch Linux上で動かしたいのでWaydroidを使う](https://note.com/ruka64/n/n0d0c3318db84)
- [Appleメディアサービス利用規約](https://www.apple.com/legal/internet-services/itunes/jp/terms.html)


<br>

[^1]: WaveSpectraを使用して検証。
[^2]: [高音聞こえないオヤジにハイレゾ音源の意味はある？](https://pc.watch.impress.co.jp/docs/news/1083636.html)
