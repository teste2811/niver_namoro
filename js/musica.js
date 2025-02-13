document.addEventListener("DOMContentLoaded", function() {
    const musicasRandom = musicas[Math.floor(Math.random() * musicas.length)];
    const iframe = document.getElementById("iframe");
    iframe.src = musicasRandom;
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);

    // Tamanhos controlados para evitar distorção
    let size = Math.floor(Math.random() * 10) + 20; // De 20px a 30px
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    // Mantendo bordas arredondadas proporcionais
    heart.style.setProperty('--size', size + "px");

    let posX = Math.random() * window.innerWidth;
    heart.style.left = posX + "px";

    let duration = Math.random() * 2 + 4; // Tempo entre 4s e 6s
    heart.style.animationDuration = duration + "s";

    setTimeout(() => {
        heart.remove();
    }, duration * 800);
}

const musicas = [
    "https://open.spotify.com/embed/track/2o2xhyri4aJUtgMGkf5P0J?utm_source=generator",
    "https://open.spotify.com/embed/track/3yiXy2ydZP9ZpsYxvUI6sO?utm_source=generator",
    "https://open.spotify.com/embed/track/5PLtrIrBZytL4L11AyxOHR?utm_source=generator",
    "https://open.spotify.com/embed/track/6mEpGxnTjoMdZQjo6UorbK?utm_source=generator",
    "https://open.spotify.com/embed/track/2n1Zin11Ns2uXOsUif70GB?utm_source=generator",
    "https://open.spotify.com/embed/track/2nEJDIhWELTx90xLHp9RXk?utm_source=generator",
    "https://open.spotify.com/embed/track/4PxTFojApbNeeIwiEEx2QX?utm_source=generator",
    "https://open.spotify.com/embed/track/0d3nLIxfrwZu7sHQnOhWJa?utm_source=generator",
    "https://open.spotify.com/embed/track/0lGOYi4wZiVc1arJJ4do0a?utm_source=generator",
    "https://open.spotify.com/embed/track/1de5qtvROLxLtMAQrmZjev?utm_source=generator",
    "https://open.spotify.com/embed/track/36i9NcqbdQFdQfOROpIwMA?utm_source=generator"
]

const musicasRandom = musicas[Math.floor(Math.random() * musicas.length)];
const iframe = document.getElementById("iframe");
iframe.src = musicasRandom;

setInterval(createHeart, 1000);