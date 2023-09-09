import React from 'react'
import "../hoja-estilo/ColoresMainPaginas.css"
import ComponenteVenta from './ComponenteVenta';
import PrecioFoto from './PrecioFoto';
const MainPDos = (props) => {
  return (
    <div>
      <main className={props.color}>
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">{props.tituloUno}</h1>
              <p class="lead text-body-secondary">{props.leyendaBajoTitulo}</p>
              <p>
                <a href="#" class="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" class="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
          </div>
        </section>

        <div class="album py-5 bg-body-tertiary">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="col">
                <div class="card shadow-sm">
                  <img src={require(`../Imagenes/${props.foto}.png`)} />

                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <PrecioFoto precio="$150" />
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">
                  <img src={require(`../Imagenes/${props.foto}.png`)} />
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <PrecioFoto precio="$200" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src={require(`../Imagenes/${props.foto}.png`)} />
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <PrecioFoto precio="$250" />
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">
                  <img src={require(`../Imagenes/${props.foto}.png`)} />
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <PrecioFoto precio="$550" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src={require(`../Imagenes/${props.foto}.png`)} />
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <PrecioFoto precio="$650" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src={require(`../Imagenes/${props.foto}.png`)} />
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <PrecioFoto precio="$950" />
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">
                  <img src={require(`../Imagenes/${props.foto}.png`)} />
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <PrecioFoto precio="$1250" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src={require(`../Imagenes/${props.foto}.png`)} />
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <PrecioFoto precio="$1350" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img src={require(`../Imagenes/${props.foto}.png`)} />
                  <div class="card-body">
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <PrecioFoto precio="$1650" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPDos
