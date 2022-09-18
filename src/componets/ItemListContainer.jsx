import React, { useState, useEffect } from 'react'
import { customFetch } from './customFetch';
import ItemList from './ItemList'
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [listProducts, setlistProducts] = useState([]);
  const [error, setError] = useState('');

  const {categoryId} = useParams();



  useEffect(() => {
    customFetch
      .then((res) => {
        if(categoryId){
          setlistProducts(res.filter((item) => item.category === categoryId));
        }else{
          setlistProducts(res);
        }
        
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);


  return (
    <>
      <p>{loading ? <ClipLoader color={"#4A4A4A"} loading={loading} size={50} /> : null}</p>
      <ItemList listProducts={listProducts} />
      {/* <div>
        <h1 style={{ color: "#2B4865" }}>{greeting}</h1>
      </div> */}
    </>
  )
}

export default ItemListContainer

