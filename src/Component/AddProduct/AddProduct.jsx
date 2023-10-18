import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
  const handleAddProduct = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const brand = form.get('brand');
    const type = form.get('type');
    const name = form.get('name');
    const description = form.get('description');
    const price = form.get('price');
    const rating = form.get('rating');
    const image = form.get('image');
    const newProduct = { brand, type, name, description, price, rating, image };
    console.log(newProduct);
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Add product successfully',
            showConfirmButton: true,
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto ">
      <h2 className="text-2xl text-center font-semibold">
        Add Your Brand Product
      </h2>
      <form onSubmit={handleAddProduct} className="bg-orange-200 px-6 py-6">
        {/* first row brand, type */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col space-y-4">
            <label className=" text-xl font-semibold text-left ">
              Brand Name
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Brand Name.."
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className=" text-xl font-semibold text-left ">
              Product Type
            </label>
            <input
              type="text"
              name="type"
              placeholder="Type of Product.."
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>
        </div>
        {/* 2nd name ,description */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col space-y-4">
            <label className=" text-xl font-semibold text-left ">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Product Name.."
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className=" text-xl font-semibold text-left ">
              Product Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description.."
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>
        </div>
        {/*3rd price,rating  */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col space-y-4">
            <label className=" text-xl font-semibold text-left ">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Product Price.."
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className=" text-xl font-semibold text-left ">Rating</label>
            <input
              type="number"
              name="rating"
              placeholder="Rating of Product.."
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>
        </div>
        {/* 4th image */}
        <div className="flex flex-col space-y-4 ">
          <label className=" text-xl font-semibold text-left ">
            Product Image
          </label>
          <input
            type="text"
            name="image"
            placeholder="Photo URL"
            className="w-full rounded-lg px-4 py-2 outline-0"
          />
        </div>
        {/* button */}
        <div className="flex justify-center my-3">
          <input
            className="btn btn-primary w-1/5 mx-auto"
            type="submit"
            value="Add New Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
