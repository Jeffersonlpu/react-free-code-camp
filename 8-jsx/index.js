// JS
const h1 = document.createElement("h1") // Cria a tag <h1>
h1.textContent = "Hello world" // Insere 'Hello world' em h1
h1.className = "header" // Define a class como 'header
console.log(h1) // <h1 class="header">

const element = <h1 className="header">This is JSX</h1>
console.log(element)


/* O React cria um Objeto no JS
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */

// JSX
ReactDOM.render(element, document.getElementById("root"))

// Não funciona com mais de um elemento
/* ReactDOM.render(
    <h1 className="header">This is JSX</h1><p>This is a paragraph</p>,
    document.getElementById("root")
) */

// Necessita de uma <div> para mais elementos
ReactDOM.render(
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>,
    document.getElementById("root")
)

// Também é possível inserir em uma variável
/* const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
ReactDOM.render(
    page,
    document.getElementById("root")
) */