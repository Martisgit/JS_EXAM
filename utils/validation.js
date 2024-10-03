export const validateForm = (formData) => {
  const { name, price, description, location, item_img } = formData;

  // Check if all fields are filled out
  if (!name || !price || !description || !location || !item_img) {
    return "All fields are required.";
  }

  // Check if price is a valid number and greater than 0
  const priceValue = parseFloat(price);
  if (isNaN(priceValue) || priceValue <= 0) {
    return "Price must be a valid number greater than 0.";
  }

  // Validate image URL (improved check for valid URLs)
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      '((([a-zA-Z0-9$-_@.&+!*"(),])+)+\\.[a-zA-Z]{2,})(\\/[a-zA-Z0-9@:%_+.~#?&//=]*)?$' // domain name and optional path
  );
  if (!urlPattern.test(item_img)) {
    return "Please enter a valid image URL.";
  }

  // If all checks pass, return null (no errors)
  return null;
};
