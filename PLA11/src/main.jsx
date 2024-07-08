import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// TODO #1
// D'on venen els mètodes createRoot i render de les línies següents?
// Els mètodes createRoot i render provenen de la biblioteca react-dom/client.
// D'on ve l'element amb identificador root?
// L'element amb l'identificador root ve del document index.html. 
// Què fa el mètode render?
// El mètode render s'encarrega de renderitzar l'aplicació React a l'interior de l'element DOM especificat (en aquest cas, l'element amb id root).
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
