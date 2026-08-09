(function () {

    // ===== Navigation Controls =====
    const controls = [...document.querySelectorAll(".control")];
    controls.forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    // ===== Theme Toggle =====
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // ===== Hire Me Button =====
    const hireBtn = document.getElementById("hire-btn");
    if (hireBtn) {
        hireBtn.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(".active-btn").classList.remove("active-btn");
            document.querySelector('[data-id="contact"]').classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById("contact").classList.add("active");
        });
    }

    // ===== Typing Animation =====
    const typedTextEl = document.querySelector(".typed-text");
    const cursorEl = document.querySelector(".cursor");

    const roles = [
        "Web Developer",
        "Data Engineer",
        "Software Engineer",
        "Problem Solver",
        "Python Developer"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 120;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typedTextEl.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 60;
        } else {
            typedTextEl.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 400;
        }

        setTimeout(type, typingSpeed);
    }

    if (typedTextEl) {
        setTimeout(type, 800);
    }

    // ===== Contact Form Submit =====
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const btn = contactForm.querySelector(".btn-text");
            btn.textContent = "Message Sent!";
            setTimeout(() => {
                btn.textContent = "Send Message";
                contactForm.reset();
            }, 3000);
        });
    }

})();
