import React from "react";
function Searchsalarybankdetails()
{
    return(
        <div>
            <h2>Search Salary & Bank Details</h2>
            <form>
            <input type="text" placeholder="Employee code"></input><br/><br/>
            <input type="text" placeholder="Salary Type"></input><br/><br/>
            <input type="text" placeholder="Bank Name"></input>
            </form><br/>
            <button>Search</button>

            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Sr.no</th>
                            <th>Employee Code</th>
                            <th>Salary Type</th>
                            <th>Net Salary</th>
                            <th>Bank Name</th>
                            <th>Account No</th>
                
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                <td><input type="checkbox"/></td>
                        <td>1</td>
                        <td>EMP001</td>
                        <td>Monthly</td>
                        <td>55,000</td>
                        <td>HDFC Bank</td>
                        <td>xxxx1234</td>
                    </tr>

                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>2</td>
                        <td>EMP002</td>
                        <td>Contact</td>
                        <td>40,000</td>
                        <td>Icici Bank</td>
                        <td>XXXX1567</td>
                    </tr>

                        
                    </tbody>
                </table>
            </div>
<button>Update</button><br/>
<button>Delete</button>

        </div>

    );

}

export default Searchsalarybankdetails;