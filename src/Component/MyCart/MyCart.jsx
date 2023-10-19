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
  const filterCart = productCart.filter(item => item.user.email == user.email);
  console.log(filterCart);
  const handleDelete = _id => {
    console.log(_id);
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!',
    // }).then(result => {
    // if (result.isConfirmed) {
    fetch(`http://localhost:5000/deleteCard/${_id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          const remaining = filterCart.filter(item => item._id == _id);
          setProductCart(remaining);
        }
      });
    // }
    // });
  };
  return (
    <div className="w-10/12 mx-auto">
      <h3>Your Selected Product:{filterCart.length}</h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5">
        {filterCart.map(cart => (
          <div className=" px-5 py-5 bg-orange-300 rounded-lg" key={cart._id}>
            <img className="w-full h-56 rounded-lg" src={cart.image} alt="" />
            <h3>{cart.name}</h3>
            <h3>{cart.user.email}</h3>
            <button
              onClick={() => handleDelete(cart._id)}
              className="btn btn-error"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
