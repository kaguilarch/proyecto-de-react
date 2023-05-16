import React from "react";
import { Link } from "react-router-dom";
const Categorias =()=>{

    return(
        <nav className="navbar navbar-expand-lg bg-primary">

            <div className="container-fluid d-flex">
                
                <Link className="text-light navbar-brand nav-link"to={"/"}>
                    <img src="https://th.bing.com/th/id/R.70f42c8e2d2ac9c42c0415f2bfc25f69?rik=A2IQx31YJ878Qw&riu=http%3a%2f%2fpartesurgentes.com%2fwp-content%2fuploads%2f2015%2f10%2fcropped-icono-carro.png&ehk=SUBN%2bITn7FcCX5mw6v%2b2H1X1aux9nIsqmetp1CeEq9E%3d&risl=&pid=ImgRaw&r=0" alt="logo" width="44" height="38" className="d-inline-block align-text-top"></img> Repuestos Aguilar

                </Link>
                
                <button className="navbar-toggler"type="button"data-bs-toggle="collapse"data-bs-target="#navbarSupp rtedContent"aria-controls="navbarSupportedContent"aria-expanded="false"aria-label="Toggle   navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className=" text-light nav-link" to={"/Checkout"}>Inicio de sesion</Link>
                        </li>
                        <li className="nav-item dropdown d-flex">
                            <Link
                            className=" text-light nav-link dropdown-toggle"
                            href="#Productos"role="button"data-bs-toggle="dropdown"aria-expanded="false">
                            Productos
                            </Link>
                            <ul className="dropdown-menu">
                                <li className= "nav-item">
                                    <Link className="dropdown-item" to={"/category/Alerones"}>
                                        Alerones
                                    </Link>
                                </li>
                                
                                <li className= "nav-item">
                                    <Link className="dropdown-item" to={"/category/Difusores"}>
                                        Difusores
                                    </Link>
                                </li>
                                <li className= "nav-item">
                                    <Link className="dropdown-item" to={"/category/Asientos"}>
                                        Asientos
                                    </Link>
                                </li>
                                <li className= "nav-item">
                                    <Link className="dropdown-item" to={"/category/Radios"}>
                                        Radios
                                    </Link>
                                </li>
                                <li className= "nav-item">
                                    <Link className="dropdown-item" to={"/category/Aceites y Refrigerantes"}>
                                        Aceites y Refrigerantes
                                    </Link>
                                </li>
                                <li className= "nav-item">
                                    <Link className="dropdown-item" to={"/category/Iluminacion"}>
                                        Iluminacion
                                    </Link>
                                </li>
                                {/* divisor */}
                                <li className= "nav-item">
                                <hr className="dropdown-divider" />
                                </li>
                                {/* divisor */}
                                <li className= "nav-item">
                                    <Link className="dropdown-item" to={"/category/Herramientas"}>
                                    Herramientas
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
             
            </div>
        </nav>
    )

}
export default Categorias