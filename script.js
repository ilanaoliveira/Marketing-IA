const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Marketing é o processo de criar, comunicar e entregar ofertas que têm valor para clientes e consumidores. Envolve a ientificação da necesidades do público, além de promover e vender produtos ou serviços usando estratégias de publicidade, promoção e distribuição para alcançar um mercado-alvo eficazmente.",
        alternativas: [
            {
                texto: "Como o marketing pode influnciar as pessoas a comprarem mais?",
                afirmacao: "O marketing ajuda a entender como atrair clientes e como convence-los a comprar."
            },
            {
                texto: "Nem sempre o marketing é eficaz, pois não consegue alcançar todos o públicos. ",
                afirmacao: "Públicos com menos conhecimentos, não são alcançados pelo poder do marketing."
            }
        ]
    },
    {
        enunciado: "A relação de boa comunicação com o cliente permite que a empresa construa relações mais saudáveis e duradouras com seus clientes e, com isso, consiga fidelizá-los ainda mais. E os tornando as pessoas que farão o seu negócio dar certo, pois um cliente satifeito, indicará o seu serviço e produto para as outras pesoas, fazendo com que a sua emprea seja mai popular e desejada.",
        alternativas: [
            {
                texto: "Como manter uma boa comunicação com seu cliente?",
                afirmacao: "Sempre tentando ser o mais claro e comunicativo possível. Pois o cliente confia no seu produto atravś do que você fala/oferece."
            },
            {
                texto: "Boa comunicação não é um dos principais fatores para o marketing. Essa é uma questão verdadeira ou falsa?",
                afirmacao: "Essa questão é falsa, pois todas as estratégias de venda tem que ter uma boa comunicação."
            }
        ]
    },
    {
        enunciado: "No marketing você tem a sua própria identidade de marca e isso é um dos elementos mais importantes para aumentar a visibilidade do seu negócio. Afinal, é a forma que a sua marca se mostrará para o mundo. Existem diversas marcas que se posicionam muito bem no mercado e nós conseguimos identifica-lás somente por um símbolo ou uma palavra, por isso é de suma importancia que você tenha uma logo exclusiva do seu própio negócio.",
        alternativas: [
            {
                texto: "A identidade de marca é uma coisa sem finalidade que não irá mudar nada em sua empresa. Essa é uma questão verdadeira ou falsa?",
                afirmacao: "Falsa, pois sem essa identificação da sua própria marca você não terá autonomia e exclusividade."
            },
            {
                texto: "Possuir sua logo e cores exclusivas montando um conjunto único, é muito importante para o seus negócio. Por que?",
                afirmacao: "Tendo a sua própria logo de identificação, vai fazer com que o seu negócio seja exclusivo e que sua logo seja conhecida em qualquer lugar, pois essa vai ser a identidade da sua corporação, portanto escolha bem e faça o seu melhor nesse designer. "
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Observamos que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
