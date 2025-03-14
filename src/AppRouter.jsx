
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation} from "react-router-dom";
// import SideNav from "./components/SideNav/SideNav";
// // import Header from "./components/Header/Header";
// import Users from "./pages/Users/Users";
// import Analytics from "./pages/Analytics/Analytics";
// import Settings from "./pages/Settings/Settings";
// import Login from "./pages/Login/Login";

// const Layout = () => {
//   const location = useLocation();
//   const showSideNav = location.pathname.startsWith("/dashboard");

//   return (
//     <>
//       {showSideNav && <SideNav />}
//       {/* <SideNav/> */}
//       {/* <Header/> */}
//       <Routes>
//         <Route path="/" element={<Navigate to="/Login"/>} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/dashboard/Users" element={<Users/>} />
//         <Route path="/dashboard/Analytics" element={<Analytics/>} />
//         <Route path="/dashboard/Settings" element={<Settings/>} />
//       </Routes>
//     </>
//   );
// };

// const AppRouter = () => {
//   return (
//     <Router>
//       <Layout />
//     </Router>
//   );
// };

// export default AppRouter;


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SideNav from "./components/SideNav/SideNav";
import Users from "./pages/Users/Users";
import Analytics from "./pages/Analytics/Analytics";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";

const DashboardLayout = () => (
  <div style={{ display: 'flex' }}>
    <SideNav />
    <div>
      <Routes>
        <Route path="/Users" element={<Users />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </div>
  </div>
);

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Routes without SideNav */}
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />

        {/* Wrap dashboard routes with the DashboardLayout */}
        <Route path="/Dashboard/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
