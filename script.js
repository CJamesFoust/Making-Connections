console.log("page loaded...");

var acceptBtn = document.querySelector("#acceptOne");
var acceptBtn2 = document.querySelector("#acceptTwo");

var content = document.querySelector("#connReqBadge");
var value = content.textContent;
console.log(value);
var content2 = document.querySelector("#yourConn");
var value2 = content2.textContent;
var nameBox = document.querySelector("#changeNameBox")

function showChangeName(){
    nameBox.style.display = "flex";
}

function accept(element) {
    element.parentElement.parentElement.remove();
    content.innerText = value - 1;
    value -= 1;
    var content2 = document.querySelector("#yourConn");
    var value2 = content2.textContent;
    var temp = parseInt(value2);
    content2.innerText = temp + 1;
    temp += 1;

}

function decline(element) {
    element.parentElement.parentElement.remove();
    content.innerText = value - 1;
    value -= 1;
}

function getUserName() {
    var nameField = document.getElementById("nameField").value;
    var userName = document.getElementById("userName");
    userName.innerText = nameField;
    nameBox.style.display = "none";
    document.getElementById("nameField").value = "";
}

nameField.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("subButton").click();
    }
  });