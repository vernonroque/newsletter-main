import React from 'react'
import styles from './mainCard.module.css'
import signUpImg from '../assets/images/illustration-sign-up-desktop.svg'

function MainCard() {
  return (
    <main className = {styles.mainStuff}>
        <section className={styles.newsSection}>

             <h1 className={styles.headline}>Stay updated!</h1>
                <p>
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
        
                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>
       
                <form className ={styles.emailForm}>
                    <label for = "email">Email address</label>
                    <input type = "text" name = "email" placeholder = "email@company.com"/>
                    <button type="submit">Subscribe to monthly newsletter</button>
                </form>
        </section>
        <aside className = {styles.imgContainer}>
            <img src = {signUpImg} alt = "signup art"/>
        </aside>
    </main>
  )
}

export default MainCard