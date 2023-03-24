# Loops o Bucles
"""

for iterador in datos:
    sentencias

while condicion:
    sentencias


range(start, stop, step) start = 0 stop = ? step = 1

variable += 1
variable = variable + 1

"""

import random
import math
nombres = ['Hugo', 'Paco', 'Luis']

# for with range
for i in range(0, 11, 2):
    print(i)

# for in with range
for indice in range(0, len(nombres)):
    print(nombres[indice])

# for in
for nombre in nombres:
    print(nombre)

i = 0
while(i < len(nombres)):
    print(nombres[i])
    i+=1


uppercase_names = [ name.upper() for name in nombres]
print(uppercase_names)

numbers_to_hundred = [ math.floor(random.random() * num) for num in range(1, 11)]
print(numbers_to_hundred)

numbers = []
for x in range(10):
    numbers.append(math.floor(random.random() * 10) + 1)

print(numbers)
