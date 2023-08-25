"use strict"

const menuContainer = document.querySelector(".menu");
const libial = document.querySelector(".libial")
const menuInfo = document.querySelector("#info");
const modal = document.querySelector(".background")
const homeBtn = document.querySelector(".go_home_btn")
const educational = document.querySelector("#edu")
const requestBtn = document.querySelector(".request")
const edupopup = document.querySelector(".edupopup")
const closeBtn = document.querySelector(".close")
const requestConfirmBtn = document.querySelector(".request_btn")
const educonfirmModal = document.querySelector(".educonfirm")
const etonogestrel = document.querySelector("#etonogestrel")
const connect = document.querySelector("#connect")
const data = document.querySelector(".data")
const address = document.querySelector(".address")

let menuVisible = false;

menuInfo.addEventListener("click", () => {

    menuVisible = !menuVisible;

    if (menuVisible) {
        menuContainer.style.display = "block"; 
        libial.style.display = "block";
        modal.style.display = "block"
        edupopup.style.display = "none"
    } else {
        menuContainer.style.display = "none"; 
        libial.style.display = "none";
    }
});

modal.addEventListener("click", ()=>{
    modal.style.display = "none"
    menuContainer.style.display = "none"; 
    libial.style.display = "none";
    requestBtn.style.display = "block"
    requestConfirmBtn.style.display = "block"
})


libial.addEventListener("click",()=>{
    window.location.href = "/public/libial.html"
})

homeBtn.addEventListener("click", ()=>{
    window.location.href = "/public"
})

educational.addEventListener("click", ()=>{
    window.location.href = "/public/educational.html"
})

requestBtn.addEventListener("click", ()=>{
    modal.style.display = "block"
    edupopup.style.display = "block"
    requestBtn.style.display = "none"
    data.style.display = "block"
    address.style.display = "block"
})

closeBtn.addEventListener("click", ()=>{
    modal.style.display = "none"
    edupopup.style.display = "none"
})

edupopup.addEventListener("click", (e)=>{
    e.stopPropagation()
})

data.addEventListener("click", (e)=>{
    e.stopPropagation()
})

address.addEventListener("click", (e)=>{
    e.stopPropagation()
})

requestConfirmBtn.addEventListener("click", (e)=>{
    e.stopPropagation()
    edupopup.style.display = "none"
    requestConfirmBtn.style.display = "none"
    educonfirmModal.style.display = "block"
    data.style.display = "none"
    address.style.display = "none"
})

etonogestrel.addEventListener("click",()=>{
    window.location.href = "/public/etonogestrel.html"
})

connect.addEventListener("click",()=>{
    window.location.href = "/public/connect.html"
})
