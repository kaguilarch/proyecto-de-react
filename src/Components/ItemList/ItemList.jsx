import Item from "../Item/Item"
import{ ItemCart } from "..ItemCart/ItemCart"

const ItemList = ({productos, plantilla}) => {
    return (
        <div>
            { plantilla ==="Item" ? 
            
                productos.map(producto => <Item key = { producto.id } item = { producto } />)
                :
                productos.map( producto => < ItemCart key = { productos.id } item={producto}/>)
            }

        </div>
    )
}
export default ItemList