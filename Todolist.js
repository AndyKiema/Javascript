const todoList=[];
function addTodo(){
  const inputField=document.querySelector(".js-input-one");
  todoList.push(inputField.value);
  console.log(todoList);
  inputField.value='';
}

let i=1;
while(i<=5){
  console.log(i);
  i++;
}