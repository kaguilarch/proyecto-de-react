import  {useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        fetch('./json/productos.json')
            .then(response => response.json())
            .then(productos => {
                const prod = productos.find(prod => prod.id === 12)
                setItem(prod)
            })

    }, [])

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={item} />
        </div>
    )
}
export default ItemDetailContainer