import React from 'react'
import style from './Footer.module.scss'
const footer = () => {
const date = new Date().getFullYear();
 
  return (
    <div className={style.footer}>
  <p>Copyright &copy;-{date} All rights reserved | EdgarShop </p>
</div>
  )
}

export default footer