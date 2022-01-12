let currentIndex = 3;
showSlide(currentIndex);

function moveSlide(movement) {
    currentIndex += movement;
    showSlide(currentIndex);
}

function showSlide(newIndex) {
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    if (newIndex > slides.length) {
        currentIndex = 1;
    } else if (newIndex < 1) {
        currentIndex = slides.length;
    } else {
        currentIndex = newIndex;
    }

    for (let i = 0; i < slides.length; i++) {
        if (i != currentIndex - 1) {
            slides[i].style.display = "none";
            dots[i].className = dots[i].className.replace("active", "");
        } else {
            slides[currentIndex - 1].style.display = "block";
            dots[currentIndex - 1].className += " active";
        }
    }
}
