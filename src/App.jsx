import React from "react";

import NavBar from "./Components/NavBar/NavBar"
import ItemCount from "./Components/ItemCount/ItemCount"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemList from "./Components/ItemList/ItemList";

function App () {
  return(
    <>
      <NavBar/>
      <ItemList productos={[
        {
          "id":1,
          "idCategoria":"Aleron",
          "nombre":"Alerones",
          "marca":"deayer",
          "modelo":"Estandar",
          "precio":1200,
          "stock":4,
          "img":"img/aleron_2.jpg"
          },
      
          {
          "id":2,
          "idCategoria":"Aleron",
          "nombre":"Alerones",
          "marca":"",
          "modelo":"",
          "precio":1200,
          "stock":7,
          "img":"img/aleron_2.jpg"
          },
      ]}/>
      <ItemCount ValInicial={1} stock={15}/>
      <ItemListContainer/>
    </>
  )
}
 export default App;