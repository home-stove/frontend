import AnimatedRoutes from "./utils/AnimatedRoutes";
import ScrollToTop from "./utils/ScrollToTop";
import SlidingMenu from "./utils/SlidingMenu";

function App() {
  return (
    <div className="relative">
      <ScrollToTop />
      <SlidingMenu />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
