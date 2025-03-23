import React, { useState } from 'react';
import './Login.css';
import loginAdmin from '../../assets/loginAdmin.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { IoKeySharp } from "react-icons/io5";
import { FaUserSecret } from "react-icons/fa";
import formLogo from '../../assets/FF3.png'
import axios from 'axios';
import { BASE_URL } from '../../App';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const navigate = useNavigate();

  // Define the correct username and password
  // const ADMIN_USERNAME = "admin";
  // const ADMIN_PASSWORD = "futurefund";

  // State to store input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle Sign In button click
  const handleSignIn = async(e) => {
    e.preventDefault();

      if(email === "" || password === "") {
        toast.error('All fields must be filled', {
          position: "top-right",
          autoClose: 2000,
          theme: "dark",
        });
      }else{
        try {
          await axios.post(`${BASE_URL}/api/v1/login`, {email, password})
          .then((response)=>{
            const decode = jwtDecode(response.data.accessToken);
            if(decode.name === "ADMIN"){
              localStorage.setItem('FFToken', response.data.accessToken);
              toast.success('Welcome ADMIN', {
                position: "top-right",
                autoClose: 2000,
                theme: "dark",
              });
              setTimeout(() => {
                navigate('/dashboard/Homepage');
              }, 2000);
            }else{
              toast.error('You are not Authorized!', {
                position: "top-right",
                autoClose: 2000,
                theme: "dark",
              });
            }
          })
          
        } catch (error) {
          toast.error("Unauthorized!", {
            position: "top-right",
            autoClose: 2000,
            theme: "dark",
          });
          
        }
      }


    // if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    //   // Success notification
    //   toast.success('Welcome ADMIN', {
    //     position: "top-right",
    //     autoClose: 2000,
    //     theme: "dark",
    //   });

    //   // Navigate to Dashboard after success
    //   setTimeout(() => {
    //     navigate('/dashboard/Homepage');
    //   }, 2000);
    // } else {
    //   // Error notification if username or password is incorrect
    //   toast.error('Admin username or password is incorrect', {
    //     position: "top-right",
    //     autoClose: 2000,
    //     theme: "dark",
    //   });
    // }
  };

  return (
    <div className='loginBox'>
      <div className="loginBox2">
        <img src={loginAdmin} alt="" className='loginAdminImg' />

        <form className="userLoginForm" onSubmit={handleSignIn}>
          {/* Username Field */}
          <div className="formLogoBox">
            <img src={formLogo} alt="" className='formLogo'/>  
          </div>
          
          <div className="username">
            <label>Admin Email</label>
            <div className="inputForm">
              <i><FaUserSecret /></i>
              <input 
                type="text"
                className="loginInput"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
