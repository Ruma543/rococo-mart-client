import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {
  const loadCardDetails = useLoaderData();
  console.log(loadCardDetails);
  const { id } = useParams();
  const { name } = loadCardDetails;
  console.log(id);
  // const findDetails = loadCardDetails.find(details => details._id === id);
  // console.log(findDetails);
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default CardDetails;
