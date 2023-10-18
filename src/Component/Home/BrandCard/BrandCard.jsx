import { Link, useLoaderData } from 'react-router-dom';

const BrandCard = () => {
  const loadedBrands = useLoaderData() || [];
  console.log(loadedBrands);

  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-2xl font-semibold text-center">
        Our All Available Brand
      </h3>
      <div className="grid grid-cols-3 gap-5 space-y-4">
        {loadedBrands?.map(brand => (
          <div className="relative px-3 py-2" key={brand.name}>
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-56 rounded-lg"
            />
            <div className="flex gap-5 justify-center items-center absolute bottom-4 right-0 bg-black/25 w-11/12 mx-auto">
              <h3 className="text-2xl font-semibold text-center">
                {brand.name}
              </h3>
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
