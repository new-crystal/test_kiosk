"use strict"

const menuContainer = document.querySelector(".menu");
const libial = document.querySelector(".libial")
const menuInfo = document.querySelector("#info");
const modal = document.querySelector(".background")
const homeBtn = document.querySelector(".go_home_btn")
const educational = document.querySelector("#edu")
const etonogestrel = document.querySelector("#etonogestrel")
const etonogestrelBtn = document.querySelector(".etonogestrel")
const etonogestrel_pop = document.querySelector(".etonogestrel_pop")
const etonogestrel_request_btn = document.querySelector(".etonogestrel_request_btn")
const etonogestrel_confirm = document.querySelector(".etonogestrel_confirm")
const check_1 = document.querySelector(".check_1")
const check_2 = document.querySelector(".check_2")
const connect = document.querySelector("#connect")

let menuVisible = false;

menuInfo.addEventListener("click", () => {

    menuVisible = !menuVisible;

    if (menuVisible) {
        menuContainer.style.display = "block"; 
        libial.style.display = "block";
        modal.style.display = "block"
        etonogestrel_pop.style.display = "none"
    } else {
        menuContainer.style.display = "none"; 
        libial.style.display = "none";
    }
});

modal.addEventListener("click", ()=>{
    modal.style.display = "none"
    menuContainer.style.display = "none"; 
    libial.style.display = "none";
    etonogestrel_confirm.style.display = "none"
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

etonogestrel.addEventListener("click",()=>{
    window.location.href = "/public/etonogestrel.html"
})

etonogestrel_pop.addEventListener("click",(e)=>{
    e.stopPropagation()
})

etonogestrelBtn.addEventListener("click", ()=>{
    modal.style.display = "block";
    etonogestrel_pop.style.display = "block"
})

etonogestrel_request_btn.addEventListener("click", (e)=>{
    e.stopPropagation()
    etonogestrel_pop.style.display = "none"
    etonogestrel_confirm.style.display = "block"
})

check_1.addEventListener("click", (e)=>{
    e.stopPropagation()
    check_1.style.display = "none"
})

check_2.addEventListener("click", (e)=>{
    e.stopPropagation()
    check_2.style.display = "none"
})

connect.addEventListener("click",()=>{
    window.location.href = "/public/connect.html"
})
