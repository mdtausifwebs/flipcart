let slideIndex = 1
showslides(slideIndex)

function plusSlides(n) {
    showslides(slideIndex += n)
}

function currentSlides(n) {

    showslides(slideIndex += n)
}

function showslides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides")
    let dots = document.getElementsByClassName("dot")
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active"
}

let slidesInsex = 0;
showslides()

function showslides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > slides.length) {
        slideIndex = 1

    }
    slides[slideIndex - 1].style.display = "block"
    setTimeout(showslides, 5000)
}