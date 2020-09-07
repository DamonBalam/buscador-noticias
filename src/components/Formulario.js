import PropTypes from "prop-types";
import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({ setCategoria }) => {
    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertaiment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencias' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },
    ];

    // utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    // submit al form
    const buscarNoticias = (e) => {
        e.preventDefault();

        setCategoria(categoria);
    };

    return (
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
                    <SelectNoticias />
                    <div className='input-field col s12'>
                        <input
                            value='Buscar'
                            type='submit'
                            className={`btn-large amber darken-2 ${styles.btn_block}`}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

Formulario.propTypes = {
  setCategoria: PropTypes.func.isRequired
}

export default Formulario;
