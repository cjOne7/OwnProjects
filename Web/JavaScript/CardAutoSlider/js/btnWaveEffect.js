const button = document.querySelector('.btn-link')
button.addEventListener('click', function (e) {
    let x = e.pageX - button.offsetLeft
    let y = e.pageY - button.offsetTop
    let ripples = document.createElement('span')
    ripples.style.left = `${x}px`
    ripples.style.top = `${y}px`
    this.appendChild(ripples)

    setTimeout(() => {
        this.removeChild(ripples)
    }, 500)
})