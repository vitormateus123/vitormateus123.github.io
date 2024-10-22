document.addEventListener("DOMContentLoaded", () => {
    const text =  `Minha querida, Giovanna. Eu te amo do fundo do meu coração. Gosto de passar tempo com você e cada momento que
    estou contigo infla meu coração. Não tenho palavras para te descrever e passaria horas para listar todos as
    suas qualidades (por isso, não vou, XOXO). Muito obrigado por todos os momentos
    tivemos juntos, cada dia na 9 de Julho, cada encontro na Etec, cada dia que saímos para "tomar um café",
    todos os momentos na sua casa, as vezes que jogamos mine, as fofocas, as INÚMERAS risadas que
    compartilhamos, as vezes que você me abraçou até quase perder o ar, as fotos que tirei suas (e ainda tiro e
    tirarei, espere), todas as mensagens que trocamos quase diariamente, seus surtos pelos mais diversos
    motivos. Obrigado por seu meu diário, minha confidente fiel. Obrigado por sempre me ouvir, aturar minhas
    estranhezas (você tem mais, viu?), ser meu porto seguro para desabafo e por sempre me pedir ajuda, para
    desde o que fazer no dia a dia, até conversas profundas sobre a vida, relacionamentos e dores. Saiba que eu
    sempre te apoiarei e estarei aqui para o que você precisar. Parabéns, feliz aniversário, continue sendo esta
    pessoa maravilhosa que você é! Te amo!`; // Texto completo aqui

    const quote = `"You're my best friend, I'll love you forever." - (You Get Me So High) by The Neighbourhood`;

    let i = 0;
    const speed = 50; // Velocidade de digitação em milissegundos
    const typewriterElement = document.getElementById("typewriter");
    const quoteElement = document.getElementById("quote");
    let typingInProgress = true; // Variável para controlar a digitação

    // Função para digitar caractere por caractere
    function typeWriter() {
        if (i < text.length && typingInProgress) {
            typewriterElement.innerHTML = text.slice(0, i) + '|'; // Adiciona o cursor apenas ao final
            i++;
            setTimeout(typeWriter, speed);
        } else {
            typewriterElement.innerHTML = text; // Remove o cursor ao final da digitação
            setTimeout(() => {
                quoteElement.innerHTML = quote;
                quoteElement.style.opacity = 1;
            }, 1000); // Atraso para mostrar a citação
        }
    }

    // Cursor piscando no final do texto
    function blinkCursor() {
        if (typewriterElement.innerHTML.endsWith('|')) {
            typewriterElement.innerHTML = typewriterElement.innerHTML.slice(0, -1); // Remove o cursor
        } else {
            typewriterElement.innerHTML += '|'; // Adiciona o cursor
        }
    }

    // Função para mostrar todo o texto de uma vez
    function showFullText() {
        typingInProgress = false; // Para a digitação
        typewriterElement.innerHTML = text; // Exibe o texto completo
        quoteElement.innerHTML = quote; // Exibe a citação
        quoteElement.style.opacity = 1; // Mostra a citação imediatamente
    }

    // Iniciar digitação e cursor piscando
    typeWriter();
    setInterval(blinkCursor, 500); // Cursor piscando a cada 500ms

    // Adicionar evento ao botão para mostrar todo o texto
    document.getElementById("showFullText").addEventListener("click", showFullText);
});


function calcularAmizade() {
    // Data que vocês se conheceram (substitua por sua data)
    const dataInicio = new Date('2021-11-27');
    const dataAtual = new Date();

    // Cálculo da diferença em milissegundos
    const diferencaTempo = dataAtual - dataInicio;

    // Conversão em dias, meses e anos
    const anos = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24 * 365.25));
    const meses = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const dias = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

    // Exibindo o resultado no site
    document.getElementById('contador').innerHTML = `${anos} anos, ${meses} meses e ${dias} dias`;
}

// Chama a função quando a página carregar
window.onload = calcularAmizade;


const fugirBtn = document.getElementById('fugirBtn');
const mensagemBtn = document.getElementById('mensagemBtn');
const mensagem = document.getElementById('mensagem');

fugirBtn.addEventListener('mouseover', function() {
    // Define novas posições aleatórias para o botão "fugir"
    const x = Math.random() * 300 - 150; // Movimenta o botão horizontalmente
    const y = Math.random() * 150 - 75; // Movimenta o botão verticalmente
    fugirBtn.style.transform = `translate(${x}px, ${y}px)`;
});

mensagemBtn.addEventListener('click', function() {
    // Exibe a mensagem ao clicar
    mensagem.style.display = 'block';
});


