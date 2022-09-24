/*
const doSomething = callback =>{
    setTimeout(() =>{
        const skills = ['HTML','CSS','JS'];
        callback('It did not go well',skills)
    },2000)
}

const callback = (err,result) =>{
    if(err){
        return console.log(err);
    }
    return console.log(result)
}
*/
// doSomething(callback)


/*
const doPromise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        const skills = ['HTML','CSS','JS']
        if(skills.includes('Node')){
            resolve(skills)
        }
        else{
            reject("Something wrong has happened")
        }
    },2000)
})

doPromise
    .then(result =>{
        console.log(result)
    })
    .catch(error => console.log(error))
    */


//    FETCH API
/*
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
        // getting the data
        console.log(data)
    })
    .catch(error => console.error(error)) // handling error if something wrong happens
    */

    /*

const url = 'https://restcountries.com/v2/all' // countries api
const fetchData = async()=>{
    try{
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    }catch(err){
        console.log(err)
    }
}

console.log('=== async and await')
fetchData()
*/


//     LEVEL 1
const url = 'https://restcountries.com/v2/all' // countries api

let countries;
let languages = [];
let largestCountries = [];

const fetchData = async()=>{
    try{
        const response = await fetch(url)           // await is used to get the value from the async function
        const data = await response.json()
        countries = data;
        countries.forEach(country =>{
            console.log(`country:${country.name} capital:${country.capital} languages:${country.languages} population:${country.population}`)
        })

        countries.forEach(country =>{
            country.languages.forEach(language =>{
                if(languages.indexOf(language.name) === -1){
                    languages.push(language.name)
                }
            })
        })

    }
    catch(err){
        console.log(err)
    }
}

console.log('==== async and await')

fetchData()


