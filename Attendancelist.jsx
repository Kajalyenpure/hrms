import React from "react";

function Attendancelist()
{
    return(
        <div attendance-list>

            <h2>Search Attendance</h2><br/>
            <form>
            <input type="text" placeholder="Employee name"></input><br/><br/>
            <input type="date"></input><br/><br/>
            <input type="text" placeholder="Attendance Status"></input><br/><br/>
            <button>Search</button><br/><br/>
            <button> + Mark Attendance</button>

            
                <table border="1">
                    <thead>
                        
                    <tr>
                    <th>Select</th>
                    <th>Sr.No</th>
                    <th>Employee name</th>
                    <th>Attendance Date</th>
                    <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>1</td>
                        <td>Akshay Jaiswal</td>
                        <td>2026-01-05</td>
                        <td>Present</td>
                    </tr>

                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>2</td>
                        <td>Sneha patil</td>
                        <td>2026-01-06</td>
                        <td>Leave</td>
                    </tr>
                    </tbody>

                </table><br/><br/>
                <button>Update</button><br/><br/>
                <button>Delete</button>
</form>

            </div>
        

        
    );
}
export default Attendancelist;