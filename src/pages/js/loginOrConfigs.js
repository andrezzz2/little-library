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
        <div className="dropdown">
            <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-user-cog"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><h6 className="dropdown-item">Logado como:<em> {username}, {userType}</em></h6></li>  
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Meu Perfil</a></li>
                <li><a className="dropdown-item" href="#">Notificações</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="http://localhost:3000/logout">Sair</a></li>
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
    var userType = cookies
                .split('; ')
                .find(row => row.startsWith('userType='))
                .split('=')[1];
    ReactDOM.render(<Configs/>, document.querySelector('.loginOrConfigs'));
}
