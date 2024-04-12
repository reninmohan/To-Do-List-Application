 const AddBtn = document.getElementById("AddBtn");
const listContainer = document.getElementById("list-container");
const inputTxt = document.getElementById("inputTxt");




AddBtn.addEventListener('click', addTodo);
inputTxt.addEventListener('keypress',function(event){
  if(event.key === 'Enter'){
    addTodo();
  }
})


function addTodo(){
  let todo = inputTxt.value;
  if(todo !==''){
    let newTodoElement = document.createElement("li");
    newTodoElement.innerText = todo;
    listContainer.appendChild(newTodoElement);
    let span = document.createElement("span");
    let closeimg = document.createElement("img");
    closeimg.src = "./assets/close.png";
    span.appendChild(closeimg);
    // span.innerText ="❌";
    newTodoElement.appendChild(span);
    
  }else{
    alert("You must enter something.")
  }
  inputTxt.value = "";
  saveData();
}


listContainer.addEventListener('click',function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName === 'IMG'){
    let grandpapa = e.target.parentElement;
    grandpapa.parentElement.remove();
    saveData();
  }
},false);



function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}


function showData(){
  listContainer.innerHTML= localStorage.getItem("data");
}


showData();

