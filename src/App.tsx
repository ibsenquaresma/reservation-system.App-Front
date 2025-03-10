import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import MyBookings from './pages/MyBookings';
import RoomDetail from './pages/RoomDetail';
// import Sidebar from './components/Sidebar'


function App() {
  return (
    <Router>
      <div className="flex">
      {/* <Sidebar /> */}
        <div className="flex-1">
          <Navbar />
          <div className="container mx-auto mt-6">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/my-bookings" element={<MyBookings />} />
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/room-detail/:id" element={<RoomDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
