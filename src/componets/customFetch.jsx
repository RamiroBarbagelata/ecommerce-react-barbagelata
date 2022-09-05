import elements from '../Mocks/products.json'

export const customFetch = new Promise((res, rej) => {
    let condition = true;

    setTimeout(() => {
        if (condition) {
            res(elements)
        } else {
            rej('no')
        }
    }, 2000)

})
