(function () {
    const parent = document.querySelector(".news-reviews") as HTMLElement | null;
    if (parent === null) return;

    const reviews = parent.querySelectorAll(".card-rw") as NodeList;
    if (reviews.length <= 0) return;

    reviews.forEach((review: HTMLElement) => {
        const content = review.querySelector(".card-rw__content") as HTMLElement | null;
        const buttonWrapper = review.querySelector(".card-rw__align") as HTMLElement | null;
        if (content === null) return;

        if (content.innerHTML.length >= 170) {
            const button = review.querySelector(".card-rw__button") as HTMLElement | null;
            buttonWrapper.style.display = "block";

            if (button === null) return;
            button.addEventListener("click", () => {
                if (content.classList.contains("hide")) {
                    content.classList.remove("hide");
                }

                buttonWrapper.style.display = "none";
            });
        } else {
            if (content.classList.contains("hide")) {
                content.classList.remove("hide");
            }
        }
    });
})();
