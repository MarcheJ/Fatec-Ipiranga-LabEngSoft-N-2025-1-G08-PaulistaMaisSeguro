import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [emUsuario, setEmUsuario] = useState('');
  const [snUsuario, setSnUsuario] = useState('');
  const [message, setMessage] = useState('');

  const handleCadastroClick = () => {
    window.location.href = "/cadastro"; // Corrigir a rota para a tela de cadastro
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { emUsuario, snUsuario });
      window.location.href = "/";
      const token = response.data.token;
      localStorage.setItem('authToken', token);
    } catch (error) {
      setMessage(error.response.data.message || 'Erro ao fazer login');
    }
  };

  return (
    <div className="telalogin">
      <div className="containerlogin">
        <div className="fundo"></div>
        <div className="fundocamposlogin"></div>
        <form className="campospreenchimento" onSubmit={handleSubmit}>
          <div className="emailusuario">
            <input
              type="email"
              className="campoemail"
              value={emUsuario}
              onChange={(e) => setEmUsuario(e.target.value)}
              placeholder="E-mail"
            />
            <img className="logoemail-icon" alt="" src="/src/assets/img/LogosFormularios/LogoEmail.png" />
          </div>
          <div className="senhausuario">
            <input
              type="password"
              className="camposenha"
              value={snUsuario}
              onChange={(e) => setSnUsuario(e.target.value)}
              placeholder="Senha de acesso"
            />
            <img className="logosenha-icon" alt="" src="/src/assets/img/LogosFormularios/LogoSenha.png" />
          </div>
          <button type="submit" className="botaologin">
            <div className="fundobotaologin"></div>
            <b className="textobotaologin">Fazer login</b>
          </button>
        </form>
        {message && <div className="mensagem-erro">{message}</div>}
        <div className="titulopagina">Fazer login</div>
        <div className="textofazerlogin" id="textoFazerLogin" onClick={handleCadastroClick}>
          Não possui uma conta? Fazer cadastro
        </div>
      </div>
    </div>
  );
};

export default Login;