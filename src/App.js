import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
    // definir la categoria
    const [categoria, setCategoria] = useState('');
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        // funcion consultar api
        const consultarAPI = async () => {
            const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=823527f98cb24660887d17180c308ba3`;

            const respuesta = await fetch(url);

            const noticias = await respuesta.json();

            setNoticias(noticias.articles);
        };

        consultarAPI();
    }, [categoria]);

    return (
        <Fragment>
            <Header titulo='Noticias' />

            <div className='container white'>
                <Formulario setCategoria={setCategoria} />
                <ListadoNoticias noticias={noticias} />
            </div>
        </Fragment>
    );
}

export default App;
