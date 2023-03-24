# Programacion Orientada a Objetos
""" 

- Abstraccion
- Encapsulamiento
- Herencia
- Polimorfismo

"""

person = {
    "name": "",
    "lastname": "",
    "age": 0,
    "eat": lambda x: print(x)
}

class Person:
    name = ""
    lastname = ""
    age = ""

    def __init__(self, name = "John", lastname = "Doe"):
        self.name = name
        self.lastname = lastname
        self.age = "Unknown"

    def eat(self):
        print("Metodo Eat")

    def saludo(self):
        return self.fullname()

    def fullname(self):
        return f"{self.name} {self.lastname}"


est1 = Person()

print(est1.fullname())

class Student(Person):
    
    def fullname(self):
        return f"Estudiante: {self.name} {self.lastname}"

    def eat(self, meal):
        print(f"Estoy comiendo: ", meal)


est2 = Student("Anna", "Smith")
print(est2.eat("Pollo"))


class A:
    itemA = "itemA"
    def uno(self):
        return "1A"

class B:
    itemB = "itemB"
    def uno(self):
        return "1B"

class C(A, B):
    pass


c1 = C()
print(c1.itemA)