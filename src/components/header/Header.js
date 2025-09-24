import { useEffect, useState } from 'react';
import style from './Header.module.scss';
import { Link, NavLink, useNavigate,  } from 'react-router-dom';
import { FaCartArrowDown, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import { ACTIVE, REMOVE } from '../../redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink.js/hiddenLink';


const logo = (
  <div className={style.logo}>
    <Link to="/">
      <h2>edgar<span>Shop</span>.</h2>
    </Link>
  </div>
);

const cart = (
  <span className={style.cart}>
    <Link to="/cart">cart<FaCartArrowDown size={20} /><p>0</p></Link>
  </span>
);

const activeLink = ({isActive})=> 
 (isActive ? `${style.active}`:"")

const Header = () => {
  const [showmenu, setShowmenu] = useState(false);
  const [displayName, setDisplayName] = useState();
  
const dispatch = useDispatch();

useEffect(() =>{
onAuthStateChanged(auth, (user)=>{
if (user){
if (user.displayName == null){
const u1 = user.email.slice(0, -10);
const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
setDisplayName(uName)
}else{
setDisplayName(displayName)
}

dispatch(ACTIVE({
email: user.email,
userName: user.displayName ? user.displayName : displayName,
userID: user.uid,
}))
 
}else {
setDisplayName("")
dispatch(REMOVE({


}))

}

});

}, [dispatch, displayName]);
  
 const navigate = useNavigate();
  const toggleMenu = () => {
    setShowmenu(!showmenu);
  };
  

  const hideMenu = () => {
    setShowmenu(false);
  };
 
  const logoutUser = () => {
  signOut(auth).then(() =>{
  toast.success('Logout successfully');
  navigate("/")

}).catch((error) => {
toast.error(error.message);
})
  }

  return (
    <header>
      <div className={style.header}>{logo}
        <nav className={
          showmenu
            ? `${style["show-nav"]}`
            : `${style['hide-nav']}`
        }>
          <div className={
            showmenu
              ? `${style["nav-wrapper"]} 
              ${style['show-nav-wrapper']}`
              : `${style['nav-wrapper']}`}
           onClick={hideMenu}
        > 
          </div>
          <ul onClick={hideMenu}>
            <li className={style["logo-mobile"]}>
              {logo }
              <FaTimes size={22} color="#fff" onClick={hideMenu}/>
            </li>
            <li>
              <NavLink to='/' className={activeLink}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/contact'className={activeLink}>Contact us</NavLink>
            </li>
          </ul>
          <div className={style["header-right"]} onClick={hideMenu}>
            <span className={style.links}>
              <ShowOnLogout>
              <NavLink to="/login"className={activeLink}>Login</NavLink>
              </ShowOnLogout>
              <a href='#home'>
               <FaUserCircle size={16}/>
               Hi,{displayName}
              </a>
              <ShowOnLogin>
              <NavLink to="/order-history"className={activeLink}>My Orders</NavLink>
              </ShowOnLogin>
              <ShowOnLogin>
              <NavLink to="/" onClick={logoutUser}>Logout</NavLink>
              </ShowOnLogin>
           </span>
            {cart}
          </div>
        </nav>
      </div>
      <div className={style["menu-icon"]}>
        {cart}
        <HiOutlineMenuAlt3 size={20} onClick={toggleMenu} />
      </div>
    </header>
  )
}

export default Header;
