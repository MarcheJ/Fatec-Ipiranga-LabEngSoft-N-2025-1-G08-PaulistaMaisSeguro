import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DadosUsuario.css';

const DadosUsuario = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const response = await axios.get('http://localhost:5000/api/user', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          setUserData(response.data);
        } catch (error) {
          console.error('Erro ao buscar dados do usuário:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="telaacessarlogado">
      <div className="fundo"></div>
      <div className="fundocamposedicaoapagar"></div>
      <div className="titulopagina">Dados do usuario</div>
      
      <div className="emailusuario">
        <div className="tituloemail">Email:</div>
        <div className="conteudoemail">{userData.email}</div>
      </div>
      
      <div className="novasenha">
        <div className="camponovasenha"></div>
        <div className="titulonovsenha">Nova senha:</div>
        <div className="containernovasenhausuario"></div>
        <img className="logosenha-icon" alt="" src="LogoSenha.png" />
      </div>
      <div className="botaovisualizarregistros">
        <div className="fundobotaovisualizarregistros"></div>
        <b className="botaovisualizarregistros1">Visualizar registros</b>
      </div>
      
      <div className="botaoalterarsenha">
        <div className="fundobotaovisualizarregistros"></div>
        <b className="botaofazerlogout">Alterar senha</b>
      </div>
      <div className="botaologout" onClick={handleLogout}>
        <div className="fundobotaofazerlogout"></div>
        <b className="botaofazerlogout">Logout</b>
      </div>
    </div>
  );
};

export default DadosUsuario;