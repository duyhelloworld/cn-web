let list = document.querySelector(".list");
let stt = 0;

let createTask = () => {
    let boxTask = document.createElement("div");
    boxTask.className = `task-${stt}`;
    boxTask.setAttribute("name", "task");

    let color = `#${(Math.floor(Math.random() * 999 - 1) + "").slice(-3)}`;
    boxTask.style.cssText = `color: ${color}; width : ${
        contentItem.value.length > 20 ? "auto" : "20%"
    }; border : 3px solid; margin-top : 3px`;

    let html = stt + ". " + contentItem.value;

    boxTask.innerHTML = html;

    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete task";
    boxTask.appendChild(btnDelete);
    list.appendChild(boxTask);

    btnDelete.onclick = (e) => {
        let taskHaveId = document.querySelector(`.${e.target.parentNode.className}`);
        taskHaveId.remove();
        let tasks = document.getElementsByName("task");
        tasks.forEach(task => {
            task.classList.toggle(e.target.parentNode.className);
        })
    };

};

let addTasks = () => {
    stt++;
    createTask();
};

let btnAdd = document.querySelector(".btnAdd");
btnAdd.onclick = addTasks;

let contentItem = document.getElementById("content-item");
contentItem.onfocus = () => {
    document.onkeydown = (e) => {
        if (e.key === "Enter") {
            addTasks();
        }
    };
};
document.onkeydown = (e) => {
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        saveList();
    }
};

function resetId(startId) {
    // let 
    // .forEach(element => {
        
    // });
}


let saveList = () => {
    localStorage.setItem("danhSach", list.innerHTML);
    alert("Saved");
};
let loadList = () => {
    let backUpData = localStorage.getItem("danhSach");
    if (backUpData == undefined) {
        alert("No previous data saved.")
    }
    list.innerHTML = backUpData;
};

const App = () => {
    loadList();
    if (contentItem.children) {
      alert("List empty");
    }
}
