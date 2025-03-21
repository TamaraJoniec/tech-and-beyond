import React, { useState } from "react";
import "./AdminLogin.css";

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // In a production environment, you would validate credentials against Drupal
      // For now, we'll redirect directly to the Drupal dashboard

      // Simulate a loading delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to Drupal admin dashboard
      window.location.href = "https://drupal-tnb.onrender.com/admin";
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Login error:", err);
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h1>Drupal Admin Login</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Redirecting to Drupal..." : "Access Drupal Dashboard"}
          </button>
        </form>
        <div className="login-info">
          <p>This form will redirect you to the Drupal admin interface.</p>
          <p>You will need valid Drupal admin credentials to log in.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
