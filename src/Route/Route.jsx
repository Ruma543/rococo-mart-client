import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Component/ErrorPage/ErrorPage';
import Home from '../Component/Home/Home';
import Login from '../Component/Login/Login';
import Registration from '../Component/Registration/Registration';
import AddProduct from '../Component/AddProduct/AddProduct';
import MyCart from '../Component/MyCart/MyCart';
import BrandCardDetails from '../Component/Home/BrandCard/BrandCardDetails';
import CardDetails from '../Component/Home/BrandCard/CardDetails';
import UpdateProduct from '../Component/UpdateProduct/UpdateProduct';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://rococo-mart-server.vercel.app/brands'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
      },
      {
        path: '/addProduct',
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: '/myCart',
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch(`https://rococo-mart-server.vercel.app/cards`),
      },

      {
        path: '/details/:brand',
        element: (
          <PrivateRoute>
            <BrandCardDetails></BrandCardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://rococo-mart-server.vercel.app/products/${params.brand}`
          ),
      },
      {
        path: '/cardDetails/:id',
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://rococo-mart-server.vercel.app/products/sProduct/${params.id}`
          ),
      },
      {
        path: '/updateProduct/:id',
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://rococo-mart-server.vercel.app/products/sProduct/${params.id}`
          ),
      },
    ],
  },
]);

export default Route;
