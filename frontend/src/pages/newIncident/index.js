import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './style.css';
import { useState } from 'react';
import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    

    async function handleNewIncident(e) {
        e.preventDefault();
        
        const inputs = {
            title,
            description,
            value,
        };
        console.log(inputs);
        console.log(ongId);

        try {
            await api.post('incidents', inputs, {
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile');

        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
        
    };

    return (
        <div className="new-incident-container">
            <div className="layout-container">
                <section className="header">
                    <img src={logoImg} alt="Logo" className="logo-img"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente e encontre um herói para resolver.</p>

                    <Link to="/profile"><FiArrowLeft size={16} color="#e02041"/>Voltar à home</Link>
                </section>
                <section className="form">
                    <form  onSubmit={handleNewIncident}>
                        <div>
                        <input placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)}/>
                        <textarea placeholder="Descrição do caso" value={description} onChange={e => setDescription(e.target.value)}/>
                        <input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)}/>
                        </div>

                        <button className="button" type="submit">Cadastrar</button>
                    </form>

                </section>
            </div>
        </div>
    )
}