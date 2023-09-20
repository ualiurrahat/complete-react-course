import React from "react";
import ReactDOM from 'react-dom/client'; // react before 18: import ReactDOM from 'react-dom'
import './index.css'

// pizza data
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (<div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>);
}
function Header() {
    // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
    const style = {};
    return (
        <header className="header footer">

            <h1 style={style}>Fast React Pizza Co.</h1>;
        </header>
    );
}
function Menu() {
    return (<main className="menu">
        <h2>Our Menu</h2>
        {/* rendering lists: rendering all elements from a list
        and make components for each element */}
        <ul className="pizzas">
            {pizzaData.map((pizza) =>
                <Pizza pizzaObj={pizza} key={pizza.name}
                />)}
        </ul>
        {/* <Pizza
            name="Pizza Spinaci"
            ingredients="Tomato, mozarella, spinach, and ricotta cheese"
            photoName="pizzas/spinaci.jpg"
            price={10}
        />
        <Pizza
            name="Pizza Funghi"
            ingredients="Tomato, mushrooms"
            photoName="pizzas/funghi.jpg"
            price={13}
        /> */}

    </main>)
}
function Pizza(props) {
    console.log(props);
    return (<li className="pizza">
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.photoName} />
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>

    </li>
    );
}
function Footer() {

    const hour = new Date().getHours();
    const openHour = 8;
    const closedHour = 22;
    const isOpen = hour >= openHour && hour <= closedHour;
    console.log(isOpen);
    // if (hour >= openHour && hour <= closedHour) {
    //     alert("Open");
    // }
    // else {
    //     alert("Close");


    // }
    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()}.We're currently open.
        </footer>
    );


    // return React.createElement("footer", null, "We're currently open!");
}

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);

// react before 18
// ReactDOM.render(<App/>,(document.getElementById("root"));
// about StrictMode: renders our components twice
// to check if there is any bug or any outdated components.
// good practice to use StrictMode