import React from 'react'

import styles from './index.css'
import logo from '../../images/co.jpeg'
import burger from '../../images/hamburger.svg'


class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleClick=this.handleClick.bind(this)
    this.openHidden=this.openHidden.bind(this)
  }

  handleClick (page) {
    const { onClick: handlePageChange } = this.props
    handlePageChange(page)
  }

  openHidden (){
    console.log('hi')
    this.setState({
      open: !this.state.open
    })
  }
  render () {
    console.log(this.state.open)
    return  <div>
      <nav className={styles.nav}>
        <div className={styles.nav_contents}>
          <div className={styles.nav_logo} onClick={() => this.handleClick('home')}>
            <a href="#home"><img src={logo} /></a>
          </div>
          <div className={styles.o_grid} onClick={() => this.handleClick('aboutus')}>
            <div className={styles.nav_item}>
              <a href="#ourwork">
                <div className={styles.nav_item_title}>OUR WORK</div>
                <div className={styles.nav_item_description}>What we can do for you and your company.</div>
              </a>
            </div>
            <div className={styles.nav_item} onClick={() => this.handleClick('aboutus')}>
              <a href="#whoarewe">
                <div className={styles.nav_item_title}>WHO WE ARE</div>
                <div className={styles.nav_item_description}>Our team, our space, and our community</div>
              </a>
            </div>
            <div className={styles.nav_item}>
              <a href="#ourexpertise">
                <div className={styles.nav_item_title}>OUR EXPERTISE</div>
                <div className={styles.nav_item_description}>Technical and specialise services</div>
              </a>
            </div>
            <div className={styles.nav_item}>
              <a href="#opportunities">
                <div className={styles.nav_item_title}>OPPORTUNITIES</div>
                <div className={styles.nav_item_description}>Talent Sourcing, Recruitment & Internship</div>
              </a>
            </div>
            <div className={styles.nav_item}>
              <a href="#newsandnotices">
                <div className={styles.nav_item_title}>NOTICES</div>
                <div className={styles.nav_item_description}>Under Construction</div>
              </a>
            </div>
          </div>
          <div className={styles.o_ipad}>
            <div className={styles.nav_item} onClick={() => this.handleClick('aboutus')}><a href='#ourwork'><div className={styles.nav_item_title}>OUR WORK</div></a></div>
            <div className={styles.nav_item}><a href='#whoarewe'><div className={styles.nav_item_title}>WHO WE ARE</div></a></div>
            <div className={styles.nav_item}><a href='#ourexpertise'><div className={styles.nav_item_title}>OUR EXPERTISE</div></a></div>
            <div className={styles.nav_item}><a href='#opportunities'><div className={styles.nav_item_title}>OPPORTUNITIES</div></a></div>
          </div>
          <div className={styles.c_hamburger}>
            <img src={burger} onClick={() => this.openHidden()} />
          </div>
        </div>
      </nav>
      <ul className={this.state.open ? styles.open : styles.hidden}>
        <li onClick={() => this.handleClick('aboutus')}>Our Work</li>
        <li>Who are we?</li>
        <li>Our Expertise</li>
        <li>Opportunities</li>
      </ul>
    </div>
  }
}

export default Navbar
