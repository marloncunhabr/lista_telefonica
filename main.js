const form = document.getElementById('form-listatelefonica');
const nome = [];
const telefone = []

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomecontato = document.getElementById('nome-contato');
    const inputNumeroTelefonico = document.getElementById('numero-telefonico');

    if (nome.includes(inputNumeroTelefonico.value)) {
        alert(`O numero telefonico: ${inputNumeroTelefonico.value} já foi inserido`);
    } else {
        nome.push(inputNomecontato.value);
        telefone.push(parseFloat(inputNumeroTelefonico.value));

        let linha = '<tr>';
        linha += `<td>${inputNomecontato.value}</td>`;
        linha += `<td>${inputNumeroTelefonico.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomecontato.value = '';
    inputNumeroTelefonico.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


