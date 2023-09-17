"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Properties from './Properties';

const GetProperties= ({}) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/api/properties/");
        console.log(result.data);
        setProperties(result.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Properties properties={properties} />
    </>
  );
};

export default GetProperties;
