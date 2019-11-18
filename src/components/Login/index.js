import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './login.css'

class Login extends Component{
    render(){
        return(
            <div className="container-login">
                    <label className="lbl">E-mail:</label>
                    <input className="inpt" type="e-mail" placeholder="Digite seu email."  />
                    <label className="lbl">Senha:</label>
                    <input  className="inpt" type="password" placeholder="Digite a sua senha."  />
                    <div className="botoes-login">
                        <button className="btn entrar">
                            <Link className="link">Entrar</Link>
                        </button>
                        <button className="btn cadastrar">
                            <Link className="link">Cadastrat</Link>
                        </button>
                    </div>
                </div>
        )
    }
}

export default Login;