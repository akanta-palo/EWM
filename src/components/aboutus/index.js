import React from 'react'

import styles from './index.css'

import bg from '../../images/bg.jpeg'

const AboutUs = () => {
  return <div className={styles.main} data-slideshow-items>
    <div>
      <img className={styles.bg} src={bg} />
      <div className={styles.marquee_text}>
        <div className={styles.centered}>
          <h1>Our group specialises in talent contracting and sourcing ...</h1>
        </div>
      </div>
    </div>
    <div className={styles.inner}>
      <div className={styles.content}>
        <div className={styles.content_area}>
          <h4><strong>EWM Consultancy Pte Ltd (Singapore Ministry of Manpower Comprehensive Employment Agency Licence 01C4399) provides recruitment services for all industries in Singapore & abroad.
          </strong></h4>
        <p>We have extensive experience in recruiting and managing talents for <strong>hospitality, customer services, IT, engineering and operational positions</strong> for various industries.</p>
          <p>We have recruitment facilities in Singapore and several countries and experienced with multinationals work force.</p>
        </div>
      </div>
    </div>
  </div>
}

export default AboutUs
