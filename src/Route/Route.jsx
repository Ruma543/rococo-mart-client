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

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brands'),
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
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>,
        loader: () => fetch(`http://localhost:5000/cards`),
      },
      // {
      //   path: '/myCart',
      //   element: <MyCart></MyCart>,
      // },
      {
        path: '/details/:brand',
        element: <BrandCardDetails></BrandCardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}`),
      },
      {
        path: '/cardDetails/:id',
        element: <CardDetails></CardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/sProduct/${params.id}`),
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/sProduct/${params.id}`),
      },
    ],
  },
]);

export default Route;
