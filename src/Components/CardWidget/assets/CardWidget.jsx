import Cart from "./cart.svg"

const CartWidget = ({cantCarrito}) => {
    return(

        <div class="d-flex">
            <img src={Cart} width="30" height="25" alt="cart-compra"/>
            <p>{cantCarrito}</p>
        </div>
    )

}
export default CartWidget