import React from 'react'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.msgInput = React.createRef();
  }
  render () {
    return (
      <form>
        <div className="form-group">
          <input className="form-control" ref={this.nameInput} placeholder="Your Name" />
        </div>
        <div className="form-group">
          <input className="form-control" ref={this.emailInput} placeholder="Your Email" />
        </div>
        <div className="form-group">
          <input className="form-control" ref={this.msgInput} placeholder="Message" />
        </div>
        <input className="btn btn-primary btn-block" type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;
