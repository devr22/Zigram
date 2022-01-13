const formDiv = document.getElementById("formContainer")
const btn = document.getElementById("btn");
formDiv.style.display = "none";
btn.onclick = () => {
    if(formDiv.style.display !== "none") {
        formDiv.style.display = "none";
        btn.textContent = "Add Task"
    } else {
        formDiv.style.display = "block";
        btn.textContent = "Close Form"
    }
}

var node = document.getElementsByTagName("LI");
var i;
for (i = 0; i < node.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  node[i].appendChild(span);
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newNode() {

  var li = document.createElement("li");
  var task = document.getElementById("task").value;
  var newTask = document.createTextNode(task);
  li.appendChild(newTask);
  if (task === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myToDo").appendChild(li);
  }
  document.getElementById("task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

