import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { dataBase } from '../firebase/firebase';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const productCollection = collection(dataBase, "products")
        const referenceDoc = doc(productCollection, id)

        getDoc(referenceDoc)
        .then((result) => {
            setProductDetail({
                id:result.id,
                ...result.data()
            })
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    },[])

    console.log('detalle', productDetail)
    return (
        <div>
            {loading ?  <ClipLoader color={"#4A4A4A"} loading={loading} size={50} />  : <ItemDetail productDetail={productDetail} />}
        </div>
    )
}

export default ItemDetailContainer