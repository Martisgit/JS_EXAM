const wrapper = document.getElementById("card-wrapper");

const getAllItems = async () => {
  const response = await fetch(
    "https://66fbadcd8583ac93b40cb524.mockapi.io/store"
  );
  const data = await response.json();
  return data;
};

const buildCards = (items) => {
  items.forEach((item) => {
    const card = document.createElement("a");
    card.href = `./store/index.html?id=${item.id}`;
    card.setAttribute("class", "card");

    const img = document.createElement("img");
    img.setAttribute("src", item.item_img);
    img.setAttribute("alt", item.name);

    const cardContent = document.createElement("div");
    cardContent.setAttribute("class", "card-content");

    const name = document.createElement("h4");
    name.innerText = item.name;
    name.setAttribute("class", "name");

    const price = document.createElement("h4");
    price.innerText = `${item.price} €`;
    price.setAttribute("class", "price");

    const location = document.createElement("h4");
    location.innerText = `${item.location}`;
    location.setAttribute("class", "location");

    cardContent.append(name, location, price);
    card.append(img, cardContent);
    wrapper.append(card);
  });
};

const startApp = async () => {
  const items = await getAllItems();
  buildCards(items);
};

startApp();
