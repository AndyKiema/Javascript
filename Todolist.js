const todoList=[];

function addTodo(){
  const inputField=document.querySelector(".js-input-one");
  const datePicker=document.querySelector(".calendar");
  todoList.push({
    name: inputField.value,
    dueDate: datePicker.value
  });
  inputField.value='';
  datePicker.value='';
}

function addToHTML(){
  let htmlList='';
  for(let i=0;i<todoList.length;i++){
   let toDoObject=todoList[i];
   const {name, dueDate}=toDoObject;
   const HTML=`
   <div>${name}</div>
   <div>${dueDate}</div>  
   <button onclick="
    todoList.splice(${i},1);
    addToHTML();
   " class="delete-button">Delete</button>`;
   htmlList+=HTML;  
  }
  const textDiv=document.querySelector(".todo-container");
  textDiv.innerHTML=htmlList;
}


