import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class AadharCardForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      aadharCard: {
        aadhar_number: null,
        name: null,
        gender: null,
        dob: null,
        associative_name: null,
        pincode: null
      }
    }
  }

  onSubmit() {
  }

  render() {
    return(
    <div>
      <div className="form-group">
        <label>Aadhar Number</label>
        <input value={this.state.aadharCard.aadhar_number} type="number" className="form-control" placeholder="Aadhar Number"/>
      </div>
      <div className="form-group">
        <label>Name</label>
        <input type="text" value={this.state.aadharCard.name}className="form-control" placeholder="Name"/>
      </div>
      <select className="custom-select custom-select-sm">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="not_specified">Not Specified</option>
      </select>
      <div className="form-group">
        <label>Birth Date</label>
        <input type="date" value={this.state.aadharCard.dob} className="form-control" placeholder="Birth Date"/>
      </div>
      <div className="form-group">
        <label>Pincode</label>
        <input type="number" value={this.state.aadharCard.pincode} className="form-control" placeholder="Pincode"/>
      </div>
      <div className="form-group">
        <label>Address</label>
        <input type="text" className="form-control" value={this.state.aadharCard.address} placeholder="Address"/>
      </div>
      <button type="submit" className="btn btn-default" onClick={this.onSubmit}>Submit</button>
    </div>
    )
  }
}
