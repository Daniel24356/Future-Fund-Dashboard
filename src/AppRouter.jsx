
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SideNav from "./components/SideNav/SideNav";
import Users from "./pages/Users/Users";
import Homepage from "./pages/Homepage/Homepage";

const Layout = () => {

  return (
    <>
      <SideNav/>
      <Routes>
        <Route path="/Users" element={< Users/>} />
        <Route path="/Homepage" element={< Homepage/>} />
        <Route path="/Users" element={< Users/>} />
      </Routes>
    </>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Layout /> {/* Ensure Layout is inside Router */}
    </Router>
  );
};

export default AppRouter;
