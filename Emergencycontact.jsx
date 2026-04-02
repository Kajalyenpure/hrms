import React from "react";
function Emergencycontact()
{
    return(
        <div>
            <h2>Insert Emergency contact Details</h2>
            <form>
            <label>Select Employee code</label><br/>
            
            <select>
            
                <option value="">Select Employee</option>
                <option value="EMP001">Akshay Jaiswal</option>
                <option value="EMP002">Rohit Sharma</option>
                </select><br/>
                <label>Emergancy contact Name</label><br/>
                <input type="text" placeholder="Enter Contact Nmae"></input><br/>
                <label>Relationship</label><br/>
                <input type="text" placeholder="Father/Mother/Spouse/Frind"></input><br/>
                <label>Emergency contact Number</label><br/>
                <input type="text" placeholder="Enter contact Number"></input><br/>
                <button>Save</button><br/>
                <button>Cancel</button>

            
            </form>
        </div>
    );
}

export default Emergencycontact;