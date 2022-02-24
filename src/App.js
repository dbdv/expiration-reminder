import "./App.css";
import Buttons from "./components/Buttons";
import SearchBar from "./components/SearchBar";
import ProductsBox from "./components/ProductsBox";
import { useState, useEffect } from "react";
import moment from "moment";

const today = new Date();
const emptyParams = {
  id: -1,
  name: "",
  description: "",
  day: today.getDate(),
  month: today.getMonth() + 1,
  year: today.getFullYear(),
  interval: 1,
};

function App() {
  const [adding, setAdding] = useState(false);
  const [searching, setSearching] = useState(false);
  const [productsOBJ, setProductsOBJ] = useState(
    JSON.parse(localStorage.getItem("products")) || {}
  );
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [product, setProduct] = useState(emptyParams);
  const [foundProducts, setFoundProducts] = useState([]);

  /* useEffect(() => {
    if (productsOBJ !== {}) {
      const update = [];
      for (let p in productsOBJ) {
        update.push(productsOBJ[p]);
      }
      setProducts(update);
    }
  }, [productsOBJ]);
 */
  useEffect(() => {
    const update = [];
    if (productsOBJ !== {}) {
      for (let p in productsOBJ) {
        update.push(productsOBJ[p]);
      }
      setProducts(update);
    } else {
      setProducts(update);
    }
  }, [productsOBJ]);

  useEffect(() => {
    if (!adding) setProduct(emptyParams);
  }, [adding]);

  useEffect(() => {
    if (keyword !== "" && products.length !== 0) {
      const foundP = products.filter((p) => p["name"].includes(keyword));
      setFoundProducts(foundP);
    }
  }, [keyword, products]);

  useEffect(() => {
    if (products.length !== 0 && searching) checkExpirations(foundProducts);
    else if (products.length !== 0 && !searching) checkExpirations(products);
  }, [products, foundProducts, searching]);

  function toggleAdding() {
    setAdding((adding) => !adding);
  }

  function handleChangeKeyword(event) {
    if (event.target.value.length === 0) setSearching(false);
    else {
      setSearching(() => {
        setKeyword(event.target.value);
        return true;
      });
    }
  }

  function handleChangeProduct(event) {
    const { name, value, id } = event.target;

    name === "name" || name === "description"
      ? setProduct((product) => ({
          ...product,
          [`${name}`]: value,
          id: id,
        }))
      : setProduct((product) => ({
          ...product,
          [`${name}`]: Number.parseInt(value),
          id: id,
        }));
  }

  function addProduct() {
    const { name, day, month, year, interval, description } = product;
    const objId = name + Math.floor(Math.random() * 1000) + description;
    const newProduct = product;
    newProduct["id"] = objId;

    if (
      moment(`${year}-${month}-${day}`).diff(moment(), "days") < 1 ||
      interval < 1
    ) {
      /* console.table(product); */
      alert("No completó todos los campos correctamente.");
    } else {
      setProductsOBJ((prdObj) => {
        localStorage.setItem(
          "products",
          JSON.stringify({ ...prdObj, [`${objId}`]: newProduct })
        );
        return { ...prdObj, [`${objId}`]: newProduct };
      });
    }
  }

  function removeProduct(id) {
    setProductsOBJ((prdOBJ) => {
      delete prdOBJ[id];
      localStorage.setItem("products", JSON.stringify(prdOBJ));
      return prdOBJ;
    });
  }

  function checkExpirations(array) {
    array.forEach((p) => {
      const pDate = new moment(`${p.day}-${p.month}-${p.year}`, "DD MM YYYY");
      /* console.log(pDate.diff(moment(), "days")); */
      /* console.log(moment().get('year'), moment().get('month'), moment().get('date'));
      console.log(pDate.diff(moment(), "days")) */
      const element = document.querySelector(`.${p.id}`);
      if (pDate.diff(moment(), "days") < p.interval && element !== null) {
        element.classList.add("inTime");
      }
    });
  }

  return (
    <div className="App">
      <div className="externalDiv">
        <div className="top">
          <SearchBar handleChangeKeyword={handleChangeKeyword} />
          <Buttons
            adding={adding}
            toggleAdding={toggleAdding}
            handleChangeProduct={handleChangeProduct}
            addProduct={addProduct}
            product={product}
          />
        </div>
      </div>

      {searching ? (
        <ProductsBox
          removeProduct={removeProduct}
          products={foundProducts}
          message="No se han encontrado coincidencias."
        />
      ) : (
        <ProductsBox
          removeProduct={removeProduct}
          products={products}
          message="Aún no cargó productos."
        />
      )}
    </div>
  );
}

export default App;
