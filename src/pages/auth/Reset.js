import { useState } from 'react'
import style from './auth.module.scss'
import resetImg from "../../assets/forgot.png"
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/card/Card'
import { toast } from 'react-toastify'
import { auth } from '../../firebase/config'
import { sendPasswordResetEmail } from 'firebase/auth'
import Loader from '../../components/loader/Loader'



const Reset = () => {
const [email, setEmail]= useState("");
const [isLoanding, setIsLoading]= useState("");

const navigate = useNavigate();

const resetPassword = (e) => {
e.preventDefault();
  setIsLoading(true)
  sendPasswordResetEmail(auth, email)
  .then(() => {
  setIsLoading(false)
  toast.success("Check your email for a reset link !")
  navigate("/login")
   
  })
  .catch((error) => {
  setIsLoading(false)
  toast.error(error.message)
  });

}


  return (
   <>
    { isLoanding && <Loader/> }
    <section className={`container ${style.auth} `}>
     <div className={style.img } >
     <img src={resetImg} alt='Login' width="400"/>
   </div>
   <Card>
    <div className={style.form}>
     <h2>Reset Password</h2>
     <form onSubmit={resetPassword}>
     <input type='text' placeholder='Email' required value={email} onChange={(e) => setEmail( e.target.value)} />
     <button type='submit' className='--btn --btn-primary --btn-block'>
     Reset Password</button>
    <div className={style.links}>
    <p><Link to='/login'>Login</Link></p>
    <p><Link to='/register'>Register</Link></p>
    
     
    </div>
    
    </form>    
    </div>
    </Card>
  </section>
  </>
  )
}

export default Reset