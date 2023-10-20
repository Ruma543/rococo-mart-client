import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import logo from '../../assets/small.png';

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'User Logout successfully',
          showConfirmButton: true,
        });

        return;
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          showConfirmButton: true,
        });
        return;
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? 'text-red-500 font-semibold' : isPending ? 'pending' : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isActive ? 'text-red-500 font-semibold' : isPending ? 'pending' : ''
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isActive ? 'text-red-500 font-semibold' : isPending ? 'pending' : ''
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="  bg-orange-100  w-full ">
      <div className=" navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className=" normal-case text-2xl flex justify-center items-center gap-3">
            <img className="lg:w-16 lg:h-16 w-10 h-10  " src={logo} alt="" />
            <h3 className="text-sm lg:text-2xl">
              <span className="text-blue-700">ROCOCO</span> Mart
            </h3>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {/* <button id="theme-toggle">Toggle Theme</button> */}
          {user ? (
            <div className="dropdown dropdown-end">
              <div className="flex items-center gap-5">
                <div>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="lg:w-10 w-7  rounded-full ">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                  <p className="text-xs w-full ">{user.displayName}</p>
                </div>
                <button
                  onClick={handleLogOut}
                  className="px-4 py-3 bg-red-600 text-white"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="px-4 py-3 bg-blue-600 text-white mr-5">
                login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
