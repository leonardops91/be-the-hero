import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';
import './style.css';
import { useEffect } from 'react';
import api from '../../services/api';
import { useState } from 'react';


export default function Profile() {
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    const [incidents, setIncidents] = useState([]);
    
    useEffect(() => {
        api.get('profile', {headers: {authorization: ongId}})
        .then(Response => {setIncidents(Response.data);
        })},[ongId]
    );
    
    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, 
            {headers:{authorization: ongId}});

            setIncidents(incidents.filter(
                incident => incident.id !== id
            ));
        } catch (err) {
            alert('Erro ao deletar, tente novamente');
        } 
    }
    
    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo" className="logo-img"/>
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to='/profile/new'>cadastrar novo caso</Link>
                <button onClick={handleLogout}><FiPower size={18} color="#e02041"/></button>
            </header>
            <section className="incidents">
                <h1>Casos cadastrados</h1>
                <ul>
                    {incidents.map(incident => (
                         <li key={incident.id}>
                         <strong>Caso:</strong>
                         <p>{incident.title}</p>
     
                         <strong>Descrição:</strong>
                         <p>{incident.description}</p>
     
                         <strong>Valor:</strong>
                         <p>{Intl.NumberFormat('pt-BR', {
                             style: 'currency', currency:'BRL'})
                             .format(incident.value)}
                         </p>
                         <button onClick={() => handleDeleteIncident(incident.id)} type="button"><FiTrash2 size={18} color="gray"/></button>
                         </li>
                    ))}                                     
                </ul>

            </section>
        </div>
    )
}