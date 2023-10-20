import { Link, useLoaderData } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const BrandCardDetails = () => {
  const loadedBrandCard = useLoaderData();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // console.log(loadedBrandCard);
  return (
    <div className="w-11/12 mx-auto">
      {loadedBrandCard.length === 0 ? (
        <div className="flex justify-center items-center">
          <p className="text-2xl font-semibold my-6">
            No Product are available now.
          </p>
        </div>
      ) : (
        <div className="w-11/12 mx-auto">
          <div className="my-5">
            <Slider {...settings}>
              {loadedBrandCard.map(item => (
                <div className="grid grid-cols-2 relative" key={item._id}>
                  <div>
                    <img
                      className="lg:w-2/5 w-full mx-auto lg:h-[70vh] h-[70vh]"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="absolute lg:top-10 top-5 lg:left-20 left-4 w-11/12 lg:w-1/3 mx-auto  text-blue-700">
                    <h3 className="lg:text-2xl text-xl font-semibold font-serif ">
                      {item.description}
                    </h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 my-5  lg:gap-5 space-y-5">
            {loadedBrandCard.map(card => (
              <div
                key={card._id}
                className="grid grid-cols-2 items-center bg-white shadow-lg rounded-lg px-4 py-5"
              >
                <div>
                  <img className="w-full lg:h-56" src={card.image} alt="" />
                </div>
                <div className="flex flex-col lg:items-center space-y-3">
                  <h3 className="text-xl font-semibold text-blue-600">
                    {card.brand}
                  </h3>
                  <h3 className="text-blue-400">
                    <span className="font-semibold text-blue-600">
                      Product Name:
                    </span>{' '}
                    {card.name}
                  </h3>
                  <h3 className="text-blue-400">
                    <span className="font-semibold text-blue-600">
                      Product Type:{' '}
                    </span>
                    {card.type}
                  </h3>
                  <h3 className="text-blue-400">
                    <span className="font-semibold text-blue-600">
                      Product Price:
                    </span>
                    ${card.price}
                  </h3>
                  <h3 className="text-blue-400">
                    <span className="font-semibold text-blue-600">
                      Product Rating:
                    </span>
                    {card.rating}
                  </h3>
                  <div className="flex justify-center lg:gap-4">
                    <Link to={`/updateProduct/${card._id}`}>
                      <button className="btn btn-success">Update</button>
                    </Link>
                    <Link to={`/cardDetails/${card._id}`}>
                      <button className="btn btn-primary">Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandCardDetails;
