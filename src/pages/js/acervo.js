var lista = []

for (var i = 0; i < data.data.length; i++) {
    if(data.data[i].disponivel == 0) //nao esta disponivel
        var element = <div><a href={"acervo/"+data.data[i].isbn}>{JSON.stringify(data.data[i].isbn)} - {JSON.stringify(data.data[i].numero_serie)} - {JSON.stringify(data.data[i].titulo)} - indisponivel</a></div>;
    else
        var element = <div><a href={"acervo/"+data.data[i].isbn}>{JSON.stringify(data.data[i].isbn)} - {JSON.stringify(data.data[i].numero_serie)} - {JSON.stringify(data.data[i].titulo)} - disponivel</a></div>;
    lista.push(element);
}

ReactDOM.render(lista, document.querySelector('.acervo'));