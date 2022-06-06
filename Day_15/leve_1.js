class Animal{
    constructor(name,age,color,legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    fullName() 
}

class Dog extends Animal{
    dogName(){
        console.log(`My name is ${d1.name}`)
    }
}

class Cat extends Animal{
    catName(){
        console.log(`My name is ${c1.name}`)
    }
}

// const dog = new Animal("dogoo",5,"black",4);
const c1 = new Cat("Kat",3,"white",4);
const d1 = new Dog("dogoo",5,"black",4)

console.log(d1.dogName())
console.log(c1.catName())