function greet() {
    alert("Hello from Student B!");
}

console.log("Website loaded!");


const btn = document.getElementById("try");

btn.addEventListener("mouseover", () => {
    const screenWidth = window.innerWidth - btn.offsetWidth;
    const screenHeight = window.innerHeight - btn.offsetHeight;

    const randomX = Math.random() * screenWidth;
    const randomY = Math.random() * screenHeight;

    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
});
