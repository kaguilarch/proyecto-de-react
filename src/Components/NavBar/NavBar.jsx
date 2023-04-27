import Categorias from "./Categorias/Categorias";
import CartWidget from "../CardWidget/assets/CardWidget";
import React from "react";

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid d-flex">
                 
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Categorias/>
                </div>
                
                <CartWidget cantCarrito={0} />                
            </div>
        </nav>
    );
}
export default NavBar;