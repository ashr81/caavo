import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class AadharCardView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
    <div>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Email"/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Password"/>
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </div>
    )
  }
}
