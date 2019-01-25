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
並列処理

	channel = Channel(Int32).new
    spawn do
      puts "Before first send"
      channel.send(1)
      puts "Before second send"
      channel.send(2)
    end

---
## ■ 気になった機能 
並列処理

    puts "Before first receive"
    value = channel.receive
    puts value

    puts "-"*10

    puts "Before second receive"
    value = channel.receive
    puts value

---
## ■ 気になった機能 

	Before first receive
	Before first send
	1
	----------
	Before second receive
	Before second send
	2
    
---

## ■ 気になった機能 
マクロ

    macro define_method(name, content)
      def {{name}}
        {{content}}
      end
    end

	define_method foo, 1

	foo #=> 1

---

## ■ 気になった機能 
PlayGround

    crystal play
    
で起動できる。

ブラウザ上で軽く動かせるので便利？

---
## 終わり 


