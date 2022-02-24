import "../styles/ProductTemplate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ProductTemplate({
  name,
  description,
  day,
  month,
  year,
  id,
  interval,
  removeProduct,
}) {
  return (
    <div className={`prod-card ${id}`}>
      <div className="left-side">
        <h1 className="name">{name}</h1>
        <div className="interval">
          <span className="date">{`Vence: ${day}-${month}-${year}`}</span>
          <p className="setTo">avisar {interval} dias antes.</p>
        </div>
      </div>
      
      <button
        className="delete-button"
        id={id}
        onClick={(e) => removeProduct(e.target.id)}
      >
        Eliminar{<FontAwesomeIcon icon={faXmark}/>}
      </button>
    </div>
  );
}

export default ProductTemplate;
