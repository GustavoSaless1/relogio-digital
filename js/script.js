const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const dataAtual = document.getElementById("data-atual");
const relogio = document.getElementById("relogio");

const formatadorDeData = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
});

function adicionarZero(valor) {
    return String(valor).padStart(2, "0");
}

function atualizarRelogio() {
    const agora = new Date();
    const hora = adicionarZero(agora.getHours());
    const minuto = adicionarZero(agora.getMinutes());
    const segundo = adicionarZero(agora.getSeconds());

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
    dataAtual.textContent = formatadorDeData.format(agora);

    relogio.dateTime = agora.toISOString();
    relogio.setAttribute("aria-label", `Horário atual: ${hora}:${minuto}:${segundo}`);
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
