const todoList=[];

function addTodo(){
  const inputField=document.querySelector(".js-input-one");
  todoList.push(inputField.value);
}
function addToHTML(){
  let htmlList='';
  for(let i=0;i<todoList.length;i++){
   let toDo=todoList[i];
   let HTML=`<p>${toDo}</p>`
   htmlList+=HTML;
   const textDiv=document.querySelector(".todo-container");
   textDiv.innerHTML=htmlList;
  }
}
