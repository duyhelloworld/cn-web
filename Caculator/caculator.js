setTimeout(
  alert("You can type code by your keyboard"), 2000);

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