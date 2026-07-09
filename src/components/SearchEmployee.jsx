import React from 'react'
import Navigation from './Navigation'
import './Employee.css'

const SearchEmployee = () => {
  return (
    <div>
      <Navigation />
      
      <div className="container mt-5">
        <div className="page-box">
          
          <h1 className="page-heading mb-4 text-center">Search Employee</h1>
          
          <div className="container">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                
                <div className="row g-3">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">Employee Code</label>
                    <input type="text" className="form-control" />
                  </div>
                  
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success mt-3 px-5">Search</button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SearchEmployee