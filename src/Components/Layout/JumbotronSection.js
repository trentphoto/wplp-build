import React from 'react'
import PropTypes from 'prop-types'

const JumbotronSection = (props) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron">
              <div className="row">
                <div className="col-lg-8 col-xl-9">
                  <h2 className="display-3">{ props.title }</h2>
                  <div dangerouslySetInnerHTML={{__html: props.content}}>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                  { props.sidebar }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

JumbotronSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default JumbotronSection
