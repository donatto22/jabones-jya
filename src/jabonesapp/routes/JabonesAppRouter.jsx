import { lazy, Suspense } from 'react' 

import { Route, Routes, Navigate } from 'react-router-dom'

const JabonesPage = lazy(() => import('../pages/JabonesPage'))
const ContactUs = lazy(() => import('../pages/ContactUs'))
const Catalogo = lazy(() => import('../pages/Products'))

export const JabonesAppRouter = () => {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
                <Route path='/' element={<JabonesPage />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/products' element={<Catalogo />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </Suspense>
    )
}
