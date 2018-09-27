import React from 'react'
import { connect } from 'react-redux'
import LogoSectionLogo from './LogoSectionLogo'
import LogoSectionSearch from './LogoSectionSearch'

const LogoSection = (props) => {
  return (
    <header className="LogoSection py-3 bg-light">
        {
          props.searchActive ? <LogoSectionSearch /> : <LogoSectionLogo pageSlug={props.pageSlug} />
        }
    </header>
  )
}

const mapStateToProps = (state) => ({
  searchActive: state.search.searchActive
})

export default connect(mapStateToProps)(LogoSection)
