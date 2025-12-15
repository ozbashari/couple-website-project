function greet() {
    alert("Hello from Student B!");
}

console.log("Website loaded!");

<script>
    const btn = document.getElementById("moveBtn");

    btn.addEventListener("click", () => {
        const x = Math.random() * 200 - 100; // ימינה / שמאלה
    const y = Math.random() * 200 - 100; // למעלה / למטה

    btn.style.transform = `translate(${x}px, ${y}px)`;
    });
</script>
