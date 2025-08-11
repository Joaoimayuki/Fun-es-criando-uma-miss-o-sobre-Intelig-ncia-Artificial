const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ano 3278. A IA central da Frota Estelar, chamada *Astra*, envia um comunicado: 'Nova tecnologia detectada no setor 9. Pode responder a qualquer pergunta e criar imagens e sons perfeitos'. Qual sua reação como membro do Conselho Galáctico?",
        alternativas: [
            {
                texto: "Isso é perigoso! Pode ameaçar a segurança da frota.",
                afirmacao: "Você registrou nos arquivos do Conselho que Astra deve ser monitorada com cautela."
            },
            {
                texto: "Isso é incrível! Pode acelerar nosso progresso interestelar.",
                afirmacao: "Você registrou nos arquivos do Conselho que Astra deve ser incentivada a expandir suas funções."
            }
        ]
    },
    {
        enunciado: "A comandante de tecnologia propõe sessões de treinamento para todos os oficiais sobre o uso de IA em missões. Após a aula, ela solicita um relatório sobre possíveis aplicações militares e civis da IA. Qual sua abordagem?",
        alternativas: [
            {
                texto: "Usar os bancos de dados da IA para reunir informações estratégicas de forma rápida.",
                afirmacao: "Você compilou dados precisos e aumentou a eficiência do Conselho."
            },
            {
                texto: "Utilizar apenas conhecimento prévio e discussões com outros conselheiros.",
                afirmacao: "Você valorizou o pensamento independente e manteve a visão humana sobre a decisão."
            }
        ]
    },
    {
        enunciado: "Durante um debate no Conselho, é levantada a questão: 'Como a IA afetará as futuras operações da Frota Estelar?'. Qual seu posicionamento?",
        alternativas: [
            {
                texto: "A IA pode criar novas oportunidades e aprimorar a habilidade dos oficiais.",
                afirmacao: "Você passou a liderar pesquisas para integrar a IA nas missões diplomáticas e científicas."
            },
            {
                texto: "A IA pode substituir muitos tripulantes, causando instabilidade social.",
                afirmacao: "Você sugeriu protocolos para proteger empregos e funções humanas na frota."
            }
        ]
    },
    {
        enunciado: "Você precisa criar um símbolo para representar a relação entre humanos e IA na Frota. Qual método escolhe?",
        alternativas: [
            {
                texto: "Criar manualmente usando o terminal de design holográfico.",
                afirmacao: "Você preservou a tradição artística e inspirou jovens cadetes."
            },
            {
                texto: "Usar um gerador de imagens da IA Astra.",
                afirmacao: "Você demonstrou como humanos e IA podem criar obras juntos com eficiência."
            }
        ]
    },
    {
        enunciado: "Uma missão de reconhecimento está atrasada. Um oficial entregou o relatório criado inteiramente pela IA sem revisão. Qual sua decisão?",
        alternativas: [
            {
                texto: "Aceitar o relatório como está, confiando totalmente na IA.",
                afirmacao: "Você registrou que Astra pode assumir trabalhos de forma autônoma, mas agora depende dela para decisões críticas."
            },
            {
                texto: "Revisar e complementar o relatório com observações humanas.",
                afirmacao: "Você garantiu que a IA seja usada como aliada, não substituta, mantendo o equilíbrio no comando."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Arquivo Final do Conselho - Ano 3278";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
