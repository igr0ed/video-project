"use strict"

let btn = document.querySelector('.switch-btn');
let video = document.querySelector('video');

btn.addEventListener('click', function(event) {
    event.target.classList.toggle('switch-on')
    if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
})
