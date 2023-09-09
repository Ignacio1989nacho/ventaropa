import React from 'react'
import MainPDos from './MainPDos';
import FooterPDos from './FooterPDos';
export const PaginaDos = () => {
  return (
    <div>
      <body>
        <MainPDos
          tituloUno="Ropa Chicos/as"
          color="colorchicos"
          leyendaBajoTitulo="¡Bienvenido a nuestra página! Aquí encontrarás una amplia
                variedad de productos de diferentes tipos, desde ropa como
                remeras y camisetas de chicos hasta jeans y bestidos.
                ¡Explora nuestra selección y encuentra lo que estás buscando!"
          foto="escarpines"
        />
        <FooterPDos />
      </body>
    </div>
  );
}

export default PaginaDos
