const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const quote = document.getElementById("quote");

const colors = [
    "#ff6663",
    "#ffcc66",
    "#66ff66",
    "#66ffff",
    "#6666ff",
    "#ff66ff",
    "#cc66ff",
    "#ff66cc"
];

const randomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
};

const changeColor = () => {
    const color = randomColor();
    title.style.color = color;
    subtitle.style.color = color;
    quote.style.color = color;
};

setInterval(changeColor, 2000);

const titleAnimation = () => {
    const animation = document.createDocumentFragment();
    const text = title.textContent.split("");
    text.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = "0";
        span.style.transition = "opacity 0.5s";
        animation.appendChild(span);
    });
    title.textContent = "";
    title.appendChild(animation);
    const letters = title.children;
    for (let i = 0; i < letters.length; i++) {
        setTimeout(() => {
            letters[i].style.opacity = "1";
        }, i * 100);
    }
};

setInterval(titleAnimation, 5000);