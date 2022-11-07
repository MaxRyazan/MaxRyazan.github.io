const pulse2 = document.querySelectorAll('.pulse2')
const pulse = document.querySelectorAll('.pulse')
const buttonContainer3 = document.querySelector('.buttonContainer3')


function events(container, event, element, color){
    container.addEventListener(event, ()=> {
        element.forEach(pulse2 => pulse2.style.backgroundColor = color)
    })
}

events(buttonContainer3, 'mouseover', pulse2, 'white')
events(buttonContainer3, 'mouseout', pulse2, 'lightgreen')


window.addEventListener('DOMContentLoaded', () => {
    if(window.innerWidth < 700) {
        pulse.forEach(pulse => pulse.style.display = 'none')
        pulse2.forEach(pulse => pulse.style.display = 'none')
    }
})
window.addEventListener('resize', () => {
    if(window.innerWidth < 700) {
        pulse.forEach(pulse => pulse.style.display = 'none')
        pulse2.forEach(pulse => pulse.style.display = 'none')
    } else {
        pulse.forEach(pulse => pulse.style.display = 'block')
        pulse2.forEach(pulse => pulse.style.display = 'block')
    }
})