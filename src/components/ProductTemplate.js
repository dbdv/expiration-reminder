import "../styles/ProductTemplate.css";

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
        <p className="description">{description}</p>
        <span className="date">{`Vencimiento: ${day}/ ${month}/ ${year}`}</span>
        <p>Configurado para {interval} dias antes.</p>
      </div>
      <button
        className="delete-button"
        id={id}
        onClick={(e) => removeProduct(e.target.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default ProductTemplate;
