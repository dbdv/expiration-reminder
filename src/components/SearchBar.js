import "../styles/searchBar.css";

function SearchBar({handleChangeKeyword}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-bar"
        placeholder="Buscar producto"
        onChange={e => handleChangeKeyword(e)}
      />
    </form>
  );
}

export default SearchBar;
