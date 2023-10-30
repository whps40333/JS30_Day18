const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
// const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

// 前面timeNode已經是一個包含所有符合條件的HTML陣列，每個元素都已經包含了 data-time 屬性
// const seconds = timeNodes
//   .map((node) => node.dataset.time)
//   .map((timeCode) => {
//     const [mins, secs] = timeCode.split(":").map(parseFloat);
//     return mins * 60 + secs;
//     console.log(mins, secs);
//   })
//   .reduce((total, vidSeconds) => total + vidSeconds);

const seconds = timeNodes
  .map((node) => {
    const [mins, secs] = node.dataset.time.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  // 字串轉化成數字並計算總秒數
  .reduce((total, vidSeconds) => total + vidSeconds);

// 避免更改seconds的初始值
let secondsLeft = seconds;
// let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
// const hours = Math.floor(secondsLeft /3600);
// 取得餘數
secondsLeft = secondsLeft % 3600;
// secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
// const mins = Math.floor(secondsLeft /60);
// 取得餘數
secondsLeft = secondsLeft % 60;
// secondsLeft=secondsLeft%60;

console.log(hours, mins, secondsLeft);
