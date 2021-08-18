const cookies = document.cookie;

function Login(props) {
    return(
        <a href="/login">
            <h6>Fazer login</h6>
        </a> 
    );
}

function Configs(props) {
    return(
        <div class="dropdown">
            <button class="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-user-cog"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><h6 class="dropdown-item">Logado como:<em> {username}, usuário</em></h6></li>  
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Meu Perfil</a></li>
                <li><a class="dropdown-item" href="#">Notificações</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Sair</a></li>
            </ul>
        </div>
    );
}
if(cookies.length==0){
    ReactDOM.render(<Login/>, document.querySelector('.loginOrConfigs'));
} else {
    var username = cookies
                .split('; ')
                .find(row => row.startsWith('username='))
                .split('=')[1];
    ReactDOM.render(<Configs/>, document.querySelector('.loginOrConfigs'));
}
