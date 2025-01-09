function typeWriter(text, idElement) {
    let index = 0;
    let typewriter = document.getElementById(idElement);
    function type() {
        if (index < text.length) {
            typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
            index++;
            setTimeout(type, Math.random() * 15);
        } else {
            typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
        }
    }
    type();
}