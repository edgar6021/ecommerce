import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingBag, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/config";
import { ACTIVE, REMOVE } from "../../redux/slice/authSlice";
import { selectCartCount } from "../../redux/slice/cartSlice";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink.js/hiddenLink";
import style from "./Header.module.scss";

const logo = (
  <div className={style.logo}>
    <Link to="/">
      <h2>
        Neo<span>Commerce</span>
      </h2>
    </Link>
  </div>
);

const activeLink = ({ isActive }) => (isActive ? style.active : "");

const Header = () => {
  const [showmenu, setShowmenu] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const emailName = user.email ? user.email.split("@")[0] : "Cliente";
        const userName =
          user.displayName || emailName.charAt(0).toUpperCase() + emailName.slice(1);

        setDisplayName(userName);
        dispatch(
          ACTIVE({
            email: user.email,
            userName,
            userID: user.uid,
          })
        );
        return;
      }

      setDisplayName("");
      dispatch(REMOVE());
    });

    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, [dispatch]);

  const toggleMenu = () => {
    setShowmenu((currentMenuState) => !currentMenuState);
  };

  const hideMenu = () => {
    setShowmenu(false);
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sesion cerrada");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const cart = (
    <NavLink to="/cart" className={`${style.cart} ${cartCount > 0 ? style.hasItems : ""}`}>
      <FaShoppingBag size={18} />
      <span>Carrito</span>
      <strong>{cartCount}</strong>
    </NavLink>
  );

  return (
    <header>
      <div className={style.header}>
        {logo}
        <nav className={showmenu ? style["show-nav"] : style["hide-nav"]}>
          <div
            className={
              showmenu
                ? `${style["nav-wrapper"]} ${style["show-nav-wrapper"]}`
                : style["nav-wrapper"]
            }
            onClick={hideMenu}
          />

          <ul onClick={hideMenu}>
            <li className={style["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#141414" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activeLink}>
                Tienda
              </NavLink>
            </li>
            <li>
              <a href="/#product">Catalogo</a>
            </li>
            <li>
              <NavLink to="/contact" className={activeLink}>
                Atencion
              </NavLink>
            </li>
          </ul>

          <div className={style["header-right"]} onClick={hideMenu}>
            <span className={style.links}>
              <ShowOnLogout>
                <NavLink to="/login" className={activeLink}>
                  Ingresar
                </NavLink>
              </ShowOnLogout>
              <ShowOnLogin>
                <span className={style.userName}>
                  <FaUserCircle size={16} />
                  Hola, {displayName}
                </span>
              </ShowOnLogin>
              <ShowOnLogin>
                <NavLink to="/order-history" className={activeLink}>
                  Pedidos
                </NavLink>
              </ShowOnLogin>
              <ShowOnLogin>
                <button type="button" onClick={logoutUser}>
                  Salir
                </button>
              </ShowOnLogin>
            </span>
            {cart}
          </div>
        </nav>
      </div>

      <div className={style["menu-icon"]}>
        {cart}
        <button type="button" onClick={toggleMenu} aria-label="Abrir menu">
          <HiOutlineMenuAlt3 size={22} />
        </button>
      </div>
    </header>
  );
};

export default Header;
