let lastScroll = 0;
const defaultOffset = 24;
const header = document.getElementById("liaPageHeader");

const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
const isHeaderhidden = () => header.classList.contains("lia__header_hidden");

const changeHeaderVisibility = () => {
    if (scrollPosition() > lastScroll && !isHeaderhidden() && scrollPosition() > defaultOffset) {
        header.classList.add("lia__header_hidden");
    } else if (scrollPosition() < lastScroll && isHeaderhidden()) {
        header.classList.remove("lia__header_hidden");
    }
    lastScroll = scrollPosition();
};

window.addEventListener("scroll", changeHeaderVisibility);
