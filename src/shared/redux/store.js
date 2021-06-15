const persistedState = localStorage.getItem(process.env.REACT_APP_LS_KEY)
export const reduxStore = () => {
    let initState = {}
    if (persistedState) {
        initState = JSON.parse(persistedState)
    }
    return initState
}

export const updateReduxStore = (store) => {
    localStorage.setItem(process.env.REACT_APP_LS_KEY, JSON.stringify(store.getState()))
}
