// offer message
var offer = document.querySelector(".offer")
offerxmark = document.getElementById("offermsg-xmark")
offerxmark.addEventListener("click", function () {
    offer.style.display = "none"
})

// side navbar

var menu = document.getElementById("menu")
var xmark = document.getElementById("x-mark")
var sidenavbar = document.querySelector(".sidenavbar")
menu.addEventListener("click", function () {
    sidenavbar.style.display = "block"
})

xmark.addEventListener("click", function () {
    sidenavbar.style.display = "none"
})