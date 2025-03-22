import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./pages/HomeView";
import CadastroView from "./pages/CadastroView";
import MPOficialView from "./pages/MPOficialView";
import MapaComunidade from "./components/MapaComunidade";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginView from "./pages/LoginView";
import DadosUsuario from "./components/DadosUsuario";

function App() {
  return (
    <Router>
      <div style={{ height: '100%' }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/mapa-oficial" element={<MPOficialView />} />
          <Route path="/mapa-comunidade" element={<MapaComunidade />} />
          <Route path="/cadastro" element={<CadastroView />} />
          <Route path="/dadosusuario" element={<DadosUsuario />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;