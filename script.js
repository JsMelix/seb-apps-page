document.addEventListener("DOMContentLoaded", function () {
    const text = "Turning Ideas into Pixel Perfect Websites";
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            document.getElementById("typing-text").textContent += text[i];
            i++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});
