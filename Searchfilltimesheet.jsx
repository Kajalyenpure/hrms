import React from "react";
function Searchfilltimesheet()
{
    return(
        <div>
            <h2>Search fill time sheet</h2>
            <form>
            <label>Date</label><br/>
            <input type="date"></input><br/>
            <label>Project Name</label><br/>
            <input type="text" placeholder="Enter Project Name"></input>
            </form>
            <button>Search</button><br/>
            <button>Clear</button>

            <div> 
                <table border="1">
                    <thead>
                        <tr>
                            <th>select</th>
                            <th>Sr.no</th>
                            <th>Emplooyee Id</th>
                            <th>Date</th>
                            <th>Project Name</th>
                            <th>Hours Worked</th>
                      </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox"/></td>
                        <td>1</td>
                        <td>EMP001</td>
                        <td>Akshay Jaiswal</td>
                        <td>2026-01-05</td>
                        <td>HRMS</td>
                        <td>8</td>
                    </tr>

                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>2</td>
                        <td>EMP002</td>
                        <td>Sneha patil</td>
                        <td>2026-01-06</td>
                        <td>Invoice system</td>
                        <td>7.5</td>
                    </tr>
                    </tbody>


                </table>
                <br/><br/>
            </div>
                <button>Update</button><br/>
                <button>Delete</button>
                            
                    
                
            

        </div>
    );
}

export default Searchfilltimesheet;