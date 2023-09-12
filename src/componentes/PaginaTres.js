import React from 'react'
import MainPDos from './MainPDos';
import FooterPDos from "./FooterPDos";
const PaginaTres = () => {
  return (
    <div>
      <MainPDos
        tituloUno="Bebes 0-11 meses"
        color="colorbebe"
        leyendaBajoTitulo="¡Bienvenido a nuestra página! Aquí encontrarás una amplia
                variedad de productos de diferentes tipos, desde ropa como
                remeras y camisetas de bebes hasta jeans y bestidos para los y las mas peques.
                ¡Explora nuestra selección y encuentra lo que estás buscando!"
        foto="escarpines_nene"
        foto2="escarpines"
      />
      <FooterPDos />
    </div>
  );
}

export default PaginaTres
