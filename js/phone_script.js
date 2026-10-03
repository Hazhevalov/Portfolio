// =========================
// COFFEE NAP SCREENS
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(".main_info_contaienr");
    const appScreen = document.querySelector("#app-screen");

    const screens = {
        welcome: "./img/Cn_scrins/Welcome screen 3.png",
        add: "./img/Cn_scrins/Quiz-1.png",
        statistics: "./img/Cn_scrins/Calendar.png",
        settings: "./img/Cn_scrins/Settings.png"
    };

    let currentScreen = null;
    let isChanging = false;

    function changeScreen(screenName) {
        if (!screens[screenName]) {
            console.warn(`Screen "${screenName}" does not exist.`);
            return;
        }

        if (currentScreen === screenName || isChanging) {
            return;
        }

        isChanging = true;
        appScreen.classList.add("is-changing");

        setTimeout(() => {
            const newSrc = screens[screenName];

            appScreen.src = newSrc;

            appScreen.onload = () => {
                appScreen.classList.remove("is-changing");
                currentScreen = screenName;
                isChanging = false;
            };

            appScreen.onerror = () => {
                console.error(`Failed to load: ${newSrc}`);
                appScreen.classList.remove("is-changing");
                isChanging = false;
            };
        }, 300);
    }


    // =========================
    // SCROLL OBSERVER
    // =========================

    const screenObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            sections.forEach((section) => {
                section.classList.remove("active");
            });

            entry.target.classList.add("active");

            const screenName = entry.target.dataset.screen;

            changeScreen(screenName);
        });

    }, {
        threshold: 0.6
    });


    sections.forEach((section) => {
        screenObserver.observe(section);
    });


    // =========================
    // INITIAL SCREEN
    // =========================

    if (sections.length > 0) {
        changeScreen(sections[0].dataset.screen);
    }

});