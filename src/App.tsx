import "./styles.css";
import useCounter from "./customHooks/useCounter";
import useToggle from "./customHooks/useToggle";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext, useState } from "react";
import { useTheme } from "./customHooks/useTheme";
import { useAuth } from "./customHooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoutes";

const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to='/dashboard' replace /> : <Navigate to="/login" replace />} />


      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  )




};

export default App;
