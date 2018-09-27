import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBar extends React.Component {
  state = {
    text: ''
  }

  onChange = (e) => {
    this.setState({text: e.target.value})
  }

  render () {
    return (
      <React.Fragment>
        <form className="form-inline SearchBar">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="search" />
                </span>
              </div>
              <input className="form-control" name="search" type="text" value={this.state.text} onChange={this.onChange} />
            </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
