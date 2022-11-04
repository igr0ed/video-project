"use strict"

let btn = document.querySelector('.switch-btn');

btn.addEventListener('click', function(event) {
    event.target.classList.toggle('switch-on')
})