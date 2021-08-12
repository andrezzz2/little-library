function Login(props) {
    return(
        <>
        <form action="/login" method="post">
            
            <h1>Login</h1>
            <input type="email" placeholder="E-mail" id="email" name="email"/>
            <br></br>
            <input type="password" placeholder="Password" id="password" name="password"/>
            <br></br>
            <a href="redefinir" className="forgot-password">Esqueceu a senha?</a>
            <br></br>
            <button type="submit">Entrar</button>
            <br></br>
            <a href="register">Cadastrar-se</a>

        </form>
        </>
    );
}

ReactDOM.render(<Login/>, document.querySelector('.login'));