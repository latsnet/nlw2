import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/8322524?s=460&v=4" alt="Luiz Augusto"></img>
                <div>
                    <strong>Luiz Augusto</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Linha 1
                <br /><br />
                Linha 2
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;