import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// store
import { connect } from 'react-redux'

// components
import PageWrapper from '../Layout/PageWrapper'
import Section from '../Layout/Section'
import PostCard from '../PostCard'

import dateToString from '../../functions/dateToString'

class PageHome extends React.Component {
  renderSections = (sections) => {
      return sections.map(i => (
        <Section
          key={i.headline}
          bg={i.background_color}
          headline={i.headline}
          btnLink={i.button_link}
          btnText={i.button_text}
          description={i.description}
          imageUrl={i.image}
          imagePosition={i.image_position}
          />
      ))
  }

  render(){
    const currentPage = this.props.pages.filter(i => i.id === 68)[0] // About page is ID 27

    const i = this.props.post

    return (!currentPage || !i) ? <PageWrapper /> : (
      <PageWrapper>
        <section className="hero py-5">
          <div className="overlay overlay_primary"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <h1 className="h2">Expanding Pastoral Imagination for Flourishing Communities.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi doloremque, vitae iusto error necessitatibus blanditiis amet itaque doloribus temporibus. Neque.</p>
                <Link to="/about">
                  <button className="btn btn-outline-light">Meet Us</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="mb-3">About the Pastoral Leadership Program</h2>
                <iframe title="About WPLP" width="560" height="315" src="https://www.youtube.com/embed/aZXAx6jRsVQ?rel=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>
        {
          this.renderSections(currentPage.acf.section)
        }

        <section className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2>Latest Resources</h2>
                <PostCard
                  size="feature"
                  color="red"
                  key={i.id}
                  image={i._embedded['wp:featuredmedia'] && 'http://theordainedbarista.com' + i._embedded['wp:featuredmedia'][0].source_url}
                  slug={i.slug}
                  title={i.title.rendered}
                  pre={dateToString(new Date(i.date))}
                  excerpt={i.acf.excerpt}
                />
              <Link to="/learn" className="btn btn-primary">View All</Link>
              </div>
            </div>
          </div>
        </section>

      </PageWrapper>
    )
  }
}

PageHome.propTypes = {
  pages: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  pages: state.page.pages,
  post: state.page.posts[0]
})

export default connect(
  mapStateToProps // this first parameter of connect - gets our state and lets us access it through props
)(PageHome)
