import { Link, useLoaderData } from 'react-router-dom';

const BrandCard = () => {
  const loadedBrands = useLoaderData() || [];
  console.log(loadedBrands);

  return (
    <div className="w-11/12 mx-auto my-7">
      <h3 className="text-2xl font-semibold text-center">
        Our All Available Brand
      </h3>
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
