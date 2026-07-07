import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  FaBolt,
  FaCheckCircle,
  FaLeaf,
  FaSearch,
  FaShieldAlt,
  FaShoppingBag,
  FaStar,
  FaTruck,
} from "react-icons/fa";
import { products, categories } from "../../data/products";
import { addToCart } from "../../redux/slice/cartSlice";
import style from "./Home.module.scss";

const currency = new Intl.NumberFormat("es-BO", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const sortProducts = (items, sortBy) => {
  const productsToSort = [...items];

  if (sortBy === "price-low") {
    return productsToSort.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price-high") {
    return productsToSort.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    return productsToSort.sort((a, b) => b.rating - a.rating);
  }

  return productsToSort.sort((a, b) => b.reviews - a.reviews);
};

const Home = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("popular");
  const featuredProduct = products[0];

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const visibleProducts = products.filter((product) => {
      const matchesCategory = category === "Todos" || product.category === category;
      const matchesQuery =
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.brand.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });

    return sortProducts(visibleProducts, sortBy);
  }, [category, query, sortBy]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} agregado al carrito`);
  };

  return (
    <main className={style.storefront}>
      <section className={style.hero} id="home">
        <div className={style.heroContent}>
          <div className={style.heroCopy}>
            <span className={style.kicker}>
              <FaBolt /> Drops seleccionados cada semana
            </span>
            <h1>NeoCommerce</h1>
            <p>
              Productos premium de tecnologia, moda, hogar y belleza con stock
              verificado, checkout rapido y soporte humano.
            </p>
            <div className={style.heroActions}>
              <a href="#product" className={style.primaryAction}>
                <FaShoppingBag /> Comprar ahora
              </a>
              <a href="#collections" className={style.secondaryAction}>
                Ver colecciones
              </a>
            </div>
            <div className={style.heroStats} aria-label="Indicadores de tienda">
              <span>
                <strong>4.8/5</strong>
                Valoracion media
              </span>
              <span>
                <strong>24 h</strong>
                Despacho local
              </span>
              <span>
                <strong>+8k</strong>
                Compras entregadas
              </span>
            </div>
          </div>

          <article className={style.heroProduct}>
            <div className={style.heroImageWrap}>
              <img src={featuredProduct.image} alt={featuredProduct.name} />
              <span>{featuredProduct.badge}</span>
            </div>
            <div className={style.heroProductInfo}>
              <div>
                <p>{featuredProduct.brand}</p>
                <h2>{featuredProduct.name}</h2>
              </div>
              <strong>{currency.format(featuredProduct.price)}</strong>
              <button type="button" onClick={() => handleAddToCart(featuredProduct)}>
                <FaShoppingBag /> Agregar
              </button>
            </div>
          </article>
        </div>
      </section>

      <section className={style.assurance} aria-label="Beneficios">
        <div>
          <FaTruck />
          <span>Envio 24-48 h</span>
        </div>
        <div>
          <FaShieldAlt />
          <span>Garantia directa</span>
        </div>
        <div>
          <FaLeaf />
          <span>Empaque responsable</span>
        </div>
        <div>
          <FaCheckCircle />
          <span>Stock verificado</span>
        </div>
      </section>

      <section className={style.collections} id="collections">
        <div className={style.sectionHeader}>
          <span>Comprar por estilo</span>
          <h2>Colecciones listas para elegir</h2>
        </div>
        <div className={style.collectionGrid}>
          {categories.slice(1).map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? style.selectedCollection : ""}
              onClick={() => setCategory(item)}
            >
              <span>{item}</span>
              <small>{products.filter((product) => product.category === item).length} piezas</small>
            </button>
          ))}
        </div>
      </section>

      <section className={style.catalog} id="product">
        <div className={style.catalogHeader}>
          <div className={style.sectionHeader}>
            <span>Catalogo</span>
            <h2>Productos destacados</h2>
          </div>
          <p>{filteredProducts.length} resultados</p>
        </div>

        <div className={style.toolbar}>
          <label className={style.searchBox}>
            <FaSearch />
            <input
              type="search"
              placeholder="Buscar productos, marcas o detalles"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <div className={style.filters} aria-label="Filtros de catalogo">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                className={category === item ? style.activeFilter : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <label className={style.sortBox}>
            <span>Ordenar</span>
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
              <option value="popular">Popularidad</option>
              <option value="rating">Mejor valorados</option>
              <option value="price-low">Precio menor</option>
              <option value="price-high">Precio mayor</option>
            </select>
          </label>
        </div>

        <div className={style.productGrid}>
          {filteredProducts.map((product) => (
            <article className={style.productCard} key={product.id}>
              <div className={style.productImage}>
                <img src={product.image} alt={product.name} />
                <span>{product.badge}</span>
              </div>
              <div className={style.productInfo}>
                <div className={style.productMeta}>
                  <span>{product.brand}</span>
                  <strong>
                    <FaStar /> {product.rating}
                  </strong>
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className={style.specs}>
                  {product.specs.map((spec) => (
                    <span key={spec}>{spec}</span>
                  ))}
                </div>
                <div className={style.productFooter}>
                  <div>
                    <strong>{currency.format(product.price)}</strong>
                    <small>{currency.format(product.compareAt)}</small>
                  </div>
                  <button type="button" onClick={() => handleAddToCart(product)}>
                    <FaShoppingBag /> Agregar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
