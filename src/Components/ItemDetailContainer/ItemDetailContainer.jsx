import  {useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProducts } from "../../firebase/firebase.js"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const {id} =useParams()
    useEffect(() => {
        getProducts()
            .then(prod => {setItem(prod)})
    },)

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail item={item} />
        </div>
    )
}
export default ItemDetailContainer