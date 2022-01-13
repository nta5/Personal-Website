let currentIndex = 3;

if (localStorage.getItem("slideIndex") != null && window.screen.width > 800) {
    currentIndex = Number(localStorage.getItem("slideIndex"));
    localStorage.setItem("slideIndex", null);
}
showSlide(currentIndex);

document.body.onresize = function () {
    if (window.screen.width <= 800) {
        currentIndex = 3;
        showSlide(3);
    } else {
        showSlide(currentIndex);
    }
};

function moveSlide(movement) {
    currentIndex += movement;
    showSlide(currentIndex);
}

function showSlide(newIndex) {
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    var blogs = document.getElementsByClassName("blog-content");

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
            blogs[i].style.display = "none";
        } else {
            slides[i].style.display = "block";
            dots[i].className += " active";
            blogs[i].style.display = "block";
        }
    }
}
