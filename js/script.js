let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let musicPlay = document.querySelector('#musicPlay');
const music = new Audio('music.mp3');
let musicPause = true
musicPlay.addEventListener("click",function(){
    if(musicPause ){
       
        music.play()
        musicPause  = false
    }else{
        music.pause()
        musicPause  = true
    }
   
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
let hed = document.querySelector('header')


let moonPlay = true;

moon.addEventListener("click",function(){
    if(moonPlay){
        body.style.background = 'black'
        hed.style.background = 'black'
       
        moonPlay = false
    }else{
        body.style.background = '#8DA399'
        hed.style.background = '#8DA399'
        moonPlay = true
    }
   
})







