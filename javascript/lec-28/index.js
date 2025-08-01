

function printHello(name){
    console.log('Hello fromn hrer', name)
}

const printName = (name = 'Devloper') =>{
    console.log("The name is ", name); 
    return 0; // this is the function result valeu which is return by the function
    /// if we don't return anyting then it will return undefine by default 
    // even we can result our name anything else
}


function introDuction(name, occ, role, age, city){
    console.log(`The user name is : ${name}`)
    console.log(`The user occupation is : ${occ}`)
    console.log(`The user role is : ${role}`)
    console.log(`The user age is : ${age}`)
    console.log(`The user citty is : ${city}`)
}


introDuction("satvik","SoftwareDevloper", "React-native", '23','Siwan')

printHello("Satvik"); 
printHello(); 
printHello('Tanisha'); 
printHello("Rahul")

console.log(printName("hyeee"))