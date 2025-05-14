import oferta from "../assets/produto-oferta.png";

const Oferta = () => {
    return ( 
                <section id="oferta">
            <div>
                <div className="produto-detalhe"></div>
                <img src={oferta} alt="" className="produto-oferta"/>
            </div>
            <div className="flex-1">
                <h6>Oferta especial</h6>
                <h2>Air Jordan edição de <br/> colecionador</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip</p>
                <a href="" className="btn">Ver Oferta</a>
            </div>
        </section>
     );
}
 
export default Oferta;