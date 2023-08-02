import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import App from 'components/App';
import { HashRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter>
        <App />
        </HashRouter>
    </Provider>
  </React.StrictMode>,
);


// ReactDOM.render(
//   <React.StrictMode>
//     <HashRouter>
//       <App />
//       <ToastContainer />
//       </HashRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );