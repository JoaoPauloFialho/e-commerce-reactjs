import Home from "./pages/Home";
import OfertasPage from "./pages/OfertasPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaTemplate from "./pages/PaginaTemplate";
import Rodape from "./components/Rodape";
import NotFound from "./pages/NotFound";
import ProdutoComprar from "./pages/ProdutoComprar";
import Carrinho from "./pages/Carrinho";
import { CarrinhoContextProvider } from "./commons/contexts/Carrinho";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <CarrinhoContextProvider>
        <Routes>

          <Route path="/" element={<PaginaTemplate />}>
            <Route index element={<Home />} />
            <Route path='produtos' element={<OfertasPage />} />
            <Route path='produto/:id/' element={<ProdutoComprar />} />
            <Route path="carrinho" element={<Carrinho />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </CarrinhoContextProvider>

      <Rodape />

    </BrowserRouter>
  );
}
