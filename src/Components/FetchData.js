import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPages, getEvents } from '../actions/pageActions'
import { getPosts } from '../actions/postActions'

class FetchData extends React.Component {
  componentDidMount(){
    this.props.getPosts()
    this.props.getPages()
    this.props.getEvents()
  }
  render () {
    return null;
  }
}

FetchData.propTypes = {
  getEvents: PropTypes.func.isRequired,
  getPages: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired
}

export default connect(null, { getEvents, getPages, getPosts })(FetchData);
