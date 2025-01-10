// 1.更新提示文字
// 搜尋指定元素("搜尋的元素");
// document.querySelector("名稱")
const tip = document.querySelector(".tip");
tip.textContent = "請輸入 1 ~ 100 內的數字";

// 設定答案
let answer = Math.random() * 100 + 1;
answer = Math.floor(answer);
console.log("答案:", answer);
let min =1 ,max = 100;

// 3.取得確認按鈕
document.querySelector("#ok").addEventListener('click', function () {
    console.log("點擊確認按鈕");
    let number = document.querySelector("#number").value;
    console.log(number);

    if (number == answer){
        tip.textContent = "恭喜猜對囉!";
    }
    else if (number > answer) {
        tip.textContent = `請輸入 ${min} ~ ${number} 內的數字`;
        max = number;
    }
    else {
        tip.textContent = `請輸入 ${number} ~ ${max} 內的數字`;
        min = number;
    }
});