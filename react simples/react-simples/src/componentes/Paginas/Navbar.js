import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                  <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
                </Link>
            
                <Link to="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </Link>
              </div>
            
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <Link to="/" className="navbar-item">
                    Início
                  </Link>
            
            
                  <div className="navbar-item has-dropdown is-hoverable">
                    <p className="navbar-link">
                      Pessoas
                    </p>
            
                    <div className="navbar-dropdown">
                      <Link to="/adicionar-pessoa" className="navbar-item">
                        Adicionar
                      </Link>
                      <hr className="navbar-divider"/>
                      <Link to="/listar-pessoas" className="navbar-item">
                        Listar Pessoas
                      </Link>
                    </div>
                  </div>
                </div>
            
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <Link to="/" className="button is-primary">
                        <strong>Cadastrar</strong>
                      </Link>
                      <Link to="/" className="button is-light">
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
      );
}
 
export default Navbar;