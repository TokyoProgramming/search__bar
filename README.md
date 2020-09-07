#はじめに

![検索バー.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/613406/87777dd9-9ba7-b94a-75ec-4717dcf373ab.png)

React + Flexbox + Material-UIを利用して、よくあるこのような検索フォームデザインを作りたいと思います。
このQiitaもそうですが、注意してみてみるとこのデザインの検索フォームって、本当に多いですよね。


##1.React構造
Reactの構造は以下のようにとてもシンプルにしています。
![コンポーネント.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/613406/fd143c0b-93b9-7d51-a478-681396ddea43.png)

Componentsディレクトリー内にSearch.jsファイルとSearch.cssファイルを作りました。



##2.Search.jsファイル

```Search.js
import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
    return (
        <div className="search">
            <div className='search__bar'>
                <SearchIcon />
                <input
                    className="search__bar__input"
                    placeholder="Search"
                />
            </div>
        </div>
      )
 }

 export default Search;
```



スタイリングしないと...
![normal.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/613406/1b7d2946-9406-0aea-86ce-8c44201de168.png)
きっとこれでは、だれでも検索してくれませんよね。（笑）



では、cssファイルで徐々にスタイリングしていきます。

##2.CSS スタイリング

いきなり結果を表示するのでなく、徐々に仕上げていきます。



######(1)
```Search.css
.search{
    display: flex;
    justify-content: center;
}
.search__bar{
    display: flex;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 999px;
    background-color: #f0f2f5;
}
```

![search-2.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/613406/c6f5edbe-c38a-9603-48bf-e26fc0e2cdc6.png)

まだ、醜いですね。。。

```border-radius: 999px```は、このようなフォームを作るときのテンプレートですので、覚えておくと便利です。
```border-radius: 1px``` から、遊んでみると徐々に角が完璧な丸になっていく様子がよくわかります。

######(2)inputのボーダーをなくす。

さて、こちらの付け加えると、

```Search.css
.search__bar > input {
    border: none !important;
    background-color: #f0f2f5;
}
```

ちょっといい感じになりましたが、選択すると、右側のように```border```がくっきり出てきてしまいます。
![search-3.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/613406/02486bec-3d56-50c1-f4d3-90bd438b4f90.png)

######(3)選択した際の```border```を消す

```Search.css
.search__bar > input:focus {
    outline-width: 0;
}
```

``input::focus``で``outline-width: 0;``設定することにより、 以下のように検索フォームを作成することができます。

![search-5.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/613406/837ec691-ba0d-c9e7-e220-0d325fef942f.png)


######(4)placeholderとMaterial-iconsを指定する方法。

```Search.css
.search__bar > input::placeholder{
    text-align: left;
    font-size: 15px;
}
.search__bar > .MuiSvgIcon-root {
    margin-right: 5px;
}

```

``input::placeholder``で、placehoderの文字をSearchを指定して、スタイリングできます。
``.MuiSvgIcon-root`` は、Material-iconsのアイコンを指定できます。


そして完成した、検索フォームがこちらです。
ちなみに背景色はFacebookの検索フォームと同じ色を使用しています。

![search-6.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/613406/45ccd984-85c4-f703-8f24-da53c270a55c.png)




```Search.css

.search{
    display: flex;
    justify-content: center;
}
.search__bar{
    display: flex;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 999px;
    background-color: #f0f2f5;
}
.search__bar > input {
    border: none !important;
    background-color: #f0f2f5;
}

.search__bar > input:focus {
    outline-width: 0;
}

.search__bar > input::placeholder{
    text-align: left;
    font-size: 15px;
}
.search__bar > .MuiSvgIcon-root {
    margin-right: 5px;
}
```

お疲れさまでした。
