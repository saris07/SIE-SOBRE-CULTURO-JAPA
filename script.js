document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
  });

  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');

  let tamanhoAtualFonte = 1; // rem
  const MIN = 0.8;
  const MAX = 1.6;
  const STEP = 0.1;

  function aplicarFonte() {
    document.body.style.fontSize = `${tamanhoAtualFonte.toFixed(2)}rem`;
  }

  aumentaFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte = Math.min(MAX, tamanhoAtualFonte + STEP);
    aplicarFonte();
  });

  diminuiFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte = Math.max(MIN, tamanhoAtualFonte - STEP);
    aplicarFonte();
  });
});
