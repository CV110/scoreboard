


let num1 = document.getElementById("home")
let num2 = document.getElementById("guest")
let puntos1= 0
let puntos2= 0


function add1(){
    
    puntos1 += 1
    num1.textContent = puntos1
}
function add2(){
    
    puntos1 += 2
    num1.textContent = puntos1
}
function add3(){
    
    puntos1 += 3
    num1.textContent = puntos1
}
function add1g(){
    
    puntos2 += 1
    num2.textContent = puntos2
}
function add2g(){
    
    puntos2 += 2
    num2.textContent = puntos2
}
function add3g(){
    
    puntos2 += 3
    num2.textContent = puntos2
}

function restart(){
    num1.textContent = 0
    num2.textContent = 0
    puntos1 = 0
    puntos2 = 0
}
 