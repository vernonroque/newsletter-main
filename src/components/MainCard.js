import React,{useState} from 'react'
import styles from './mainCard.module.css'
import signUpImg from '../assets/images/illustration-sign-up-desktop.svg'
import iconList from '../assets/images/icon-list.svg'

function MainCard() {
    const [success,setSuccess] = useState(false);
    const [email,setEmail] = useState('')

    function handleSuccessClick(e){
        e.preventDefault();
        console.log(email);
        setSuccess(true);

    }
    function handleDismissClick(e){
        setSuccess(false);
        setEmail('');

    }
    function handleChange(e){
        setEmail(e.target.value)
    }
  return (
    <main className = {!success ? styles.mainStuff:styles.mainStuffSuccess}>
        {!success ?
        <>
            <section className={styles.newsSection}>
                <h1 className={styles.headline}>Stay updated!</h1>
                    <p>
                        Join 60,000+ product managers receiving monthly updates on:
                    </p>
                
                    <ul className = {styles.list}>
                        <li><span><img className={styles.checkmarks} src ={iconList} alt="checkmark"/></span>Product discovery and building what matters</li>
                        <li><span><img className={styles.checkmarks} src ={iconList} alt="checkmark"/></span>Measuring to ensure updates are a success</li>
                        <li><span><img className={styles.checkmarks} src ={iconList} alt="checkmark"/></span>And much more!</li>
                    </ul>
                
                    <form className ={styles.emailForm}>
                        <label for = "email">Email address</label>
                        <input type = "input" name = "email" placeholder = "email@company.com" value={email} onChange={handleChange}/>
                        <button type="submit" onClick={handleSuccessClick}>Subscribe to monthly newsletter</button>
                    </form>
            </section>
            <aside className = {styles.imgContainer}>
                <img className="imgSignUp" src = {signUpImg} alt = "signup art"/>
            </aside>
        </>: 
        <>
            <section className = {styles.successCard}>
                <img className ={styles.checkmarkSuccess} src = {iconList} alt="checkmark"/>
                <h1>Thanks for subscribing!</h1>
                <p>
                    A confirmation email has been sent to {email}. 
                    Please open it and click the button inside to confirm your subscription.
                </p>
                <button className ={styles.dismissButton} onClick={handleDismissClick}>Dismiss message</button>
            </section>
        </>
        }
    </main>
    )
}

export default MainCard