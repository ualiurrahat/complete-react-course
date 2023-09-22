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

    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (<main className="menu">
        <h2>Our Menu</h2>

        {/* conditional rendering: will render only when there are 
        pizzas available in the pizzaData array */
            numPizzas > 0 ? (
                <ul className="pizzas">
                    {/* rendering lists: rendering all elements from a list
        and make components for each element */}
                    {pizzas.map((pizza) =>
                        <Pizza pizzaObj={pizza} key={pizza.name}
                        />)}
                </ul>
            ) : (
                <p>We are currently working on our menu. Please come back later. :)</p>
            )
        }


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
function Pizza({ pizzaObj }) {
    console.log(pizzaObj);
    if (pizzaObj.soldOut) return null;
    return (<li className="pizza">
        <img src={pizzaObj.photoName} alt={pizzaObj.photoName} />
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>

    </li>
    );
}
function Footer() {

    // calculating open and close hour for restraunt.
    const hour = new Date().getHours();
    const openHour = 0;
    const closedHour = 22;
    const isOpen = hour >= openHour && hour <= closedHour;
    console.log(isOpen);
    // if (hour >= openHour && hour <= closedHour) {
    //     alert("Open");
    // }
    // else {
    //     alert("Close");


    // }
    // if (!isOpen) {
    //     return <p>CLOSED</p>

    // }
    return (
        <footer className="footer">
            {
                isOpen ?
                    <Order closedHour={closedHour} openHour={openHour} />
                    : (
                        <p>We are happy to welcome you between {openHour}:00 and {closedHour}:00. </p>
                    )
            }
        </footer>
    );


    // return React.createElement("footer", null, "We're currently open!");
}
// order component
function Order({ closedHour, openHour }) {
    return (<div className="order">
        <p>We are open from {openHour}:00 to {closedHour}:00. Come
            visit us or order online.</p>
        <button className="btn">Order</button>
    </div>);
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