// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')



//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);



//functions

function addTodo(event) {

    event.preventDefault(); // prevent form from submitting
    const todoDiv = document.createElement('div');  // create a div with class todo
    todoDiv.classList.add('todo'); // name a class todo for above created div

    // Creating an Li inside the div with class name todo
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo)

    // checkmark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check">  </i>'
    completeButton.classList.add("complete-btn")
    todoDiv.appendChild(completeButton)

    //trash button
    const trashButton = document.createElement('button'); // checkmark button
    trashButton.innerHTML = '<i class="fas fa-trash">  </i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)

    // Append to list 
    todoList.appendChild(todoDiv)

    // Clear todoInput after adding a todo
    todoInput.value = ""

}


function deleteCheck(e) {

    console.log(e.target)
    const item = e.target
    // delete todo
    if(item.classList[0]=== 'trash-btn')
    {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function() {
            todo.remove()
        })
        
    }

    // Check Mark
    if(item.classList[0]=== 'complete-btn')
    {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
        }
}


function filterTodo(e) {

    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all": 
            todo.style.display="flex"; 
            break;
            case "completed":
            if (todo.classList.contains('completed')) {
               todo.style.display="flex"; 
            } else {
                todo.style.display="none"; 
            }

           
        }


    } );


}