document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            const offsetTop = targetSection.offsetTop - document.querySelector("header").offsetHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });
});