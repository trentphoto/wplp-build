import React from 'react'
import { connect } from 'react-redux'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PageWrapper from '../Layout/PageWrapper'
import JumbotronSection from '../Layout/JumbotronSection'

const PageContact = (props) => {
  const currentPage = props.pages.filter(i => i.id === 54)[0]

  return !currentPage ? <PageWrapper /> : (
    <PageWrapper>
      <JumbotronSection
        title={currentPage.title.rendered}
        content={currentPage.content.rendered}
      />
    <section className="py-5">
      <div className="container">
        <div className="row">
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
