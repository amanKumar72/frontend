import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { store } from './store/store1.js'
import { store } from './store/store.js'
import {Provider} from 'react-redux'


// providing the accres of the store to all children of the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
