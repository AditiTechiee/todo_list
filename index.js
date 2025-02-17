let inputs = document.getElementById('inp');
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        
        // Add event listener for the trash icon
        newEle.querySelector("i").addEventListener("click", remove);
        
        // Define the remove function
        function remove() {
            newEle.remove(); // Call the remove method
        }
    }
}