import {useState} from 'react'
import style from './auth.module.scss'
import loginImg from "../../assets/login.png"
import { Link, useNavigate } from 'react-router-dom'
import {FaGoogle} from 'react-icons/fa'
import Card from '../../components/card/Card'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/config' 
import { toast } from 'react-toastify'
import Loader from '../../components/loader/Loader'


const Login = () => {
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
const [isLoanding, setIsLoading]= useState("");
 
const navigate = useNavigate();

const loginUser = (e) => {
e.preventDefault();
setIsLoading(true)
signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    setIsLoading(false);
    toast.success("Login Successful...")
    navigate("/")
  })
  .catch((error) => {
   setIsLoading(false);
    toast.error(error.message)
  });
}

const provider = new GoogleAuthProvider();
const signInWithGoogle = () =>{
signInWithPopup(auth, provider)
.then(()=> {
toast.success("Login Successfully.")
navigate("/")
}).catch((error)=>{
  toast.error(error.message);
 });
};
  return (
  <>
   {isLoanding && <Loader/>}
    <section className={`container ${style.auth} `}>
     <div className={style.img } >
     <img src={loginImg} alt='Login' width="400"/>
   </div>
   <Card>
    <div className={style.form}>
     <h2>Login</h2>
     <form onSubmit={loginUser}>
     <input type='text' placeholder='Email' required value={email} onChange={(e) => setEmail( e.target.value)}/>
     <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword( e.target.value)} />
     <button type='submit' className='--btn --btn-primary --btn-block'>
     Login</button>
    <div className={style.links}>
    <Link to='/reset'>Reset Password</Link>
    </div>
    <p>-- or --</p>
    </form>
    <button className='--btn --btn-danger --btn-block' onClick={signInWithGoogle}>
     <FaGoogle color="#fff" />Login with Google</button>
    <span className={style.register}>
    <p>Don't have an account?</p>
    <Link to="/register">Register</Link>
    </span>    
    </div>
    </Card>
  </section>
  </>
  )
}

export default Login