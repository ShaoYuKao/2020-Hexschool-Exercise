---
tags: JavaScript 實戰班
---


## 第五週主線任務 - 表單驗證
第五週將會結合二、三週的概念，將課程的 API 結合 Vue 的介面進行開發。

![](https://i.imgur.com/MUBzXrN.png)

- 範例頁面 gh-page：https://hexschool.github.io/js-training-task/
- 範例程式碼 GitHub：https://github.com/hexschool/js-training-task
> 範例可下載，並替換成自己的 UUID 即可運作。

- 本週重點：
- 使用套件完成表單驗證功能
- 串接前台 API 完成購物車功能

### 使用者故事

- 串接 API 並可以呈現產品列表、加入購物車、購物車列表功能（**本作業僅需要使用前台 API**）
- **表單送出前進行表單驗證**（必要完成），驗證內容包含：
    - 姓名：必填
    - Email：須符合格式
    - 電話：必填，超過 8 碼，input type 為 tel
    - 地址：必填
    - 付款方式：WebATM、ATM、Barcode、Credit、ApplePay、GooglePay
    - 留言：非必填

### 任務說明：

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
- LV1：參考範例程式碼，至少完成表單驗證功能
- LV2：除了 LV1 以外，還完成了產品列表呈現、加入購物車、購物車列表的功能
- LV3：自行設計購物車的版型


### 繳交作業流程

1. 於 [試算表](https://docs.google.com/spreadsheets/d/1DOk5jCqnz-y_z6M_aFaoNn3n-ayheFhQ6h2LLDzYaXg/edit#gid=0
)中登記繳交狀況

![](https://i.imgur.com/QIFVcDt.png)

2. 回程式勇者村 - 任務系統回報，並補上編號：https://rpg.hexschool.com/task/112/show

### 作業格式 & 常見 QA
- 繳交作業格式教學（建議使用 GitHub Pages）：https://hackmd.io/@hexschool/HJDbvkFqU/%2FK6GUUl_pTRioN9ZpBCeqMQ

-[Demo](https://shaoyukao.github.io/2020-Hexschool-Exercise/%e7%ac%ac%e4%ba%94%e9%80%b1/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/index.html)