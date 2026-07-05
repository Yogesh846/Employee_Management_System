import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <BrowserRouter>

      <Header />

      <div className="container mt-3">

        <Routes>

          <Route path="/" element={<EmployeeList />} />

          <Route path="/employees" element={<EmployeeList />} />

          <Route path="/add-employee" element={<AddEmployee />} />

          <Route path="/update-employee/:id"
                 element={<UpdateEmployee />} />

          <Route path="/view-employee/:id"
                 element={<ViewEmployee />} />

        </Routes>

      </div>

      <Footer />

    </BrowserRouter>
  );
}

export default App;