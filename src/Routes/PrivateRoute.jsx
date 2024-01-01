import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../FireBase/Firebase';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const [user] = useAuthState(auth);
    
    useEffect(() => {
        if (!user) {
          Swal.fire({
            title: "Plese sign in first",
            icon: "warning",
          });
        }
      }, [user]);

      if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
  return (
    <>{children}</>
  )
}

export default PrivateRoute;