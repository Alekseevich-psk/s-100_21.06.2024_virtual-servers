(function () {
    const header = document.querySelector(".header") as HTMLElement | null;
    if (!header) return;

    const buttonMenu = header.querySelector(".header__btn-menu");
    const nextEl = header.nextElementSibling as HTMLElement | null;
    const itemsWrapper = header.querySelectorAll(".menu__item--wrapper") as NodeList;

    const heightHeader = heightElem(header);
    const offMarginTopSections = ["main"];

    function addClassForHeaderScroll() {
        if (getBodyScrollTop() > heightHeader) {
            header.classList.add("scroll");
        } else {
            header.classList.remove("scroll");
        }
    }

    function getBodyScrollTop() {
        return (
            self.scrollY || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop)
        );
    }

    function heightElem(el: HTMLElement) {
        return Math.max.apply(null, [el.clientHeight, el.offsetHeight, el.scrollHeight]);
    }

    function marginForNextEl(nextEl: HTMLElement) {
        if (nextEl !== null) {
            let flag = true;

            offMarginTopSections.forEach((classSection) => {
                if (nextEl.classList.contains(classSection)) flag = false;
            });

            if (flag) {
                nextEl.style.marginTop = header.offsetHeight + "px";
            }
        }
    }

    if (buttonMenu !== null) {
        buttonMenu.addEventListener("click", () => {
            header.classList.toggle("open-menu");
        });
    }

    if (itemsWrapper.length > 0) {
        itemsWrapper.forEach((element: HTMLElement) => {
            element.addEventListener("click", () => {
                element.classList.toggle("active");
            });
        });
    }

    addClassForHeaderScroll();
    marginForNextEl(nextEl);

    window.addEventListener("scroll", function () {
        addClassForHeaderScroll();
    });

    window.addEventListener("resize", () => {
        marginForNextEl(nextEl);
    });
})();
