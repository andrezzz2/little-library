function Register(props) {
    return(
        <>
        <form action="/register" method="post">
            
            <h1>Cadastro</h1>
            <input type="text" placeholder="Username" id="username" name="username"/>
            <br></br>
            <input type="email" placeholder="E-mail" id="email" name="email"/>
            <br></br>
            <input type="password" placeholder="Password" id="password" name="password"/>
            <br></br>
            <button type="submit">Salvar</button>

        </form>
        </>
    );
}


ReactDOM.render(<Register/>, document.querySelector('.register'));