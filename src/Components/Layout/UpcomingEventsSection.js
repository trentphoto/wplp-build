import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class UpcomingEventsSection extends React.Component {
  render () {
    const { events } = this.props

    if (!events) {
      return null;
    }

    return (
      <p>Pages Loaded.</p>
    );
  }
}

UpcomingEventsSection.propTypes = {
  events: PropTypes.object.isRequired,
  getEvents: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  events: state.page.events
})

export default connect( mapStateToProps )(UpcomingEventsSection)
