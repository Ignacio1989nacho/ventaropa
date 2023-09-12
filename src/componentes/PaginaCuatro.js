import React from 'react'
import MainPDos from './MainPDos';
import FooterPDos from './FooterPDos';
const PaginaCuatro = () => {
  return (
    <div>
      <MainPDos
        tituloUno="50% o Fuera de temporada"
        color="descuento"
        leyendaBajoTitulo="¡Bienvenido a nuestra página! Aquí encontrarás una amplia
                variedad de productos de diferentes tipos, al increible 50% de descuento o tambien 
                los ofertones de fuera de temporada!
                ¡Explora nuestra selección y encuentra lo que estás buscando!"
        foto="bebes-ropa"
      />
      <FooterPDos />
    </div>
  );
}

export default PaginaCuatro
