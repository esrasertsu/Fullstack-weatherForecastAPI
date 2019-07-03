import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './App.css';

class Header extends Component{
  renderContent(){
    switch (this.props.auth) {
      case null:
         return;
      case false:
         return (
           <li><a className="logout btn" href="/auth/google">Sign in Google</a></li>
         );
      default:
        return (
          <li><a className="logout btn" href="/api/logout">Logout</a></li>
        );
    }
  }
  render(){
    //console.log(this.props);
    return (
      <nav>
    <div className="nav-wrapper">
      <Link
       to={ this.props.auth ? '/forecast' : '/'}
       className="brand-logo">
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Intuit_Logo.svg/1280px-Intuit_Logo.svg.png" className="logo"/>
     </Link>
      <ul className="right hide-on-med-and-down">
         {this.renderContent()}
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
