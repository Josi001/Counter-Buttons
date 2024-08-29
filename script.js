let blueButton = document.querySelector(".blue");
let redButton = document.querySelector(".red");
let greenButton = document.querySelector(".green");


blueButton.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "blue";
})

redButton.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "red";
})

greenButton.addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "green";
})