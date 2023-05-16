import Cart from "./cart.svg"
import { useCarritoContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"
const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return(
        <div>
            <Link to={"/cart"} className="nav-link">
                <button className="btn btn-dark d-flex">
                <img src={Cart} width="30" height="25" alt="cart-compra"/>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </button>
        </Link>
        </div>
    )

}
export default CartWidget