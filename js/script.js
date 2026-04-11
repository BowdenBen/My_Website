const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const resumeOpenLink = document.getElementById("open-resume");
const resumeModal = document.getElementById("resume-modal");
const resumeCloseBtn = document.getElementById("close-resume");
const resumeBackdrop = document.getElementById("resume-backdrop");

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    const navLinks = siteNav.querySelectorAll("a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            siteNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

if (resumeOpenLink && resumeModal && resumeCloseBtn && resumeBackdrop) {
    resumeOpenLink.addEventListener("click", function (event) {
        const isMobile = window.matchMedia("(max-width: 700px)").matches;

        if (isMobile) {
            return;
        }

        event.preventDefault();
        resumeModal.classList.add("show");
        resumeModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    });

    function closeResumeModal() {
        resumeModal.classList.remove("show");
        resumeModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    resumeCloseBtn.addEventListener("click", closeResumeModal);
    resumeBackdrop.addEventListener("click", closeResumeModal);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && resumeModal.classList.contains("show")) {
            closeResumeModal();
        }
    });
}