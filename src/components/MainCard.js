import React,{useState} from 'react'
import styles from './mainCard.module.css'
import signUpImg from '../assets/images/illustration-sign-up-desktop.svg'
import iconList from '../assets/images/icon-list.svg'

function MainCard() {
    const [success,setSuccess] = useState(false);
    const [email,setEmail] = useState('');
    const [error,setError] = useState(false);
    // const [width,setWidth] = useState(window.innerWidth);

    function handleSuccessClick(e){
        e.preventDefault();
        // Regular expression for a simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!email){
            setError(true);
        }
        else if(!emailRegex.test(email)){
            setError(true)
        }
        else
            setSuccess(true);
        
    }
    function handleDismissClick(e){
        setSuccess(false);
        setEmail('');
        setError(false);

    }
    function handleChange(e){
        setEmail(e.target.value);
        setError(false);
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
                        <li><span className={styles.listItems}><img className={styles.checkmarks} src ={iconList} alt="checkmark"/></span><p>Product discovery and building what matters</p></li>
                        <li><span className={styles.listItems}><img className={styles.checkmarks} src ={iconList} alt="checkmark"/></span><p>Measuring to ensure updates are a success</p></li>
                        <li><span className={styles.listItems}><img className={styles.checkmarks} src ={iconList} alt="checkmark"/></span><p>And much more!</p></li>
                    </ul>
                
                    <form className ={styles.emailForm}>
                        <label className = {error ? styles.labelError:null} for = "email">Email address</label>
                        <input className = {error ? styles.inputError:null} type = "input" name = "email" placeholder = "email@company.com" value={email} onChange={handleChange}/>
                        <button type="submit" onClick={handleSuccessClick}>Subscribe to monthly newsletter</button>
                    </form>
            </section>
            <aside className = {styles.imgContainer}>
                <img className={styles.imgSignUp} src ={signUpImg} alt = "signup art"/>
            </aside>
        </>: 
        <>
            <section className = {styles.successCard}>
                <img className ={styles.checkmarkSuccess} src = {iconList} alt="checkmark"/>
                <h1>Thanks for subscribing!</h1>
                <p>
                    A confirmation email has been sent to <span className={styles.emailSuccessMessage}>{email}. </span> 
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