import React from "react";
function Insertfilltimesheet()
{
    return(

        <div>
            <h2>Insert Fill Time Sheet</h2>
            <form>           
             <label>Employee Id</label><br/>
            <input type="text" placeholder="Enter Employee Id"></input><br/>
            <label>Employee Name</label><br/>
            <input type="text" placeholder="Enter Employee Name"></input><br/>
            <label>Date</label><br/>
            <input type="date" ></input><br/>
            <label>Project Name</label><br/>
            <input type="text" placeholder="Enter Project Name"></input><br/>
            <label>Task Description</label><br/>
            <input type="textarea" placeholder="Describe the task"></input><br/>
            <label>Project Name</label><br/>
            <input type="text" placeholder="Enter Project Name"></input><br/>
            <label>Hours Worked</label><br/>
            <input type="text" placeholder="Enter Hours"></input>
            </form><br/>
            <button>Save</button><br/><br/>
            <button>Clear</button>
            </div>
    );

}
export default Insertfilltimesheet;
