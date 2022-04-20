function scrollFade(){
    const texts = document.querySelectorAll('.intro__text')
    texts.forEach(text => {
        const textPosition = text.getBoundingClientRect().top
        const windowHeight = window.innerHeight;

       if(textPosition < (windowHeight /1.4)){
           text.classList.add('intro__text--active')
       }
    })
}

window.addEventListener('scroll',scrollFade)