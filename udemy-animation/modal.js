const button = document.querySelector('.button')
const overlay = document.querySelector('.overlay')
const activeClass = "overlay--active"
const overlayCard = overlay.querySelector('.overlay__card')

button.addEventListener('click', ()=>{
    overlay.classList.add(activeClass)
})

overlay.addEventListener('click',(event)=>{
    const clickedElement = event.target
    if( overlayCard !== clickedElement){
        overlay.classList.remove(activeClass)
    }
    
})