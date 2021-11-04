var cores = ["primary", "danger", "warning", "success"];
var ordem = [escolherCor(), escolherCor(), escolherCor()];
var rodadaFixa = 2;
var rodada = rodadaFixa;
var qtdEscolhida = 0;
var retorno;

function iniciarJogo() {
    console.log(ordem);
    var btn = document.getElementById("msg");
    btn.innerHTML = "Memorize...";
    btn.disabled = true;
    retorno = setInterval(exibirCor, 1000);
    setTimeout(comecar, (1000 * rodada + 2000));
}

function exibirCor() {
    var cor = ordem[rodadaFixa - rodada];
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
    var btn = document.getElementById("msg");
    btn.innerHTML = "Sua vez!";
    btn.disabled = true;
}

function jogarCor(botao) {
    if (qtdEscolhida <= rodadaFixa) {
        if (ordem[qtdEscolhida] == botao.id) {
            qtdEscolhida++;
            if (qtdEscolhida > rodadaFixa) {
                rodada = rodadaFixa + 1;
                rodadaFixa++;
                qtdEscolhida = 0;
                fimRodada();
            }
        } else {
            var valor = rodadaFixa - 1;
            if (localStorage.getItem("recorde") != undefined && localStorage.getItem("recorde") != null) {
                if (localStorage.getItem("recorde") < valor) {
                    window.location.href = "resultado.html?resultado=recorde&rodada=" + (valor);
                    localStorage.setItem("recorde", valor);
                } else {
                    window.location.href = "resultado.html?resultado=derrota&rodada=" + (valor);
                }
            } else {
                localStorage.setItem("recorde", valor);
                window.location.href = "resultado.html?resultado=recorde&rodada=" + (valor);
            }
        }
    }
}

function fimRodada() {
    for (cor of cores) {
        botao = document.getElementById(cor);
        botao.disabled = true;
        botao.className = "bg-" + cor + " w-50 h-100 opacidade-0";
    }
    var valor = rodadaFixa - 1;
    ordem[rodadaFixa] = escolherCor();
    var btn = document.getElementById("msg");
    btn.innerHTML = "Jogar Rodada " + valor;
    btn.disabled = false;

}

function limpar() {
    for (cor of cores) {
        botao = document.getElementById(cor);
        botao.disabled = true;
        botao.className = "bg-" + cor + " w-50 h-100 opacidade-0";
    }
}


