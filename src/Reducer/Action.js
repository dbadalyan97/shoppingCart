export const getDataAction = (data) => {
    return {
        type: 'GET_DATA',
        payload: data
    }
}

export const getSingleItem = (data) => {
    return {
        type: 'SINGLE_ITEM',
        payload: data
    }
}

export const addItemAction = (data) => {
    return {
        type: 'ADD_ITEM',
        payload: data
    }
}