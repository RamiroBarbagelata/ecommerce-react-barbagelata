import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { customFetch } from './customFetch';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        customFetch
            .then((res) => setProductDetail(res.find((item) => item.id === id)))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))

    }, [id])
    console.log('detalle', productDetail)
    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail} />}
        </div>
    )
}

export default ItemDetailContainer