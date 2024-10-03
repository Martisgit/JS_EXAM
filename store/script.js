import { getItems, deleteItem } from "../utils/fetch.js";
import { buildScreen } from "../utils/builder.js";
const name = document.getElementById("name");
const price = document.getElementById("price");
const description = document.getElementById("description");
const itemLocation = document.getElementById("location");
const itemImg = document.getElementById("item-img");
const deleteBtn = document.getElementById("delete-btn");
const warningMessage = document.getElementById("warning-message");

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const initPage = async () => {
  const item = await getItems(id);
  buildScreen(item, name, price, description, itemLocation, itemImg);
};

initPage();

//Item deletion
deleteBtn.addEventListener("click", async () => {
  const response = await deleteItem(id);
  if (response.status === 200) {
    warningMessage.innerText = "Deleted successfully";
    warningMessage.style.display = "block";
    setTimeout(() => {
      window.location.replace("../index.html");
    }, 3000);
  }
});
