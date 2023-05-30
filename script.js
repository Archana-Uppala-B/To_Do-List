let addToDoButton=document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){

    if(inputField.value==='')
    {
        alert("Please Add Task..");
    }
    else{
    var li=document.createElement('li')
    li.innerHTML=inputField.value;
    toDoContainer.append(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    }
    inputField.value="";
    saveData();

    li.addEventListener('click',function(e){
        e.target.classList.toggle("checked");
        saveData();
    })
})

toDoContainer.addEventListener("click",function(e){
    if(e.target.tagName==='SPAN')
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",toDoContainer.innerHTML);
}

function showTask(){
    toDoContainer.innerHTML=localStorage.getItem("data");
}

showTask();

