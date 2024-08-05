(function () {
    const popup = document.querySelector(".popup") as HTMLElement | null;
    if (popup === null) return;

    const buttonsOpen = document.querySelectorAll("[data-popup-open]") as NodeList;
    const popupInputTitle = popup.querySelector("[name=title]") as HTMLInputElement | null;
    const buttonClose = popup.querySelector(".popup__close") as HTMLInputElement | null;
    const overflow = popup.querySelector(".popup__overflow") as HTMLInputElement | null;
    const body = document.querySelector("body");

    const activeClass = "active";
    const overflowClass = "overflow";

    const openPopup = () => {
        if (!popup.classList.contains(activeClass)) {
            popup.classList.add(activeClass);
        }

        if (!body.classList.contains(overflowClass)) {
            body.classList.add(overflowClass);
        }
    };

    const closePopup = () => {
        if (popup.classList.contains(activeClass)) {
            popup.classList.remove(activeClass);
        }

        if (body.classList.contains(overflowClass)) {
            body.classList.remove(overflowClass);
        }

        popupInputTitle.value = "";
    };

    buttonsOpen.forEach((button: HTMLElement) => {
        const popupTitle = button.getAttribute("data-popup-title");

        button.addEventListener("click", (event) => {
            event.preventDefault();
            
            if (popupTitle) {
                popupInputTitle.value = popupTitle;
            }

            openPopup();
        });
    });

    buttonClose.addEventListener("click", () => {
        closePopup();
    });

    overflow.addEventListener("click", (event: CustomEvent) => {
        const target = event.target as Element;

        if (target.classList.contains("popup__overflow")) {
            closePopup();
        }
    });
})();
