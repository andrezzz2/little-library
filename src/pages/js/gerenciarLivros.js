const cookies = document.cookie;

function GerenciarLivros(props) {
    return(
        <li className="nav-item">
            <a id="linkfo" className="nav-link" href="http://localhost:3000/gerenciarLivro">
                <h6>Genrenciar Livros<br/></h6>
            </a>
        </li>
    );
}

function Nothing(props){
    return(
        <>
        </>
    );
}

if(cookies.length==0){
    ReactDOM.render(<Nothing/>, document.querySelector('.gerenciarLivros'));
} else {
    var userType = cookies
                .split('; ')
                .find(row => row.startsWith('userType='))
                .split('=')[1];
    
    if(userType == "Bibliotecario")
        ReactDOM.render(<GerenciarLivros/>, document.querySelector('.gerenciarLivros'));
    else
        ReactDOM.render(<Nothing/>, document.querySelector('.gerenciarLivros'));
}

