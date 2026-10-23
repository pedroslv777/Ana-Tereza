const grade = document.getElementById("grade");
const mudar = document.getElementById("mudar");
 
// Pode acrescentar quantas frases quiser aqui
const frases = [
    "Você é a pessoa mais especial do mundo.",
    "Seu sorriso ilumina qualquer dia.",
    "Com você, tudo fica mais bonito.",
    "Você é meu lugar favorito.",
    "Meu coração sempre escolhe você.",
    "Você é um presente na minha vida.",
    "Ao seu lado, até o dia ruim fica bom.",
    "Eu agradeço todos os dias por ter você.",
    "Seu abraço é o meu lugar seguro.",
    "Amar você é a melhor parte dos meus dias.",
    "Você faz meu mundo ficar mais colorido.",
    "Cada momento com você vale a vida inteira.",
    "Você é meu sonho que virou realidade.",
    "Meu amor por você cresce a cada dia.",
    "Obrigado por ser exatamente quem você é.",
    "Você é a minha princesa, hoje e sempre."
];
 
const QUANTIDADE = 6; // quantas frases aparecem de uma vez
const CORES = ["cor1", "cor2", "cor3", "cor4"];
 
// Embaralha uma cópia da lista
function embaralhar(lista) {
    const copia = lista.slice();
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = copia[i];
        copia[i] = copia[j];
        copia[j] = temp;
    }
    return copia;
}
 
function mostrarFrases() {
    grade.innerHTML = "";
    const escolhidas = embaralhar(frases).slice(0, QUANTIDADE);
 
    escolhidas.forEach(function (texto, indice) {
        const cartao = document.createElement("div");
        cartao.className = "cartao " + CORES[indice % CORES.length];
        cartao.textContent = texto;
        grade.appendChild(cartao);
    });
}
 
mudar.addEventListener("click", mostrarFrases);
 
mostrarFrases();