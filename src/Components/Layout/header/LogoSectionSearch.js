import React from 'react'

const LogoSectionSearch = () => {
  return (
    <section className="LogoSectionSearch py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-8 mx-auto align-items-center d-flex flex-column text-center">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Type to search..." />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoSectionSearch
