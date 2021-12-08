const toggleButton = document.getElementById("hamburger")
const navbarLinks = document.getElementById("nav-links")


const buttons = document.querySelectorAll("[data-carousel-button]")

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})


buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const offset = button.dataset.carousel-button === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide)+offset;
        if(newIndex<0){
            newIndex=slides.children.length-1;
        }
        if(newIndex>=slides.children.length){
            newIndex=0;
        }
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
    })
})