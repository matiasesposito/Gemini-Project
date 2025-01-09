// const typewriter = document.getElementById('typewriter');
// const text = "This is a ChatGPT-like typing effect, simulating human typing with random delays and a blinking cursor. It also supports multiline text and ensures the cursor is displayed at the end of the last output character.";

// let index = 0;

// function type() {
//     if (index < text.length) {
//         typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
//         index++;
//         setTimeout(type, Math.random() * 15);
//     } else {
//         typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
//     }
// }

// type();


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