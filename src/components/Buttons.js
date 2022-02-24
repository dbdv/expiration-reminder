import "../styles/Buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

function Buttons({
  adding,
  toggleAdding,
  handleChangeProduct,
  product,
  addProduct,
  checkExpirations,
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
            placeholder="Producto"
            onChange={handleChangeProduct}
            value={product.name}
          />
          <div className="intervalContainer">
            <p>Avisarme</p>
            <input
              type="text"
              value={product.interval}
              onChange={handleChangeProduct}
              name="interval"
            />
            <p> días antes.</p>
          </div>
          <div className="date-container">
            <span>Vence: </span>
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
              Añadir {<FontAwesomeIcon icon={faPlus}/>}
            </button>
            <button className="button cancel-btn" onClick={toggleAdding}>
              Cancelar {<FontAwesomeIcon icon={faXmark}/>}
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
