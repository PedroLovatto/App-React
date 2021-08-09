import { Link } from 'react-router-dom';
import useFetch from '../Paginas/useFetch';
import Hero from '../Paginas/Hero';

const ListaPessoas = () => {

    const { data: pessoas, isPending, error } = useFetch('http://localhost:8080/Dados');

    return (
        <div>
            { error && <div>{error} </div> }
            {isPending && (
                <div>
                    <div>Carregando...</div>
                    <progress class="progress is-large is-success" max="100"></progress>
                </div>
            )}
            {pessoas && (
                <div>
                    <Hero titulo="Lista de Pessoas Registradas" subtitulo="" />
                    <table className="table is-fullwidth is-hoverable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Time</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pessoas.map((pessoa) => (
                                <tr>
                                    <th key={pessoa.id}>{pessoa.id}</th>
                                    <td key={pessoa.nome}>{pessoa.nome}</td>
                                    <td key={pessoa.idade}>{pessoa.idade}</td>
                                    <td key={pessoa.time}>{pessoa.time}</td>
                                    <td><Link to={`/pessoa/${pessoa.id}`}>Mostrar</Link></td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
 
export default ListaPessoas;