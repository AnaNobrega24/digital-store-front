import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Produtos from "../pages/Produstos";
import NotFound from "../pages/NotFound";
import PageLayout from "../layouts/PageLayout";

const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index  element={<Home />} />
                    <Route path="/produtos" element={<Produtos />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;