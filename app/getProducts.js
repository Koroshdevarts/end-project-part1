async function getProducts() {
    const response = await axios.get("https://fakestoreapi.com/products") 
    const data = await response.Json()
    return data;
}
export default getProducts()
