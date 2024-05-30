const perguntasLeisDeNewton = [
    {
      pergunta: "Qual é a primeira lei de Newton?",
      respostas: [
       "Um objeto em repouso permanece em repouso e um objeto em movimento permanece em movimento com velocidade constante, a menos que uma força externa atue sobre ele.",
        "A força resultante sobre um objeto é igual à massa do objeto multiplicada pela aceleração.",
        "Para cada ação, há uma reação de igual magnitude, mas em direção oposta."
      ],
      correta: 0
    },
    {
      pergunta: "O que a segunda lei de Newton define?",
      respostas: [
        "A força resultante sobre um objeto é igual à massa do objeto multiplicada pela aceleração.",
        "Um objeto em repouso permanece em repouso e um objeto em movimento permanece em movimento com velocidade constante, a menos que uma força externa atue sobre ele.",
        "Para cada ação, há uma reação de igual magnitude, mas em direção oposta."
      ],
      correta: 0
    },
    {
      pergunta: "A força gravitacional entre dois corpos depende de quais fatores?",
      respostas: [
        "Da distância entre dois corpos.",
        "Da massa dos corpos e o tamanho deles.",
        "Da massa dos corpos e da distância entre eles."
      ],
      correta: 2
    },
    {
      pergunta: "De acordo com a segunda lei de Newton, qual é a relação entre força, massa e aceleração?",
      respostas: [
        "Força = Massa × Aceleração",
        "Força = Massa ÷ Aceleração",
        "Força = Massa + Aceleração"
      ],
      correta: 0
    },
    {
      pergunta: "A primeira lei de Newton é também conhecida como:",
      respostas: [
        "Lei da Inércia",
        "Lei da Ação e Reação",
        "Lei da Aceleração"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome dado à terceira lei de Newton?",
      respostas: [
        "Lei da Inércia",
        "Lei da Ação e Reação",
        "Lei da Aceleração"
      ],
      correta: 1
    },
    {
      pergunta: "O que acontece com a velocidade de um objeto quando a força resultante que age sobre ele é zero?",
      respostas: [
        "A velocidade aumenta",
        "A velocidade diminui",
        "A velocidade permanece constante"
      ],
      correta: 2
    },
    {
      pergunta: "Segundo a lei da gravitação universal o que acontece com a força gravitacional se o corpo se afasta duas vezes do outro?",
      respostas: [
        "A força aumenta em duas vezes",
        "A força diminui em duas vezes",
        "A força diminui em quatro vezes"
      ],
      correta: 2
    },
    {
      pergunta: "O que representa a Lei da Ação e Reação de Newton?",
      respostas: [
        "A força resultante sobre um objeto é igual à massa do objeto multiplicada pela aceleração.",
        "Para cada ação, há uma reação de igual magnitude, mas em direção oposta.",
        "Um objeto em repouso permanece em repouso e um objeto em movimento permanece em movimento com velocidade constante, a menos que uma força externa atue sobre ele."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a unidade de medida da força no Sistema Internacional (SI)?",
      respostas: [
        "Newton (N)",
        "Joule (J)",
        "Pascal (Pa)"
      ],
      correta: 0
    }
  ];
  
  
  const quiz = document.querySelector('#quiz')
  // Faz o template que você puxou aparecer na tela.
  
  const template = document.querySelector('template')
  // Chama todo o template [feito no HTML] para o JS.
  
  
  const corretas = new Set()
  const totalDePerguntas = perguntasLeisDeNewton.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  
  for(const item of perguntasLeisDeNewton) {
    const quizItem = template.content.cloneNode(true)
    // quizItem vai clonar o conteúdo de template para se adequar ao número de perguntas.
    quizItem.querySelector("h3").textContent = item.pergunta
    // Vai trocar todos os h3 pelo valor de pergunta (a pergunta está em cada item do array perguntasLeisDeNewton).
  
  
  for(const resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    // A variável dt clona o código das respostas localizado dentro do dl.
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntasLeisDeNewton.indexOf(item))
    // Você aplicou um nome para cada pergunta diferente.
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    // Agora aplicou um valor para cada pergunta.
    dt.querySelector('span').textContent = resposta
    // O texto de Span agora vai ser trocado pelas respostas.
    dt.querySelector('input').onchange = (event) => {
      const TaCerto = event.target.value == item.correta
  
      corretas.delete(item)
      if(TaCerto) {
        corretas.add(item)
       }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
  
  
  
    quizItem.querySelector('dl').appendChild(dt)
    // Dentro de quizItem ele colocará mais filhos em dl, que são os clones de 'dt'.
    }
  
  
  quizItem.querySelector('dl dt').remove()
  // Achei a linha que foi a origem dos clones e sumi com ela.
  
  
  quiz.appendChild(quizItem)
  // Isso vai inserir o nó quizItem (que é o template clonado) na tela.
  }
  
  
  
  
  
  
  
