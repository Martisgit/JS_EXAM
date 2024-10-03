import { createItem } from "../utils/fetch.js";
import { validateForm } from "../utils/validation.js";
const form = document.getElementById("item-form");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  errorMessage.style.display = "none";
  successMessage.style.display = "none";

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;
  const item_img = document.getElementById("item_img").value;

  const item = {
    name: name,
    price: price,
    description: description,
    location: location,
    item_img: item_img,
  };

  const error = validateForm(item);
  if (error) {
    errorMessage.innerText = error;
    errorMessage.style.display = "block";
    return;
  }

  await createItem(item);
  successMessage.style.display = "block";
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 3000);
  form.reset();
});
