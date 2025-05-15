import { Link } from "react-router";

const NotFound = () => {
    return ( 
        <>
            <h1>Página não encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            {/* <a href="/">Voltar</a> */}
            {/* essa opção é para voltar uma página anterior, e não voltar para a home */}
            <Link to={-1}>Voltar</Link>
        </>
     );
}
 
export default NotFound;