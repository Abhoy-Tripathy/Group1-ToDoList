
// input field
//variables list
let choosePrio = document.getElementById("prioSelector");
let addNewItem = document.getElementById("addButton");
let chooseDate = document.getElementById("calendar");

console.log(choosePrio.length);
console.log(chooseDate);
console.log(addNewItem);


//add new item

let toDoList = document.getElementById("list")

addNewItem.addEventListener("click", function() {
    let listItem = toDoList.document.createElement("<li>");
    listItem.appendChild(toDoList);

})



