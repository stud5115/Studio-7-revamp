let slideIndex = 1;
let reviewIndex = 0;

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Automatic scrolling for reviews
function scrollReviews() {
    const reviews = document.querySelectorAll('.reviews-container .review');
    const totalReviews = reviews.length;

    reviews.forEach((review, index) => {
        review.style.transform = `translateX(-${reviewIndex * 100}%)`;
    });

    reviewIndex = (reviewIndex + 1) % totalReviews;
}

setInterval(scrollReviews, 3000); // Change interval as needed

// Animation for elements on scroll
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-zoom');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                if (entry.target.classList.contains('animate-slide-up')) {
                    entry.target.style.transform = 'translateY(0)';
                }
                if (entry.target.classList.contains('animate-slide-left')) {
                    entry.target.style.transform = 'translateX(0)';
                }
                if (entry.target.classList.contains('animate-slide-right')) {
                    entry.target.style.transform = 'translateX(0)';
                }
                if (entry.target.classList.contains('animate-zoom')) {
                    entry.target.style.transform = 'scale(1)';
                }
            }
        });
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
