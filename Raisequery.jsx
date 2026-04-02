import React from "react";

function Raisequery()
{
    return(
        <div>
            <h2>Raise Query</h2>
            <form>
            <label>Employee Code</label><br/>
            <input type="text" placeholder="EMP001"></input><br/>
            <label>Employee Name</label><br/>
            <input type="text" placeholder="John Doe"></input><br/>
            <label>Query Type</label><br/>
            <select>
            <option value="">Salary</option>
            <option value="Leave">leave</option>
            <option value="Attendance">Attendance</option>
            <option value="General">General</option>
             </select><br/>
             <label>Description</label><br/>
             <input type="text"></input><br/>
             <button>Submit Query</button><br/>
             </form>


        </div>
    );
}
export default Raisequery;