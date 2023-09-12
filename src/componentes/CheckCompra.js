import React from 'react'
import "../hoja-estilo/CheckCompra.css"
import PlanillaDescripcionCompra from './PlanillaDescripcionCompra';
export const CheckCompra = (props) => {
    const fecha = new Date().getFullYear();
  return (
    <div>
      <body class="bg-body-tertiary">
        <div class="container">
          <main>
            <div class="">
              <div className="imagen-estilo"></div>
              <h2>Check de Compra</h2>
              <p class="lead">
                ¡Bienvenido al formulario de compra! Aquí es donde puedes
                ingresar tus datos para completar tu compra. A continuación, te
                proporciono una descripción paso a paso de cómo completar el
                formulario: <br />
                Información personal: Ingresa tu nombre y correo electrónico.
                <br /> Dirección de envío: Proporciona la dirección de entrega.
                <br />
                Detalles del pedido: Revisa los artículos y el precio total.
                <br />
                Información de pago: Ingresa los detalles de tu tarjeta. Haz
                clic en “Realizar pedido” para finalizar.
              </p>
            </div>

            <PlanillaDescripcionCompra />
          </main>

          <footer class="my-5 pt-5 text-body-secondary text-center text-small">
            <p class="mb-1">&copy; {fecha} Loto Sistema</p>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#">Privacy</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terms</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Support</a>
              </li>
            </ul>
          </footer>
        </div>
        <script
          src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
          crossorigin="anonymous"
        ></script>

        <script src="checkout.js"></script>
      </body>
    </div>
  );
}

export default CheckCompra
