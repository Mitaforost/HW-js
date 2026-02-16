"use strict";

const sum = document.querySelector('.sum');
const buttons = document.querySelectorAll("button");

let counter = 0
buttons.forEach(button => {
    button.addEventListener("click", function (){
        counter++;
        sum.textContent = counter;
        buttons.forEach(btn =>{
            btn.textContent = "Нажми меня";
        })
        this.textContent = "Нажата!";
    })
})
