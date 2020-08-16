---
tags: JavaScript 實戰班
---


## 第六週主線任務 - 建立路由


- 範例頁面 gh-page：https://hexschool.github.io/js-training-task/
- 範例程式碼 GitHub：https://github.com/hexschool/js-training-task
> 範例可下載，新增 `.env` 檔案並加入 UUID 即可運作

`.env` 檔案內容（[環境變數新增教學](https://courses.hexschool.com/courses/924133/lectures/22660657)）
```
VUE_APP_UUID=
VUE_APP_APIPATH=
```

本週重點：
- 使用 Vue Cli 完成路由設定
- 在 Vue Cli 中完成登入驗證

### 使用者故事

新建完整的路由，並提供導覽進入大部分頁面（進入頁面僅需要文字，不必加入實際的頁面）

#### 前台頁面：
- 首頁
- 產品列表
	- 單一產品頁面（LV 2）
- 購物車
- 關於我們
- 結帳
- 結帳完成

#### 後台頁面
- 登入頁面（進階 LV3）
- 產品列表
- 優惠券列表
- 訂單列表
- 圖片儲存列表

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

- LV1：完成路由設定，並可瀏覽所有頁面（請提供導覽選單以供使用）
- LV2：前台顯示完整的產品列表，並可進入產品頁面（前台 API）
- LV3：完成登入、驗證頁面（後台 API），並客製化導覽選單


### 繳交作業流程

1. 於 [試算表](https://docs.google.com/spreadsheets/d/1DOk5jCqnz-y_z6M_aFaoNn3n-ayheFhQ6h2LLDzYaXg/edit#gid=0
)中登記繳交狀況

![](https://i.imgur.com/QIFVcDt.png)

2. 回程式勇者村 - 任務系統回報，並補上編號：https://rpg.hexschool.com/task/118/show

### 作業格式 & 常見 QA
- 繳交作業格式教學（僅能使用 GitHub Pages）：https://hackmd.io/@hexschool/HJDbvkFqU/%2FK6GUUl_pTRioN9ZpBCeqMQ


# week06

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

-[Demo](https://shaoyukao.github.io/2020-Hexschool-Exercise/%E7%AC%AC%E5%85%AD%E9%80%B1/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/dist/index.html)