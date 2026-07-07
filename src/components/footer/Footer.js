import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaInstagram, FaShoppingBag, FaWhatsapp } from 'react-icons/fa'
import style from './Footer.module.scss'
const footer = () => {
const date = new Date().getFullYear();
 
  return (
    <footer className={style.footer}>
      <div className={style.footerInner}>
        <div className={style.brand}>
          <Link to="/">
            <FaShoppingBag />
            <span>NeoCommerce</span>
          </Link>
          <p>Seleccion curada de productos para comprar rapido y recibir sin friccion.</p>
        </div>

        <nav aria-label="Footer navigation">
          <h2>Tienda</h2>
          <Link to="/">Catalogo</Link>
          <Link to="/cart">Carrito</Link>
          <Link to="/contact">Atencion</Link>
        </nav>

        <div className={style.contact}>
          <h2>Contacto</h2>
          <a href="mailto:hola@neocommerce.com">
            <FaEnvelope /> hola@neocommerce.com
          </a>
          <a href="https://wa.me/59170002026">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="https://instagram.com">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
      <div className={style.legal}>
        <p>Copyright &copy; {date} NeoCommerce. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default footer
