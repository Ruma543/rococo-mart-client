import logo from '../../../assets/small.png';
import { FcHome, FcPhone } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="bg-black w-full lg:py-7 p-5  lg:px-10">
      <div className="grid lg:grid-cols-3 grid-cols-1 space-y-5">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-4">
              <img src={logo} alt="" />
              <h3 className="text-white">
                <span className="text-blue-400">ROCOCO</span> Mart
              </h3>
            </div>
            <div>
              <p className="flex lg:items-center text-left lg:text-sm  text-xm gap-2 text-stone-100">
                <span>
                  <FcHome></FcHome>
                </span>
                <span>176 W street name, Dhaka, Bangladesh</span>
              </p>
              <p className="flex  lg:text-sm text-left text-xm lg:items-center  gap-2 text-stone-100">
                <span>
                  <AiOutlineMail></AiOutlineMail>
                </span>
                <span>Email: info@rococo.mart.com</span>
              </p>
              <p className="flex lg:items-center text-left lg:text-sm text-xm  gap-2 text-stone-100">
                <span>
                  <FcPhone></FcPhone>
                </span>
                <span> Telephone: +0088123-4566</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white text-left">
            Information
          </h2>
          <li className="text-white">About Us</li>
          <li className="text-white">Delivery Information</li>
          <li className="text-white">Privacy Policy </li>
          <li className="text-white">Term & Condition</li>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-white text-2xl font-serif font-semibold text-center">
            To get 50% Off for All Product
          </h3>
          <input
            type="email"
            className="input block w-4/5 mx-auto px-6 py-3 outline-none border-0"
            name="email"
            placeholder="Enter your email.."
          />
          <button className="bg-white w-2/5 mx-auto text-black text-sm font-bold px-4 py-3 hover:bg-slate-400">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
