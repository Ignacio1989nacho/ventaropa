import React from 'react'
import Main from "./Main";
import Footer from "./Footer";
import Nav from "./Nav";
import '../hoja-estilo/MainPPrincipal.css'
export const PaginaUno = () => {
  return (
    <div>
      <Main
        jean="jeans"
        remeras="remeras"
        visa="Visa_Inc._logo"
        master="MasterCard_Logo"
        american="american-express"
        mercado="Mercado-Pago-Logo"
        bebes="bebes-ropa"
        descuento="descuento"
        foto="imagenhome"
      />
      <Footer />
      <Nav />
    </div>
  );
}

export default PaginaUno
