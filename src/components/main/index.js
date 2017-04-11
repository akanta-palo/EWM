import React from 'react'

import styles from './index.css'

import bg from '../../images/bg.jpeg'

const Main = () => {
  return <div className={styles.main} data-slideshow-items>
    <div>
      <img className={styles.bg} src={bg} />
      <div className={styles.marquee_text}>
        <div className={styles.centered}>
          <h1>We have extensive experience in Corporate & Human Resource solutions.</h1>
        </div>
      </div>
    </div>
    <div className={styles.inner}>
      <div className={styles.content}>
        <div className={styles.content_area}>
          <h4><strong>EWM has been providing Corporate & Human Resource solutions since 1989.</strong></h4>
          <p>Our extensive experience enables us to <strong>create and customise practical solutions</strong> for our clients to meet competitive and dynamic needs of their operations.</p>
          <p>Our service is always <strong>honest</strong>, <strong>prompt</strong>, <strong>responsive</strong>, <strong>resourceful</strong> and <strong>efficient</strong>.</p>
        </div>
      </div>
    </div>
  </div>
}

export default Main
