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

setInterval(createHeart, 1000);