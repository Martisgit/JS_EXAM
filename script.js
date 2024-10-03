import { getAllItems } from "./utils/fetch.js";
import { buildCards } from "./utils/builder.js";
const wrapper = document.getElementById("card-wrapper");

const startApp = async () => {
  const items = await getAllItems();
  buildCards(items, wrapper);
};

startApp();
