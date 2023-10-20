import { useContext } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const CardDetails = () => {
  const loadCardDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(loadCardDetails);
  const { id } = useParams();

  const { _id, brand, name, description, price, rating, image, type } =
    loadCardDetails || {};
  // console.log(loadCardDetails);
  // const newCard = loadCardDetails || {};

  const handleAddToCard = newCard => {
    const { _id, brand, name, description, price, rating, image, type } =
      newCard;
    const userObject = { email: user.email };
    const product = {
      email: user.email,
      productId: _id,
      brand,
      name,
      description,
      price,
      rating,
      image,
      type,
    };

    newCard.user = userObject;
    console.log(newCard);
    fetch('https://rococo-mart-server.vercel.app/cards', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Cart added successfully',
          showConfirmButton: true,
        });
        navigate('/myCart');
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-3xl font-semibold text-center my-3 font-serif">
        Details Information of {name}
      </h3>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 my-5 lg:w-2/3 w-full mx-auto bg-white shadow-lg rounded-lg px-5 py-5">
        <img className="lg:h-[60vh] h-[50vh]" src={image} alt="" />
        <div className="flex flex-col space-y-4 ">
          <h3 className="text-2xl font-semibold"> {brand}</h3>
          <h3>
            <span className="font-semibold">Product Name: </span> {name}
          </h3>
          <h3>
            <span className="font-semibold">Product Type: </span> {type}
          </h3>
          <h3>
            <span className="font-semibold">Product Review: </span>
            {description}
          </h3>
          <h3>
            <span className="font-semibold">Product Rating: </span>
            {rating}
          </h3>
          <h3>
            <span className="font-semibold">Product Price: $</span>
            {price}
          </h3>

          <button
            onClick={() => handleAddToCard(loadCardDetails)}
            className="btn btn-primary w-2/3 mx-auto my-3"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
