import {useState} from 'react'
import style from './auth.module.scss'
import registerImg from "../../assets/register.png"
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/card/Card'
import {  toast } from 'react-toastify'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase/config'
import Loader from '../../components/loader/Loader'

const Register = () => {
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");
const [cPassword, setCPassword]= useState("");
const [isLoanding, setIsLoading]= useState("");
const navigate = useNavigate();

const registerUser = (e) => {
    e.preventDefault()
    if(password !== cPassword){
     toast.error("Password does not match.")
   }
   setIsLoading(true);
   
  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    setIsLoading(false);
    toast.success("Registration Successful...")
    navigate('/login')
    
  })
  .catch((error) => {
    toast.error(error.message);
    setIsLoading(false)
  });
}
  return (
<>
 {isLoanding && <Loader/>}
    <section className={`container ${style.auth} `}>
   <Card>
    <div className={style.form}>
     <h2>Register</h2>
     <form onSubmit={registerUser}>
     <input type='text' placeholder='Email' required value={email} onChange={(e) => setEmail( e.target.value)} />
     <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
     <input type='password' placeholder='Confirm Password' required value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
     <button type='submit' className='--btn --btn-primary --btn-block'>
     Register</button>
    <div className={style.links}>
    </div>
    </form>
    <span className={style.register}>
    <p>Already an account?</p>
    <Link to="/login">Login</Link>
    </span>    
    </div>
    </Card>
    <div className={style.img } >
     <img src={registerImg} alt='Login' width="400"/>
   </div>
  </section>
</>
  )
}

export default Register