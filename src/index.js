//import { render } from "@testing-library/react";
import React, { StrictMode }  from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(){
   
    return (
        <div className="container">
    <Header/>
    <Menu/>
    <Footer/>
    </div> 
    );
}
function Menu(){
    return(
        <main className="menu">
            <h2>Our Menu</h2>
            <ul className="pizzas">
                {
                    pizzaData.map((pizza)=>(
                        <Pizza pizzaObj={pizza} key={pizza.name}/>
                    ))}
            </ul>
            {/* <Pizza name="veg Pizza" ingredients="tomato, cheese" photoName="pizzas/margherita.jpg"
            price={20}/>  */}
        </main>
    );
}
function Pizza({pizzaObj}){
    console.log(pizzaObj);
    return <li className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
        <img src={pizzaObj.photoName}/> 
        <div>
        <h3>{pizzaObj.name}</h3>
        
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut? "SOLD OUT": pizzaObj.price}</span>
         
        </div>
    </li>
}


function Header(){
    return(
        <div className="header">
            <h1>Pizza Menu Card</h1>
        </div>
    );
}

function Footer(){
const hour = new Date().getHours();
const openHour=10;
const closeHour=22;
const isOpen=hour>=openHour && hour<=closeHour;
console.log(isOpen);


return(
        
        <footer className="footer"> 
        {
            isOpen ? (<Order closeHour={closeHour}/>) : <p>we're happy to welcome you in between {openHour}:00 and {closeHour}:00</p>
        } 
        </footer>
    );
}

function Order(props){
    return(
        <div className="order">
            <p>We're Open Until {props.closeHour}:00 Come Visit us or Order Online</p>
            <button className="btn">Order</button>
        </div>
    );
};

//after react v18 
const root=ReactDOM.createRoot(document.getElementById("root")); 
root.render( <React.StrictMode>
    <App />
  </React.StrictMode>);
//before react v18
// React.render(<App/>,document.getElementById("root"))