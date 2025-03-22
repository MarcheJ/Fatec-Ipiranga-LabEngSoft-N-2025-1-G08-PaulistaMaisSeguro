import "./Footer.css";

const Footer = () => {
  return (
    <footer className="rodapepagina w-full h-[180px] flex flex-col items-end justify-center text-white text-right px-4">
      <div className="retangulorodape w-full h-[180px] bg-gray-700 absolute top-0"></div>
      <div className="relative flex flex-wrap justify-end gap-4 text-sm sm:text-base">
        <b className="ajuda">Ajuda</b>
        <b className="politicaprivacidade">Política de privacidade</b>
        <b className="politicaprivacidade1">Termos de serviço</b>
        <b className="politicaprivacidade2">Dados da empresa</b>
      </div>
    </footer>
  );
};

export default Footer;
