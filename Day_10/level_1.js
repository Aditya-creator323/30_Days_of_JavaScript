const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const langSet = new Set(languages);
console.log(langSet)
console.log(langSet.size)

const counts = [];
const count = {};

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang)
    counts.push({ lang: l, count: filteredLang.length })
}

console.log(counts)


// LEVEL 1

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1
const emptySet = new Set();
console.log(emptySet)

// 2
let zeroToTen = new Set();
for (let i = 0; i <= 10; i++) {
    zeroToTen.add(i);
}
console.log(zeroToTen)

// 3
zeroToTen.delete(1);
console.log(zeroToTen)

//4
zeroToTen.clear()
console.log(zeroToTen)

// 5
const namesArr = ["Aditya", "Yogesh", "Parth", "Sk", "Rohit"]
const namesSet = new Set(namesArr)
console.log(namesSet)

// 6
const countriesNew = [
    ['Finland', 7],
    ['Sweden', 6],
    ['Norway', 6],
]
let countriesMap = new Map();
for(const [country,length] of countriesNew){
    countriesMap.set(country,length)
}
console.log(countriesMap)





