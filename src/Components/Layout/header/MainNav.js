import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { NavLink } from 'react-router-dom'

const MainNavWrapper = (props) => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-sm py-3">
    <div className="container">
      <div className="collapse navbar-collapse" id="MainNav">
        <ul className="navbar-nav mx-auto">
          { props.children }
        </ul>
      </div>
    </div>
  </nav>
)

class MainNav extends React.Component {
  render(){
    const { pages } = this.props
    // get pages with a tag ID of 3. convert the object values to an array, then check for the presence of 3
    // the 2nd filter removes the homepage from this array
    const mainNavPages = pages.filter(i => Object.values(i.tags).indexOf(3) > -1).filter(i => i.slug !== 'home')

    return pages.length ? (
      <MainNavWrapper>
        <NavLink exact to={'/'} className="nav-link">Home</NavLink>
        {
          mainNavPages.map(i => (
            <li key={i.slug} className="nav-item">
              <NavLink to={'/' + i.slug} className="nav-link">{i.title.rendered}</NavLink>
            </li>
          ))
        }
      </MainNavWrapper>
    ) : (
      <MainNavWrapper>
        <li className="nav-item">
          <div className="nav-link">
            <FontAwesomeIcon icon="circle-notch" className="MainNavLoader text-white" />
          </div>
        </li>
      </MainNavWrapper>
    )


  }
}

MainNav.propTypes = {
  pages: PropTypes.array,
}

const mapStateToProps = (state) => ({
  pages: state.page.pages
})

export default connect( mapStateToProps )(MainNav)
