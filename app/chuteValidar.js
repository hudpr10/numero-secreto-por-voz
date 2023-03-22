function verficaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chute == 'game over') {
        document.body.style.background = '#E96479'
        document.body.innerHTML = `
        <h1>GAME OVER!!!<h1>
        <button id="jogarNovamente" class="botao-gameover">Quer tentar de novo?</button>
        `

        const botao = document.querySelector('#jogarNovamente')
        botao.addEventListener('click', e => {
            window.location.reload()
        })
        
        return
    } else if (ChuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido!</div>`
        return
    } 

    if (numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto está entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!!</h2>
            <h3>O numero secreto era <strong>${numeroSecreto}</strong></h3>
            
            <button id="jogarNovamente" class="botao">Jogar novamente!!!</button>
        `
        document.body.style.background = '#9DC08B'
        document.body.style.color = '#EDF1D6'

        const botao = document.querySelector('#jogarNovamente')
        botao.addEventListener('click', e => {
            window.location.reload()
        })
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor  <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior  <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}

function ChuteForInvalido(numero) {
    return Number.isNaN(numero)
}

