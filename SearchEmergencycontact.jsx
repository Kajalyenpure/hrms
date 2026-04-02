import React from "react";
function SearchEmergencycontact()
{
    return(
        <div>
            <h2>Search Emergancy Contact Details</h2><br/>
            <form>
            <input type="text" placeholder="Employee code"></input><br/><br/>
            <input type="text" placeholder="Emercancy contact Name"></input><br/>
            </form>
            <button>Search</button><br/>
            <button>+Add Emercancy Contact</button>
            <div>
                <h2>Emergency Contact Records</h2>
                <table border="1">
                    <thead>
                        <th>Select</th>
                        <th>Sr.no</th>
                        <th>Employee code</th>
                        <th>Contact Name</th>
                        <th>Relationship</th>
                        <th>Contact Number</th> 
                        </thead>
                    
                    <tbody>
                        <tr>
                        <td><input type="checkbox" /></td>
                        <td>1</td>
                        <td>EMP001</td>
                        <td>Rahul sharma</td>
                        <td>Brother</td>
                        <td>9876543210</td>
                        </tr>

                        <tr>
                        <td><input type="checkbox" /></td>
                        <td>2</td>
                        <td>EMP002</td>
                        <td>Anita Verma</td>
                        <td>Mother</td>
                        <td>9123456780</td>
                        </tr>

                    </tbody>
                </table>
                <button>Update</button><br/>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default SearchEmergencycontact;