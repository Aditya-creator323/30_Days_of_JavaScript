// Exercise Level 1:-


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//2
const callback = n =>{
    return n**2;
}
function cube(callback,n){
    return callback(n) * n;
}
console.log(cube(callback,2));

// 3 
countries.forEach((country) =>{
    console.log(country);
})

// 4
names.forEach((name) =>{
    console.log(name)
}) 

// 5
numbers.forEach((num) =>{
    console.log(num)
})

// 6
const newArr = countries.map((country) => country.toUpperCase())
console.log(newArr);

// 7
const lenghtOfCountry = countries.map((country) => country.length)
console.log(lenghtOfCountry)

// 8
const squareOfNumber = numbers.map((num) => num * num)
console.log(squareOfNumber)

// 9
const newName = names.map((name) => name.toUpperCase());
console.log(newName);

// 10 
let prices = products.map(product => {
    return `${product.product} : ${product.price}`
})
console.log(prices);

// 11
let land = countries.filter(country =>{
    return country.toLowerCase().includes('land')
})
console.log(land);

// 12
let sixCharCountries = countries.filter(country =>{
    return country.length === 6;
})
console.log(sixCharCountries)

// 13
let sixAndMore = countries.filter(country =>{
    return country.length >= 6;
})
console.log(sixAndMore)

// 14
let startWithE = countries.filter(country =>{
    return country[0] === 'E'
})
console.log(startWithE)

// 15
let priceWithValues = products.filter(product =>{
    return product.price > 0
})
console.log(priceWithValues)

// 16
let getStringList = (arr) =>{
    let nn = arr.filter(item =>{
        return typeof item == "string"
    })
    return nn;
}

let nn = getStringList(["victor",3,5,"Aditya"])
console.log(nn);


// 17
let sum = numbers.reduce((acc,cur) => acc + cur, 0);
console.log(sum)

// 18
let concatCountries = countries.reduce((acc,cur) => acc +","+ cur, "Estonia")
console.log(`${concatCountries} are the north European countries`)

// 20
let lengthSeven = names.some((name) => name.length > 7)
console.log(lengthSeven)

// 21
let allCountriesLand = countries.every((country) =>{
    return country.includes("land")
})
console.log(allCountriesLand)

// 23
let res = countries.find(country =>{
    return country.length === 6
})
console.log(res);

// 24
let resIndex = countries.findIndex(country =>{
    return country.length === 6
})
console.log(resIndex);

// 25
let resIndexNorway = countries.findIndex(country =>{
    return country === "Norway"
})
console.log(resIndexNorway);

// 26
let resIndexRussia = countries.findIndex(country =>{
    return country === "Russia"
})
console.log(resIndexRussia);
