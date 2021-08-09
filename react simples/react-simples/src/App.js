import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.min.css';
import Navbar from './componentes/Paginas/Navbar';
import Footer from './componentes/Paginas/Footer';
import Hero from './componentes/Paginas/Hero';

import HelloWorld from './componentes/HelloWorld'

import AdicionarPessoa from './componentes/Pessoas/AdicionarPessoa'
import DetalhesPessoa from './componentes/Pessoas/DetalhesPessoa';
import ListaPessoas from './componentes/Pessoas/ListaPessoas';
import NotFound from './componentes/Paginas/_404/NotFound';

class App extends Component{
	constructor(props){
	super(props)
	this.state = {
		Nome: "",
		Idade: "25",
		Time: "Chelsea" 
	}
	};

	mudarInfo = () => {
	this.setState ({Idade: "28"});
	}

	EnviarNome = (event) => {
	this.setState ({Nome: event.target.value});
	}

	render() {

		return (
			<Router>
				<div className="app">
					<Navbar />
					<div className="container is-max-widescreen">
						<Switch>
							<Route exact path="/">
								<Hero titulo="Página Inicial do Sistema de Cadastro de Pessoas" subtitulo="" />
								<section className="section is-small">
									<h2>EXEMPLO STATE</h2>

									<p>Teste State - Nome: {this.state.Nome}</p>
									<p>Teste State - Idade: {this.state.Idade}</p>
									<p>Teste State - Time: {this.state.Time}</p>

									<button onClick={this.mudarInfo}>Mudar idade</button>
								</section>

								<section className="section is-small">
									<h2>EXEMPLO COMPONENTES</h2>

									<HelloWorld nome="Teste React"/>
									<HelloWorld nome="Segundo Teste React"/>
									<HelloWorld nome="Terceiro Teste React"/>
								</section>

								<section className="section">
									<h2>EXEMPLO FORM</h2>
									<form>
										<p>Digite um nome: </p>
										<input type="text" onChange={this.EnviarNome}/>
										{/* <input type="submit" />  */}
										<p>nome: {this.state.Nome}</p>
									</form>
								</section>
							</Route>
							<Route path="/adicionar-pessoa">
								<section className="section is-small">
									<AdicionarPessoa />
								</section>
							</Route>
							<Route path="/listar-pessoas">
								<section className="section is-small">
									<ListaPessoas />
								</section>
							</Route>
							<Route path="/pessoa/:id">
								<section className="section is-small">
									<DetalhesPessoa />
								</section>
							</Route>
							<Route path="*">
								<section className="section is-small">
									<NotFound />
								</section>
							</Route>
						</Switch>
					</div>
					<Footer />
				</div>
			</Router>
		)}
	}

	export default App;
