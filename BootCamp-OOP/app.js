
/*
class Person {
    constructor(age, sex, name){
        this.age = age
        this.sex = sex
        this.name = name
        this.run = null
    }

    walk(run){
        this.run = run
    }

    
    we do not need to set a return in the a setter method. it will require calling the method again in the getter method
    hence need to pass a parameter

    getWalk(){
        return `${this.name} runs very ${this.run}`
    }
}

const Alican = new Person(24,"male", "alican")
Alican.walk('fast')

console.log(Alican.getWalk())



class Boy extends Person {
    constructor(play,age, sex, name){
        super(age, sex, name)
        this.play = play
    }

    fight(beat){
        return beat
    }

    getFight(){
        return `${this.name} is good at ${this.play} especially ${this.fight('Slowly')} and walks ${this.run}`
    }
}

const James = new Boy('Eating','31','male','Ajemsi')
James.fight('Back-sammer')
James.walk('slowly')
console.log(James.getFight())
*/


/*
Object Literal

var Car = {
    name:"BMW",
    model:"2019"
}
*/




// Factory
// the function returns an object
/*

function Person(Name,Age,Sex){
    return{
        name:Name,
        age:Age,
        sex:Sex
    }
}

var fred = Person('Fred', 2, 'male')
var Beatrice = Person('Beatrice', 1,'female')
var James = Person('James', 2,'male')

*/




/*
//Constructor

function Person(Name,Age,Sex){
      this.name = Name
      this.age = Age
      this.sex = Sex
    
        // walking = function(speed){
        //     this.speed = speed
        // }
}

Person.prototype.walking = function(walk){
    this.walk = walk
    return `${walk}`
}

var fred = new Person('Fred', 2, 'male')
var Beatrice = new Person('Beatrice', 1,'female')
var James = new Person('James', 2,'male')

const wad = James.walking('langsam')
console.log(wad)
*/



// Encapsulation
// As long as you have methods and properties inside a class or an object (within the same structure)



// Polymorphism
// if within one class one method can exist in more than one form.. assigning it different parameters
//that is also called overloading under polymorphism.. the moment you have the same method with the same name
//the last one will override the first method

/*
class Calculator{
    constructor(){

    }
    add(num1,num2){
        console.log (num1+num2)
    }

    add(num1,num2,num3){
        console.log(num1+num2+num3)
    }
}

const calc1 = new Calculator()
calc1.add(2,5,8)
calc1.add(2,5)

*/

/*



// Inheritance

class Person {
    constructor(Name,Age,Gender){
        this.name = Name
        this.age = Age
        this.gender = Gender
    }

    speak(){
        console.log('I am a Parant')
    }

    work(){
        console.log('I work as a Software Developer')
    }

    study(){
        console.log('I am in Primary One')
    }
}

class Parant extends Person {
    constructor(Name,Age,Gender,Profession){
        super(Name,Age,Gender)

        this.profession = Profession
    }
}

class Child extends Person{
    constructor(Name,Age,Gender){
        super(Name,Age,Gender)
    }

    // we are overiding the study method

    study(){
        console.log('I am a School drop out')
    }
}

const Julius = new Parant('Julius',25,'male')
Julius.work()

const James = new Child('James',3,'male')
James.study()


overriding in inheritance is simply changing the functionality of a method in a parent class by 
a child class. 
*/


/*
// destructuring 

class Person {
    constructor({Name,Age,Gender}){
        this.name = Name
        this.age = Age
        this.gender = Gender
    }}


const Peter = new Person({Name:'Peter', Age:34, Gender:'Male'})

console.log(Peter)
*/


//Abstraction

class Person {
    constructor(Name,Age,Gender){
        this.name = Name
        this.age = Age
        this.gender = Gender
        this.educationBg = null
    }}


class EducBg{
    constructor(obj){
        this.bgObject = obj
    }
}

const john = new Person('Alican',27,'Male');
console.log(john)

john.educationBg = new EducBg({
    Olevel:'BSS',
    Alevel:'JSS'
})

console.log(john)
