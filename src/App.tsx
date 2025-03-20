import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import MyBookings from './pages/MyBookings';
import RoomDetail from './pages/RoomDetail';
import ReservationRoom from './pages/ReservationRoom';

function Layout() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login']; // Oculta a navbar na página de login

  return (
    <div className="flex">
      <div className="flex-1">
        {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
        <div className="container mx-auto mt-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/room-detail/:id" element={<RoomDetail />} />
            <Route path="/reservation-room/:id" element={<ReservationRoom />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Login separado do Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        {/* As demais páginas usam o Layout */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
