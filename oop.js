// Programacion Orientada a Objetos
/* 

- Abstraccion
- Encapsulamiento
- Herencia
- Polimorfismo

*/

person = {
    name: '',
    lastname: '',
    age: 0,
    eat: function(){}
}

class Person {
    name = ""
    lastname = ""
    age = 0

    constructor(name, lastname){
        this.name = name || "John";
        this.lastname = lastname || "Doe";
        this.age = "Unknown"
    }

    eat(){
        console.log("Metodo Eat");
    }

    fullname(){
        return `${this.name} ${this.lastname}`
    }
}


let est1 = new Person("Alex", "Cabrera");
//est1.name = "Alex"
//est1.lastname = "Cabrera"
est1.age = 30 

est1.eat()

console.log(est1.fullname());


class Student extends Person {

}

class Professor extends Person {

}


est2 = new Student("Jane", "Doe");
prof1 = new Professor("Albert", "Smith")

console.log(est2.fullname());
console.log(prof1.fullname());