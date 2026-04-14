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

/* =========================================================
   SPRITE ANIMATION
========================================================= */
const sprite = document.getElementById("businessman");

if (sprite) {
    const COLS = 6;
    const FRAME_SIZE = 120;

    const walkFrames = [
        { row: 0, col: 1 },
        { row: 0, col: 2 },
        { row: 0, col: 3 },
        { row: 0, col: 4 },
        { row: 0, col: 5 },
        { row: 0, col: 4 },
        { row: 0, col: 3 },
        { row: 0, col: 2 }

    ];

    const HOVER_ROW = 4;

    const hoverFrames = [
        { row: HOVER_ROW, col: 5 },
        { row: HOVER_ROW, col: 4 },
        { row: HOVER_ROW, col: 3 },
        { row: HOVER_ROW, col: 2 },
        { row: HOVER_ROW, col: 1 },
        { row: HOVER_ROW, col: 0 },
        { row: HOVER_ROW, col: 1 },
        { row: HOVER_ROW, col: 2 },
        { row: HOVER_ROW, col: 3 },
        { row: HOVER_ROW, col: 4 }
    ];

    let currentFrames = walkFrames;
    let frameIndex = 0;
    const frameDelay = 140;

    function drawFrame(frame) {
        const x = -(frame.col * FRAME_SIZE);
        const y = -(frame.row * FRAME_SIZE);
        sprite.style.backgroundPosition = `${x}px ${y}px`;
    }

    function playAnimation() {
        drawFrame(currentFrames[frameIndex]);
        frameIndex++;

        if (frameIndex >= currentFrames.length) {
            frameIndex = 0;
        }
    }

    sprite.addEventListener("mouseenter", () => {
        currentFrames = hoverFrames;
        frameIndex = 0;
    });

    sprite.addEventListener("mouseleave", () => {
        currentFrames = walkFrames;
        frameIndex = 0;
    });

    drawFrame(currentFrames[0]);
    setInterval(playAnimation, frameDelay);
}