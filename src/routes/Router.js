import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import CartPage from "../pages/CartPage/CartPage";
import PurchasePage from "../pages/PurchasePage/PurchasePage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

function Router() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/:page" element={<HomePage/>}/>
                    <Route path="/card/:id" element={<DetailsPage/>}/>
                    <Route path="/carrinho" element={<CartPage/>}/>
                    <Route path="/carrinho/pedido" element={<PurchasePage/>}/>
                    <Route path="*" element={<PageNotFound/>}/>                
                </Routes>
            </BrowserRouter>   
        );
      }
      
      export default Router