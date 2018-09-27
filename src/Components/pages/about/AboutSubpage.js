import React from 'react'
import { connect } from 'react-redux'
import AboutSubmenu from './AboutSubmenu'


const AboutSubpage = (props) => {
  const { pages, match } = props
  const cp = pages.filter(i => i.slug === match.params.slug)[0]

  return (
    <React.Fragment>
      <AboutSubmenu />
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="mb-3 display-4">{cp.title.rendered}</h1>
              <div dangerouslySetInnerHTML={{__html: cp.content.rendered}} />
            </div>
            <div className="col-md-4">
              <p>Sidebar here</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  pages: state.page.pages
})

export default connect(mapStateToProps)(AboutSubpage)
