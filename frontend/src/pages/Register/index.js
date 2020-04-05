import React,{ useState } from 'react';

import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import './style.css'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();


    async function handleRegister(e) {
        e.preventDefault();

        const inputs = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('ongs', inputs);
            alert(`Guarde sua ID para login: ${response.data.id}`);
            history.push('/');
            console.log(inputs);
        } 
        catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="layout-container">
                <section className="header">
                    <img src={logoImg} alt="Logo" className="logo-img"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/"><FiArrowLeft size={16} color="#e02041"/>Voltar ao logon</Link>
                </section>
                <section className="form">
                    <form onSubmit={handleRegister}>
                        <div>
                        <input placeholder="Nome da ONG"
                            value={name}
                            onChange= {e => setName(e.target.value)}
                        />
                        <input placeholder="E-mail"
                        value={email}
                        onChange= {e => setEmail(e.target.value)}
                        />
                        <input placeholder="Whatsapp"
                        value={whatsapp}
                        onChange= {e => setWhatsapp(e.target.value)}
                        />
                        </div>
                        <input id="city" placeholder="Cidade"
                        value={city}
                        onChange= {e => setCity(e.target.value)}
                        />
                        <input id="uf" placeholder="UF"
                        value={uf}
                        onChange= {e => setUf(e.target.value)}
                        />

                        <button className="button" type="submit">Cadastrar</button>
                    </form>

                </section>
            </div>
        </div>
    )
}