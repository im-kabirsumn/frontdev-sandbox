const addItemForm = document.getElementById('add-item-form');
const input = document.getElementById("input");
const itemsElm = document.getElementById("items");

const items = JSON.parse(localStorage.getItem("item")) || [];


addItemForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputValue = input.value;

  if (inputValue === "") {
    return;
  }

  const item = {
    id: new Date().getTime(),
    item: inputValue
  };

  items.push(item);
  localStorage.setItem('item', JSON.stringify(items));

  createItems(item);

});



const createItems = (item) => {
  const itemsMarkup = document.createElement("div");
  itemsMarkup.innerHTML = `<p>${item.item}</p>`;
  itemsElm.append(itemsMarkup);
}



