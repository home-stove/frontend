import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import TestLogin from "./TestLogin";
import VendorsList from "@/pages/Home/CustomerDashboard/VendorsList/VendorsList";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/testlogin" element={<TestLogin />} />
        <Route path="/customer-dashboard/vendors" element={<VendorsList />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
