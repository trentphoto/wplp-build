import React from 'react'
import logo from '../../img/logo-white.svg'
import lily from '../../img/lily.png'

const Footer = (props) => {
  return (
    <footer className="Footer bg-primary text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} alt="" className="logo img-fluid mb-3 w-75" />
            <p>123 Seminary Ridge<br />
            Gettysburg, PA 17325</p>

            <p className="main-footer__phone">
              <i className="fas fa-phone"></i> 123-456-7890
            </p>
            <p className="main-footer__email">
              <i className="fas fa-envelope"></i> email@email.com
            </p>
          </div>
          <div className="col-md-4">
            <h2 className="h3">Quick Links</h2>
            <ul>
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Nominate</a>
              </li>
              <li>
                <a href="#!">Apply</a>
              </li>
              <li>
                <a href="#!">Resources</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-6">
                <div className="card">
                  <div className="card-body">
                    <img src={lily} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <p>The Wabash Pastoral Leadership Program is funded fully by the Lilly Endowment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
