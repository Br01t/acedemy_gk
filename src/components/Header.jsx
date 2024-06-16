import React from "react";
import HeaderImg from '../assets/images/header-img.webp';
import GoToFormBtn from "./GoToFormBtn";
import HeaderBgImg from '../assets/images/bg-header.webp'; 

function Header() {
    const headerStyle = {
        backgroundImage: `url(${HeaderBgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Altezza della sezione, regolabile
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center', // Allinea il testo al centro
        color: '#fff', // Colore del testo bianco
        padding: '0 20px', // Spaziatura interna per migliorare la leggibilità
    };

    const headerTitleStyle = {
        fontSize: '5rem', // Dimensione del titolo principale
        fontWeight: 'bold', // Grassetto per il titolo principale
        marginBottom: '20px', // Margine inferiore per separare dal pulsante
        textShadow: '0 0 10px rgba(128, 0, 128, 0.8)',
        border: '2px solid #fff', // Bordo del testo
        padding: '10px', // Spaziatura interna del testo
    };

    const maltaNumberStyle = {
        color: '#ff4500',
        textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', 
    };

    const headerImgStyle = {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Ombra per l'immagine
        border: '4px solid #fff', // Bordo per l'immagine
        borderRadius: '50%', // Bordi arrotondati per l'immagine
    };

    return (
        <header style={headerStyle} className="pt-5" id="header">
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0">
                    <h3 style={maltaNumberStyle} className="fw-bold lh-1">Malta N°1</h3>
                    <h1 style={headerTitleStyle} className="text-capitalize text-primary lh-1 mb-5">GoalKeeper Academy</h1>
                    <GoToFormBtn />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                        <img src={HeaderImg} alt="header image" className="img-fluid w-75 rounded-circle shadow my-5" style={headerImgStyle} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;