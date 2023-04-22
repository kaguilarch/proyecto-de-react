import CartWidget from "../CardWidget/assets/CardWidget";
import React from "react";

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid d-flex">
                 <a className=" text-light navbar-brand " href="../../index.htlm">
                   <img src="https://th.bing.com/th/id/R.70f42c8e2d2ac9c42c0415f2bfc25f69?rik=A2IQx31YJ878Qw&riu=http%3a%2f%2fpartesurgentes.com%2fwp-content%2fuploads%2f2015%2f10%2fcropped-icono-carro.png&ehk=SUBN%2bITn7FcCX5mw6v%2b2H1X1aux9nIsqmetp1CeEq9E%3d&risl=&pid=ImgRaw&r=0" alt="logo" width="44" height="38" class="d-inline-block align-text-top"></img>  Repuestos Aguilar
                </a>
                <button className="navbar-toggler"type="button"data-bs-toggle="collapse"data-bs-target="#navbarSupp rtedContent"aria-controls="navbarSupportedContent"aria-expanded="false"aria-label="Toggle   navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className=" text-light nav-link active" aria-current="page" href="../../index.htlm">
                            Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className=" text-light nav-link" href="#contactenos">
                            Contactenos
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                            className=" text-light nav-link dropdown-toggle"
                            href="#Productos"role="button"data-bs-toggle="dropdown"aria-expanded="false">
                            Productos
                            </a>
                            <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#Action">
                                    Alerones
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#Another action">
                                    Rines
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#Another action">
                                    Turbos
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#Another action">
                                    Radios
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#Another action">
                                     Aceites y Refrigerantes
                                </a>
                            </li>
                            {/* divisor */}
                            <li>
                            <hr className="dropdown-divider" />
                            </li>
                             {/* divisor */}
                            <li>
                                <a className="dropdown-item" href="#Something else here">
                                Herramientas
                                </a>
                            </li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Buscar"
                        />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
                
                <CartWidget cantCarrito={0} />                
            </div>
        </nav>
    );
}
export default NavBar;