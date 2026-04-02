import React from "react";

function Employeelist()
{
    return(

        <div>
            <h2>Search Employee</h2>
            <form>
            <input type="text" placeholder="Employee Code"></input><br/><br/>
            <input type="text" placeholder="Employee Name"></input><br/><br/>
            <input type="text" placeholder="Department"></input><br/><br/>
            <input type="text" placeholder="Designation"></input>
            </form><br/><br/>
            <button>Search</button>

            
                <table border="1">
                    <thead>
                        <tr>
                        <th>Select</th>
                       <th>Sr No</th>
                       <th>Employee Code</th>
                       <th>Name</th>
                       <th>Department</th>
                       <th>Designation</th>
                       </tr>
                       </thead>
                       <tbody>
                        <tr>
                      <td><input input type="checkbox"/></td>
                      <td>1</td>
                      <td>EMP001</td>
                      <td>Akshay Jaiswal</td>
                      <td>IT</td>
                      <td>Analyst</td>
                        </tr>
                       </tbody>
                </table><br/><br/>
                <button>Update</button><br/>
                <button>Delete</button>


            </div>

            
        
    );
}
export default Employeelist;