let image1 = document.querySelectorAll('.image1');


image1.forEach(element => element.addEventListener('mouseover',function () {
        element.style.cursor = 'zoom-in';
    }
))

image1.forEach(element => element.addEventListener('click',function () {
    element.classList.toggle('zoom-in')
    }
))


