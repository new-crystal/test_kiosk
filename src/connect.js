"use strict"

const menuContainer = document.querySelector(".menu");
const libial = document.querySelector(".libial")
const menuInfo = document.querySelector("#info");
const homeBtn = document.querySelector(".go_home_btn")
const educational = document.querySelector("#edu")
const etonogestrel = document.querySelector("#etonogestrel")
const connect = document.querySelector("#connect")
const reservation = document.querySelector(".reservation")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const select_box_1 = document.querySelector(".select_box_1")
const option_box_1 = document.querySelector(".option_box_1")
const select_box_2 = document.querySelector(".select_box_2")
const option_box_2 = document.querySelector(".option_box_2")
const confirmBtn = document.querySelector(".request_connect")
const connect_confirm = document.querySelector(".connect_confirm")
const modal = document.querySelector(".background")

let menuVisible = false;

menuInfo.addEventListener("click", () => {

    menuVisible = !menuVisible;

    if (menuVisible) {
        menuContainer.style.display = "block"; 
        libial.style.display = "block";
    } else {
        menuContainer.style.display = "none"; 
        libial.style.display = "none";
    }
});

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

connect.addEventListener("click",()=>{
    window.location.href = "/public/connect.html"
})


let firstOption = false;
let secondOption = false;

select_box_1.addEventListener("click", ()=>{
    firstOption = !firstOption
    if(firstOption){
        option_box_1.style.display = "block"
        secondOption = false;
        option_box_2.style.display = "none"
    }else{
        option_box_1.style.display = "none"
    }
})

select_box_2.addEventListener("click", ()=>{
    secondOption = !secondOption
    if(secondOption){
        option_box_2.style.display = "block"
        firstOption = false;
        option_box_1.style.display = "none"
    }else{
        option_box_2.style.display = "none"
    }
})

confirmBtn.addEventListener("click", ()=>{
    select_box_2.style.display = "none"
    select_box_1.style.display = "none"
    option_box_1.style.display = "none"
    option_box_2.style.display = "none"
    confirmBtn.style.display = "none"
    connect_confirm.style.display = "block"
    modal.style.display = "block"
})

modal.addEventListener("click", ()=>{
    select_box_2.style.display = "block"
    select_box_1.style.display = "block"
    confirmBtn.style.display = "block"
    connect_confirm.style.display = "none"
    modal.style.display = "none"
})
