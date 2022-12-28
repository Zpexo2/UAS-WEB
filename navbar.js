window.onscroll = () => {
    navbar2.classList.remove("active");
};
let navbar2 = document.querySelector(".navbar2");
window.addEventListener("scroll", () => {
    navbar2.classList.toggle("shadow", window.scrolly > 0);
});