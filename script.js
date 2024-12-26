const bonecoEsquerdo = document.querySelector(".boneco-esquerdo")
const bonecoDireito = document.querySelector(".boneco-direito")
const coracao = document.querySelector(".coracao")
const imagemCentro = document.querySelector(".imagem-centro")

let distancia = calcularDistanciaInicial()
let aproximacao = 30
let jogoFinalizado = false

function calcularDistanciaInicial() {
  const telaLargura = window.innerWidth
  return telaLargura / 4
}

function moverBonecos() {
  if (distancia > 0) {
    distancia -= aproximacao

    bonecoEsquerdo.style.transform = `translateX(${-distancia}px)`
    bonecoDireito.style.transform = `translateX(${distancia}px)`

    const scale = 1 - distancia / calcularDistanciaInicial()
    coracao.style.transform = `translate(-50%, -50%) scale(${Math.max(
      scale,
      0
    )})`
  } else {
    coracao.style.transform = "translate(-50%, -50%) scale(2)"
    bonecoEsquerdo.style.opacity = "0"
    bonecoDireito.style.opacity = "0"
    imagemCentro.style.opacity = "1"
    jogoFinalizado = true
  }
}

function resetarJogo() {
  distancia = calcularDistanciaInicial()
  coracao.style.transform = "translate(-50%, -50%) scale(0)"
  bonecoEsquerdo.style.transform = "translateX(0)"
  bonecoDireito.style.transform = "translateX(0)"
  bonecoEsquerdo.style.opacity = "1"
  bonecoDireito.style.opacity = "1"
  imagemCentro.style.opacity = "0"
  jogoFinalizado = false
}

document.body.addEventListener("click", () => {
  if (jogoFinalizado) {
    resetarJogo()
  } else {
    moverBonecos()
  }
})

window.addEventListener("resize", () => {
  if (jogoFinalizado) {
    resetarJogo()
  } else {
    distancia = calcularDistanciaInicial()
    bonecoEsquerdo.style.transform = "translateX(0)"
    bonecoDireito.style.transform = "translateX(0)"
  }
})
