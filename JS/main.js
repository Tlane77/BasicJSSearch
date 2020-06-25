var newItemCounter = 1;

var ourList = document.getElementById("our-list");

//var that selects button element
var ourButton = document.getElementById("our-button");
//var selects headline element
var ourHeadline = document.getElementById("our-headline");


var listItems = document.getElementById("our-list").getElementsByTagName("li");

for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
    }

function activateItem() {
    ourHeadline.innerHTML = this.innerHTML;
    for (i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active")
    }
    this.classList.add('active');
}
//tell our button to be on the lookout for new clicks
ourButton.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li>New Entry " + newItemCounter + " </li>";
    newItemCounter++;
}