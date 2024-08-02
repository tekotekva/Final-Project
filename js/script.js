const nav = document.getElementById('navigation');
const burger = document.getElementById('burger-bar');


burger.addEventListener("click", function(){
    nav.classList.toggle("active");
})