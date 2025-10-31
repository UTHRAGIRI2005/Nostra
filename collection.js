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

// searching functionalities

var search = document.getElementById("search")
var clothcollectionlist = document.querySelector(".clothcollection")
var h2list = clothcollectionlist.querySelectorAll("h2")
console.log(h2list)

search.addEventListener("keyup", function (event) { // Add 'event' parameter here
    var enteredvalue = event.target.value.toUpperCase()

    for (i = 0; i < h2list.length; i++) {
        if (h2list[i].textContent.toUpperCase().indexOf(enteredvalue) < 0) {
            h2list[i].parentElement.style.display = "none"
        }
        else {
            h2list[i].parentElement.style.display = "block"
        }
    }
})

