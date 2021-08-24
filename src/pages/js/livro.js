
function Livro(props) {
    return(
        <section id="content">
            <section id="Resume">
                <div class="container container-fluid">
                    <div class="row">    
                        <center><h1>{livro.titulo}</h1></center>
                        <div class="col-lg-6">
                        </div>    
                    </div>    
                </div>    
            </section>
            <section id="Events">
                <div class="container container-fluid">
                    <div class="row">
                        <div class="col-lg-4">
                            <img class="" src="img/capa-livro.jpg" alt="capa do livro"/>
                        </div>
                        <div class="col-lg-4">
                            <div class="mb-3">
                                <center><h3>Sinopse</h3></center>
                                <p>{livro.sinopse}</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="mb-3">
                                <center><h3>Detalhes do Produto</h3></center>
                                <center><table>
                                    <tr>
                                        <td><b>Editora:</b></td>
                                        <td>XXXX</td>
                                    </tr>
                                    <tr>
                                        <td><b>Edicao:</b></td>
                                        <td>XXXX</td>
                                    </tr>
                                    <tr>
                                        <td><b>Idioma:</b></td>
                                        <td>XXXX</td>
                                    </tr>
                                    <tr>
                                        <td><b>ISBN:</b></td>
                                        <td>{livro.isbn}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Numero de Paginas:</b></td>
                                        <td>XXXX</td>
                                    </tr>
                                </table></center>
                            </div>
                        </div>
                    </div>
                </div>
            
            </section>
        </section>    
    );
}

ReactDOM.render(<Livro/>, document.querySelector('.livro'));