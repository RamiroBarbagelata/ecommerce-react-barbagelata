import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { dataBase } from '../firebase/firebase';
import { customFetch } from './customFetch';
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

    // useEffect(() => {
    //     customFetch
    //         .then((res) => setProductDetail(res.find((item) => item.id === id)))
    //         .catch((err) => console.log(err))
    //         .finally(() => setLoading(false))

    // }, [id])
    console.log('detalle', productDetail)
    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail} />}
        </div>
    )
}

export default ItemDetailContainer