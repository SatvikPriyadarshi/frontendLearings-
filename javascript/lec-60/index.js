// Select the original container (use class selector with dot)
const container = document.querySelector('.container');

function addDiv() {
    const newDiv = document.createElement("div"); 
    newDiv.classList.add('container'); 
    newDiv.innerHTML = "<h1>+</h1>"; 
    document.body.appendChild(newDiv); 
    console.log("called");
}
