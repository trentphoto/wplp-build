import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import PageWrapper from '../../Layout/PageWrapper'
import JumbotronSection from '../../Layout/JumbotronSection'
import TestimonialSection from '../../Layout/TestimonialSection'
import AboutSubpage from './AboutSubpage'
import AboutSubmenu from './AboutSubmenu'

class PageAbout extends React.Component {
  render(){
    const { match } = this.props

    const currentPage = this.props.pages.filter(i => i.id === 27)[0] // About page is ID 27

    const subpages = this.props.pages.filter(i => i.parent === 27)

    const SubpagesList = () => (
      <ul>
        {
          subpages.map(i => (
            <Link key={i.slug} className="badge badge-primary w-100 text-left p-2 mb-2" to={`${match.url}/${i.slug}`}>{i.title.rendered}</Link>
          ))
        }
      </ul>
    )

    const Index = () => (
      <React.Fragment>
        <AboutSubmenu topLevelSlug={currentPage.slug} />
        <JumbotronSection
          title={currentPage.title.rendered}
          content={currentPage.content.rendered}
          sidebar={<SubpagesList />}
        />
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="blog-grid mx-auto">
                {
                  subpages.map(i => (
                    <Link key={i.id} className="card" to={`${match.url}/${i.slug}`}>
                      <div className="card-header bg-primary">
                      </div>
                      <div className="card-body">
                        <h2 className="card-title">{i.title.rendered}</h2>
                        <p className="lead">{i.acf.excerpt}</p>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </section>

        <TestimonialSection />
      </React.Fragment>
    )

    return !currentPage ? <PageWrapper /> : (
      <PageWrapper>
        <Route exact path={match.url} component={Index} />
        <Route path={`${match.url}/:slug`} component={AboutSubpage} />
      </PageWrapper>
    )
  }
}

PageAbout.propTypes = {
  pages: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  pages: state.page.pages
})

export default connect(mapStateToProps)(PageAbout)
