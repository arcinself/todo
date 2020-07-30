var elements=[];
window.onload=function(){
  if(JSON.parse(localStorage.getItem("elements")) != null)
    elements=JSON.parse(localStorage.getItem("elements"));
  console.log(elements);
  display();
};
function addElement(){
  if (document.querySelector(".addTxt").value.trim() != "") {
    elements.push(document.querySelector(".addTxt").value.trim());
    localStorage.setItem("elements", JSON.stringify(elements));
    display();
  }
}
function display(){
  document.querySelector(".list").innerHTML = "";
  for (var i = 0; i < elements.length; i++)
    document.querySelector(".list").innerHTML +=
      "<center><div class='element'>" +
      elements[i] +
      "<img class='tick' src='https://i.dlpng.com/static/png/4098994-black-tick-icon-14163-free-icons-and-png-backgrounds-tick-png-black-and-white-600_556_preview.webp' onclick='strike(" +
      i +
      ")'><img class='dustbin' src='https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/user-trash-full-icon.png' onclick='del(" +
      i +
      ")'></div></center><br>";
}
function del(index){
  elements.splice(index, 1);
  localStorage.setItem("elements", JSON.stringify(elements));
  display();
}
function strike(index){
  if (elements[index].includes("<strike>")){
    elements[index]=elements[index].replace("<strike>", "").replace("</strike>", "");
  } else {
    elements[index]="<strike>" + elements[index] + "</strike>";
  }
  localStorage.setItem("elements", JSON.stringify(elements));
  display();
}
