import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./Components/Checkout/Checkout";
import Cart from "./Components/Cart/Cart";
//  import { createProducts,} from "./firebase/firebase";
function App () {
  // createProducts()
  return(

    <div className="container">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/'element={<ItemListContainer/>}/>
          <Route path='/category/:category'element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>

        </BrowserRouter>
    </div>
  )
}
 export default App;
