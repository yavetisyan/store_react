import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from './App';
import './index.css';
import {persistStore} from 'redux-persist';
//...
let persistor = persistStore(store);


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<PersistGate persistor={persistor}>*/}
      <App/>
      {/*</PersistGate>*/}
    </Provider>
  </React.StrictMode>
);



