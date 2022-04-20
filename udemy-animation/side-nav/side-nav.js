/* App JS */
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const activeBurgerClass = 'burger--active'
const activeMenuClass = 'menu--active'

burger.addEventListener('click', ()=>{
    burger.classList.toggle(activeBurgerClass);
    menu.classList.toggle(activeMenuClass)
})