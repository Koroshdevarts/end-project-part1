
export function renderProducts(products, container) {
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");

        card.classList.add(
            "max-h-fit",
            "bg-background-color",
            "p-3",
            "rounded-lg",
            "text-center",
            "w-35",            
            "m-2.5"
        );

        const words = product.title.trim().split(" ");
        const shortTitle = words.slice(0, 2).join(" ");

        card.innerHTML = `
            <img class="w-20 min-h-25 max-h-25 rounded-lg mx-auto cursor-pointer" 
                 src="${product.image}" 
                 alt="${product.title}">
            <h3 class="font-bold mt-3">${shortTitle}</h3>
            <span class="block mt-2">Price: <span class="font-bold">${product.price}</span>$</span>
            <br>
            <button class="text-background-color p-1 bg-primary-color-200 w-full rounded-lg my-2 cursor-pointer">
                Buy
            </button>
        `;
        container.appendChild(card);
    });
}