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
document.onkeydown = (e) => {
  
}

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
  }
  );
});

document.addEventListener('keydown', (e) => {

  

  let keyButtonCode = e.which;
  let isNumberButton = (keyButtonCode >= 48 && keyButtonCode <= 57 && !e.shiftKey);
  let isOperatorKey = ((keyButtonCode === 56 || keyButtonCode === 187) && e.shiftKey) || keyButtonCode === 191 || keyButtonCode == 189;


  if (keyButtonCode === 27 && resultScreen.innerText !== "") {
    let leaveOut = confirm("The caculator is not completed.\nDo you want to leave without save?");
    if (leaveOut) {
      document.location.reload();
    }
  }


  if ((keyButtonCode === 187 && !e.shiftKey) || keyButtonCode === 13) {
      try {
        resultScreen.innerText = eval(resultScreen.innerText);
      } catch {
        resultScreen.innerText = "Error";
      }
    }
  if (isNumberButton || isOperatorKey) {
    resultScreen.innerText += e.key;
  }
        
  if (keyButtonCode === 8 && resultScreen.innerText) {
    resultScreen.innerText = resultScreen.innerText.slice(0, -1);
  }
});