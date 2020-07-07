---
tags: JavaScript 實戰班
---

# 第三週主線任務 - 產品管理頁面
第三週開始我們會開始接觸 Vue.js，在此階段同學可多練習 Vue.js 的各項語法及指令，目標先以完成一頁式的產品新增、刪除、修改的頁面（先不串接 API）。

![](https://i.imgur.com/oBgmStb.png)

![](https://i.imgur.com/pqo5PuX.jpg)


- 範例頁面 gh-page：https://hexschool.github.io/js-training-task/
- 範例程式碼 GitHub：https://github.com/hexschool/js-training-task

### 使用者故事

- 可以新增、編輯、刪除商品
- 商品啟用、關閉可以使用不同的顏色標示
- 商品欄位如下（請注意型別）
	- title：商品名稱 - string
	- category：商品分類 - string
	- content：商品敘述 - string
	- description：商品說明 - string
	- imageUrl：商品圖片 - string
	- enabled：是否上架 - boolean
	- origin_price：原價 - number(integer)
	- price：售價 - number(integer)
	- unit：單位 - string

### 任務說明：
- 依據使用者需求完成此作業

課程任務均有提供完整範例程式碼，如果開發上不是很順利可以參考範例程式碼來撰寫。
使用範例程式碼注意事項：
- **禁止直接使用範例程式碼提交**
- 如欲參考範例程式碼，請避免複製貼上，請自行重新撰寫
- 參考範例程式碼，請在繳交作業時附註：「本作業有參考範例程式碼」
- 參考範例程式碼，請在原始碼內補上註解，讓自己加深學習印象
```js
// 當判斷式接收到 sayYouLoveMe() 回傳 true 的結果時，則會運行接下來的陳述片段
if (sayYouLoveMe()) { console.log('說你愛我') };
```

### 提交難度挑戰：
- LV1：參考範例程式碼，並重新撰寫及補上註解（禁止複製範例程式碼）
- LV2：重新撰寫產品管理頁面
- LV3：產品內新增一個物件欄位 options，新增更多不同的設定在其中

options 範例：
```
options: {
  stars: 5,
  comments: [{
    name: '小明',
    avator: 'img url...',
    comment: '漂亮阿姨的餃子最好吃了'
  }]
}
```


### 繳交作業流程

1. 於[試算表](https://docs.google.com/spreadsheets/d/1DOk5jCqnz-y_z6M_aFaoNn3n-ayheFhQ6h2LLDzYaXg/edit#gid=0
)中登記繳交狀況

![](https://i.imgur.com/QIFVcDt.png)

2. 回程式勇者村 - 任務系統回報，並補上編號：https://rpg.hexschool.com/task/94/show


### 作業格式 & 常見 QA
- 繳交作業格式教學（可用 Codepen 與 GitHub Pages）：https://hackmd.io/@hexschool/HJDbvkFqU/%2FK6GUUl_pTRioN9ZpBCeqMQ

-[Demo](https://shaoyukao.github.io/2020-Hexschool-Exercise/%E7%AC%AC%E4%B8%89%E9%80%B1%2F%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/index.html)