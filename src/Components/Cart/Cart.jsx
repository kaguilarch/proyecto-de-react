import { useCarritoContext } from "../../context/CartContext.js"
import { Link } from "react-router-dom"
import  ItemList  from "../ItemList/ItemList"
export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h1 className="container mt-4 mb-4 d-flex justify-content-center">Carrito Vacio</h1>
                        <button className="container btn btn-dark"><Link to={"/"} className="nav-link">Continuar comprando</Link></button>
                    </>
                    :
                    <div className="container mt-4 d-flex">
                        {<ItemList productos={carrito} plantilla={"ItemCart"} />}
                        <div className="cartButtons ms-2">
                            <p>Resumen de la compra: {totalPrice()}</p>
                            <button className="btn btn-danger mb-2" onClick={() => emptyCart()}>Vaciar Carrito</button>
                            <Link className="nav-link mb-2" to={"/"}><button className="btn btn-dark">Continuar Comprando</button></Link>
                            <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
                        </div>
                    </div>

            }


        </>
    )
}
export default Cart