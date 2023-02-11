import React, {useState} from "react";
import styles from './registration.module.css'

function Registration() {
    const [checkbox, setCheckbox] = useState(false)
    const click = () => {
        alert('work')
    }
    return (
        <div className={styles.register}>
            <h1> Sign Up</h1>
            <div className={styles.createEmail}>
                <div className={styles.createEmailInner}>
                    <p>Email</p>
                </div>
                <div className={styles.createEmailWrite}>
                    <input className={styles.epn} type="email" id="one" placeholder="Enter email" disabled={checkbox}/>
                    <label htmlFor="one"></label>
                </div>
            </div>
            <div className={styles.createPassword}>
                <div className="createPasswordInner">
                    <p>Password</p>
                </div>
                <div className={styles.createPasswordWrite}>
                    <input className={styles.epn} type="password" id="one" placeholder="Create password" disabled={checkbox}/>
                    <label htmlFor="one"></label>
                </div>
            </div>
            <div className={styles.numberPhone}>
                <div className="createPasswordInner">
                    <p>Number</p>
                </div>
                <div className="createPasswordWrite">
                    <input className={styles.epn} type="text" id="one" placeholder="write number" disabled={checkbox}/>
                    <label htmlFor="one"></label>
                </div>
            </div>
            <div className={styles.checkBox}>
                <input type="checkbox" id="one" value={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                <label htmlFor="one">I agree with the Privacy Policy</label>
            </div>
            <button className={styles.sign} disabled={!checkbox} onClick={click}> Sign Up</button>

        </div>
    )
}



export default Registration