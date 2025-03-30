import 'tailwindcss/tailwind.css';
import './globals.css';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Chat from './components/Chat';
import Dashboard from './components/Dashboard';

// TODO: Proper authentication persistence. Maybe use a context provider?
const isAuthenticated = false;

export default function App() {
  document.querySelector('html')?.classList.add('dark');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route
            index
            element={
              <Navigate to={isAuthenticated ? '/app' : '/login'} replace />
            }
          />
          <Route path="/app" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<Chat />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
