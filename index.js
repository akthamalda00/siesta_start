const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded",initilizeSlider );  
function initilizeSlider() {
  
   if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlides");
    intervalId = setInterval(nextslide, 5000);

   }
    
}

function showslide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {  
        slide.classList.remove("displaySlides");

    })
    slides[slideIndex].classList.add("displaySlides");


}

function prevslide() {
    clearInterval(intervalId); // Clear the interval when navigating manually
    slideIndex--;
    showslide(slideIndex);

  
}

function nextslide() {
    slideIndex++;
    showslide(slideIndex);
  
}