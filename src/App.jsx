import React from "react";

import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App () {
  return(
    <div className="container">
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>

    </div>
  )
}
 export default App;