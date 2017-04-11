import React from 'react'
import ReactDOM from 'react-dom'
import styles from './static/global.css'

// components import
import { Navbar, Main, Footer, AboutUs } from './components'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currentPage: 'main'
    }

    this.handlePageChange = this.handlePageChange.bind(this)
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(this.state.currentPage)
    console.log(nextState)
  }

  handlePageChange(page) {
    this.setState({currentPage: page})
  }

  render() {
    const { currentPage } = this.state

    let ActiveComp

    switch(currentPage) {
      case 'main':
        console.log('hi')
        ActiveComp = Main
        break
      case 'aboutus':
        console.log('hola')
        ActiveComp = AboutUs
        break
      default:
      // do nothing
      ActiveComp = Main
      break
    }

    return (
      <div className={styles.main}>
        <Navbar onClick={this.handlePageChange}/>
        <div className={styles.active} data-slideshow>
          <ActiveComp />
          <Footer />
        </div>
      </div>
    )
  }
}

ReactDOM.render((
  <App />
), document.getElementById('app'))
