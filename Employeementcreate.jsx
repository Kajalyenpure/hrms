import React from "react";

function Employeementcreate()
{
    return(

        <div>
            <h2>Insert Employeement Details</h2>
            <form>
           <label>Select Employee code</label><br/>
            <select>
                <option value="">Select Employee</option>
                <option value="EMP001-Akshay Jaiswal">EMP001-Akshay Jaiswal</option>
                <option value="EMP002-Rohit Sharma">EMP002-Rohit Sharma</option><br/>
                </select><br/>
                <label>Date of Joining</label><br/>
                <input type="date" ></input><br/>
                <label>Employment Type</label><br/>
                <select>
                <option value="">select</option>
                <option value="permanant">permanant</option>
                <option value="contract">contract</option>
                <option value="inten">inten</option>
                </select><br/>
                <label>Role</label><br/>
                <input type="text" placeholder="e.g Data Analyst" ></input><br/>
                <label>Work Location</label><br/>
                <input type="text" placeholder="e.g Mumbai"></input><br/>
                <label>Reporting Manager</label><br/>
                <input type="text"  placeholder="Manager Name"></input><br/>
                <label>Employee Status</label><br/>
                <select>
                <option value="">Select</option>
                <option value="Active">Active</option>
                <option value="inactive">inactive</option>
                <option value="On Notice">on notice</option>
                </select>
                </form><br/><br/>
                <button>Save</button>


            

        </div>


    );
}
export default Employeementcreate;