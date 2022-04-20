const button = document.querySelector('.button');
const buttonBorderOne = button.querySelector('.button__border--one');
const buttonBorderTwo = button.querySelector('.button__border--two');
const distance = 10;

function borderMove(event){
    const width = button.offsetWidth;
    const height = button.offsetHeight;
   

    const { offsetX:x, offsetY:y} =event
    const xDistance = Math.round(( x / width * distance ) - (distance / 2))
    const yDistance = Math.round(( x / height * distance ) - (distance / 2))

    buttonBorderOne.style.transform = `translate(${-xDistance}px, ${yDistance}px)`
    buttonBorderTwo.style.transform = `translate(${xDistance}px, ${-yDistance}px)`
}

function borderReset(){
    buttonBorderOne.style.transform = `translate(0px,0px)`
    buttonBorderTwo.style.transform = `translate(0px,0px)`
}

button.addEventListener('mousemove', borderMove)
button.addEventListener('mouseleave', borderReset)