import React from "react";

import NavBar from "./Components/NavBar/NavBar"
import ItemCount from "./Components/ItemCount/ItemCount"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemList from "./Components/ItemList/ItemList";

function App () {
  return(
    <div className="container">
      <NavBar/>
      <ItemList productos={[]}/>
      <ItemListContainer/>
      <ItemCount ValInicial={1} stock={15}/>
    </div>
  )
}
 export default App;