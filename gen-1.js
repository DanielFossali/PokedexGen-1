//Alterar background

const botaoAlterarTema = document.getElementById("botao-alterar-tema")
const body = document.querySelector("body");
const imageBotaoTrocaDeTema = document.querySelector(".image-botao")


botaoAlterarTema.addEventListener("click", () => {
     const ModoEscuroEstaAtico = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (ModoEscuroEstaAtico) {
        imageBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        imageBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
})
