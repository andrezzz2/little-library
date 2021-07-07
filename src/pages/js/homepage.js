class Componente extends React.Component{
    render(){
        return(
            <>
            </>
        );
    }
}

class Livros extends React.Component{
    render(){
        return(
            <>
            </>
        );
    }
}

function App(){
    return (
        <>
        <div className="componente">
            <Componente/>
        </div>
        <div className="livros">
            <Livros/>
        </div>
        </>
    );
}

ReactDOM.render(<App/>, document.querySelector('.root'));
