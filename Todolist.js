const todoList=[];

function addTodo(){
  const inputField=document.querySelector(".js-input-one");
  todoList.push(inputField.value);
  inputField.value='';
}
function addToHTML(){
  let htmlList='';
  for(let i=0;i<todoList.length;i++){
   let toDo=todoList[i];
   let HTML=`<p>
   ${toDo}
   <button onclick="
    todoList.splice(${i},1);
    addToHTML();
   ">Delete</button>
   </p>`
   htmlList+=HTML;
   const textDiv=document.querySelector(".todo-container");
   textDiv.innerHTML=htmlList;
  }
}
