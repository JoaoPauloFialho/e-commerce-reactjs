import Home from "./pages/Home";
import OfertasPage from "./pages/OfertasPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaTemplate from "./pages/PaginaTemplate";
import Rodape from "./components/Rodape";
import NotFound from "./pages/NotFound";
import ProdutoComprar from "./pages/ProdutoComprar";
import Carrinho from "./pages/Carrinho";
import { CarrinhoContextProvider } from "./common/contexts/Carrinho";
import { UserContextProvider } from "./common/contexts/User";
import { PagamentoContextProvider } from "./common/contexts/Pagamento";
import { ComentariosContextProvider } from "./common/contexts/Comentarios";
import LoginPage from "./pages/LoginPage";
import CadastroPage from "./pages/CadastroPage";
import PaginaTemplateLoginCadastro from "./pages/PaginaTemplateLoginCadastro";
import ComputadoresPage from "./pages/DesktopsPage";
import HardwarePage from "./pages/HardwarePage";
import NotebookPage from "./pages/NotebookPage";
import PlacaDeVideoPage from "./pages/PlacaDeVideoPage";
import ProcessadorPage from './pages/ProcessadorPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <UserContextProvider>
        <PagamentoContextProvider>
          <CarrinhoContextProvider>
            <ComentariosContextProvider>

              <Routes>
                <Route path="/" element={<PaginaTemplate />}>
                  <Route index element={<Home />} />
                  <Route path='ofertas' element={<OfertasPage />} />
                  <Route path='produto/:id/' element={<ProdutoComprar />} />
                  <Route path="carrinho" element={<Carrinho />} />
                  <Route path="desktops" element={<ComputadoresPage />} />
                  <Route path="notebooks" element={<NotebookPage />} />
                  <Route path="hardware" element={<HardwarePage />} />
                  <Route path="placas de video" element={<PlacaDeVideoPage/>}/>
                  <Route path="processadores" element={<ProcessadorPage/>}/>
                </Route>

                <Route path="/user" element={<PaginaTemplateLoginCadastro />}>
                  <Route path="login" element={<LoginPage />} />
                  <Route path="cadastrar" element={<CadastroPage />} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>

            </ComentariosContextProvider>
          </CarrinhoContextProvider>
        </PagamentoContextProvider>
      </UserContextProvider>

      <Rodape />

    </BrowserRouter>
  );
}
