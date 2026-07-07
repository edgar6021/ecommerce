import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaCreditCard,
  FaMinus,
  FaPlus,
  FaRegTrashAlt,
  FaShoppingBag,
  FaTruck,
} from "react-icons/fa";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartSubtotal,
} from "../../redux/slice/cartSlice";
import style from "./Cart.module.scss";

const currency = new Intl.NumberFormat("es-BO", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const shipping = subtotal > 180 || subtotal === 0 ? 0 : 12;
  const discount = subtotal > 300 ? Math.round(subtotal * 0.08) : 0;
  const total = subtotal + shipping - discount;

  const handleCheckout = (event) => {
    event.preventDefault();

    if (!items.length) {
      toast.info("Tu carrito esta vacio");
      return;
    }

    toast.success("Pedido recibido. Te contactaremos para confirmar el pago.");
    dispatch(clearCart());
  };

  if (!items.length) {
    return (
      <main className={style.emptyCart}>
        <div>
          <FaShoppingBag />
          <h1>Tu carrito esta vacio</h1>
          <p>Explora el catalogo y agrega productos para preparar tu pedido.</p>
          <Link to="/">
            <FaArrowLeft /> Volver a la tienda
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={style.cartPage}>
      <section className={style.cartHero}>
        <div>
          <Link to="/">
            <FaArrowLeft /> Seguir comprando
          </Link>
          <h1>Carrito</h1>
          <p>{items.length} productos seleccionados</p>
        </div>
      </section>

      <section className={style.checkoutLayout}>
        <div className={style.cartItems}>
          {items.map((item) => (
            <article className={style.cartItem} key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className={style.itemInfo}>
                <span>{item.brand}</span>
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <button type="button" onClick={() => dispatch(removeFromCart(item.id))}>
                  <FaRegTrashAlt /> Quitar
                </button>
              </div>
              <div className={style.quantity}>
                <button
                  type="button"
                  aria-label={`Restar ${item.name}`}
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  <FaMinus />
                </button>
                <strong>{item.quantity}</strong>
                <button
                  type="button"
                  aria-label={`Sumar ${item.name}`}
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  <FaPlus />
                </button>
              </div>
              <div className={style.price}>
                <strong>{currency.format(item.price * item.quantity)}</strong>
                <small>{currency.format(item.price)} c/u</small>
              </div>
            </article>
          ))}
        </div>

        <aside className={style.summary}>
          <div className={style.summaryHeader}>
            <FaCreditCard />
            <div>
              <span>Checkout</span>
              <h2>Resumen</h2>
            </div>
          </div>

          <div className={style.summaryRows}>
            <p>
              Subtotal <strong>{currency.format(subtotal)}</strong>
            </p>
            <p>
              Envio <strong>{shipping === 0 ? "Gratis" : currency.format(shipping)}</strong>
            </p>
            <p>
              Descuento <strong>-{currency.format(discount)}</strong>
            </p>
            <p className={style.total}>
              Total <strong>{currency.format(total)}</strong>
            </p>
          </div>

          <div className={style.benefits}>
            <span>
              <FaTruck /> Despacho coordinado
            </span>
            <span>
              <FaCheckCircle /> Pago contra confirmacion
            </span>
          </div>

          <form className={style.checkoutForm} onSubmit={handleCheckout}>
            <label>
              Nombre
              <input type="text" required placeholder="Tu nombre completo" />
            </label>
            <label>
              Telefono
              <input type="tel" required placeholder="+591" />
            </label>
            <label>
              Ciudad
              <select required defaultValue="">
                <option value="" disabled>
                  Selecciona una ciudad
                </option>
                <option>La Paz</option>
                <option>El Alto</option>
                <option>Cochabamba</option>
                <option>Santa Cruz</option>
                <option>Otra ciudad</option>
              </select>
            </label>
            <button type="submit">
              <FaCreditCard /> Confirmar pedido
            </button>
          </form>
        </aside>
      </section>
    </main>
  );
};

export default Cart;
