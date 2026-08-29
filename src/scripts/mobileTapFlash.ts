export function initMobileTapFlash() {
    const elements = document.querySelectorAll<HTMLElement>(
        ".mobile-tap-flash"
    );

    for (const element of elements) {
        if (element.dataset.tapBound === "true") continue;
        element.dataset.tapBound = "true";

        element.addEventListener("click", () => {
            if (!window.matchMedia("(max-width: 899px)").matches) return;

            element.classList.add("tap-flash");

            setTimeout(() => {
                element.classList.remove("tap-flash");
            }, 100);
        });
    }
}