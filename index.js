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

// most wanted
var mostwanted__collection = document.querySelector(".mostwanted__collection")
var redheart = mostwanted__collection.querySelectorAll(".redheart")
var blackheart = mostwanted__collection.querySelectorAll(".blackheart")

// black heart Hide red heart show
for (i = 0; i < blackheart.length; i++) {

    blackheart[i].addEventListener("click", function (event) {
        sele = event.target
        var redheartt =this.nextElementSibling;
        sele.style.display = "none"
        redheartt.style.display = "block"
    })

}

// black heart show red heart Hide
for (i = 0; i < redheart.length; i++) {

    redheart[i].addEventListener("click", function (event) {
        selee = event.target
        var blackheartt =this.previousElementSibling;
        selee.style.display = "none"
        blackheartt.style.display = "block"
    })

}
