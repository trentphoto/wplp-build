import React from 'react'
import { Link } from 'react-router-dom'
import Section from './Layout/Section'
import Footer from './Layout/Footer'
import MainNav from './Layout/MainNav'

import { connect } from 'react-redux'


class PageTemplateDefault extends React.Component {
  render() {
    const { pages, match } = this.props

    // get the current page based on :slug
    const currentPage = pages.filter(i => i.slug === match.params.slug)[0]

    // get subpages of this page
    const subpages = () => {
      // check if the parent of each page matches the id of the currentPage
      return pages.filter(i => i.parent === currentPage.id)
    }

    if (!currentPage) {
      return (
        <React.Fragment>
          <MainNav />
          <h1>Loading...</h1>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {
          // props.page.acf.jumbotron &&
          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="jumbotron">
                    <div className="row">
                      <div className="col-lg-8 col-xl-9">
                        <h2>{ currentPage.title.rendered }</h2>
                      </div>
                      <div className="col-lg-4 col-xl-3">
                        {
                          subpages() &&
                          <ul>
                            {
                              subpages().map(i => (
                                <li key={i.slug}>
                                  <Link to={`${match.url}/${i.slug}`}>{i.title.rendered}</Link>
                                </li>
                              ))
                              // these subpages should be abstracted to a method/function
                            }
                          </ul>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        }
        {
          // render page sections
          currentPage.acf.section &&
          currentPage.acf.section.map(i => (
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

        <Footer />

      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  pages: state.page.pages
})

export default connect(mapStateToProps)(PageTemplateDefault)
