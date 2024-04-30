# And we're going to learn a bit of python

# class StudentObject {
#     constructor(name, cohort){
#         this.name = name
#         this.cohort = cohort
#     }
#     // Methods
#     sayHello(){
#         console.log(`Hello my name is ${this.name}, and I am apart of the ${this.cohort} cohort.`)
#     }
# }

class StudentObject:
    def __init__(self, name, cohort):
        self.name = name
        self.age = cohort


aNewStudent = StudentObject("Bryan", "Dec 11")

print(aNewStudent.name)

# OOP -> Object Oriented Programming

# Data types
# BigInt, Integers
# Java -> Doobles, Long, long, int, smallInt