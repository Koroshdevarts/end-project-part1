import getProducts from "./getProducts.js"
import { renderProducts } from "./renderProducts.js"
document.addEventListener("DOMContentLoaded",async () => {
        const container =document.querySelector(".products-cart")
const products = await getProducts();
renderProducts(products, container);
})
