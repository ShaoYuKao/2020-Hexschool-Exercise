---
tags: JavaScript 實戰班
---

# 第二週主線任務

第二週開始要接觸到課程的 API，是**非常重要的一個章節**，這份 API 會一直跟到直播班結束，同學們可用此份 API 建立屬於自己的電商資料，請務必在本週的時間內完成。

- 課程 API 相關網址：
    - 註冊連結：https://course-ec-api.hexschool.io/
    - 測試管理平台：https://course-ec-api.hexschool.io/dashboard
    - API 文件：https://course-ec-api.hexschool.io/document#products
- 課程 API 完整說明（長度 40mins）：https://courses.hexschool.com/courses/924133/lectures/21092725
- 使用第二週介紹的物件模組概念，讀取個人的資料 API（必須使用 this 運行）並以列表呈現
範例原始碼：https://codepen.io/hsiangfeng/pen/BajWqjJ


### 使用者故事

- 讀取遠端資料，並以列表呈現

### 任務說明：
- 請參閱[課程 API 介紹影片](https://courses.hexschool.com/courses/924133/lectures/21092725)，建立屬於自己的資料列表

課程任務均有提供完整範例程式碼，如果開發上不是很順利可以參考範例程式碼來撰寫。
範例程式碼：https://codepen.io/hsiangfeng/pen/BajWqjJ

使用範例程式碼注意事項：
- 禁止直接使用範例程式碼提交
- 如欲參考範例程式碼，請避免複製貼上，請自己一個字一個字重新撰寫
- 使用範例程式碼，請在繳交作業時附註：「本作業有使用範例程式碼」
- 使用範例程式碼，請在原始碼內補上註解，讓自己加深學習印象
- 此章節 API **請取得前台的資料即可，不需要使用後台的驗證 API**（請不要將個人 Token 提交）
```js
// 當判斷式接收到 sayYouLoveMe() 回傳 true 的結果時，則會運行接下來的陳述片段
if (sayYouLoveMe()) { console.log('說你愛我') };
```

### 提交難度挑戰：
- LV1：建立自己的資料內容，並且前端可取得資料即算完成（僅需要使用 `console.log` 呈現）
- LV2：使用課程版型，並且完整呈現列表
- LV3：依據自己的主題，建立合適的列表版型

### 繳交作業流程

回程式勇者村 - [任務系統回報](https://rpg.hexschool.com/task/92/show)

### 作業格式 & 常見 QA
- 繳交作業格式教學（可用 Codepen 與 GitHub Pages）：https://hackmd.io/@hexschool/HJDbvkFqU/%2FK6GUUl_pTRioN9ZpBCeqMQ


### 常見問題

Q: 串接上一直有問題怎麼辦？

A: 
- 可在課程下方的[討論區](https://courses.hexschool.com/courses/924133/lectures/21092725)發問或尋求解答。
- 可在課程的 Slack 頻道發問，或者直接連絡講師/助教們
- 可參考下方同學們的串接心得分享

---

## API 串接心得分享

> 歡迎對於串接有心得的同學在此分享
> 

### 轉職忍者組 Ray 圖片丟至後台心得:
若要從unsplash這個網站將素材圖片丟至本次主線作業的後台，需要點擊圖片後按右鍵取得圖片網址，而並非直接複製進入圖片後上方的網址，這樣才能確實的取得圖片連結，並可直接傳送到後台。

![](https://i.imgur.com/ZRwL9l2.png)

#### 出現 CORS 錯誤

可以檢查網址後方是否多了 `/`，移除後再試試看

![](https://i.imgur.com/jVz7XE3.png)


#### 範例：401 錯誤

如果是取得需要驗證的 API，需要記得在 Header 補上登入 Token。

-[Demo](https://shaoyukao.github.io/2020-Hexschool-Exercise/%E7%AC%AC%E4%BA%8C%E9%80%B1/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/index.html)