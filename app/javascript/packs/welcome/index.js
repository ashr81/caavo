import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import WelcomeNote from './note.js';
import DocumentsIndex from '../documents/index.js';
import AadharCardForm from '../documents/aadhar-card/form.js';
import DrivingLicenseForm from '../documents/driving-license/form.js';

import Spinner from '../form-controls/spinner.js';

export default class WelcomeIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      viewOn: 'welcomeNote'
    }
  }

  userSelectedComponent = (viewOn, action=null) => {
    if(viewOn === 'welcomeNote') {
      return(<WelcomeNote />)
    } else if(viewOn && !action) {
      return(<DocumentsIndex controller={viewOn} selectedComponent={() => this.userSelectedComponent()}/>)
    } else if(action) {
      if(viewOn === 'drivingLicense') {
        return(<DrivingLicenseForm action={action}/>)
      } else if(viewOn === 'aadharCard') {
        return(<AadharCardForm action={action}/>)
      }
    }
  }

  setView(viewOn) {
    this.setState({
      viewOn
    })
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div className="list-group" id="list-tab" role="tablist">
              <div className={"list-group-item list-group-item-action "+(this.state.viewOn === 'welcomeNote' ? 'active' : '')} onClick={() => this.setView('welcomeNote')}>Home</div>
              <div className={"list-group-item list-group-item-action "+(this.state.viewOn === 'aadharCard' ? 'active' : '')} onClick={() => this.setView('aadharCard')}>Aadhar</div>
              <div className={"list-group-item list-group-item-action "+(this.state.viewOn === 'drivingLicense' ? 'active' : '')} onClick={() => this.setView('drivingLicense')}>Driving License</div>
            </div>
          </div>
          <div className="col-9">
            {this.userSelectedComponent(this.state.viewOn)}
          </div>
        </div>
      </div>
    )
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('welcome-index')
  const data = JSON.parse(element.getAttribute('data'))
  ReactDOM.render(
    <WelcomeIndex {...data}/>,
    element
  )
})
