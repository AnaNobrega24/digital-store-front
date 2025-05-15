import Banner from "../components/Banner";
import Destaque from "../components/Destaques";
import Oferta from "../components/Oferta";
import Produtos from "../components/Produtos";


const Home = () => {
    return ( 
      <main>
          <Banner />
          <Destaque />
          <Produtos />
          <Oferta />
      </main>
     );
}
 
export default Home;