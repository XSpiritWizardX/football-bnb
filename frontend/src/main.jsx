// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import App from './App';
// import './index.css';
// import configureStore from './store';


// import { restoreCSRF, csrfFetch } from './store/csrf';

// import * as sessionActions from './store/session';







// const store = configureStore();



// if (import.meta.env.MODE !== 'production') {
//   restoreCSRF();

//   window.csrfFetch = csrfFetch;
//   window.store = store;
//   window.sessionActions = sessionActions;
// }












// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


// frontend/src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';
import * as spotActions from "./store/spots"
import { Modal, ModalProvider } from './context/Modal';




const store = configureStore();

if (import.meta.env.MODE !== 'production') {
  restoreCSRF();





  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.spotActions =spotActions;


}





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
      <Provider store={store}>
        <App />
        <Modal />
      </Provider>
    </ModalProvider>
  </React.StrictMode>
);
