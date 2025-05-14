import Banner from "../components/Banner";
import Destaque from "../components/Destaques";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Oferta from "../components/Oferta";
import Produtos from "../components/Produtos";


const Home = () => {
    return ( 
        <>
        <Header />
      <main>
        <Banner />
        <Destaque />
        <Produtos />
        <Oferta />
      </main>
        <Footer />
        </>
     );
}
 
export default Home;