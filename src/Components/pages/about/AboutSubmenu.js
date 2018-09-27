import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const AboutSubmenu = (props) => {
  const subpages = props.pages.filter(i => i.parent === 27)

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-light bg-light navbar-expand-lg py-3">
              <div className="container">
                <div className="collapse navbar-collapse" id="MainNav">
                  <ul className="navbar-nav mx-auto">
                    {
                      subpages.map(i => (
                        <li className="nav-item">
                          <NavLink to={props.topLevelSlug ? `${props.topLevelSlug}/${i.slug}` : i.slug} className="nav-link">
                            {i.title.rendered}
                          </NavLink>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutSubmenu.propTypes = {
  pages: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  pages: state.page.pages
})

export default connect(mapStateToProps)(AboutSubmenu)
