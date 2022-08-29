// Gerar Número Aleatório
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Variaveis que estão no html para serem puxadas
var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var altoOuBaixo = document.querySelector('.altoOuBaixo');
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

// *******************************************************************

var contagemPalpites = 1;

var botaoReinicio;

campoPalpite.focus();

// Conferir
function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ' ';
    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns, você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        altoOuBaixo.textContent = '';
        configFimDeJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
        altoOuBaixo.textContent = '';
        configFimDeJogo();
    } else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        if (palpiteUsuario < numeroAleatorio) {
            altoOuBaixo.textContent = 'Seu palpite foi muito baixo!';
        } else if (palpiteUsuario > numeroAleatorio) {
            altoOuBaixo.textContent = 'Seu palpite foi muito alto!';
        }
    }
    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}
// Envio de Palpites
envioPalpite.addEventListener('click', conferirPalpite);


// Configuração do fim do Jogo
function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

// Reiniciar Jogo
function reiniciarJogo() {
    contagemPalpites = 1;
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0; i < reiniciarParas.length; i++) {
        reiniciarParas[i].textContent = '';
    }
    botaoReinicio.parentNode.removeChild(botaoReinicio);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();
    ultimoResultado.style.backgroundColor = 'white';
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}