let addItem = document.getElementById("pop-up");
let addList = document.getElementById("pop-up-1");
let blur = document.getElementById("background-blur");
let inputData = document.getElementById("input-field");
let inputDataList = document.getElementById("input-field-item");
let navBar = document.getElementById("navbar");
let navbarHead = document.getElementById("navbarhead");
let navbarAddBtn = document.getElementById("nav-additembtn");
let backBtn = document.getElementById("backbtn");
const center = document.getElementById("center");
let noitem = document.getElementById("noitem");
let addListItem, deleteBtn, listItem;
let listContainer;
let selectedListItem;
let cardName;
let i,
  temp = 0,
  loop = 0;
let listCloseBtn = document.getElementById("listclosebtn");
let bodyContainer = document.getElementsByClassName("main-container");
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
  if (cardId > 0) {
    noitem.style.display = "none";
  } else {
    noitem.style.display = "block";
  }
  let flexBox = document.getElementById("flex_box");
  let div = document.createElement("div");
  flexBox.appendChild(div);
  flexBox.classList.add("box");
  addItem.classList.add("hide");
  blur.classList.remove("blur");
  div.setAttribute("class", `card`);
  div.setAttribute("id", `card${cardId}`);
  let x = document.getElementById(`card${cardId}`);
  let title = document.createElement("h1");
  x.appendChild(title);
  title.innerHTML = inputData.value;
  // add un-order-list
  let cardList = document.createElement("ul");
  cardList.setAttribute("class", `ul`);
  cardList.setAttribute("id", `ul${cardId}`);
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
  this.listItem = document.getElementById("listItem");
  let ul = document.getElementsByTagName("ul");
  console.log(ul);
  // listContainer.setAttribute("class", `ul${cardId}`);

  for (i = 0; i < addListItem.length; i++) {
    addListItem[i].addEventListener("click", (event) => {
      let loop = 0;
      do {
        if (loop % 2 == 0) addList.classList.remove("hide");
        if (loop % 2 != 0) addList.classList.add("hide");
        loop++;
      } while (false);

      this.listValue =
        event.currentTarget.parentElement.children[1].getAttribute("id");
    });
    // get all the container card element
    let containers = document.querySelectorAll(".card");
    //Add event listner to each container to handle click event
    console.log(containers);
    containers.forEach((container) => {
      container.addEventListener("click", function (listClick) {
        if (listClick.target.tagName === "LI") {
          //get the parent container element
          let parentContainer = listClick.target.parentElement;
          //Mark selected list
          selectedListItem = parentContainer.querySelector(".checked");
          if (selectedListItem) {
            selectedListItem.classList.remove("checked");
          }
          listClick.target.classList.toggle("checked");
        }
        // check if the clicked element is the deleted button
        if (listClick.target.classList.contains("deleteBtn")) {
          // get the parent  container element
          const parentContainer = listClick.target.parentElement;
          //get the selected list item within the container
          console.log(parentContainer);
          const selectedListItem = parentContainer.querySelector(".checked");

          if (!parentContainer.children[1].hasChildNodes()) {
            parentContainer.remove();
          }
          //remove the selected list item from the list
          if (selectedListItem) {
            selectedListItem.remove();
          }
        }
      });
    });
    containers.forEach((containershift) => {
      containershift.addEventListener("click", function (shift) {
        if (shift.target.tagName === "H1") {
          let cardVar = shift.currentTarget.getAttribute("id");
          cardName = document.getElementById(`${cardVar}`);
          cardName.style.position = "absolute";
          // center.appendChild(cardName);
          // center.style.display = "block";
          // center.style.display = "flex";
          // cardName.classList.add("center_box");
          // cardName.classList.add("center_boxH1");
          // deleteButton.classList.add("center_boxDelete");
          // itemAdd.classList.add("center_boxAddlist");

          //
          blur.classList.add("visible");
          cardName.classList.add("visiblecard");

          navBar.classList.remove("navbarhide");
          navBar.classList.add("navbarvisible");
          navbarHead.innerHTML = shift.currentTarget.children[0].textContent;
          cardName.classList.add("position");
        }
      });
    });

    listCloseBtn.addEventListener("click", () => {
      addList.classList.add("hide");
    });
  }
  cardName.style.position = "relative";
  blur.classList.remove("visible");
  navBar.classList.add("navbarhide");
  navBar.classList.remove("navbarvisible");
  cardName.classList.remove("position");
  cardName.classList.remove("visiblecard");
}
// add list
this.listItem.addEventListener("click", (e) => {
  let addUlData = document.getElementById(`${this.listValue}`);
  let li = document.createElement("li");

  addUlData.appendChild(li);
  li.innerHTML = inputDataList.value;
  addList.classList.add("hide");
  inputDataList.value = "";
});
navbarAddBtn.addEventListener("click", () => {
  addItem.classList.toggle("hide");
});
// when click back button
backBtn.addEventListener("click", () => {
  cardName.style.position = "relative";
  blur.classList.remove("visible");
  navBar.classList.add("navbarhide");
  navBar.classList.remove("navbarvisible");
  cardName.classList.remove("position");
  cardName.classList.remove("visiblecard");
});
