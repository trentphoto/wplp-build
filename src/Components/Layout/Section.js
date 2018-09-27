import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const baseUrl = 'http://theordainedbarista.com'

const Section = (props) => {
  const { bg, headline, description, btnLink, btnText, imageUrl, imagePosition } = props

  return (
    <section className={classnames('py-5', {
        'bg-primary text-white': bg === 'red',
        'bg-light': bg === 'light gray',
        'bg-white': bg === 'white',
      })}>
      <div className="container">
        <div className="row">
          <div className={classnames('col-md-6', {
              'order-2': imagePosition === 'left'
            })}>
            <h2>{headline}</h2>
            <p>{description}</p>
            <a href={btnLink} className={classnames('btn', {
                'btn-outline-primary': bg === 'light gray' || bg === 'white',
                'btn-outline-light': bg === 'red'
              })}>
              {btnText}
            </a>
          </div>
          <div className="col-md-6">
            {
              imageUrl && <img alt="" src={baseUrl + imageUrl} className="img-fluid" />
            }
          </div>
        </div>
      </div>
    </section>
  )
}

Section.propTypes = {
  bg: PropTypes.string.isRequired
}

export default Section
