// Todoify
document.getElementById("addTask").addEventListener("click", function() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      var li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);
      taskInput.value = "";
  
      li.addEventListener("click", function() {
        this.classList.toggle("done");
      });
  
      var deleteButton = document.createElement("span");
      deleteButton.textContent = " ❌";
      deleteButton.classList.add("delete");
      li.appendChild(deleteButton);
  
      deleteButton.addEventListener("click", function(e) {
        e.stopPropagation();
        taskList.removeChild(li);
      });
    }
  });