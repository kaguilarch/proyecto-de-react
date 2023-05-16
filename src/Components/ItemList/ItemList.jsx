import Item from "../Item/Item"
const ItemList = ({productos, plantilla}) => {

    return (
        <>
            {
                plantilla === "Item"
                ?
                productos.map(producto => <Item key={producto.id} item={producto} />)
                :
                productos.map(producto => <Item key={producto.id} item={producto} />)
            }
        </>
    )
}
export default ItemList