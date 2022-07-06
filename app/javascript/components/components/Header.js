import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import './Header.scss';

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <>
      <div id='header-container'>
          <h1><a href="/">Apartment App</a></h1>
          <Nav>
            {logged_in &&
              <NavItem>
                <a href={sign_out_route} className="nav-link">Sign Out</a>
              </NavItem>
            }
            {!logged_in &&
              <NavItem>
                <a href={sign_in_route} className="nav-link">Sign In</a>
              </NavItem>
            }
            {!logged_in &&
              <NavItem>
                <a href={new_user_route} className="nav-link">Sign Up</a>
              </NavItem> 
            }
            <NavItem>
                <a href={'/apartmentindex'} className="nav-link">View All Apartments</a>
            </NavItem>
            <NavItem>
                <a href={'/apartmentnew'} className="nav-link">Create a Listing</a>
            </NavItem>
          </Nav>
        </div>
      </>
    )
  }
}
export default Header