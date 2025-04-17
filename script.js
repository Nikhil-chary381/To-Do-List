function addTask(){
    if(document.getElementById('inputtask').value!=""){
        const task=document.createElement('li');
        const tasklist=document.getElementById('taskslist');
        tasklist.appendChild(task);
        task.textContent=document.getElementById('inputtask').value;
        document.getElementById('inputtask').value="";
        deleteTask(task);
    }
}
function deleteTask(task){
    const delbutton=document.createElement('button');
    delbutton.textContent="Delete";
    task.appendChild(delbutton);
    delbutton.onclick=function(){
        task.remove();
    }
}