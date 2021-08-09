import { useState } from "react";
import Hero from "../Paginas/Hero";

const AdicionarPessoa = () => {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [time, setTime] = useState('');
    const [isPending, setisPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const pessoa = { nome, idade, time };
        console.log(pessoa);

        setisPending(true);

        fetch('http://localhost:8080/Dados', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pessoa)
        }).then(() => {
            console.log("added");
            setisPending(false);
        })
    };

    return (
        <div>
            <Hero titulo="Adicionar Nova Pessoa" subtitulo="" />            
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="nome">Nome da Pessoa:</label>
                    <input className="input" type="text" required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="idade">Idade da Pessoa:</label>
                    <input className="input" type="number" required
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="time">Time da Pessoa:</label>
                    <div className="control">
                        <select className="select" name="time" id="time"
                            required
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        >
                            <option value="">Selecione um time</option>
                            <option value="Grêmio">Grêmio</option>
                            <option value="Internacional">Internacional</option>
                            <option value="Flamengo">Flamengo</option>
                            <option value="São Paulo">São Paulo</option>
                            <option value="Fluminense">Fluminense</option>
                        </select>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        {!isPending && <button className="button is-link">Cadastrar</button>}
                        {isPending && <button className="button is-link" disabled>Adicionando Pessoa...</button>}
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default AdicionarPessoa;