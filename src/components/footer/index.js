import React from 'react'

import styles from './index.css'

const Footer = () => {
  return <div className={styles.main}>
    <div className={styles.left}>
      <h2>EWM Consulting</h2>
      <h4>171, Tras St, #09-173 Union Building, Singapore 079025</h4>
    </div>
    <div className={styles.right}>
      <h2>Contacts</h2>
      <a href='+65 63232811'><strong>Tel: </strong>+65 63232811</a>
      <a href="mailto:info@ewm.com.sg"><strong>Email: </strong> info@ewm.com.sg</a>
    </div>
  </div>
}

export default Footer
