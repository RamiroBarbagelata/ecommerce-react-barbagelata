import React, { useEffect, useState } from 'react'
import { customFetch } from './customFetch';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        customFetch
            .then((res) => setProductDetail(res.find((item) => item.id === 102)))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))

    }, [])
    console.log('detalle', productDetail)
    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail} />}
        </div>
    )
}

export default ItemDetailContainer