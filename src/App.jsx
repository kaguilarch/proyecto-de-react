import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App () {
  return(

    <div className="container">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/'element={<ItemListContainer/>}/>
          <Route path='/category/:category'element={<ItemListContainer/>}/>
          <Route path='/product/:id'element={<ItemDetailContainer/>}/>
        </Routes>

        </BrowserRouter>
    </div>
  )
}
 export default App;