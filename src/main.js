"use strict"

const menuContainer = document.querySelector(".menu");
const libial = document.querySelector(".libial")
const menuInfo = document.querySelector("#info");
const modal = document.querySelector(".background")
const modal_cursor = document.querySelector(".modal_cursor")
const modal_content = document.querySelector(".modal_content")
const homeBtn = document.querySelector(".go_home_btn")
const educational = document.querySelector("#edu")
const connect = document.querySelector("#connect")

let menuVisible = false;

menuInfo.addEventListener("click", () => {

    menuVisible = !menuVisible;

    if (menuVisible) {
        menuContainer.style.display = "block"; 
        libial.style.display = "block";
        modal.style.display = "block"
    } else {
        menuContainer.style.display = "none"; 
        libial.style.display = "none";
    }
});
modal.addEventListener("click", ()=>{
    modal.style.display = "none"
    menuContainer.style.display = "none";
    libial.style.display = "none"; 
    modal_cursor.style.display = "none"
    modal_content.style.display = "none"
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

connect.addEventListener("click",()=>{
    window.location.href = "/public/connect.html"
})
