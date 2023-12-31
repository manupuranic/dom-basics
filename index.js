// 1.Get the border to the title
// let headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.style.borderBottom = "solid 3px #000";

// 2.Make the "Add items" bold and green
// let titles = document.getElementsByClassName("title");
// titles[0].style.fontWeight = "bold";
// titles[0].style.color = "green";

// Assignment 4: GetElementByClassName
// 1. get the array of elements having class name = "list-group-item"
// let items = document.getElementsByClassName("list-group-item");
// // 2. make the third element of the list to have green background color
// items[2].style.backgroundColor = "green";
// // 3. make all the elements in the list to have bold font
// for (let i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
// }

// Assignment 5 getElementByTagName
// Using getElementByClassName
// let items = document.getElementsByClassName("list-group-item");
// items[2].style.color = "green";
// for (let i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
// }

// // Using getElementsByTagName
// let li = document.getElementsByTagName("li");
// li[3].style.color = "orange";
// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#ccc";
// }

// Assignment 6 querySelector & querySelectorAll
// let secondItem = document.querySelector("li:nth-child(2)");
// secondItem.style.backgroundColor = "Green";

// let thirdItem = document.querySelector("li:nth-child(3)");
// thirdItem.style.visibility = "hidden";

// let li = document.querySelectorAll("li");
// li[1].style.color = "green";

// let odd = document.querySelectorAll("li:nth-child(odd)");
// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "green";
// }

// let itemList = document.querySelector("#items");
// itemList.parentElement.style.backgroundColor = "#f4f4f4";

// itemList.children[1].style.backgroundColor = "lightgreen";

// console.log(itemList.firstChild);
// itemList.firstElementChild.textContent = "Hello";
// console.log(itemList.lastChild);
// itemList.lastElementChild.textContent = "World";

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "red";

let newDiv = document.createElement("div");

newDiv.className = "welcome";

newDiv.id = "hello";

newDiv.setAttribute("title", "hello Div");

let newTextNode = document.createTextNode("Hello");

newDiv.appendChild(newTextNode);

console.log(newDiv);

let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

container.insertBefore(newDiv, h1);

let itemList = document.querySelector("#items");
let item1 = itemList.firstElementChild;

itemList.insertBefore(newDiv, item1);
