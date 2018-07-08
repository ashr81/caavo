import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Spinner from '../form-controls/spinner.js';

export default class DocumentsIndex extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      listData: null,
      isLoading: true
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    fetch(`/documents?type=${this.props.controller}`)
      .then((data) => {
        data.json().then((result) => {
          this.setState({
            listData: result,
            isLoading: false
          })
        })
      })
  }

  addButtonText() {
    if(this.props.controller === 'drivingLicense') {
      return 'Driving License';
    } else if(this.props.controller === 'aadharCard') {
      return 'Aadhar Card';
    } else {
      return null;
    }
  }

  render() {
    if(this.state.isLoading) {
      return(<Spinner />)
    } else {
      return(
        <div>
        <button type="button" className="btn btn-primary" onClick={() => this.props.selectedComponent(this.props.controller, 'new')}>Add {this.addButtonText()}</button>
        <div className="list-group">
          {this.state.listData.map((entity, index) =>
            <a key={index} href={`/documents/${entity.id}?type=${this.props.controller}`} className="list-group-item">{entity.name}</a>
          )}
        </div>
        </div>
      )
    }
  }
}
