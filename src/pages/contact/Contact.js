import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaHeadset,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";
import style from "./Contact.module.scss";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Mensaje enviado. Te responderemos pronto.");
    event.currentTarget.reset();
  };

  return (
    <main className={style.contactPage}>
      <section className={style.contactHero}>
        <div>
          <span>Atencion al cliente</span>
          <h1>Hablemos de tu pedido</h1>
          <p>
            Soporte para compras, cambios, garantias y seguimiento de entregas.
          </p>
        </div>
      </section>

      <section className={style.contactLayout}>
        <div className={style.channels}>
          <article>
            <FaPhoneAlt />
            <div>
              <h2>Ventas</h2>
              <p>+591 7000 2026</p>
              <span>Lunes a sabado</span>
            </div>
          </article>
          <article>
            <FaEnvelope />
            <div>
              <h2>Correo</h2>
              <p>hola@neocommerce.com</p>
              <span>Respuesta en 24 h</span>
            </div>
          </article>
          <article>
            <FaMapMarkerAlt />
            <div>
              <h2>Showroom</h2>
              <p>Av. Principal 420, La Paz</p>
              <span>Recojo con reserva</span>
            </div>
          </article>
        </div>

        <form className={style.contactForm} onSubmit={handleSubmit}>
          <div className={style.formTitle}>
            <FaHeadset />
            <div>
              <span>Formulario</span>
              <h2>Enviar consulta</h2>
            </div>
          </div>
          <label>
            Nombre
            <input type="text" required placeholder="Tu nombre" />
          </label>
          <label>
            Email
            <input type="email" required placeholder="tu@email.com" />
          </label>
          <label>
            Motivo
            <select required defaultValue="">
              <option value="" disabled>
                Selecciona una opcion
              </option>
              <option>Compra nueva</option>
              <option>Seguimiento de pedido</option>
              <option>Cambio o garantia</option>
              <option>Venta corporativa</option>
            </select>
          </label>
          <label>
            Mensaje
            <textarea required rows="5" placeholder="Cuéntanos que necesitas" />
          </label>
          <button type="submit">
            <FaPaperPlane /> Enviar mensaje
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
