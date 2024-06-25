(function () {
    const parent = document.querySelector(".main") as HTMLElement | null;
    if (parent === null) return;

    const title = parent.querySelector(".main__title") as HTMLElement | null;
    const desc = parent.querySelector(".main__wrap-desc") as HTMLElement | null;
    const bg = parent.querySelector(".main__bg") as HTMLElement | null;
    const ns = parent.querySelector(".main__next-section") as HTMLElement | null;

    const subElemForAnim = [desc, bg, ns];

    function textTypingAnimation(el: HTMLElement, subElements: any): void {
        const str = el.innerHTML as string;
        const lengthStr = str.length as number;
        const speedAnim = 50 as number;

        let idInterval: any;
        let i = 0;

        if (lengthStr <= 0) return;
        el.style.opacity = String(1);

        idInterval = setInterval(() => {
            el.innerHTML = str.slice(0, lengthStr - (lengthStr - i));
            i++;

            if (i > lengthStr) {
                clearInterval(idInterval);
                showSubElements(subElements);
            }
        }, speedAnim);
    }

    function showSubElements(array: any) {
        array.forEach((element: HTMLElement) => {
            element.style.opacity = String(1);
        });
    }

    if (title !== null) {
        if (window.outerWidth >= 768) {
            textTypingAnimation(title, subElemForAnim);
        } else {
            showSubElements(subElemForAnim);
        }
    }
})();
