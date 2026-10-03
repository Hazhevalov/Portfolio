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