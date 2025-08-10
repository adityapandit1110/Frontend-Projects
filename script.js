// var main = document.querySelector(".main");
// var cursor = document.querySelector("#cursor");

// window.addEventListener("mousemove",function (dets) {
//     cursor.style.left = dets.x+"px"
//     cursor.style.top = dets.y+"px"
// })
const main = document.querySelector(".main");
const hamburgernav = document.querySelector(".nav-mobile");
const hamburger = document.querySelector(".ri-menu-line");

hamburger.addEventListener("click",()=>{
    hamburgernav.classList.toggle("active");
    hamburger.classList.toggle("ri-close-line");
    hamburger.classList.toggle("ri-menu-line");
});