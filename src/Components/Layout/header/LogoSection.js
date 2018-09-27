import React from 'react'

import Logo from '../../../img/logo-color.svg'

const LogoSection = (props) => {
  return (
    <header className="py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-8 mx-auto align-items-center d-flex flex-column text-center">
            <img src={Logo} alt="" className="logo img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col mx-auto text-center">
            <span className="tagline">{props.page === "/" ? '' : 'Expanding Pastoral Imagination for Flourishing Communities.'}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default LogoSection
