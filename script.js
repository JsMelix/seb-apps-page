document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const text = "Turning Ideas into Pixel Perfect Websites";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Velocidad del efecto
        }
    }

    typeEffect();
});
