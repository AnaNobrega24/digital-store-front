import camisa from '../assets/camisa.png';
import tenis from '../assets/tenis.png';
import fone from '../assets/fone.png';
import iconShirt from '../assets/icon-shirt.svg';
import iconPants from '../assets/icon-pants.svg';
import iconHat from '../assets/icon-hat.svg';
import iconHeadphone from '../assets/icon-headphone.svg';
import iconShoes from '../assets/icon-shoes.svg';

const Destaque = () => {
    return ( 
        <section id="destaques">
            <h3>Coleções em destaque</h3>
            <div className="colecoes">
                <div>
                    <div className="conteudo">
                        <h6>30% off</h6>
                        <h2>Novo drop<br/>Supreme</h2>
                        <a href="" className="btn inverso">Comprar</a>
                    </div>
                    <img src={camisa} alt=""/>
                </div>
                <div>
                    <div className="conteudo">
                        <h6>30% off</h6>
                        <h2>Coleções<br/>Adidas</h2>
                        <a href="" className="btn inverso">Comprar</a>
                    </div>
                    <img src={tenis} alt=""/>
                </div>
                <div>
                    <div className="conteudo">
                        <h6>30% off</h6>
                        <h2>Novo<br/>Beats Bass</h2>
                        <a href="" className="btn inverso">Comprar</a>
                    </div>
                    <img src={fone} alt=""/>
                </div>
            </div>

            <h3>Departamentos</h3>
            <div className="departamentos">
                <div>
                    <div className="icon">
                        <img src={iconShirt} alt=""/>
                    </div>
                    Camisetas
                </div>

                <div>
                    <div className="icon">
                        <img src={iconPants} alt=""/>
                    </div>
                    Calças
                </div>

                <div>
                    <div className="icon">
                        <img src={iconHat} alt="" className="bone"/>
                    </div>
                    Bonés
                </div>

                <div>
                    <div className="icon">
                        <img src={iconHeadphone} alt=""/>
                    </div>
                    Headphones
                </div>

                <div>
                    <div className="icon">
                        <img src={iconShoes} alt=""/>
                    </div>
                    Tênis
                </div>

            </div>

        </section>
     );
}
 
export default Destaque;