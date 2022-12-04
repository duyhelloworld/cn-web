// const multiOpe = document.getElementById("multiOpe");
// const minusOpe = document.getElementById("minusOpe");
// const divideOpe = document.getElementById("divideOpe");
// const plusOpe = document.getElementById("plusOpe");
// const equalOpe = document.getElementById("equalOpe");
// const percentOpe = document.getElementById("percentOpe");
// const dotBtn = document.getElementById("dotBtn");
// const acBtn = document.getElementById("acBtn");
// const resultBox = document.querySelector(".result-box");
// resultBox.innerHTML = "";
// const operators = [plusOpe, minusOpe, multiOpe, divideOpe, percentOpe];
// let runningTotal = 0;

// let number = "";
// let operatorClicked = false;
// let key = 0;
// function handleNumber(element) {
//   let pressValue = element.innerText;
//     number += pressValue;
//     key++;
//   resultBox.innerHTML =
//     "<h1 style='color: black'>" + number  + "</h1>";
//     if (clickOperator(number)) {
//         localStorage.setItem(key, number);
//   }
// }

// function clickOperator(number) {
//   operators.forEach((operator) => {
//     operator.onclick = () => {
//       operatorClicked = true;
//     };
//       if (operatorClicked) {
//           let nextNum = localStorage.getItem(key);
//           console.log(nextNum);
//           return true;
//       }
//       return false;
//   });
// }

// function clickToCal() {}


let resultScreen = document.getElementById("resultScreen");

let buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons);

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        resultScreen.innerText = "";
        break;
     
      case "=":
        try {
          resultScreen.innerText = eval(resultScreen.innerText);
        } catch {
          resultScreen.innerText = "Error";
        }
        break;
      case "←":
        if (resultScreen.innerText) {
          resultScreen.innerText = resultScreen.innerText.slice(0, -1);
        }
        break;
      default:
        resultScreen.innerText += e.target.innerText;
    }
  });
});