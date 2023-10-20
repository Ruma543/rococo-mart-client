import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const MyCart = () => {
  const carts = useLoaderData();
  const { user } = useContext(AuthContext);
  const [productCart, setProductCart] = useState(carts);
  console.log(user.email);
  console.log(productCart);
  const filterCart = productCart.filter(item => item.email == user.email);
  console.log(filterCart);
  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://rococo-mart-server.vercel.app/deleteCard/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              const remaining = filterCart.filter(item => item._id !== _id);
              setProductCart(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="w-10/12 mx-auto">
      <h3 className="text-2xl text-center font-semibold font-serif my-3">
        Your Selected Product:{filterCart.length}
      </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5">
        {filterCart.map(cart => (
          <div className=" px-5 py-5 bg-blue-100 rounded-lg" key={cart._id}>
            <img className="w-full h-56 rounded-lg" src={cart.image} alt="" />
            <div className="flex justify-between items-center my-3">
              <div>
                <h3 className="text-xl font-semibold">Product: {cart.name}</h3>
                <h3 className="text-lg font-semibold">Price: {cart.price}</h3>
              </div>
              <div className="flex items-center flex-col">
                <h3 className="">{user?.displayName}</h3>
                <img
                  className="w-14 h-14 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            </div>
            <div className="  flex justify-center">
              <button
                onClick={() => handleDelete(cart._id)}
                className="btn btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
