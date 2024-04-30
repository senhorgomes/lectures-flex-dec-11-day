// Before classes

// Are a way of creating a blueprint for an object

// const newStudentObject = {
//     name: "Bryan",
//     cohort: "Dec 11",
//     sayHello: function() {console.log(`Hello my name is ${this.name}, and I am apart of the ${this.cohort} cohort.`)}
// }

// newStudentObject.sayHello()

// const anotherNewStudentObject = {
//     name: "Kevin",
//     cohort: "Dec 11",
//     sayHello: function() {console.log(`Hello my name is ${this.name}, and I am apart of the ${this.cohort} cohort.`)}
// }

// anotherNewStudentObject.sayHello()
// Create a blueprint, or a Class
// Class is essentially a blueprint
class StudentObject {
    constructor(name, cohort){
        this.name = name
        this.cohort = cohort
    }
    // Methods
    sayHello(){
        console.log(`Hello my name is ${this.name}, and I am apart of the ${this.cohort} cohort.`)
    }
}
// We can create instances, or objects based on our blueprints

const anotherNewStudentObject = new StudentObject("Kevin", "Dec 11")
// Could we create classes from existing classes?
// If we want to create a webdev class based off of the StudentObject
// 1. Create a new class, and manipulate it
// 2. Create another class based on an existing class

// Creating a blueprint from a blueprint
class WebDevStudentObject extends StudentObject {
    constructor(name, cohort, programmingLanguage){
        super(name, cohort);
        this.programmingLanguage = programmingLanguage
    }
}
// class CyberSecurityStudentObject extends StudentObject {
//     constructor(name, cohort, programmingLanguage){
//         super(name, cohort);
//         this.programmingLanguage = programmingLanguage
//     }
// }

const newStudentObject = new WebDevStudentObject("Bryan", "Dec 11", "Javascript")

newStudentObject.sayHello()