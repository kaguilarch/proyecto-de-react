import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { category } = useParams()
  
    useEffect(() => {
  
      if (category) {
        fetch('../json/productos.json')
          .then(response => response.json())
          .then(productos => {
            const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category)
            setProductos(productosFiltrados)
  
          })
      } else {
        fetch('./json/productos.json')
          .then(response => response.json())
          .then(productos => {
            const productosFiltrados = productos.filter(prod => prod.stock > 0)
            setProductos(productosFiltrados)
  
          })
      }
  
    }, [category])
  
    return (
        <div className="container gap-3 mt-4 row justify-content-md-around ">
        {<ItemList productos={productos}/>}
        </div>
    )
  }
export default ItemListContainer