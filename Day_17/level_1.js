// level 1
//1
const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
  }
  
  const userText = JSON.stringify(user, undefined, 4)
  localStorage.setItem('user', userText)

  let firstName = localStorage.getItem('firstName')
  let firstNameParse = JSON.parse(firstName,undefined,4)
  console.log(firstNameParse)

  if(localStorage.length > 0){
      console.log(`it is not empty length is ${localStorage.length}`)
  }
  else{
      console.log("empty")
  }
// let age = localStorage.getItem('age')
// let skills = localStorage.getItem('skills')
// console.log(firstName, age, skills)