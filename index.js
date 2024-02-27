const perguntas = [
  {
    pergunta: 'Qual é o nome da agente que é especialista em cura em Valorant?',
    respostas: ['Phoenix', 'Sage', 'Viper'],
    correta: 1,
  },
  {
    pergunta:
      'Qual arma é conhecida por sua precisão e é frequentemente usada por atiradores de elite em Valorant?',
    respostas: ['Phantom', 'Spectre', 'Operator'],
    correta: 2,
  },
  {
    pergunta:
      'Qual é o modo principal de jogo em Valorant, onde uma equipe ataca e a outra defende bombas plantadas?',
    respostas: ['Deathmatch', 'Spike Rush', 'Modo Competitivo'],
    correta: 2,
  },
  {
    pergunta:
      'Qual é a habilidade característica de Jett que permite que ela se mova rapidamente no mapa?',
    respostas: ['Tailwind', 'Cloudburst', 'Blade Storm'],
    correta: 0,
  },
  {
    pergunta:
      'Qual é o nome do mapa em Valorant onde a bomba é plantada em um laboratório?',
    respostas: ['Bind', 'Split', 'Haven'],
    correta: 0,
  },
  {
    pergunta: 'Qual é o papel de Cypher na equipe?',
    respostas: ['Duelista', 'Controlador', 'Sentinela'],
    correta: 2,
  },
  {
    pergunta:
      'Qual é a habilidade suprema de Raze que lança uma série de granadas explosivas?',
    respostas: ['Boom Bot', 'Paint Shells', 'Showstopper'],
    correta: 2,
  },
  {
    pergunta:
      'Qual é o modo de jogo rápido e caótico em Valorant, onde jogadores usam armas aleatórias?',
    respostas: ['Deathmatch', 'Sem Classe', 'Competitivo'],
    correta: 0,
  },
  {
    pergunta:
      'Qual é o agente cuja habilidade suprema é um campo de supressão que neutraliza habilidades inimigas?',
    respostas: ['Omen', 'Brimstone', 'Killjoy'],
    correta: 2,
  },
  {
    pergunta:
      'Qual é o nome do mapa em Valorant que possui três bomb sites em vez de dois?',
    respostas: ['Bind', 'Split', 'Haven'],
    correta: 2,
  },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const correta = new Set();
const totalDePerguntas = perguntas.length;
const mostrarAcertos = document.querySelector('#acertos span');
mostrarAcertos.textContent = correta.size + 'de' + totalDePerguntas;

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.pergunta;

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = resposta;
    dt.querySelector('input').setAttribute(
      'name',
      'pergunta-' + perguntas.indexOf(item)
    );
    dt.querySelector('input').value = item.respostas.indexOf(resposta);
    dt.querySelector('input').onchange = (event) => {
      const estaCorreto = event.target.value == item.correta;

      correta.delete(item);
      if (estaCorreto) {
        correta.add(item);
      }
      mostrarAcertos.textContent = correta.size + ' de ' + totalDePerguntas;
    };

    quizItem.querySelector('dl').appendChild(dt);
  }

  quizItem.querySelector('dl dt').remove();

  // coloca a pergunta na tela
  quiz.appendChild(quizItem);
}
