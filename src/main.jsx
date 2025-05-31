import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import 'normalize.css';
import App from './components/App/App.jsx'
import { store, persistor } from "./redux/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
      </Provider>
  </StrictMode>,
)
