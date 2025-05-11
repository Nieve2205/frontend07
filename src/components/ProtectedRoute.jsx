import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getCurrentUser, getRoles } from '../services/auth';

export const ProtectedRoute = ({ roles = [] }) => {
  const user = getCurrentUser();
  const userRoles = getRoles();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (roles.length > 0 && !roles.some(role => userRoles.includes(role))) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;