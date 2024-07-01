(function () {
    const buttons = document.querySelectorAll(".next-section__button") as NodeList;
    if (buttons.length <= 0) return;

    buttons.forEach((button: HTMLElement) => {
        button.addEventListener("click", () => {
            const parent = button.closest("section") as HTMLElement | null;
            if (parent === null) return;

            const nextSection = parent.nextElementSibling as HTMLElement | null;
            if (nextSection === null && nextSection.tagName !== "SECTION") return;

            return window.scrollBy({
                top: nextSection.getBoundingClientRect().top,
                left: 0,
                behavior: "smooth",
            });
        });
    });
})();
