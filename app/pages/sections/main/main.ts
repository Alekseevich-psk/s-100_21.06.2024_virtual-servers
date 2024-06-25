(function () {
    const parent = document.querySelector(".main") as HTMLElement | null;
    if (parent === null) return;

    const title = parent.querySelector(".main__title") as HTMLElement | null;
    const desc = parent.querySelector(".main__wrap-desc") as HTMLElement | null;
    const bg = parent.querySelector(".main__bg") as HTMLElement | null;

    function textTypingAnimation(el: HTMLElement, desc: HTMLElement, bg: HTMLElement): void {
        const str = el.innerHTML as string;
        const lengthStr = str.length as number;
        const speedAnim = 50 as number;

        let idInterval: any;
        let i = 0;

        if (lengthStr <= 0) return;
        el.style.opacity = String(1);
        desc.style.opacity = String(0);
        bg.style.opacity = String(0);

        idInterval = setInterval(() => {
            console.log(lengthStr);
            el.innerHTML = str.slice(0, lengthStr - (lengthStr - i));

            i++;

            if (i > lengthStr) {
                clearInterval(idInterval);
                desc.style.opacity = String(1);
                bg.style.opacity = String(1);
            }
        }, speedAnim);
    }

    if (title !== null) {
        if (window.outerWidth >= 768) {
            textTypingAnimation(title, desc, bg);
        } else {
            desc.style.opacity = String(1);
            bg.style.opacity = String(1);
        }
    }
})();
