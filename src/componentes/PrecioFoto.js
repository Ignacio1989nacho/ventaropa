import React from 'react'

const PrecioFoto = (props) => {
  return (
    <div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
            View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
            Edit
          </button>
        </div>
        <small class="text-body-secondary">{props.precio}</small>
      </div>
    </div>
  );
}

export default PrecioFoto
