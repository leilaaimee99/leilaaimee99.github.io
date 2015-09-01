var firebaseRootUrl = "https://leila-todo.firebaseio.com/";
var firebaseRoot = new firebase(firebaseRootUrl);

window.onload = function(){
  var newTaskButton = document.getElementById("new-task-button");
  var todoList = document.getElementById("todo-list");
  
    function addNewTask(taskName) {
     var li = document.createElement("li");
     todoList.appendChild(li);
     
     var input = document.createElement("input");
     input.setAttribute("class", "toggle");
     input.setAttribute("type", "checkbox");
     li.appendChild(input);
     
     var span= document.createElement("span");
     span.innerHTML = "taskName";
     li.appendChild(span);
     
     var img = document.createElement("img");
     img.src = "http://i.imgur.com/BtLxCD6.png";
     img.setAttribute("class", "delete");
     li.appendChild(img);
    }
    newTaskButton.onclick = function() {
      var taskName = prompt("Add a tasK:");
      if (taskName!== null && taskName !== "") {
      addNewTask(taskName);
      }
  };
};