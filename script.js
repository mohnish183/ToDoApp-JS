let addItem = document.getElementById("pop-up");
let addList = document.getElementById("pop-up-1");
let blur = document.getElementById("background-blur");
let inputData = document.getElementById("input-field");
let inputDataList = document.getElementById("input-field-item");
let addListItem, deleteBtn, listItem;
let listContainer;

let listCloseBtn = document.getElementById("listclosebtn");

let check = true;
function additem() {
  addItem.classList.toggle("hide");
  blur.setAttribute("class", "blur");
}
function closebtn() {
  addItem.classList.add("hide");
  blur.classList.remove("blur");
}
let cardId = 0;
function addflexbox() {
  cardId++;
  let flexBox = document.getElementById("flex_box");
  let div = document.createElement("div");
  flexBox.appendChild(div);
  flexBox.classList.add("box");
  addItem.classList.add("hide");
  blur.classList.remove("blur");
  div.setAttribute("class", `card${cardId}`);
  div.setAttribute("id", `card${cardId}`);
  let x = document.getElementById(`card${cardId}`);
  let title = document.createElement("h1");
  x.appendChild(title);
  title.innerHTML = inputData.value;
  // add un-order-list
  let cardList = document.createElement("ul");
  cardList.setAttribute("class", `ul`);
  cardList.setAttribute("value", `ul${cardId}`);
  listContainer = document.querySelectorAll(`.ul`);
  x.appendChild(cardList);
  // add button
  let itemAdd = document.createElement("button");
  x.appendChild(itemAdd);
  itemAdd.textContent = "ADD LIST";
  itemAdd.setAttribute("class", "add-list");
  let deleteButton = document.createElement("button");
  x.appendChild(deleteButton);
  deleteButton.textContent = "delete";
  deleteButton.setAttribute("class", "deleteBtn");
  inputData.value = "";
  addListItem = document.querySelectorAll(".add-list");
  deleteBtn = document.querySelectorAll(".deleteBtn");
  listItem = document.querySelectorAll(".listItem");

  // listContainer.setAttribute("class", `ul${cardId}`);
  console.log(addListItem);

  for (let i = 0; i < addListItem.length; i++) {
    let loop = 0;

    console.log(`value of i = ${i}`);
    console.log(addListItem[i]);

    addListItem[i].addEventListener("click", () => {
      do {
        console.log(`hello ${i}`);
        console.log(addListItem[i]);

        if (loop % 2 == 0) addList.classList.remove("hide");
        if (loop % 2 != 0) addList.classList.add("hide");
        loop++;
      } while (false);
    });
  }
  console.log(`ul ${listContainer.li} ${listContainer.length}`);
  listItem[0].addEventListener("click", () => {
    for (let j = 0; j < 10; j++) {
      console.log(`value of j ${j}`);
      do {
        console.log(`value of j after click ${j}`);
        let li = document.createElement("li");

        listContainer.appendChild(li);
        title.style.color = "red";
        li.innerHTML = inputDataList.value;
      } while (false);
    }
  });
  listCloseBtn.addEventListener("click", () => {
    addList.classList.add("hide");
  });
}
// add list
function listappend() {}
//
// delete item and card
