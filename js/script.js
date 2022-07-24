let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let musicPlay = document.querySelector('#musicPlay');
let musicPause=document.querySelector('#musicPause');
const music = new Audio('music.mp3');

musicPlay.addEventListener("click",function(){
    music.play()
})
musicPause.addEventListener("click",function(){
   music.pause()
})

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

let body = document.querySelector('body')
let moon =document.querySelector('#moon')
let sun = document.querySelector('#sun')
let hed = document.querySelector('header')

moon.addEventListener("click",function(){
    body.style.background = 'black'
    hed.style.background = 'black'
})

sun.addEventListener("click",function(){
  body.style.background = '#8DA399'
  hed.style.background = '#8DA399'
})







