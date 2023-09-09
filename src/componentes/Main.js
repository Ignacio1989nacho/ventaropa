import React from 'react'
import "../hoja-estilo/MainPPrincipal.css";
import "../hoja-estilo/ImagenesPPrincipal.css";

const Main = (props) => {
  return (
    <div>
      <main>
        <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary color-degradado">
          

          <div class="acomodar-imagen col-md-6 p-lg-5 mx-auto my-5">
            <img src={require(`../Imagenes/${props.giflogo}.gif`)} />

            <div class="d-flex gap-3 justify-content-center lead fw-normal"></div>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <h3 class="fuente fw-normal  text-muted mb-3">
          Viste a tus pequeños con estilo y comodidad
        </h3>
        <div className="flex-contenido-principal">
          <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div class="my-3 py-3">
                <img
                  className="tam-img"
                  src={require(`../Imagenes/${props.jean}.png`)}
                  alt="imagen-jean"
                />
              </div>
              <div class="bg-body-tertiary shadow-sm mx-auto"></div>
            </div>
            <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div class="my-3 p-3">
                <img
                  className="tam-img"
                  src={require(`../Imagenes/${props.remeras}.png`)}
                  alt="imagen-remeras"
                />
              </div>
              <div class="bg-dark shadow-sm mx-auto"></div>
            </div>
          </div>

          <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <img
                className="tam-img"
                src={require(`../Imagenes/${props.bebes}.png`)}
                alt="imagen-bebes"
              />
              <div class="bg-body shadow-sm mx-auto"></div>
            </div>
            <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <img
                className="tam-img"
                src={require(`../Imagenes/${props.descuento}.png`)}
                alt="imagen-descuento"
              />
              <div class="bg-body shadow-sm mx-auto"></div>
            </div>
          </div>

          <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div class="my-3 p-3">
                <img
                  className="tam-img"
                  src={require(`../Imagenes/${props.mercado}.png`)}
                  alt="imagen-mercado"
                />
              </div>
              <div class="bg-dark shadow-sm mx-auto"></div>
            </div>
            <div class="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div class="my-3 py-3">
                <img
                  className="tam-img"
                  src={require(`../Imagenes/${props.american}.png`)}
                  alt="imagen-american"
                />
              </div>
              <div class="bg-body-tertiary shadow-sm mx-auto"></div>
            </div>
          </div>

          <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div class="my-3 p-3">
                <img
                  className="tam-img"
                  src={require(`../Imagenes/${props.visa}.png`)}
                  alt="imagen-visa"
                />
              </div>
              <div class="bg-body shadow-sm mx-auto"></div>
            </div>
            <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div class="my-3 py-3">
                <img
                  className="tam-img"
                  src={require(`../Imagenes/${props.master}.png`)}
                  alt="imagen-master"
                />
              </div>
              <div class="bg-body shadow-sm mx-auto"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main
