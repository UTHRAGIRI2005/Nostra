// offer message
var offermsg = document.querySelector(".offermsg")
var xoffermsg = document.getElementById("xoffermsg")
xoffermsg.addEventListener("click",function(){
    offermsg.style.display ="none"
})

// side navbar

var menu = document.getElementById("menu")
var sidenav = document.querySelector(".sidenav")
var xmark = document.getElementById("xmark")
menu.addEventListener("click",function(){
    sidenav.style.display="flex"
})
xmark.addEventListener("click",function(){
    sidenav.style.display="none"
})