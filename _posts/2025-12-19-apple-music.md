---
title: Windows版Apple Musicが使いづらすぎる！！
tags:
  - Apple Music
  - 音楽
  - ソフトウェア
date: 2025-12-19
description: Windows版Apple Musicが使いづらすぎるので代替案を考えてみた。
thumbnail: https://kelpoftruth.com/articles/assets/media/tnXSRrSrXowHbA2H.jpg
---

## 前置き
まずAppleは自社OS以外のソフト開発がお粗末。特にWindows。iTunesもなかなかひどかったが、その代替として出てきたApple Musicはさらにひどい。UIは好みなのだが、如何せんバグが多い。そして重い。そんなわけでWindowsでApple Musicを聴く代替案をいくつか考えた。

## 動作環境
- OS: Windows10
- CPU: 12th Gen Intel(R) Core(TM) i7-12700K 3.60GHz
- メモリ: 32GB
- GPU: NVIDIA GeForce RTX 3070 (8GB)

## Web版Apple Music
まず真っ先に出て来るのがWeb版のApple Musicだ。[https://music.apple.com/jp/home](https://music.apple.com/jp/home)を開き、Apple Musicに契約しているiCloudアカウントでログインすればすぐ使える。
Web版は目立ったバグもなく、デスクトップ版よりも使いやすい。これで解決めでたしめでたし...とはならない。Web版Apple Musicは重大な問題を抱えている。それはハイレゾ音源に対応していないことだ。せっかくSpotifyより100円高いApple Musicに契約しているのに、ハイレゾ音源が再生できないのなら意味がない。
~~Apple Musicの最たる利点を潰してしまっている、こんなの論外である。~~
「ハイレゾとかどうでもいいんだよ俺はApple製品との互換性がいいから使ってるんだよ。」「そもそもハイレゾってなんだよ」って方にはWeb版がオススメです。というかぶっちゃけこれが安牌。

## FLACをダウンロードして聞く
グレーゾーンじゃんね。最悪アカウントが停止される可能性もある。私はSpotifyでこれをやってアカウントが凍結した、から怖くて試してない。気になる人は自己責任でやってみて。

## Androidエミュレーター上で再生する
かなり回りくどい手。だがこれくらいする価値はあるのかもしれない。
AndroidエミュレーターをWindowsにインストールし、Androidの仮想環境上でGoogle PlayからApple Musicをインストールして使う。
この方法ならばハイレゾにも対応しているし、バグまみれで重いデスクトップ版よりはAndroid版の方が使いやすい。
問題点は何かとWindowsとの互換性がないことだ。例えば、再生/停止をするのにエミュレータのウィンドウにいちいちフォーカスしなければならない。
まあエミュレータなのだから当たり前である。何かを得れば何かを失う…うん。
## Androidエミュレータってどれがいいの？
Windows上で動くAndroidエミュレータで私が知っているものだと、
[NoxPlayer](https://jp.bignox.com/)、
[BluStacks](https://www.bluestacks.com/ja/index.html)、
[MuMuPlayer](https://www.mumuplayer.com/jp/)
がある。
Noxは起動が遅い、MuMuは他ゲーで普段使いしているので除外。よって消去法的にBluStacksを選んだ。
ただ、消去法ではなくともBluStacksが無難だろう。

