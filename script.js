function mostrarSecao(id) {
  const secoes = document.querySelectorAll(".secao");
  secoes.forEach(secao => secao.classList.remove("ativa"));

  document.getElementById(id).classList.add("ativa");
}

function mostrarFato() {
  const fatos = [
    "O Brasil é um dos maiores exportadores de soja do mundo.",
    "Drones ajudam a monitorar plantações em tempo real.",
    "A tecnologia reduz o desperdício de água no campo."
  ];

  const aleatorio = fatos[Math.floor(Math.random() * fatos.length)];
  document.getElementById("fato").innerText = aleatorio;
}

function responder(resposta) {
  const resultado = document.getElementById("resultado");

  if (resposta) {
    resultado.innerText = "❌ Incorreto! O agronegócio também envolve indústria e transporte.";
  } else {
    resultado.innerText = "✅ Correto! Ele envolve agricultura, indústria e distribuição.";
  }
}
