import { useNavigate, Outlet } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn) {
    return children;
  } else {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>Sorry, you don't have permission to access this page.</p>
        <button onClick={() => navigate("/login")} className="primary-btn">
          Go to Login
        </button>
      </div>
    );
  }
}

export default ProtectedRoute;
