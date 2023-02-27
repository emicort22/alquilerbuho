import React from 'react'
import {FaEarlybirds} from "react-icons/fa"
import { Navbar, NavItem} from 'react-bootstrap'
const Header = () => {
  return (
   
    <Navbar class="navbar bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded">
  
  
    <span class="navbar-brand mb-0 h1">  <FaEarlybirds/> El Buho  </span>   <NavItem>    Departamentos en villa Carlos Paz</NavItem> 
 

</Navbar>

  )
}

export default Header