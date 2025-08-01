

// const fruits=['Banana','apple.','kiwi','grapes']; 



// const numbers = [2,3,2,6,78,7,4]; 


// const capitalFruits = fruits.map((fr)=>{
//     return fr.toUpperCase(); 
// })
// console.log(fruits)

// console.log(capitalFruits)

// const filteredFruits = fruits.filter((fr) => {
//     return fr.includes('a');
// })
// console.log(filteredFruits)
// let acc = 0; 
// const sum = numbers.reduce((acc, num)=>{
//     return acc+=num; 
// },acc)

// console.log(sum); 


// fruits.some((fr)=>{
//     console.log(fr)
// })


// function add(){
//     let sum =0; 
//     for(let i = 0; i<arguments.length; i++){
//         sum+=arguments[i]; 
//     }
//     console.log("The sum is: ",sum)
// }

// add(3,2,4,7,2,5); 


// const nums1=[2,3,2,35,6,7,8]; 
// const nums2=[2,6,7,8,82,4,5,7];

// const joinedArr = [...nums2,...nums1]; 

// console.log(joinedArr)


const colors = ['red', 'green', 'yellow', 'pink', 'black']; 

const user = {
    name:"Satvik",
    age:23,
    address:{
        city:"Siwan",
        state:"Bihar"
    },
}


const {name:userName,age, address:{city}} = user;



console.log(userName, age, city)


// const color1 = colors[0]; 
// const color2= colors[1]
// const color3= colors[2]

const[color1,b,c] =colors

console.log(c)


function userDetails({age, address:{city}, name}){
    console.log("The userName is: ",name); 
    console.log("The user City is : ", city); 
    console.log("The user age is: ", age)
}
userDetails(user); 