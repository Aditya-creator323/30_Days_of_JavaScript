// LEVEL 2 
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// 1
let totalPrice = products.map(product =>{
    return product.price;
}).filter(price =>{
    return price > 0;
}).reduce((acc, cur) =>{
    return acc + cur
})

console.log(totalPrice)


// 2
let sum = products.reduce((acc, cur) =>{
    if(products.price > 0){
        return acc + cur.price
    }
})
console.log(sum)


