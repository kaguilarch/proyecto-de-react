import useCount from "../../hooks/useCount"
import { Link } from "react-router-dom"

const ItemCount = ({ ValInicial, min, max, onAdd }) => {

  const { count, minus, sum, reset } = useCount(ValInicial, min, max)

  return (
    <>
      <button className="btn btn-dark" onClick={minus}>-</button>
      {count}
      <button className="btn btn-dark" onClick={sum}>+</button>
      <button className="btn btn-dark ms-2" onClick={reset}>Reset</button>
      <button className="btn btn-success ms-2" onClick={() => onAdd(count)}>Agregar al Carrito</button>
      <Link className="nav-link mt-2" to={"/"}><button className="btn btn-dark">Continuar Comprando</button></Link>
    </>
  )
}
export default ItemCount