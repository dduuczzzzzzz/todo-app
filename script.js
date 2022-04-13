function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

const inputBox = document.querySelector(".input-field1 input");
const addBtn = document.querySelector(".second-button");
const todoList = document.querySelector(".todoList");

showTasks();

addBtn.onclick = ()=>{ //when user click on plus icon button
    let userEnteredValue = inputBox.value; //getting input field value
    let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorageData == null){ //if localstorage has no data
        listArray = []; //create a blank array
    }else{
        listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
    }
    listArray.push(userEnteredValue); //pushing or adding new value in array
    localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
    showTasks(); //calling showTask function
    togglePopup();
}

function showTasks(){
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageData); 
    }
    
    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li><input type="checkbox" id="check(${index})" " ><label for="check(${index})" ></label> <span onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></span>${element}</li>`;
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    inputBox.value = ""; //once task added leave the input field blank
}
// delete task function
function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); //delete or remove the li
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks(); //call the showTasks function
}
