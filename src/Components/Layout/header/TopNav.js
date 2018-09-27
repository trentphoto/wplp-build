import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'

// import SearchBar from './SearchBar'

class TopNav extends React.Component {
  render() {
    const { pages } = this.props;

    if (!pages) {
      return;
    }
    const topNavPages = pages.filter(i => Object.values(i.tags).indexOf(2) > -1)

    return (
      <nav className="navbar navbar-dark bg-primary navbar-expand py-0">
        <div className="container">
          <ul className="navbar-nav justify-content-center w-100">
            {
              topNavPages.map(i => (
                <li key={i.id} className="nav-item mx-2">
                  <NavLink to={'/' + i.slug} className="nav-link">{i.title.rendered}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    )
  }
}

TopNav.propTypes = {
  pages: PropTypes.array
}

const mapStateToProps = (state) => ({
  pages: state.page.pages
})

export default connect(mapStateToProps)(TopNav)
