(function () {
    const cRatings = document.querySelectorAll(".c-rating") as NodeList;
    if (cRatings.length <= 0) return;

    function createStar(wrapper: HTMLElement, activeValue: number, maxValue: number): void {
        const star = (activeClass: string) => {
            return `<div class="c-rating__ico ${activeClass}"></div>`;
        };

        for (let index = 1; index <= maxValue; index++) {
            let activeClass = "";
            if (index <= activeValue) activeClass = "active";
            
            wrapper.insertAdjacentHTML("beforeend", star(activeClass));
        }
    }

    cRatings.forEach((element: HTMLElement) => {
        const valueElement = element.querySelector(".c-rating__value") as HTMLElement | null;
        const wrapper = element.querySelector(".c-rating__wrapper") as HTMLElement | null;

        let value = null;
        let maxValue = null;

        if (valueElement !== null && wrapper !== null) {
            value = Number(valueElement.innerHTML);
            maxValue = Number(valueElement.getAttribute("data-max-value"));
            createStar(wrapper, value, maxValue);
        }
    });
})();
