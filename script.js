function descobrirSigno() {
  let data = document.getElementById("dataNascimento").value;

  if (!data) {
    alert("Escolha uma data!");
    return;
  }

  let partes = data.split("-");
  let mes = parseInt(partes[1]);
  let dia = parseInt(partes[2]);

  let signo = "";
  let cavaleiro = "";
  let imagem = "";
  let descricao = "";

  if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    signo = "Áries";
    cavaleiro = "Mu de Áries";
    imagem = "img/mu.jpg";
    descricao = "impulsivo, corajoso e cheio de energia. Gosta de liderar.";
  }
  else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    signo = "Touro";
    cavaleiro = "Aldebaran";
    imagem = "img/aldebaran.jpg";
    descricao = "calmo, determinado e ama conforto e estabilidade.";
  }
  else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    signo = "Gêmeos";
    cavaleiro = "Saga";
    imagem = "img/saga.jpg";
    descricao = "versátil, comunicativo e adora aprender coisas novas.";
  }
  else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    signo = "Câncer";
    cavaleiro = "Máscara da Morte";
    imagem = "img/cancer.jpg";
    descricao = "sensível, protetor e valoriza a família e os amigos.";

  }
  else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    signo = "Leão";
    cavaleiro = "Aiolia";
    imagem = "img/aiolia.jpg";
    descricao = "confiante, generoso e adora ser o centro das atenções.";

  }
  else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    signo = "Virgem";
    cavaleiro = "Shaka";
    imagem = "img/shaka.jpg";
    descricao = "prático, detalhista e adora ajudar os outros.";

  }
  else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    signo = "Libra";
    cavaleiro = "Dohko";
    imagem = "img/dohko.jpg";
    descricao = "diplomático, justo e adora a beleza e a harmonia.";

  }
  else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    signo = "Escorpião";
    cavaleiro = "Milo";
    imagem = "img/milo.jpg";
    descricao = "intenso, apaixonado e adora mistérios e desafios.";

  }
  else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    signo = "Sagitário";
    cavaleiro = "Aiolos";
    imagem = "img/aiolos.jpg";
    descricao = "otimista, aventureiro e adora explorar novos horizontes.";

  }
  else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
    signo = "Capricórnio";
    cavaleiro = "Shura";
    imagem = "img/shura.jpg";
    descricao = "determinado, responsável e adora alcançar seus objetivos.";

  }
  else if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
    signo = "Aquário";
    cavaleiro = "Camus";
    imagem = "img/camus.jpg";
    descricao = "independente, inovador e adora pensar fora da caixa.";

  }
  else {
    signo = "Peixes";
    cavaleiro = "Afrodite";
    imagem = "img/afrodite.jpg";
    descricao = "sonhador, compassivo e adora a arte e a beleza.";

  }

  document.getElementById("oraculo").innerHTML =
    `Seu signo é ${signo} <br> Cavaleiro: ${cavaleiro} <br> Descrição: ${descricao}
    `;

  let img = document.getElementById("imagemCavaleiro");
  img.src = imagem;
  img.style.display = "block";
}