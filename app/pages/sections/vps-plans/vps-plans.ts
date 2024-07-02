(function () {
    const parent = document.querySelector(".vps-plans") as HTMLElement | null;
    if (parent === null) return;

    const tabs = parent.querySelectorAll(".vps-plans__tab") as NodeList;
    const cards = parent.querySelectorAll(".card-pr--tabs") as NodeList;
    if (tabs.length === 0 || cards.length === 0) return;

    function offCards(cards: NodeList) {
        cards.forEach((card: HTMLElement) => {
            if (card.classList.contains("month")) {
                card.classList.remove("month");
            }

            if (card.classList.contains("year")) {
                card.classList.remove("year");
            }
        });
    }

    function onCards(cards: NodeList, activeClass: string) {
        cards.forEach((card: HTMLElement) => {
            if (!card.classList.contains(activeClass)) {
                card.classList.add(activeClass);
            }
        });
    }

    function offTabs(tabs: NodeList) {
        tabs.forEach((tab: HTMLElement) => {
            if (tab.classList.contains("active")) {
                tab.classList.remove("active");
            }
        });
    }

    tabs.forEach((tab: HTMLElement, index: number) => {
        tab.addEventListener("click", () => {
            let activeClass = "";

            offCards(cards);
            offTabs(tabs);

            if (tab.classList.contains("vps-plans__tab--month")) {
                activeClass = "month";
            }

            if (tab.classList.contains("vps-plans__tab--year")) {
                activeClass = "year";
            }

            if (!tab.classList.contains("active")) {
                tab.classList.add("active");
            }

            onCards(cards, activeClass);
        });
    });
})();
