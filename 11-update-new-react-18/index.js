import React from "react"
import ReactDOM from "react-dom/client" // Foi alterado

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)

// ReactDOM.render(navbar, document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// Não será utilizado o código mais moderno neste curso. Será utilizado o modelo react 17.
// Não vai funcionar no browser o código, pois não foi baixada as aplicações do react no VSC.