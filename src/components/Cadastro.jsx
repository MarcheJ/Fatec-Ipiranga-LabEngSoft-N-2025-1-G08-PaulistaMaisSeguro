import React, { useState } from 'react';
import './Cadastro.css';
import axios from 'axios';

const Cadastro = () => {
  const [nmUsuario, setNmUsuario] = useState('');
  const [emUsuario, setEmUsuario] = useState('');
  const [snUsuario, setSnUsuario] = useState('');
  const [message, setMessage] = useState('');

  const handleCadastroClick = () => {
    window.location.href = "Login";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nmUsuario || !emUsuario || !snUsuario) {
      alert("Preencha todos os campos!");
      return;
    }
    try {
      console.log('Enviando dados de cadastro:', { nmUsuario, emUsuario, snUsuario });
      const response = await axios.post('http://localhost:5000/api/register', {
        nmUsuario,
        emUsuario,
        snUsuario
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Resposta do servidor:', response.data);
      setNmUsuario('');
      setEmUsuario('');
      setSnUsuario('');
      setMessage('Cadastro realizado com sucesso!');
    } catch (error) {
      if (error.response) {
        console.error('Erro ao cadastrar:', error.response.data.message || error.message);
        setMessage(error.response.data.message || 'Erro ao cadastrar');
      } else if (error.request) {
        console.error('Erro ao cadastrar: Sem resposta do servidor');
        setMessage('Erro ao cadastrar: Sem resposta do servidor');
      } else {
        console.error('Erro ao cadastrar:', error.message);
        setMessage('Erro ao cadastrar');
      }
    }
  };

  return (
    <div className="telacadastro">
      <div className="containercadastro">
        <div className="fundo"></div>
        <div className="fundocamposcadastro"></div>
        <form className="campospreenchimento" onSubmit={handleSubmit}>
          <div className="nomeusuario">
            <input
              type="text"
              className="campousuario"
              value={nmUsuario}
              onChange={(e) => setNmUsuario(e.target.value)}
              placeholder="Nome de usuário"
              required
            />
            <img className="logousuario-icon" alt="" src="/src/assets/img/LogosFormularios/LogoUsuario.png" />
          </div>
          <div className="emailusuario">
            <input
              type="email"
              className="campoemail"
              value={emUsuario}
              onChange={(e) => setEmUsuario(e.target.value)}
              placeholder="E-mail"
              required
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
              required
            />
            <img className="logosenha-icon" alt="" src="/src/assets/img/LogosFormularios/LogoSenha.png" />
          </div>
          <button type="submit" className="meu-botao">Cadastrar</button>
        </form>
        {message && <div className="mensagem-sucesso">{message}</div>}
        <div className="titulopagina">Criar cadastro</div>
        <div className="textofazercadastro" id="textoFazerCadastro" onClick={handleCadastroClick}>
          Já possui uma conta? Fazer login
        </div>
      </div>
    </div>
  );
};

export default Cadastro;