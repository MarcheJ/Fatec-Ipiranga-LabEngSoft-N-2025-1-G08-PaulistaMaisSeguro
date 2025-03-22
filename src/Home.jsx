import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bannerImg from "./Assets/img/FundoCidadeSP.jfif";
import brasaoSP from "./Assets/img/BrasaoGovernoSP.png";
import logoGitHubJoao from "./Assets/img/LogoGitHubJoao.png";
import logoGitHubLucas from "./Assets/img/LogoGitHubLucas.png";
import logoGitHubOrientador from "./Assets/img/LogoGitHubOrientador.png";
import logoInstagram from "./Assets/img/LogoInstagram.png";
import logoFatecIpi from "./Assets/img/LogoFatecIpi.png";
import logoCPS from "./Assets/img/LogoCPS.png";
import logoPoliciaCivil from "./Assets/img/LogoPoliciaCivil.png";
import logoPoliciaMilitar from "./Assets/img/LogoPoliciaMilitar.png";
import "./Styles/HomeStyleView.css";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="botaovermapabanner">
          <div className="fundocadastrobanner"></div>
          <b className="ver-mapa">Ver mapa</b>
        </div>
        <img className="brasaogovernosp-icon" alt="Brasão do Governo de SP" src={brasaoSP} />
        <b className="textobanner">
          Verifique a segurança pública de uma região antes de se mudar, visitar ou viajar com nossos mapas
        </b>
        <img className="logofatecipi-icon" alt="Logo Fatec Ipiranga" src={logoFatecIpi} />
        <img className="logocps-icon" alt="Logo CPS" src={logoCPS} />
        <div className="orgaossegurana">
          <div className="policiacivil">
            <a className="sitepoliciacivil" href="https://www.policiacivil.sp.gov.br/portal/faces/pages_home?_afrLoop=649912089197324&_afrWindowMode=0&_afrWindowId=null#!%40%40%3F_afrWindowId%3Dnull%26_afrLoop%3D649912089197324%26_afrWindowMode%3D0%26_adf.ctrl-state%3Dsf980rxk9_4" target="_blank" rel="noopener noreferrer">Policia Civil</a>
            <div className="telefonepoliciacivil">Telefone: 197</div>
            <img className="logopoliciacivil-icon" alt="Logo Policia Civil" src={logoPoliciaCivil} />
          </div>
          <div className="policiamilitar">
            <img className="logopoliciamilitar-icon" alt="Logo Policia Militar" src={logoPoliciaMilitar} />
            <a className="sitepoliciamilitar" href="https://www.policiamilitar.sp.gov.br/" target="_blank" rel="noopener noreferrer">Policia Militar</a>
            <div className="telefonepoliciamilitar">Telefone: 190</div>
          </div>
        </div>
      </div>
      <div className="projetoautores">
        <div className="redessociais">
          <div className="frameredessociais">
            <b className="tituloredessociais">Redes sociais:</b>
            <div className="framejoao">
              <img className="logogithubjoao-icon" alt="Logo GitHub João" src={logoGitHubJoao} />
              <div className="perfiljoaogithub">MarcheJ</div>
            </div>
            <div className="framelucas">
              <img className="logogithubjoao-icon" alt="Logo GitHub Lucas" src={logoGitHubLucas} />
              <div className="perfillucasgithub">LucasVch</div>
            </div>
            <div className="frameorientador">
              <img className="logogithubjoao-icon" alt="Logo GitHub Orientador" src={logoGitHubOrientador} />
              <div className="perfilorientadorgithub">A. Machion</div>
            </div>
            <div className="frameinstagram">
              <img className="logoinstagram-icon" alt="Logo Instagram" src={logoInstagram} />
              <div className="perfilinstagram">FatecIpiranga</div>
            </div>
          </div>
        </div>
        <div className="sobreautores">
          <b className="titulosobreautores">Sobre os autores</b>
          <div className="decoracaotitulotextorodape"></div>
          <b className="titulosobreautores1">Estudantes da FATEC Ipiranga</b>
          <div className="textosobreautores">
            Estudantes do curso de Análise e Desenvolvimento de Sistemas da Fatec Ipiranga, João V. L. Marchette e Lucas V. C. Silva, sob orientação da professora Andreia Cristina G. Machion, desenvolveram o sistema com o objetivo de aplicar os conceitos adquiridos ao longo do curso, além de também criar uma solução para a falta de acesso a dados brutos de segurança pública.
          </div>
        </div>
        <div className="sobreprojeto">
          <b className="sobreprojeto1">Sobre o projeto</b>
          <div className="decoracaotitulo"></div>
          <b className="tituloprojeto">Paulista + seguro</b>
          <div className="descricaoprojeto">
            O projeto de Trabalho de Conclusão de Curso (TCC) Paulista + seguro nasceu do desejo de compreender e verificar as condições de segurança pública de determinados locais ou regiões, tendo também o objetivo de ser uma plataforma para que os usuários e cidadãos possam se comunicar sobre possíveis incidentes de segurança, visando a combater a subnotificação de crimes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
