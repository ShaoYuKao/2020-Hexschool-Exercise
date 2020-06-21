## 第一週主線作業

第一週我們介紹了如何實作關注點分離，小明從好友那邊拿到一份 Todo 工具，但打開一看發現 Todo 工具邏輯有些混亂，並且要新增功能異常困難，請協助小明來修復這份版型。

![](https://i.imgur.com/uin7dNI.png)

- 範例版型(非關注點分離)：https://codepen.io/hsiangfeng/pen/mdVyLmJ
- 官方範例解答：https://codepen.io/hsiangfeng/pen/ExPaLZd
- gh-page：https://hexschool.github.io/js-training-task/index.html
- GitHub：https://github.com/hexschool/js-training-task/tree/master/week1

### 使用者故事

- 用戶可以新增 Todo，新增後移除 input 的項目
- 用戶可以刪除、完成 Todo
- 用戶可以一鍵刪除所有任務

### 任務說明：
- 將範例程式碼改為「關注點分離的形式」

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
-[Demo](https://shaoyukao.github.io/2020-Hexschool-Exercise/%E7%AC%AC%E4%B8%80%E9%80%B1/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/index.html)