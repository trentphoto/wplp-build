import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import PageWrapper from '../../Layout/PageWrapper'

class PageWPLPNetwork extends React.Component {
  render(){
    const currentPage = this.props.pages.filter(i => i.id === 75)[0] // Network page ID

    const subpages = this.props.pages.filter(i => i.parent === 75)

    if (!currentPage) {
      return null;
    }
    return (
      <PageWrapper>
        <section className="hero py-5 text-center">
          <div className="overlay overlay_primary"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="h2">The Pastoral Leadership Program Network</h1>
                <p dangerouslySetInnerHTML={{__html: currentPage.content.rendered}}></p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              {
                subpages.map(i => (
                  <div key={i.id} className="col-md-6">
                    <Link className="card mb-3" to={`${this.props.match.url}/${i.slug}`}>
                      <div className="card-header">
                        <h2 className="card-title">{i.title.rendered}</h2>
                      </div>
                      <div className="card-body">
                        <p className="lead">{i.acf.excerpt}</p>
                      </div>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

      </PageWrapper>
    )
  }
}

PageWPLPNetwork.propTypes = {
  pages: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  pages: state.page.pages
})

export default connect( mapStateToProps )(PageWPLPNetwork)
