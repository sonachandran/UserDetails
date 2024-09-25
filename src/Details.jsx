import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const Details = () => {
  const [data, setData] = useState(''); 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/1`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); 
  }, []); 

  console.log("data", data);

  return (
    <div className='center mt-3'>
    
    <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Website:</strong> {data.website}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
   
  </div>
  );
};

export default Details;
