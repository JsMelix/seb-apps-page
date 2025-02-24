document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const text = "Turning Ideas into Pixel Perfect Websites";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();

    // Efecto de tipeo en la biografía
    const bioTextElement = document.getElementById("bio-text");
    const bioText = "I'm Kareem Elramady, a passionate web developer focused on creating pixel-perfect and dynamic websites. With years of experience, I bring ideas to life through clean and interactive design.";
    let bioIndex = 0;

    function typeBioEffect() {
        if (bioIndex < bioText.length) {
            bioTextElement.innerHTML += bioText.charAt(bioIndex);
            bioIndex++;
            setTimeout(typeBioEffect, 50);
        }
    }

    setTimeout(typeBioEffect, 2000); // Espera antes de iniciar
});
