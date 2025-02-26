import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { loginAPI, registerAPI } from '../../services/allAPI';

function Auth({ insideRegister }) {

  const [userData, setUserData] = useState({ username: "", email: "", password: "" })
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const navigate = useNavigate()
  console.log(userData);

  const handleRegister = async (e) => {
    e.preventDefault()

    const { username, email, password } = userData

    if (username && email && password) {
      //api call
      try {
        const result = await registerAPI(userData)
        console.log(result);

        if (result.status == 200) {

          navigate('/login')
          setUserData({ username: "", email: "", password: "" })

        }
        else {
          if (result.status == 406) {
            alert(result.response.data)
            setUserData({ username: "", email: "", password: "" })

          }
        }

      }
      catch (err) {
        console.log(err);

      }

    }
    else {
      toast.warning("please fill the form completely")

    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (userData.email && userData.password) {
      toast.success("Logging in...");
  
      try {
        const result = await loginAPI(userData);
        console.log("🔍 API Response:", result); // Debugging log
  
        if (result && result.status === 200) {
          setIsLoggedIn(true);
  
          // Store user data & token
          sessionStorage.setItem("user", JSON.stringify(result.data.user));
          sessionStorage.setItem("token", result.data.token);
  
          setTimeout(() => {
            navigate('/dashboard'); // Redirect to dashboard
            setIsLoggedIn(false);
            setUserData({ username: "", email: "", password: "" });
          }, 2000);
        } else {
          toast.warning(result?.response?.data || "Login failed");
        }
      } catch (err) {
        console.error("❌ Login Error:", err);
        toast.error(err.response?.data || "Something went wrong");
      }
    } else {
      toast.warning("Please fill in all fields");
    }
  };
  


  return (
    <div className='d-flex align-items-center justify-content-center'  style={{ height: '100vh',backgroundColor:'GrayText', backgroundSize:'cover'  }}>
   <div>

      <div className='container'>
        <div className='card shadow p-4'>
          <div className='row align-items-center'>
<ToastContainer/>
            {/* Left Side Image (Hidden on Small Screens) */}
            <div className='col-lg-6 d-none d-lg-block text-center'>
              <img src={"src/images/download.jpg"} alt="Auth Visual" className='img-fluid' style={{ maxWidth: '100%', height: '250px',borderRadius:'50px' }} />
            </div>

            {/* Right Side Form */}
            <div className='col-lg-6 col-12 text-center'>
              <h3 className='text-danger mt-2 '>
                <i className="fa-brands fa-docker"></i> &nbsp; Project Fair
              </h3>
              <h6 className='text-warning mb-3'>Sign {insideRegister ? "Up" : "In"} to your account</h6>

              <form className='mx-auto w-100' style={{ maxWidth: '350px' }}>
                {insideRegister && (
                  <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3">
                    <Form.Control value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} type="text" placeholder="User Name" />
                  </FloatingLabel>
                )}
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} type="password" placeholder="Password" />
                </FloatingLabel>

                {insideRegister ? (
                  <div>
                    <button onClick={handleRegister} className='btn btn-danger w-100 mt-3'>Sign Up</button>
                    <p className='mt-2'>Already have an account? <Link to={'/login'}>Login</Link></p>
                  </div>
                ) : (
                  <div>
                    <button onClick={handleLogin} className='btn btn-danger w-100 mt-3'>Sign In
                   { 
                    isLoggedIn &&
                    <Spinner animation="border" variant="light" />}
                    </button>
                    <p className='mt-2'>Don't have an account yet? <Link to={'/register'}>Register</Link></p>
                  </div>
                )}
              </form>
            </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
