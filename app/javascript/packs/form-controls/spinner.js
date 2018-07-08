import React from 'react'

const Spinner = () => (
  <div className="modal-body" >
   <div style={{height: '200px'}}>
      <span id="searching_spinner_center" style={{position: 'absolute', display: 'block',top: '50%', left: '50%'}}></span>
    </div>
  </div>
)

export default Spinner;
