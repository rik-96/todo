var inputval = document.getElementById("mytodo");
var but = document.getElementById("but");
var list = document.querySelector("ul");
var col1 = document.querySelector(".col1");
var col2 = document.querySelector(".col2");
var body = document.querySelector("body");

function inplength(){
  return inputval.value.length;
}

function del(evt){
  evt.target.parentNode.style.display="none";
}

function createListEle(){
  var lip=document.createElement("li");
  var li=document.createElement("span");
  var but2 = document.createElement("button");
  but2.setAttribute("style", "background-color:red;color: white;border-radius: 12px;padding:1%")
  but2.appendChild(document.createTextNode("Delete"));
  li.appendChild(document.createTextNode(inputval.value));
  li.appendChild(but2);
  li.setAttribute("id", li)
  but2.onclick = del;
  li.appendChild(lip);
  li.appendChild(but2);
  list.appendChild(li);
  inputval.value="";
}

function inp1(){
  if (inplength()>0){
    createListEle();
  }
}

function inp2(event){
  if (inplength()>0 && event.keyCode===13){
    createListEle();
  }
}

function colchange(){
  body.style.background = "linear-gradient(to right, "+
  col1.value+", "+
  col2.value+")";
}

inputval.addEventListener("keypress", inp2);
but.addEventListener("click", inp1);
col1.addEventListener("input", colchange);
col2.addEventListener("input", colchange);