import { Link, useLoaderData } from 'react-router-dom';
import logo from '../../../assets/small.png';

const BrandCard = () => {
  const loadedBrands = useLoaderData() || [];
  // console.log(loadedBrands);

  return (
    <div className="w-11/12 mx-auto my-7">
      <div>
        <img className="w-1/12 mx-auto" src={logo} alt="" />
        <h3 className="text-2xl  text-center font-serif">
          <span>W</span>
          <span>E</span>
          <span>L</span>
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
        </h3>
        <h3 className="text-2xl font-semibold text-center font-serif">
          Our All Available Brand
        </h3>
        <h3 className="text-sm  text-center text-blue-500">
          Quality is remembered long after the price is forgotten.
        </h3>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 space-y-4 ">
        {loadedBrands?.map(brand => (
          <div
            className="px-3 py-4 bg-white rounded-lg shadow-lg "
            key={brand.name}
          >
            <h3 className="text-2xl font-semibold text-center my-4">
              {brand.name}
            </h3>
            <div>
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-56 rounded-lg"
              />
            </div>
            <div className="flex gap-5 justify-center items-center  bottom-3  12 mx-auto ">
              <div className="flex flex-col justify-center my-3">
                <Link to={`/details/${brand.name}`}>
                  <button className="btn btn-primary">details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCard;
