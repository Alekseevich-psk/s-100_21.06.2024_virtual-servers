(function () {
    const parent = document.querySelector(".faq") as HTMLElement | null;
    if (parent === null) return;

    const items = parent.querySelectorAll(".faq__item") as NodeList;

    if (items.length > 0) {
        items.forEach((item: HTMLElement) => {
            const header = item.querySelector(".faq__header") as HTMLElement | null;

            if (header !== null) {
                header.addEventListener("click", () => {
                    item.classList.toggle("active");
                });
            }
        });
    }
})();
