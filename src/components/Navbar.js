import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expamd-lg navbar-${props.mode} bg-${props.mode} text-${props.mode=== 'light'?'dark':'light'}`}>
      
        
    <div className="container-fluid">
      <Link className="nav-link active" style={{color:props.mode=== 'dark'?'white':'black'}} to="/">{props.title}</Link>
      <Link className="nav-link active" aria-current="page" to="/">{props.hometxt}</Link>
      <form className="d-flex" role="search"></form>
          <Link className="nav-link active" aria-current="page" to="/about">{props.abouttxt}</Link>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">{props.search}</button>
      </form>
      <div className={`form-check form-switch text-${props.mode=== 'light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title:PropTypes.string.isRequired,
                    search: PropTypes.string.isRequired}

Navbar.defaultProps = {
    title: "Set Title",
    search : "Default"
}                    
