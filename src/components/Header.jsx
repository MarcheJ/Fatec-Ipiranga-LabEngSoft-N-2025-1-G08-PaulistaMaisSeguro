import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/LogoPaulistaSeguro.png";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate("/dadosusuario");
    } else {
      navigate("/cadastro");
    }
  };

  return (
    <header className="cabecalho flex flex-col sm:flex-row items-center sm:justify-between px-4 py-2 w-full h-[65px] bg-[#f2f0ef] shadow-md">
      {/* Logo */}
      <img className="logocabecalho-icon w-16 sm:w-[70px] h-auto" src={logo} alt="Logo Paulista Seguro" />

      {/* Navegação */}
      <nav className="flex flex-col sm:flex-row sm:space-x-8 text-[18px] text-black text-center">
        <a href="/" className="home1 hover:text-gray-900">Home</a>
        <a href="/mapa-oficial" className="mapa-oficial-ssp hover:text-gray-900">Mapa oficial (SSP)</a>
        <a href="/mapa-comunidade" className="botaoquemsomos hover:text-gray-900">Mapa da comunidade</a>
      </nav>

      <button 
        className="botaoacessar w-[100px] sm:w-auto px-4 py-2 text-white bg-[#5e5b5b] rounded-[15px] hover:bg-gray-700"
        onClick={handleButtonClick}
      >
        {isLoggedIn ? "Conta" : "Acessar"}
      </button>
    </header>
  );
};

export default Header;