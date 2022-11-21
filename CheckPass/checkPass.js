let passwd = document.getElementById("passwd");
let submitBtn = document.getElementById("submitBtn");
let username = document.getElementById("username");

const correctUser = "cnweb-0184466",
  correctPass = "cnweb-0184466";
let isEmpty = (txt) => {
  return txt === "";
};

let checkPasswd = (usr, pwd) => {
  if (usr === correctUser) {
    if (pwd === correctPass) {
      window.location.href =
        "http://cnweb-0184466.great-site.net";
      alert("Logged in");
      return true;
    } /* Wrong password */ else {
      alert("Wrong username or password");
      let re_enter = confirm("Do you want to re-enter?");
      console.log(re_enter);
      if (re_enter) {
        alert("Now, please enter the correct username and password");
      } else {
        window.location.reload();
      }
    }
  } else
    setTimeout(() => {
      alert("We can't find you account!");
    }, 3000);
};

submitBtn.addEventListener("click", () => {
  if (isEmpty(username.value)) {
    alert("You must fill in the username's field");
  } else if (isEmpty(passwd.value)) {
    alert("Password cannot be empty");
  } else {
    checkPasswd(username.value, passwd.value);
  }
});

setTimeout(() => {
  alert("Open console.log to know the correct usr-passwd");
}, 3000);

console.log("Temporary username - password :");
console.log("Username : " + correctUser);
console.log("Password : " + correctPass);