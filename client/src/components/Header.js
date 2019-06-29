import React, { Component } from 'react';

class Header extends Component{
  render(){
    return (
      <nav>
    <div class="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sign in Google</a></li>
      </ul>
    </div>
  </nav>
    );
  }
}

export default Header;
