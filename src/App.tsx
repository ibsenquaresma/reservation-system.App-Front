import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import RoomsAvailables from './pages/RoomsAvailables';
import FloorPlan from './pages/FloorPlan';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login/Login';
import MyBookings from './pages/MyBookings';
import RoomDetail from './pages/RoomDetail';
import RoomsReservations from './pages/RoomReservation';
import NotFoundPage from './components/404';
import ForgotPassword from './pages/Login/ForgotPassword';
import Register from './pages/Login/Register';
import Contact from './pages/Contact';
import About from './pages/About';
import ResetPassword from './pages/Login/ResetPassword';
import LogoutButton from './pages/Login/LogoutButton';
import { ProtectedRoute } from './components/ProtectedRoute';
import { PublicRoute } from './components/PublicRoute'; // 👈 importa aqui

function Layout() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login'];

  return (
    <div className="flex">
      <div className="flex-1">
        {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
        <div className="container mx-auto mt-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/rooms" element={<RoomsAvailables />} />
            <Route path="/room-detail/:id" element={<RoomDetail />} />
            <Route path="/reservation-room/:id" element={<RoomsReservations />} />
            <Route path="/floor-plan" element={<FloorPlan />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
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
        {/* Rotas públicas, protegidas por PublicRoute */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/forgot"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/reset-password"
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          }
        />

        {/* Todas as rotas protegidas */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;