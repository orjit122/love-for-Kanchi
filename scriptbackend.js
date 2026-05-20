const noBtn =
document.getElementById("nobtn");

noBtn.style.transition =
"0.3s ease";

noBtn.addEventListener("mouseenter", () => {

    const maxX =
    window.innerWidth - noBtn.offsetWidth;

    const maxY =
    window.innerHeight - noBtn.offsetHeight;

    const randomX =
    Math.random() * maxX;

    const randomY =
    Math.random() * maxY;

    noBtn.style.position = "fixed";

    noBtn.style.left =
    randomX + "px";

    noBtn.style.top =
    randomY + "px";
});