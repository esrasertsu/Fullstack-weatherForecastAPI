import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component{
  render(){
    return (
      <nav>
    <div class="nav-wrapper">
      <a href="sass.html" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sign in Google</a></li>
      </ul>
    </div>
  </nav>
    );
  }
}

function mapStateToProps({auth}){
    return { auth };
}
export default connect(mapStateToProps)(Header);
