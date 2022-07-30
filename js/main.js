let elBox = document.querySelector(".nav__list")
let elBtn = document.querySelector(".burger")
let elCall = document.querySelector(".nav__call")

elBtn.addEventListener("click", function(){
    elCall.classList.toggle("nav__call-active")
    elBox.classList.toggle("active")
    elBtn.classList.toggle("burger__active")
})