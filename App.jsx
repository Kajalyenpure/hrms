import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Attendancecreate from './Attendancecreate';
import Attendancelist from './Attendancelist';
import Emergencycontact from './Emergencycontact';
import Employeecreate from './Employeecreate';
import Employeelist from './Employeelist';
import Employeementcreate from './Employeementcreate';
import Insertfilltimesheet from './Insertfilltimesheet';
import Insertsalarybankdetails from './Insertsalarybankdetails';
import Raisequery from './Raisequery';
import SearchEmergencycontact from './SearchEmergencycontact';
import Searchfilltimesheet from './Searchfilltimesheet';
import Searchpayslip from './Searchpayslip';
import Searchsalarybankdetails from './Searchsalarybankdetails';
import Header from './Header';

function App()
{

return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Attendancecreate />} />
        <Route path="/attendancelist" element={<Attendancelist />} />
        <Route path="/emergencycontact" element={<Emergencycontact />} />
        <Route path="/employeecreate" element={<Employeecreate />} />
        <Route path="/employeelist" element={<Employeelist />} />
        <Route path="/employmentcreate" element={<Employeementcreate />} />
        <Route path="/insertfilltimesheet" element={<Insertfilltimesheet />} />
        <Route path="/insertsalarybankdetails" element={<Insertsalarybankdetails />} />
        <Route path="/raisequery" element={<Raisequery />} />
        <Route path="/searchemergencycontact" element={<SearchEmergencycontact />} />
        <Route path="/searchfilltimesheet" element={<Searchfilltimesheet />} />
        <Route path="/searchpayslip" element={<Searchpayslip />} />
        <Route path="/searchsalarybankdetails" element={<Searchsalarybankdetails />} />
        
      </Routes>
    </BrowserRouter>
  );
}

    export default App;
    
    
  


