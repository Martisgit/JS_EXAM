export const getAllItems = async () => {
  const response = await fetch(
    "https://66fbadcd8583ac93b40cb524.mockapi.io/store"
  );
  const data = await response.json();
  data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  return data;
};

export const getItems = async (id) => {
  const response = await fetch(
    `https://66fbadcd8583ac93b40cb524.mockapi.io/store/${id}`
  );

  const data = await response.json();

  return data;
};

export const deleteItem = async (id) => {
  const response = await fetch(
    `https://66fbadcd8583ac93b40cb524.mockapi.io/store/${id}`,
    {
      method: "DELETE",
    }
  );

  return response;
};

export const createItem = async (item) => {
  await fetch("https://66fbadcd8583ac93b40cb524.mockapi.io/store", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
};
