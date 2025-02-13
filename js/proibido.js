let i = 0;

const botao = document.querySelector('.yes');

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

function mudarPosicao() {
    const botao = document.querySelector('.yes');
    const container = document.getElementById("content")
    
    const maxX = container.clientWidth - botao.clientWidth;
    const maxY = container.clientHeight - botao.clientHeight;
    
    const novoX = Math.floor(Math.random() * maxX);
    const novoY = Math.floor(Math.random() * maxY);
    
    botao.style.left = `${novoX}px`;
    botao.style.top = `${novoY}px`;
    
    botao.addEventListener("click",()=>{
        alert("PARABÉNS você clicou no botão")
    })
    i++;
    setTimeout(()=>{
        verificar()
    },200)
}

function verificar(){
    if(i==1){
        alert("opa...")
    }
    if(i==5){
        alert("Desculpa amor tava so brincando contigo, pode clicar agora...")
    }
    if(i==6){
        alert("opa kk")
    }
    if(i==7){
        alert("Na proxima, vai da certo")
    }
    if(i==8){
        alert("Na proxima reencarnação, vai da certo")
    }
}

setInterval(createHeart, 1000);