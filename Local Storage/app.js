const itemInput = document.getElementById("item-input");
const itemInputForm = document.getElementById("item-input-form");
const itemsBox = document.getElementById("items-box");

const items = JSON.parse(localStorage.getItem("items")) || [];

items.map((item) => {
  createItems(item);
});

console.log(items);

itemInputForm.addEventListener("submit", (e) => {
  e.preventDefault();


  const item = {
    id: new Date().getTime(),
    name: itemInput.value

  };


  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));

  createItems(item);

});



function createItems(item) {
  const itemMarkup = document.createElement("div");
  itemMarkup.innerHTML = `<p>${item.name}</p>`;
  itemsBox.append(itemMarkup);
}




