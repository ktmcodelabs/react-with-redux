Import dependencies
``` 
npm i axios react-redux redux redux-thunk --save-dev 
```

Update *index.js* in root
``` import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import reducers from './redux/reducers';
import { updateReduxStore, reduxStore } from './redux/store'

let initState = reduxStore()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  initState,
  composeEnhancer(applyMiddleware(thunk)),
);
store.subscribe(() => {
  updateReduxStore(store)
})


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
) 
```

Configure store for redux to save state *redux/store.js*. Save and retrive from local storage to persist state data
```
const persistedState = localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY)
export const reduxStore = () => {
    let initState = {}
    if (persistedState) {
        initState = JSON.parse(persistedState)
    }
    return initState
}

export const updateReduxStore = (store) => {
    localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_KEY, JSON.stringify(store.getState()))
}

```

Create root reducer in *redux/reducers/index.js*.
**rootReducers** hold entire list of reducers in a key value pair.

```
import {combineReducers} from 'redux';
import usersReducer from './usersReducer';

// other reducers needs to import here
const rootReducers = combineReducers({
    usersData : usersReducer
// if there are other reducers , we can add here one by one
});
export default rootReducers;
```