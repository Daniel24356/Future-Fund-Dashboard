// import React from 'react'
// import './Login.css'
// import loginAdmin from '../../assets/loginAdmin.png'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { IoKeySharp } from "react-icons/io5";
// import { FaUserSecret } from "react-icons/fa";

// const Login = () => {
//     const navigate = useNavigate(); // Initialize navigation

//   // Function to handle Sign In button click
//   const handleSignIn = (e) => {
//     e.preventDefault(); // Prevent form submission refresh

//     // Show Toastify notification
//     toast.success('Welcome ADMIN', {
//       position: "top-right",
//       autoClose: 2000, // 2 seconds duration
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "dark",
//     });

//     // Navigate to Dashboard after the toast is done
//     setTimeout(() => {
//       navigate('/DashBoard/Users');  // Redirect to Dashboard
//     }, 2000); // Match autoClose duration
//   };

//   return (
//     <div className='loginBox'>

//         <div className="loginBox2">
//             <img src={loginAdmin} alt="" className='loginAdminImg'/>

//             <form className="userLoginForm">

//                 <div className="username">
//                     <label>Admin Username </label>
//                     <div className="inputForm">
//                         <i><FaUserSecret /></i>
//                         {/* <input type="text" placeholder='Enter admin username'/> */}
//                         <input type="text" className="loginInput" placeholder="Enter your username"/>
//                     </div>
//                 </div>    

//                 <div className="password">
//                     <label>Password </label>
//                     <div className="inputForm">
//                         <i><IoKeySharp /></i>       
//                         <input type="password" className="loginInput" placeholder="Enter your Password"/>
//                     </div>
//                 </div>

//                 <div className="forgotPass">
//                     <span className="span">Forgot password?</span>
//                 </div>

//                 <div className="s">
//                     <button className="signInBtn" onClick={handleSignIn}>
//                         <Link to=''>Log In</Link>
//                     </button>
//                 </div>
            
//             </form>
//         </div>
//         <ToastContainer />
//     </div>
//   )
// }

// export default Login


import React, { useState } from 'react';
import './Login.css';
import loginAdmin from '../../assets/loginAdmin.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { IoKeySharp } from "react-icons/io5";
import { FaUserSecret } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  // Define the correct username and password
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "futurefund123";

  // State to store input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle Sign In button click
  const handleSignIn = (e) => {
    e.preventDefault();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Success notification
      toast.success('Welcome ADMIN', {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });

      // Navigate to Dashboard after success
      setTimeout(() => {
        navigate('/dashboard/users');
      }, 2000);
    } else {
      // Error notification if username or password is incorrect
      toast.error('Admin username or password is incorrect', {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  return (
    <div className='loginBox'>
      <div className="loginBox2">
        <img src={loginAdmin} alt="" className='loginAdminImg' />

        <form className="userLoginForm" onSubmit={handleSignIn}>
          {/* Username Field */}
          <div className="username">
            <label>Admin Username</label>
            <div className="inputForm">
              <i><FaUserSecret /></i>
              <input 
                type="text"
                className="loginInput"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>    

          {/* Password Field */}
          <div className="password">
            <label>Password</label>
            <div className="inputForm">
              <i><IoKeySharp /></i>       
              <input 
                type="password"
                className="loginInput"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="forgotPass">
            <span className="span">Forgot password?</span>
          </div>

          {/* Sign In Button */}
          <div className="s">
            <button type="submit" className="signInBtn">
              Log In
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
