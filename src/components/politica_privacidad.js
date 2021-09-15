import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PoliticaDetalles from './Politicas/politica-priv';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const PoliticaPrivPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Politica de Privacidad de Datos"  />
        <PoliticaDetalles />
        <Subscribe />
        <Footer />
    </div>
}

export default PoliticaPrivPage

