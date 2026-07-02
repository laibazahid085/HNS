// =========================
// Header Scroll
// =========================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// =========================
// Counter Animation
// =========================
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;
            const speed = target / 100;

            const update = () => {

                if (count < target) {

                    count += speed;
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            };

            update();
            observer.unobserve(counter);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));


// =========================
// Mobile Menu
// =========================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}


// =========================
// Celebration Swiper
// =========================
document.addEventListener("DOMContentLoaded", () => {

    if (document.querySelector(".celebrationSwiper")) {

        new Swiper(".celebrationSwiper", {

            loop: true,

            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            slidesPerView: 1,

            spaceBetween: 30,

            speed: 800,

        });

    }

});
// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

function reveal() {

    reveals.forEach((item) => {

        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);