import React from 'react'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import './App.css';
import PizzaForm from './Forms/PizzaForm.js'
import Validation from './Validation';

function HomePage() {






    return (
        <div>
            <div>
                <h1> Order Below!</h1>
            </div>
            <div id="Pizza">
                <div className="Button">
                    <BrowserRouter>
                        <button className="move"> <Link id="order-pizza" to="/pizza">Order Pizza</Link> </button>
                        <Switch>
                            <Route exact path="/pizza" >
                                <PizzaForm />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>


            </div>


        </div>

    )
}

export default HomePage 