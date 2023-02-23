burger = document.querySelector('.burger');
burger.onclick = function(){
    navbar=document.querySelector('.navbar');
    container=document.querySelector('.container');
    navbar.classList.toggle('active');
    container.classList.toggle('active');
}