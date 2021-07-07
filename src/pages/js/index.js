class Login extends React.Component{
    render(){
        return(
            <>
            <form action="/login" method="post">
                <div>
                    <label>E-mail:</label>
                    <input type="email" id="email" name="email"/>
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <div className="button">
                    <button type="submit">Login</button>
                </div>
            </form>
            </>
        );
    }
}

class RedefinirSenha extends React.Component{
    render(){
        return(
            <div>
                <a href="/redefinirSenha">Esqueci minha senha</a>
            </div>
        );
    }
}

class Cadastro extends React.Component{
    render(){
        return(
            <>
            <form action="/cadastro" method="post">
                <div>
                    <label>Username:</label>
                    <input type="username" id="username" name="username"/>
                </div>
                <div>
                    <label>E-mail:</label>
                    <input type="email" id="email2" name="email"/>
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" id="password2" name="password"/>
                </div>
                <div className="button">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
            </>
        );
    }
}

function App(){
    return (
        <>
        <div className="login">
            <Login/>
        </div>
        <div className="redefinirSenha">
            <RedefinirSenha/>
        </div>
        <div className="cadastro">
            <Cadastro/>
        </div>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector('.root'));