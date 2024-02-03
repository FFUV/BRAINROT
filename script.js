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
    text.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = "0";
        span.style.transition = `opacity 0.5s ${Math.random() * 2}s`;
        span.style.transform = `translateY(${Math.random() * 50 - 25}px) rotate(${Math.random() * 360}deg)`;
        animation.appendChild(span);
    });
    title.textContent = "";
    title.appendChild(animation);
    const letters = title.children;
    for (let i = 0; i < letters.length; i++) {
        setTimeout(() => {
            letters[i].style.opacity = "1";
        }, i * Math.random() * 1000);
    }
};

setInterval(titleAnimation, 5000);

const randomizeElements = () => {
    const elements = Array.from(document.body.children);
    elements.forEach(element => {
        const randomTransform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`;
        const randomScale = Math.random() * 2;
        element.style.transform = `${randomTransform} scale(${randomScale})`;
        element.style.transition = `transform 0.5s ${Math.random() * 2}s`;
    });
};

setInterval(randomizeElements, 3000);