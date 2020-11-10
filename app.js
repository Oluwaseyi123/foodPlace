console.log(window.innerWidth)
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