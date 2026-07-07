import { Link } from "react-router-dom";
import { FaBoxOpen, FaReceipt, FaShoppingBag, FaTruck } from "react-icons/fa";
import style from "./OrderHistory.module.scss";

const demoOrders = [
  {
    id: "NC-2048",
    date: "06 Jul 2026",
    status: "En preparacion",
    total: "$267",
    items: "Orbit Pro ANC, Ceramic Brew Kit",
  },
  {
    id: "NC-1981",
    date: "28 Jun 2026",
    status: "Entregado",
    total: "$118",
    items: "Terra Runner",
  },
];

const OrderHistory = () => {
  return (
    <main className={style.ordersPage}>
      <section className={style.ordersHero}>
        <span>Cuenta</span>
        <h1>Mis pedidos</h1>
        <p>Consulta estados recientes y vuelve al catalogo cuando quieras.</p>
      </section>

      <section className={style.ordersList}>
        {demoOrders.map((order) => (
          <article key={order.id}>
            <div className={style.icon}>
              {order.status === "Entregado" ? <FaBoxOpen /> : <FaTruck />}
            </div>
            <div>
              <span>{order.date}</span>
              <h2>{order.id}</h2>
              <p>{order.items}</p>
            </div>
            <strong>{order.status}</strong>
            <em>{order.total}</em>
          </article>
        ))}
      </section>

      <section className={style.orderActions}>
        <Link to="/">
          <FaShoppingBag /> Comprar de nuevo
        </Link>
        <Link to="/contact">
          <FaReceipt /> Solicitar soporte
        </Link>
      </section>
    </main>
  );
};

export default OrderHistory;
