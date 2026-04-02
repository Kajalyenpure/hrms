import React from "react";
import"./Employee.css";
function Attendancecreate()
{
    return(

        <div className="attendance-form"> 
            <h2>Insert Mark Attendance</h2>
            <form>
            <label>Employee ID</label><br/>
            <input type="text" placeholder="Enter Employee ID"></input><br/>
            <label>Employee Name</label><br/>
            <input type="text" placeholder="Enter Employee Name"></input><br/>
            <label>Attendance Date</label><br/>
            <input type="date"></input><br/>
            <label>Attendance Status</label><br/>
            <select>
                <option value="">select</option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
                <option value="Leave">Leave</option>
               </select><br/>
            <label>In Time</label><br/>
            <input type="time"></input><br/>
            <label>Out time</label><br/>
            <input type="time" ></input><br/>
            <label>Remarks</label><br/>
           <input type="text" placeholder="Optional remarks"></input><br/><br/>
           <button>SAVE</button><br/>
           <button>Cancel</button>
           </form>

</div>
    );
    
    
}
export default Attendancecreate;