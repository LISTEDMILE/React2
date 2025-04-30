import { StrictMode } from 'react';
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import counterStore from './store/index.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={counterStore}>
      <App />
      </Provider>
  </StrictMode>,
)
