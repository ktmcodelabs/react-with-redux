export const request = (type) => {
    return { type: type }
}

export const success = (type, data, dataType = '') => {
    return { type: type, payload: data, dataType: dataType }
}

export const failure = (type, error) => {
    return { type: type, payload: error }
}