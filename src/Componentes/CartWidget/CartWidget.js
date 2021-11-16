import React from 'react'
//import '../estilos/Card.css'
//import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <>
        <div class="d-flex justify-content-end">
            <li to="/cart" class="material-icons">shopping_cart</li>
            <span className="number">0</span>
        </div>
        
        </>
    )
}

export default CartWidget