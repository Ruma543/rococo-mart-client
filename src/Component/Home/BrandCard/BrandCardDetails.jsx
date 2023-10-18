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

  console.log(loadedBrandCard);
  return (
    <div className="w-11/12 mx-auto">
      {loadedBrandCard.length === 0 ? (
        <div className="flex justify-center items-center">
          <p className="text-2xl font-semibold">no data found</p>
        </div>
      ) : (
        <div>
          <div className="my-5">
            <Slider {...settings}>
              {loadedBrandCard.map(item => (
                <div className="grid grid-cols-2" key={item._id}>
                  <div>
                    <img
                      className="w-2/5 mx-auto lg:h-[70vh]"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3>{item.description}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 space-y-5">
            {loadedBrandCard.map(card => (
              <div
                key={card._id}
                className="grid grid-cols-2 items-center bg-white shadow-lg rounded-lg"
              >
                <div>
                  <img className="w-full h-56" src={card.image} alt="" />
                </div>
                <div className="flex flex-col items-center">
                  <h3>{card.brand}</h3>
                  <h3>{card.name}</h3>
                  <h3>{card.type}</h3>
                  <h3>{card.price}</h3>
                  <h3>{card.rating}</h3>
                  <div className="flex justify-center gap-4">
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
