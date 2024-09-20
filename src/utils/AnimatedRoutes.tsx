import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import TestLogin from "./TestLogin";
import Vendors from "@/pages/CustomerDashboard/Vendors/Vendors";
import JobPosting from "@/pages/CustomerDashboard/JobPosting/JobPosting";
import ExploreJobs from "@/pages/VendorDashboard/ExploreJobs/ExploreJobs";
import JobDetails from "@/pages/VendorDashboard/JobDetails/JobDetails";
import VendorDetails from "@/pages/CustomerDashboard/Vendors/VendorDetails/VendorDetails";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/testlogin" element={<TestLogin />} />
        <Route path="/customer-dashboard/explore-vendors" element={<Vendors />} />
        <Route path="/customer-dashboard/explore-vendors/:vendorId" element={<VendorDetails />} />
        <Route path="/customer-dashboard/post-a-job" element={<JobPosting />} />
        <Route path="/baker-dashboard/explore-jobs" element={<ExploreJobs />} />
        <Route path="/baker-dashboard/explore-jobs/:jobId" element={<JobDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
