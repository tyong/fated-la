import React from 'react'
import { Link } from 'gatsby'
import './header.css'

class Header extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll',
  this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
    } else {
    this.setState({ hasScrolled: false })
    }
  }

  render(){
    return(
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
     <div className="HeaderGroup">
      <Link to="/home">Home</Link>
      <Link to="/itineraries">Itineraries</Link>
      <Link to="/Gallery">Explore</Link>
      <Link to="/">About</Link>
      <Link to="/buy"><button>Buy $1.99</button></Link>
    </div>
</div>
    )
  }
}

export default Header
