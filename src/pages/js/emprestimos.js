var lista = []

for (var i = 0; i < emprestimo.length; i++) {
    var element = <div><a>{JSON.stringify(emprestimo[i].isbn)} - {JSON.stringify(emprestimo[i].numero_serie)} - {JSON.stringify(emprestimo[i].titulo)} - {JSON.stringify(emprestimo[i].createdAt)}</a></div>;
    lista.push(element);
}

ReactDOM.render(lista, document.querySelector('.emprestimos'));