
var inputBox = document.getElementById("input");
var listContainer = document.getElementById("itemlist");
var taskForm = document.getElementById("taskForm");

function addTask() {
    if (inputBox.value === '') {
        alert("You must enter a task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = '<span class="tickbox" > </span>'+ inputBox.value + '<span class="delete" onclick="deleteTask(this)"><i class="fa fa-trash" aria-hidden="true"></i></span>';
        listContainer.appendChild(li);
        inputBox.value = ''; 
        saveData();
    }
}

function deleteTask(taskElement) {
    taskElement.parentElement.remove();
    saveData();
}

listContainer.addEventListener("click", function(event)
 {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed") ;
        listContainer.appendChild(event.target);
        saveData();
    }
});
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data")
}
showTask();
