var marriagemarch=new Audio("./weddmar.mp3");
var birthday=new Audio("./bday.mp3");
var graduate=new Audio("./grad.mp3");
document.getElementById("marr").addEventListener("mouseover",function(){
    marriagemarch.play();
})

document.getElementById("marr").addEventListener("mouseout",function(){
    marriagemarch.pause();
})

document.getElementById("birt").addEventListener("mouseover",function(){
    birthday.play();
})

document.getElementById("birt").addEventListener("mouseout",function(){
    birthday.pause();
})

document.getElementById("ceri").addEventListener("mouseover",function(){
    graduate.play();
})

document.getElementById("ceri").addEventListener("mouseout",function(){
    graduate.pause();
})

