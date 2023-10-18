import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = () => {
  const { createUser, profileUpdate, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const image = form.get('image');
    const password = form.get('password');
    console.log(name, email, password, image);
    if (password.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Password must have 6 character!',
        showConfirmButton: true,
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Password should have at least one uppercase!',
        showConfirmButton: true,
      });
      return;
    } else if (!/(?=.*[@#$%^&+=!])/.test(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Password should have at least one  special character!',
        showConfirmButton: true,
      });
      return;
    }
    createUser(email, password)
      .then(result => {
        profileUpdate(name, image)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'User Update successfully',
              showConfirmButton: true,
            });

            navigate('/');
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'User information is missing!',
              showConfirmButton: true,
            });
          });
      })
      .then(error => console.log(error));
  };
  return (
    <div>
      <div>
        <h3 className="text-2xl font-serif  text-center font-semibold mt-1 mb-3">
          Please Register
        </h3>
        <form
          onSubmit={handleRegister}
          className="lg:w-1/3 w-11/12 md:w-3/5 mx-auto bg-blue-200 px-5 py-3 rounded-lg "
        >
          <label className="label">
            <span className="text-blue-700 font-semibold text-xl">
              User Name
            </span>
          </label>
          <input
            type="text"
            className="input block w-full outline-none border-0"
            name="name"
            placeholder="Enter your name.."
            required
          />
          <label className="label">
            <span className="text-blue-700 font-semibold text-xl">
              User Email
            </span>
          </label>
          <input
            type="email"
            className="input block w-full outline-none border-0"
            name="email"
            placeholder="Enter your email.."
            required
          />
          <label className="label">
            <span className="text-blue-700 font-semibold text-xl">
              User Image URL
            </span>
          </label>
          <input
            type="text"
            className="input block w-full outline-none border-0"
            name="image"
            placeholder="Enter your Image URL.."
            required
          />
          <label className="label">
            <span className="text-blue-700 font-semibold text-xl">
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

          <button className="py-2 btn w-full my-2">Registration</button>
        </form>
        <p className="py-4 text-center">
          Already have Account? Please{' '}
          <Link className="text-black underline" to="/login">
            Login
          </Link>
        </p>
      </div>

      {/* <h3>registration</h3>
      <Link to="/login">login</Link> */}
    </div>
  );
};

export default Registration;
