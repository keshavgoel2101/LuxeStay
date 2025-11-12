import { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  const [view, setView] = useState('login'); // 'login', 'register', 'profile'
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      setView('profile');
    }
  }, []);

  const handleLoginSuccess = (token, user) => {
    setToken(token);
    setUser(user);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setView('profile');
  };

  const handleRegisterSuccess = (token, user) => {
    setToken(token);
    setUser(user);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setView('profile');
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setView('login');
  };

  return (
    <div className="app">
      {/* Background video for auth pages */}
      {(view === 'login' || view === 'register') && (
        <div className="video-background">
          <video autoPlay muted loop playsInline>
            <source src="https://cdn.pixabay.com/video/2023/06/07/167877-834384356_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
      )}

      <div className="container">
        <div className="brand-section">
          <h1 className="app-title">✈️ LuxeStay</h1>
          <p className="brand-tagline">Your Gateway to Luxury Stays</p>
        </div>
        
        {view === 'login' && (
          <Login
            onSuccess={handleLoginSuccess}
            onSwitchToRegister={() => setView('register')}
          />
        )}

        {view === 'register' && (
          <Register
            onSuccess={handleRegisterSuccess}
            onSwitchToLogin={() => setView('login')}
          />
        )}

        {view === 'profile' && (
          <Profile
            user={user}
            token={token}
            onLogout={handleLogout}
          />
        )}
      </div>
    </div>
  );
}

export default App;
