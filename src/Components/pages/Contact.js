import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageWrapper from '../Layout/PageWrapper'
import JumbotronSection from '../Layout/JumbotronSection'
import ContactForm from '../Layout/ContactForm'

const PageContact = (props) => {
  const currentPage = props.pages.filter(i => i.id === 81)[0]

  const SocialIcons = () => (
    <div className="row mt-4">
      <div className="col-4">
        <a href="https://facebook.com">
          <FontAwesomeIcon className="contact__icon" icon={['fab', 'facebook-square']} />
        </a>
      </div>
      <div className="col-4">
        <a href="https://facebook.com">
          <FontAwesomeIcon className="contact__icon" icon={['fab', 'instagram']} />
        </a>
      </div>
      <div className="col-4">
        <a href="https://facebook.com">
          <FontAwesomeIcon className="contact__icon" icon={['fab', 'youtube']} />
        </a>
      </div>
    </div>
  )

  return !currentPage ? <PageWrapper /> : (
    <PageWrapper>
      <JumbotronSection
        title={currentPage.title.rendered}
        content={currentPage.content.rendered}
        sidebar={<SocialIcons />}
      />
    <section className="py-2 pb-5 contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Contact form</h3>
              <ContactForm />
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="w-100 d-flex">
                  <FontAwesomeIcon icon="envelope" className="contact__icon w-25 mr-4" />
                  <p>Physical <br />
                  Address <br />
                  Here
                  </p>
              </div>
              <hr />
              <div className="w-100 d-flex">
                <FontAwesomeIcon icon="phone" className="contact__icon w-25 mr-4" />
                <p>info@wabash.edu</p>
              </div>
              <hr />
              <div className="w-100 d-flex">
                <FontAwesomeIcon icon="map-marker-alt" className="contact__icon w-25 mr-4" />
                <p>123-456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageWrapper>
  )
}

const mapStateToProps = (state) => ({
  pages: state.page.pages
})

export default connect(mapStateToProps)(PageContact)
