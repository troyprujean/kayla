let hover = Array.from(document.querySelectorAll('li'));

console.log(hover)

hover.map(m => {
    console.log(m)
    m.addEventListener('mouseover', function (){
    //this.firstChild.classList.add('hovertext')
    this.children[0].classList.add('hovertext')
    })
    m.addEventListener('mouseout', function () {
        this.children[0].classList.remove('hovertext')
    })
    m.addEventListener('click', function () {
    window.location.href = `${this.children[0].getAttribute('href')}`;
    })
})