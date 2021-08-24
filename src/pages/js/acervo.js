var lista = []

for (var i = 0; i < data.data.length; i++) {
    var element = <div><a href={"acervo/"+data.data[i].isbn}>{JSON.stringify(data.data[i].isbn)} - {JSON.stringify(data.data[i].titulo)} - {JSON.stringify(data.data[i].numero_serie)}</a></div>;
    lista.push(element);
}

ReactDOM.render(lista, document.querySelector('.acervo'));