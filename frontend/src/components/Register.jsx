import { useState } from 'react';
import { register } from '../api';

function Register({ onSuccess, onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await register(name, email, password);
      onSuccess(response.token, response.user);
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container register-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Join LuxeStay</h2>
          <p className="auth-subtitle">Create your account to start exploring luxury stays</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">
              <span className="label-icon">👤</span>
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <span className="label-icon">📧</span>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <span className="label-icon">🔒</span>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength="6"
              className="form-input"
            />
            <p className="input-hint">Minimum 6 characters</p>
          </div>

          {error && <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>}

          <button type="submit" className="btn btn-primary btn-large" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="divider">
          <span>Already have an account?</span>
        </div>

        <button 
          onClick={onSwitchToLogin} 
          className="btn btn-secondary btn-large"
        >
          Sign In Here
        </button>

        <p className="auth-footer">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Register;
