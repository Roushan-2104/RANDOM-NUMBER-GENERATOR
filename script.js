let number = document.getElementById("number");

let generate = document.getElementById("generate").addEventListener("click",function (){
    number.innerText = Math.round(Math.random() * 100);
});
