/*
    Simple js program that adds functionallity to todo list
        - Add new todo item
        - Mark todo item as completed
        - Remove todo item
*/

//Get needed elements from html
const addBtn = document.querySelector(".add");
var input = document.querySelector(".todo-input");
var todoList = document.querySelector(".todo-list");


//Event Listeners
addBtn.addEventListener("click", addTodo)


//functions
function addTodo(event){
    //prevents refreshing of page
    event.preventDefault()

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //list item
    const newTodo = document.createElement("li");
    newTodo.innerText = input.value;
    newTodo.classList.add("todo");
    todoDiv.appendChild(newTodo);
    input.value = "";

    //Completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fa-solid fa-check'></i>";
    completedButton.classList.add("completedBtn");
    completedButton.addEventListener("click", done)

    todoDiv.appendChild(completedButton);

    //remove button
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
    removeBtn.classList.add("removeBtn");
    removeBtn.addEventListener("click", rmv)
    todoDiv.appendChild(removeBtn);

    //add new item to todo-list
    todoList.appendChild(todoDiv);


    //functions
    function rmv(){
        todoDiv.classList.add("delete");
    }

    function done(){
        todoDiv.classList.toggle("completed"); 
    }
}
