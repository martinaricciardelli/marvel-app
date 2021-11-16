import React from 'react'
//import CartWidget from '../CartWidget/CartWidget'
import '../Navbar/Navbar.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'
//import { NavLink } from 'react-router-dom'


// ARREGLAR LOGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style= {{"background-color": "red"}}>
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../Navbar/marvel-logo"/> 
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ms-4" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="#">Black Widow</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Scarlett Witch</a>
                </li>
                <li class="nav-item">
                <a class="nav-link ">Captain Marvel</a>
                </li>
                <li class="nav-item">
                <a class="nav-link">She-Hulk</a>
                </li>
            </ul>
            </div>
            <CartWidget/>
        </div>
        </nav>


      
    )
}

export default Navbar