import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/Login";
import { RegisterPage } from "../pages/RegisterPage/Register";
import { DashboardPage } from "../pages/DashboardPage/dashboard";
import { PrivateRoutes, PublicRoutes } from "./RoutesProtection/Routes";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes/>}>
        <Route index path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />  
        <Route index path="/dashboard/:user_id" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}