function jogar() {
  const dificuldades = {
    1: { nome: "Fácil", rodadas: 3 },
    2: { nome: "Médio", rodadas: 5 },
    3: { nome: "Difícil", rodadas: 10 },
  };

  let escolha = prompt(
    "Escolha a dificuldade que deseja enfrentar:\n" +
      "1 - Fácil (3 rodadas)\n" +
      "2 - Médio (5 rodadas)\n" +
      "3 - Difícil (10 rodadas)"
  );

  let dificuldade = Number(escolha);

  if (!dificuldades[dificuldade]) {
    alert("Dificuldade inválida! Tente novamente.");
    return;
  }

  const { nome, rodadas } = dificuldades[dificuldade];
  alert(`Você escolheu a dificuldade ${nome}`);

  for (let rodada = 1; rodada <= rodadas; rodada++) {
    console.log(`Rodada: ${rodada}`);

    let escolhaJogador = prompt(
      `Nível ${rodada}: Escolha um vidro (1, 2 ou 3):`
    );
    let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if (Number(escolhaJogador) === pisoQuebrado) {
      alert(`O vidro quebrou! Era o número ${pisoQuebrado}. Fim de jogo!`);
      return;
    } else {
      alert(`Sobreviveu! O vidro quebrado era o número ${pisoQuebrado}.`);
    }
  }

  alert("Parabéns, você venceu o jogo!!!");
}
