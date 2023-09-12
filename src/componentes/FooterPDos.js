import React from 'react'

const FooterPDos = () => {
  const fecha = new Date().getFullYear();
  return (
    <div>
      <footer class="text-body-secondary py-5">
        <div class="container">
          <p class="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <small class="d-block mb-3 text-body-secondary">
            Loto Sistema &copy; {fecha}
          </small>
        </div>
      </footer>
      <script
        src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default FooterPDos
