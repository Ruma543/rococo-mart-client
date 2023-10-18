import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import GoogleLogin from './GoogleLogin';

const Login = () => {
  const { user, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    loginUser(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        Swal.fire({
          icon: 'success',
          title: 'Login successfully',
          showConfirmButton: true,
        });
        // navigate('/');
        navigate(location.state ? location.state : '/');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: 'error',
          title: 'Please provide valid email & password',
          showConfirmButton: true,
        });
        return;
      });
  };
  return (
    <div>
      <div>
        <h3 className="text-2xl font-serif text-center font-semibold mt-10 mb-3">
          Please Login
        </h3>
        <form
          onSubmit={handleLogin}
          className="lg:w-1/3 w-11/12 md:w-3/5 mx-auto bg-pink-200 px-5 py-7 rounded-lg "
        >
          <label className="label">
            <span className="text-black font-semibold text-xl">User Email</span>
          </label>
          <input
            type="email"
            className="input block w-full outline-none border-0"
            name="email"
            placeholder="Enter your email.."
            required
          />
          <label className="label">
            <span className="text-black font-semibold text-xl">
              User Password
            </span>
          </label>
          <input
            type="password"
            className="input block w-full outline-none border-0"
            name="password"
            placeholder="Enter your password.."
            required
          />
          <label className="label">
            <a href=""> Forget Password?</a>
          </label>
          <button className="btn w-full text-black">Login</button>
        </form>

        <p className="py-4 text-center">
          New for Website? Please{' '}
          <Link className="text-black underline" to="/registration">
            Register
          </Link>
        </p>
      </div>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Login;
