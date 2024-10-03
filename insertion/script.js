const form = document.getElementById("item-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

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

  fetch("https://66fbadcd8583ac93b40cb524.mockapi.io/store", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log("Success:", data);
  // })
  // .catch((error) => {
  //   console.error("Error:", error);
  // });

  successMessage.style.display = "block";

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 3000);
  form.reset();
});
