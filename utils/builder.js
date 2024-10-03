export const buildCards = (items, wrapper) => {
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

export const buildScreen = (
  data,
  name,
  price,
  description,
  itemLocation,
  itemImg
) => {
  name.innerText = data.name;
  description.innerText = data.description;
  price.innerHTML = `${data.price} €`;
  itemLocation.innerText = `${data.location}`;
  itemImg.src = data.item_img;
};
