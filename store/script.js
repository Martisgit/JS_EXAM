const name = document.getElementById("name");
const price = document.getElementById("price");
const description = document.getElementById("description");
const itemLocation = document.getElementById("location");
const itemImg = document.getElementById("item-img");
const deleteBtn = document.getElementById("delete-btn");
const warningMessage = document.getElementById("warning-message");

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const getItems = async () => {
  const response = await fetch(
    `https://66fbadcd8583ac93b40cb524.mockapi.io/store/${id}`
  );

  const data = await response.json();

  return data;
};

const deleteItem = async () => {
  const response = await fetch(
    `https://66fbadcd8583ac93b40cb524.mockapi.io/store/${id}`,
    {
      method: "DELETE",
    }
  );

  return response;
};

const buildScreen = (data) => {
  name.innerText = data.name;
  description.innerText = data.description;
  price.innerHTML = `${data.price} €`;
  itemLocation.innerText = `${data.location}`;
  itemImg.src = data.item_img;
};

const initPage = async () => {
  const item = await getItems();
  buildScreen(item);
};

initPage();

deleteBtn.addEventListener("click", async () => {
  const response = await deleteItem();
  if (response.status === 200) {
    warningMessage.innerText = "Deleted successfully";
    warningMessage.style.display = "block";
    setTimeout(() => {
      window.location.replace("../index.html");
    }, 3000);
  }
});
