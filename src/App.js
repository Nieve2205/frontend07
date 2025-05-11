import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPage from './pages/AdminPage';
import ModeratorPage from './pages/Moderator';
import Unauthorized from './pages/Unauthorized';
import ProtectedRoute from './components/ProtectedRoute';

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        
        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute roles={['moderator']} />}>
          <Route path="/moderator" element={<ModeratorPage />} />
        </Route>
        <Route element={<ProtectedRoute roles={['admin']} />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;