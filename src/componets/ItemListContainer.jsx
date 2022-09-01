import React, {useState, useEffect} from 'react'
import { customFetch } from './customFetch';
import ItemList from './ItemList'
import elements from './products.json'
import ClipLoader from "react-spinners/ClipLoader";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [listProducts, setlistProducts] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {
    customFetch(elements)
    .then((res) => {
      setlistProducts(res);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });
  },[]);

  
  return (
    <>
      <p>{loading ? <ClipLoader color={"#4A4A4A"} loading={loading}  size={50} /> : null}</p>
      <ItemList listProducts = {listProducts} />
      <div>
        <h1 style={{ color: "#2B4865" }}>{greeting}</h1>
      </div>
    </>
  )
}

export default ItemListContainer

