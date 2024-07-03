import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { PageProvider } from './context/PageContext.jsx'
import {  VoteProvider } from './context/VoteContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <PageProvider>
    <VoteProvider>
  <AuthProvider>

    <Provider store={store}>
    <App />
    </Provider>
  </AuthProvider>
   

    </VoteProvider>
    </PageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
