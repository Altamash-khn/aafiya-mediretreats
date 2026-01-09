let button = document.querySelector('.res-dot')
let nav = document.querySelector('.nav')
let ul = document.querySelector('.unordered')
let blockElements = document.querySelectorAll('.farhan')
let close = document.querySelector('.close-icon')

button.addEventListener('click', function(e){
    ul.classList.add('nav-res-style')
    close.style.display = "block";
    button.style.display = "none"
    blockElements.forEach((ele) => {
        ele.style.display = "block"
    });
})

close.addEventListener('click', function(e){
    ul.classList.remove('nav-res-style')
    blockElements.forEach((ele) => {
        ele.style.display = "none"
    });
    close.style.display= "none";
    button.style.display = "block"
})