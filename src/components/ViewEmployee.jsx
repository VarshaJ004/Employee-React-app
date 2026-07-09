import React from 'react'
import Navigation from './Navigation'
import './Employee.css'




const ViewEmployee = () => {
  
  const employees = [
    { code: "EMP-2026-001", name: "Aarav Sharma", phone: "+91 98765 43210", designation: "Software Engineer" },
    { code: "EMP-2026-002", name: "Zara Patel", phone: "+91 87654 32109", designation: "UI/UX Designer" },
    { code: "EMP-2026-003", name: "Vivaan Iyer", phone: "+91 76543 21098", designation: "Project Manager" },
    { code: "EMP-2026-004", name: "Ananya Reddy", phone: "+91 65432 10987", designation: "HR Specialist" },
    { code: "EMP-2026-005", name: "Kabir Singh", phone: "+91 54321 09876", designation: "DevOps Engineer" },
    { code: "EMP-2026-006", name: "Diya Malhotra", phone: "+91 43210 98765", designation: "QA Automation Engineer" },
    { code: "EMP-2026-007", name: "Rohan Das", phone: "+91 32109 87654", designation: "Data Analyst" },
    { code: "EMP-2026-008", name: "Meera Joshi", phone: "+91 21098 76543", designation: "Product Manager" },
    { code: "EMP-2026-009", name: "Arjun Nair", phone: "+91 10987 65432", designation: "System Administrator" },
    { code: "EMP-2026-010", name: "Isha Gupta", phone: "+91 90123 45678", designation: "Marketing Executive" }
  ];

  return (
    <div>
      <Navigation />
      
      <div className="container mt-4">
        <h1 className="page-heading mb-4 text-center">EMPLOYEE DIRECTORY</h1>
        
        <div className="row">
          <div className="col col-12">
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered align-middle">
                <thead className="table-dark">
                  <tr>
                    <th scope="col" style={{ width: '8%' }}>Sl. No</th>
                    <th scope="col">Employee Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={employee.code}>
                      <td>{index + 1}</td>
                      <td><strong>{employee.code}</strong></td>
                      <td>{employee.name}</td>
                      <td>{employee.phone}</td>
                      <td>
                        <span className="badge bg-secondary px-2 py-1">
                          {employee.designation}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewEmployee