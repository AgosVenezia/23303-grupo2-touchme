import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const user = localStorage.getItem('userInfo')

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoutes;
