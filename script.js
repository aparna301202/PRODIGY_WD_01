document.addEventListener("DOMContentLoaded", function () {
    var nav = document.getElementById("main-nav");
    var navOffset = nav.offsetTop;

    function handleScroll() {
        if (window.scrollY >= navOffset) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleScroll);
});
