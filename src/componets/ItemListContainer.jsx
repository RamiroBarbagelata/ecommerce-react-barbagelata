import React, { useState, useEffect } from 'react'
import { customFetch } from './customFetch';
import ItemList from './ItemList'
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../firebase/firebase';
import Slider from './Slider';


const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [listProducts, setlistProducts] = useState([]);
  const [error, setError] = useState('');

  const {categoryId} = useParams();


useEffect(() => {
  setLoading(true)
  const allProducts = categoryId ? query(collection(dataBase, "products"), where("category", "==", categoryId)) : collection(dataBase, "products")
  getDocs(allProducts)
  .then((result) => {
    const list = result.docs.map((product) => {
      return{
        id:product.id,
        ...product.data()
      }
    })
    setlistProducts(list)
  })
  .catch((error) => console.log(error))
  .finally(() => setLoading(false))
}, [categoryId])

  return (
    <>
    <Slider/>
    <div className='itemListContainer' style={{padding:'4rem'}}>
    {loading ? <ClipLoader color={"#4A4A4A"} loading={loading} size={50} /> : <ItemList listProducts={listProducts} />}
    </div>
    
    </>
  )
}

export default ItemListContainer

