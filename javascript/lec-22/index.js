const fruit = ['Mango', 'Apple', 'Orange']; 

const user1 = {
    firstName: 'Satvik', 
    lastName: 'Priyadarshi'
}

const final = [...fruit,user1]; 

console.log(final[3])

const myFruit = [...fruit]; 

Object.assign(myFruit, fruit)

console.log(myFruit)
