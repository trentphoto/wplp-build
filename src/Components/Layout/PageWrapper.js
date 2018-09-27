import React from 'react'
import { connect } from 'react-redux'

import MainNav from './header/MainNav'
import TopNav from './header/TopNav'
import LogoSection from './header/LogoSection'
import Loader from './Loader'
import Footer from './Footer'

const PageWrapper = (props) => {
  return (
    <React.Fragment>
      <TopNav />
      <LogoSection page={window.location.pathname} />
      <MainNav />
      { props.loading ? <Loader /> : props.children }
      <Footer />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  pages: state.page.pages,
  loading: state.page.pagesLoading
})

export default connect(mapStateToProps)(PageWrapper)
