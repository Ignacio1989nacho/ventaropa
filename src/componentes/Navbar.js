import React from 'react'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import PaginaDos from "./PaginaDos";
import PaginaUno from "./PaginaUno";
import PaginaTres from "./PaginaTres";
import PaginaCuatro from "./PaginaCuatro";
import "../hoja-estilo/NavbarGeneral.css";
export const Navbar = (props) => {
  return (
    <div className="center-links">
      <nav
        class="navbar navbar-expand-md bg-rose sticky-top border-bottom"
        data-bs-theme="dark"
      >
        <div class="container">
          <a class="navbar-brand d-md-none" href="#">
            <svg class="bi" width="24" height="24">
              <use xlinkHref="#aperture" />
            </svg>
            NAVBAR
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            aria-controls="#offcanvas"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="#offcanvas"
            aria-labelledby="#offcanvasLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="#offcanvasLabel">
                NAVBAR
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body ">
              <ul class="navbar-nav flex-grow-1 centrar-link justify-content-between">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <svg class="bi" width="24" height="24">
                      <use xlinkHref="#aperture" />
                    </svg>
                  </a>
                </li>
                <li class="nav-item ">
                  <Link to="/">{props.linkUno}</Link>
                </li>
                <li class="nav-item ">
                  <Link to="/paginaDos">{props.linkDos}</Link>
                </li>
                <li class="nav-item ">
                  <Link to="/paginaTres">{props.linkTres}</Link>
                </li>
                <li class="nav-item ">
                  <Link to="/paginaCuatro">{props.linkCuatro}</Link>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <svg class="bi" width="24" height="24">
                      <use xlinkHref="#cart" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol
          id="aperture"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
        </symbol>
        <symbol id="cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
        <symbol id="chevron-right" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </symbol>
      </svg>

      <Routes>
        <Route path="/paginaTres" element={<PaginaTres />} />
        <Route path="/paginaCuatro" element={<PaginaCuatro />} />
        <Route path="/paginaDos" element={<PaginaDos />} />
        <Route path="/" element={<PaginaUno />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Navbar
