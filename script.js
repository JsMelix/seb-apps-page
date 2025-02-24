document.addEventListener("DOMContentLoaded", function () {
    // Efecto de escritura en el Home Page
    const typingText = document.getElementById("typing-text");
    if (typingText) {
        const text = "Bienvenido a mi mundo digital";
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    }
});
