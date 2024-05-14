import { createRoot, hydrateRoot } from 'react-dom/client'
import { JabonesApp } from './JabonesApp.jsx'

import { BrowserRouter } from 'react-router-dom'

import './libcss/styles.config.css'

// hydrateRoot(document.getElementById('root'), 
// <BrowserRouter>
// <JabonesApp />
// </BrowserRouter>
// )

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
            <JabonesApp />
    </BrowserRouter>
)
