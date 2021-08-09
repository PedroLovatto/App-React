import { useParams } from "react-router";
import useFetch from "../Paginas/useFetch";
import Hero from "../Paginas/Hero";
import { useHistory } from "react-router-dom";

const DetalhesPessoa = () => {
    const { id } = useParams()
    const { data: pessoa, isPending, error } = useFetch('http://localhost:8080/Dados/' + id);
    
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8080/Dados/' + pessoa.id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div>
            {isPending && (
                <div>
                    <div>Carregando...</div>
                    <progress class="progress is-large is-success" max="100"></progress>
                </div>
            )}
            {error && <div>{error}</div>}
            {pessoa && (
                <section>
                    <Hero titulo="Informações Pessoais" subtitulo="" />
                    <article>
                        <p><strong>Nome:</strong> {pessoa.nome}</p>
                        <p><strong>Idade:</strong> {pessoa.idade}</p>
                        <p><strong>Time:</strong> {pessoa.time}</p>
                    </article>
                    <button className="button is-danger" onClick={handleClick}>Remover Pessoa</button>
                </section>
            )}
        </div>
    );
}
 
export default DetalhesPessoa;