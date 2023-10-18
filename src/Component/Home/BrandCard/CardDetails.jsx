import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
  const loadCardDetails = useLoaderData();
  console.log(loadCardDetails);
  const { id } = useParams();

  const { _id, brand, name, description, price, rating, image, type } =
    loadCardDetails || {};
  console.log(loadCardDetails);
  const handleAddToCard = _id => {
    fetch('http://localhost:5000/cards', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(loadCardDetails),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-3xl font-semibold text-center font-serif">
        Details Information of {name}
      </h3>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-5 w-2/3 mx-auto bg-white shadow-lg rounded-lg px-5 py-5">
        <img className="lg:h-[70vh]" src={image} alt="" />
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
            <span className="font-semibold">Product Price: </span>
            {price}
          </h3>
          <button
            onClick={handleAddToCard}
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
