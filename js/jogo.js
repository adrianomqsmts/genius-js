
var cores = ["primary", "danger", "warning", "success"];
var ordem = [escolherCor(), escolherCor(), escolherCor()];
console.log(ordem);
var qtdEscolhida = 2;
var rodada = 2;
var retorno;
var retorno2;

function iniciarJogo() {
    document.getElementById("msg").innerHTML = "Espere!";
    retorno = setInterval(exibirCor, 1000);
    retorno2 = setTimeout(comecar, (1000 * rodada + 2000));
}

function exibirCor() {
    var cor = ordem[rodada];    
    var botao = document.getElementById(cor);
    console.log(cor + " " + botao)
    botao.className = "bg-" + cor + " w-50 h-100 opacidade-1";
    setTimeout(function () { apagarCor(botao, cor) }, 800);
    if (rodada < 1) {
        clearInterval(retorno);
        return;
    } else {
        rodada--;
    }
}

function apagarCor(botao, cor) {
    botao.className = "bg-" + cor + " w-50 h-100 opacidade-0";
}

function escolherCor() {
    return cores[Math.floor(Math.random() * 4)];
}
function comecar() {
    for (cor of cores) {
        botao = document.getElementById(cor);
        botao.disabled = false;
        botao.className = "bg-" + cor + " w-50 h-100 opacidade-1";
    }
    document.getElementById("msg").innerHTML = "Acerte!";
}

function jogarCor(botao){
    console.log(botao.id)
    if(ordem[qtdEscolhida--] != botao.id){
        window.location.href = "resultado.html"
    }
}


