import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom'
import TestLogin from './TestLogin';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route index path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/testlogin' element={<TestLogin />} />
        {/* Add more routes here */}
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes