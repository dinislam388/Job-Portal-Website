import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../FireBase/Firebase";
import Swal from "sweetalert2";
import Loading from "../Components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    Swal.fire({
      title: "Plese sign in first",
      icon: "warning",
    });
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
