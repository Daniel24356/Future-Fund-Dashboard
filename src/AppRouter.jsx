
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SideNav from "./components/SideNav/SideNav";
// import Header from "./components/Header/Header";
import Users from "./pages/Users/Users";
import Analytics from "./pages/Analytics/Analytics";

const Layout = () => {

  return (
    <>
      <SideNav/>
      {/* <Header/> */}
      <Routes>
        <Route path="/Users" element={<Users/>} />
        <Route path="/Analytics" element={<Analytics/>} />
        <Route path="/Users" element={<Users/>} />
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
