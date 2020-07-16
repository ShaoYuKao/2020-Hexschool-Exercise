---
tags: JavaScript 實戰班
---

## 第四週主線任務 - Vue 與 API 串接
第四週將會結合二、三週的概念，將課程的 API 結合 Vue 的介面進行開發。

![](https://i.imgur.com/JkK44CY.png)
![](https://i.imgur.com/zZyDS8l.png)

- 範例頁面 gh-page：https://hexschool.github.io/js-training-task/
- 範例程式碼 GitHub：https://github.com/hexschool/js-training-task


> 可選擇完成 “week4Pagination” 的版本即可，範例：第四週 - 元件化(只有分頁元件版本)

> 範例下載後，並替換成自己的 UUID 即可運作（需修改的[UUID 位置](https://github.com/hexschool/js-training-task/blob/master/week4/Products.html#L430)），如果有運行上的困難可聯絡講師或助教。

本週與上週的觀念重點差異：
- 第三週：物件參考觀念
- 第四週：實際串接 API 的差異

### 使用者故事

- **須製作登入驗證(繳交作業時不用付上帳號密碼，很重要)**
- **串接 API 並可以新增、編輯、刪除商品**
- 商品啟用、關閉可以使用不同的顏色標示

### 任務說明：

- 觀看登入開發的[影音課程](https://courses.hexschool.com/courses/924133/lectures/22245849)，並實作登入的功能
- 依據使用者需求完成此範例

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
- LV2：依據條件開發完成，並至少有另外套用一個元件（至少加上分頁的元件）
- LV3：依據條件開發完成：
	- 至少套用兩個以上的元件且皆使用 import 方式載入
	- 加入 API 中的 options 的開發（需將該文字轉字串才可加入）

```js
// 範例 options
{
    "title": "Abysswalker",
    // ...
    "unit": "Item",
    "options": "{\"message\": \"Hello World!\"}"
}
```

### 加碼挑戰

部分同學反應，看到需求就不知道如何著手，因此分享「拆解」這一個小技巧，將複雜需求轉變為數個小部分，接下來再逐一執行（[分享文章](https://www.facebook.com/groups/110635703123103/permalink/702325553954112/)）：

以此範例來說：
- 登入頁面
  - 製作頁面
  - 套用 Vue.js
  - 實作登入
  - 將 Cookie 寫入並驗證
- 產品列表頁面
  - 先透過 Ajax 取得遠端資料（確認資料結構）
  - ...

本章節可先**試著撰寫拆解細節，然後發送給予助教、講師查看**，然後再開始實作，實作時依據自己撰寫的拆解流程開發，如果發現有問題再慢慢調整並持續進行。

拆解重點：
- 以一個行為、方法、流程進行拆解
- 每個行為開發時間約 20min ~ 1hr，如果超過 1hr 請再細分
- 拆解的內容並非不可變，開發過程如果遇到問題，可再重新修正、補充
- 先拆解再進行開發上的排序，影響「資料結構」的先開發
- 順序定好後，請**先定義「資料結構」或與「資料結構」具相關性的先開發**

作業繳交：請同學也將拆解的結果及心得附在程式勇者村，讓我們了解此方法對於大家的幫助喔

繳交範例：
```
編號：xxx
作業連結：https....

製作前的拆解：
- 依序撰寫...

製作後重新調整的拆解：
- 依序撰寫...

拆解心得：
```



### 繳交作業流程

1. 於[試算表](https://docs.google.com/spreadsheets/d/1DOk5jCqnz-y_z6M_aFaoNn3n-ayheFhQ6h2LLDzYaXg/edit#gid=0
)中登記繳交狀況

![](https://i.imgur.com/QIFVcDt.png)

2. 回程式勇者村 - 任務系統回報，並補上編號：https://rpg.hexschool.com/task/104/show

### 作業格式 & 常見 QA
- 繳交作業格式教學（建議使用 GitHub Pages）：https://hackmd.io/@hexschool/HJDbvkFqU/%2FK6GUUl_pTRioN9ZpBCeqMQ

-[Demo](https://shaoyukao.github.io/2020-Hexschool-Exercise/%E7%AC%AC%E5%9B%9B%E9%80%B1/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/index.html)