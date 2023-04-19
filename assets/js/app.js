let cl = console.log;
const box = document.getElementById("box")
const btn = document.getElementById("btn")

let flag = true;

btn.addEventListener("click", function(){
    if(flag === true){
        box.style.display = "none";
        flag = false;
    }else{
        box.style.display = "block";
        flag = true;
    }
})