const burgers = document.querySelectorAll('.burger')
const activeClass = 'burger--active'

burgers.forEach(burger =>{
    burger.addEventListener('click', ()=>{
        burger.classList.toggle(activeClass)
    })
})