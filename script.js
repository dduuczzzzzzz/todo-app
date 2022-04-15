function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

const inputBox = document.querySelector(".input-field1 input");
const addBtn = document.querySelector(".second-button");
const todoList = document.querySelector(".todoList");
const finishedtodolist = document.querySelector(".finish-todoList");
var dataString = localStorage.getItem("New Todo");
var todo = JSON.parse(dataString); 

showTasks();

addBtn.onclick = ()=>{ //when user click on plus icon button
    let userEnteredValue = inputBox.value; //getting input field value
    let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorageData == null){ //if localstorage has no data
        todo = []; //create a blank array
    }
    todo.push(userEnteredValue); //pushing or adding new value in array
    localStorage.setItem("New Todo", JSON.stringify(todo)); //transforming js object into a json string
    showTasks(); //calling showTask function
    togglePopup();
}

function showTasks(){
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
        todo = [];
    }   
    let newLiTag = "";
    todo.forEach((element, index) => {
        newLiTag += `<li><input type="checkbox" id="check(${index})" onclick="Finished(${index})"><label for="check(${index})" ></label> <span onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></span>${element}</li>`;
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    inputBox.value = ""; //once task added leave the input field blank
}
// delete task function
function deleteTask(index){
    todo.splice(index, 1); //delete or remove the li
    localStorage.setItem("New Todo", JSON.stringify(todo));
    showTasks(); //call the showTasks function
}

/*******/

var finishString = localStorage.getItem("New F");
var finishedtodo = JSON.parse(finishString);

showTasks2();

function Finished(index){
    let userEnteredValue = todo.at(index);
    todo.splice(index, 1); //delete or remove the li
    localStorage.setItem("New Todo", JSON.stringify(todo));
    showTasks(); //call the showTasks function
    
    let getLocalStorageData = localStorage.getItem("New F"); //getting localstorage
    if(getLocalStorageData == null){ //if localstorage has no data
      finishedtodo = []; //create a blank array
    }
    finishedtodo.push(userEnteredValue); //pushing or adding new value in array
    localStorage.setItem("New F", JSON.stringify(finishedtodo)); //transforming js object into a json string
    showTasks2(); //calling showTask function
}
  
function showTasks2(){
    let getLocalStorageData = localStorage.getItem("New F");
    if(getLocalStorageData == null){
      finishedtodo = [];
    }   
    let newLiTag = "";
    finishedtodo.forEach((element, index) => {
      newLiTag += `<li><input type="checkbox" id="checked(${index})" onclick="BacktoTask(${index})" checked><label for="checked(${index})" ></label> <span onclick="deleteTask2(${index})"><i class="fa-solid fa-trash-can"></i></span>${element}</li>`;
    });
    finishedtodolist.innerHTML = newLiTag; //adding new li tag inside ul tag
  }
  // delete task function
function deleteTask2(index){
    finishedtodo.splice(index, 1); //delete or remove the li
    localStorage.setItem("New F", JSON.stringify(todo));
    showTasks2(); //call the showTasks function
}

function BacktoTask(index){
    let userEnteredValue = finishedtodo.at(index);
    finishedtodo.splice(index, 1); //delete or remove the li
    localStorage.setItem("New F", JSON.stringify(finishedtodo));
    showTasks2(); //call the showTasks function
    
    let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorageData == null){ //if localstorage has no data
      todo = []; //create a blank array
    }
    todo.push(userEnteredValue); //pushing or adding new value in array
    localStorage.setItem("New F", JSON.stringify(todo)); //transforming js object into a json string
    showTasks(); //calling showTask function
}