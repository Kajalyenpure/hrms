import React from "react";
function Searchpayslip()
{
    return(
        <div>
            <h2>Search Payslip</h2>
            <form>
            <label>Month</label><br/>
            <select>
                <option value="">select month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
            </select><br/>
            <label>Year</label><br/>
            <select>
            <option value="">select year</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            </select>
            </form>
            <button>Search</button><br/>
            <div>
                <h2>Payslip Records</h2>
                <table border="1">
                    <thead>
                        <tr>
                        <th>Sr No</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Net Salary</th>
                        <th>Action</th>
                       </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>January</td>
                            <td>2026</td>
                            <td>55,000</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>December</td>
                            <td>2025</td>
                            <td>53,500</td>
                            </tr>
                          </tbody>


                </table>


            </div>
        </div>



    );

}
export default Searchpayslip;