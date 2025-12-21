import getProducts from "./getProducts.js";
import { renderProducts } from "./renderProducts.js";

document.addEventListener("DOMContentLoaded", async () => {
  const filterButtons = document.querySelectorAll(".linkButton");
  const container = document.querySelector(".products-cart");

  const products = await getProducts();
  renderProducts(products, container);

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      let filteredProducts = products;

      if (category !== "all") {
        filteredProducts = products.filter(
          product => product.category === category
        );
      }

      renderProducts(filteredProducts, container);
    });
  });
});