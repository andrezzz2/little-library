const cookies = document.cookie;

function Login(props) {
    return(
        <a href="/login">
            <h6>Fazer login</h6>
        </a> 
    );
}

function Welcome(props) {
    return(
        <a>
            <h6>Bem-vindo, {username}.</h6>
        </a> 
    );
}
//if (cookies.indexOf("username") == -1) {
if(cookies.length==0){
    ReactDOM.render(<Login/>, document.querySelector('.loginOrWelcome'));
} else {
    var username = cookies
                .split('; ')
                .find(row => row.startsWith('username='))
                .split('=')[1];
    ReactDOM.render(<Welcome/>, document.querySelector('.loginOrWelcome'));
}
