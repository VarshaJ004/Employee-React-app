import React from 'react'
import Navigation from './Navigation'
import './Employee.css'

const AddEmployee = () => {
  return (
    <div>
      <Navigation />

      <div className="container mt-5">

        <div className="page-box">

          <h2 className="page-heading">Add Employee</h2>

          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

              <div className="row g-3">

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Employee Code</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Employee Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label className="form-label">Designation</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-12 text-center mt-3">
                  <button className="btn btn-success px-5">Submit</button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AddEmployee