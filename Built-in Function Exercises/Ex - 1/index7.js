/*You are given an array of objects representing a collection of products, each with a name, price, and category. 
Your task is to use map, filter, and reduce to calculate the average price of products in each category, 
and then return an array of objects containing only the categories that have an average price above 50.*/
const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
];
let groupByProduct = products.reduce((acc, obj) => {
    acc[obj.category] = acc[obj.category] || [];
    acc[obj.category].push(obj);
    return acc;
}, {})
let avgPrice = Object.keys(groupByProduct).map(category => {
    let avg = groupByProduct[category].reduce((acc, current) => acc + current.price, 0 ) / groupByProduct[category].length;
    return { category: category, averagePrice: avg }
})
let categories = avgPrice.filter(price => price.averagePrice > 50)
console.log(categories)