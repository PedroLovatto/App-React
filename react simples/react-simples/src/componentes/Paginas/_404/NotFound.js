import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section>
            <h2 className="title">Desculpa!</h2>
            <h3 className="subtitle">Página não encontrada...</h3>
            <Link to="/">Voltar para a Página Inicial</Link>
        </section>
    );
}
 
export default NotFound;