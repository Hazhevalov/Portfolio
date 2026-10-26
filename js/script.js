document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
});


// =========================
// LENIS
// =========================

const lenis = new Lenis({
    smoothWheel: true,
    lerp: 0.08
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// =========================
// REVEAL ANIMATION
// =========================

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach((element) => {
    revealObserver.observe(element);
});

// замена текста внутри тега
const techTag = document.getElementById("tech-tag");

const technologies = ["C#", ".NET", "ASP.NET", "SQL"];

let currentIndex = 0;

setInterval(() => {
    techTag.classList.add("changing");

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % technologies.length;
        techTag.textContent = technologies[currentIndex];
        techTag.classList.remove("changing");
    }, 300);
}, 3000);