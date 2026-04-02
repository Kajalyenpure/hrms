import React from "react";
function Insertsalarybankdetails()
{
    return(
        <div>
            <h2>Insert Salary & Bank Details</h2>
            <form>
            <label>Select Employee Code</label><br/>
            <select>
                <option value="">Select Employee code</option>
                <option value="EMP001-Akshay Jaiswal">EMP001-Akshay Jaiswal</option>
                <option value="EMP002-Rohit Sharma">EMP002-Rohit Sharma</option>

            </select><br/><br/>
            <select>
            <label>Salary Type</label>
            <option value="">Select</option>
            <option value="Monthly">Monthly</option>
            <option value="Hourly">Hourly</option>
            <option value="Contract">Contract</option>
            </select><br/>

            <label>Basic Salary</label><br/>
            <input type="text" placeholder="Enter Basic salary"></input><br/>
            <label>Allowances</label><br/>
            <input type="text" placeholder="HRA,TRAVEL,Other"></input><br/>
            <label>Deductions</label><br/>
            <input type="text" placeholder="PF,TDS,Other"></input><br/>
            <label>Net Salary</label><br/>
            <input type="text" placeholder="Auto Calculated"></input><br/>
            
            <label>Bank Name</label><br/>
            <input type="text" placeholder=" Enter Bank Name"></input><br/>
            <label>Account Number</label><br/>
            <input type="text" placeholder="Enter Account Number"></input><br/>
            <label>IFSC Code</label><br/>
            <input type="text" placeholder="Enter IFSC Code"></input><br/>
            <label>Branch Name</label><br/>
            <input type="text" placeholder="Enter Branch Name"></input><br/>
            </form><br/>
            <button>Save</button>
            </div>
             );
}
export default Insertsalarybankdetails;
