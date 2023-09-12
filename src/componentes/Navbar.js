import React from 'react'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import PaginaDos from "./PaginaDos";
import PaginaUno from "./PaginaUno";
import PaginaTres from "./PaginaTres";
import PaginaCuatro from "./PaginaCuatro";
import "../hoja-estilo/NavbarGeneral.css";
import CheckCompra from './CheckCompra';

export const Navbar = (props) => {
  return (
    <div className="center-links">
      <header data-bs-theme="dark">
        <nav class="navbar navbar-expand-md bg-rose fixed-top ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Las Mechi
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse centrar-link "
              id="navbarCollapse"
            >
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item ">
                  <Link to="/">{props.linkUno}</Link>
                </li>
                <li class="nav-item ">
                  <Link to="/Chicos-as">{props.linkDos}</Link>
                </li>
                <li class="nav-item ">
                  <Link to="/Bebes">{props.linkTres}</Link>
                </li>
                <li class="nav-item ">
                  <Link to="/Descuentos">{props.linkCuatro}</Link>
                </li>
                <li class="nav-item ">
                  <Link to="/Compra">{props.linkCinco}</Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/Bebes" element={<PaginaTres />} />
        <Route path="/Descuentos" element={<PaginaCuatro />} />
        <Route path="/Chicos-as" element={<PaginaDos />} />
        <Route path="/" element={<PaginaUno />} />
        <Route path="/Compra" element={<CheckCompra foto="L" />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Navbar
