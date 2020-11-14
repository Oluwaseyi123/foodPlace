const hamburger = document.querySelector('.hamburger')
const navUL = document.querySelector('.nav-ul')
hamburger.addEventListener('click', () => {
    // navUL.style.display = 'block'
    // navUL.classList.add('show')
    navUL.classList.toggle('check')
})

let links = document.querySelector('.nav-link')
const linkOne = document.querySelector('.nav-link-one')
const linkTwo = document.querySelector('.nav-link-two')
linkTwo.addEventListener('click', () => {
    navUL.classList.remove('check')
})
linkOne.addEventListener('click', () => {
    navUL.classList.remove('check')
})
links.addEventListener('click', ()=>{
        navUL.classList.remove('check')
    // console.log('clicked')
})



new Glider(document.querySelector('.glider'),{
    slidesToShow: 5,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});



const email = document.getElementById('email')
const subscribeBtn = document.querySelector('.subscribe-btn')

subscribeBtn.addEventListener('click', (e) => {
    let details = []

    details.push(email.value)

    console.log(details)
    e.preventDefault()
})

console.log(window.innerWidth)