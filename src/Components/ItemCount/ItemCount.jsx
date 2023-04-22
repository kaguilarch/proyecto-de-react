import useCount from "../hooks/useCount"

const ItemCount = ({ ValInicial, min, max, onAdd }) => {

  const { count, minus, sum, reset } = useCount(ValInicial, min, max)

  return (
    <>
      <button className="btn btn-dark" onClick={minus}>-</button>
      {count}
      <button className="gap-3 btn btn-dark" onClick={sum}>+</button>
      <button className="gap-3 btn btn-dark" onClick={reset}>Reset</button>
      <button className="gap-3 btn btn-light" onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </>
  )
}
export default ItemCount