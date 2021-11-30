import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <>
               <nav className="navbar navbar-expand-lg navbar-light mainColor py-3">
  
                <div className="container">
                    <a className="navbar-brand text-white" href="#">AppStore</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active text-white cart  position-relative">
              <span>${this.props.totaPrice.toFixed(2)}</span>
              <span>Cart <i className="fas fa-shopping-cart "></i></span>
              <span className="badge badge-info p-1 cartBadge">{this.props.totalQty}</span>
      </li>
      </ul>
    
  </div>
                </div>
              </nav>
            </>
        )
    }
}
