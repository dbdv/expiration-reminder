import { useEffect, useState } from "react";
import "../styles/Buttons.css";

function Buttons({
  adding,
  toggleAdding,
  handleChangeProduct,
  product,
  addProduct,
  checkExpirations
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      {adding ? (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Nombre"
            onChange={handleChangeProduct}
            value={product.name}
          />
          <input
            type="text"
            name="description"
            className="input"
            placeholder="Descripcion"
            onChange={handleChangeProduct}
            value={product.description}
          />
          <div className="intervalContainer">
            <p>Avisarme</p>
            <input
              type="text"
              /* value={product.interval} */
              onChange={handleChangeProduct}
              name="interval"
            />
            <p> días antes.</p>
          </div>
          <div className="date-container">
            <input
              type="text"
              name="day"
              className="input-date"
              placeholder="Dia"
              onChange={handleChangeProduct}
              /* value={product.day} */
            />
            <input
              type="text"
              name="month"
              className="input-date"
              placeholder="Mes"
              onChange={handleChangeProduct}
              /* value={product.month} */
            />
            <input
              type="text"
              name="year"
              className="input-date"
              placeholder="Año"
              onChange={handleChangeProduct}
              /* value={product.year} */
            />
          </div>

          <div>
            <button className="button add-btn" onClick={addProduct}>
              Añadir
            </button>
            <button className="button cancel-btn" onClick={toggleAdding}>
              Cancelar
            </button>
          </div>
        </form>
      ) : (
        <div className="initial-buttons">
          <button className="button new-btn" onClick={toggleAdding}>
            Nuevo
          </button>
          {/* <button className="button check-btn" onClick={checkExpirations}>Revisar</button> */}
        </div>
      )}
    </div>
  );
}

export default Buttons;
