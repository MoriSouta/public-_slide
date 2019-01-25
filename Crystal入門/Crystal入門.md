<!-- $theme: gaia -->
<!-- page_number: true -->
<!-- template: invert -->


# Crystal 入門

---

## ■ 何するの？
- さっと触ってみたCrystalの紹介です。 
- 何番煎じかわからないけれど、やってみますよ！

---
## ■ キーワード
- Fast as C, slick as Ruby
- オブジェクト指向
- 静的型付け 型推論 コンパイラ言語
- Apache License 2.0
- 公式サイトはこちら https://crystal-lang.org/

---

## ■ インストールしてみる
- apt install crystal
- yum install crystal
- pacman -S crystal shards
- emerge -a dev-lang/crystal
- apk add crystal shards
- pkg install -y crystal shards
- brew install crystal

---
## ■ 記法
- Ruby風味でかける
- リファレンスはこちら 
 https://crystal-lang.org/reference/

---
#### いつもの
    p "hello world" 

#### 配列
    f=["+","1","2","3"]
   
#### メソッド
    def show( f )
        puts "-----------"
        f.each{ |d| p d }
        puts "-----------"
	end
---

同じソースでも動く
    
    ruby gava3.rb
    
    crystal gava3.rb

---
## ■ 気になった機能 
Cバインディング

---

## ■ 気になった機能 
マクロ

---

## ■ 気になった機能 
PlayGround

    crystal play
    
で起動できる。
ブラウザ上で軽く動かせるので便利？

---
## 終わり 


