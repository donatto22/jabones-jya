import { createRoot } from 'react-dom/client'
import { JabonesApp } from './JabonesApp.jsx'

import { BrowserRouter } from 'react-router-dom'

import './libcss/styles.config.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
            <JabonesApp />
    </BrowserRouter>
)
