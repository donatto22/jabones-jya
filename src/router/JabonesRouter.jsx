import { Route, Routes } from 'react-router-dom'
import { JabonesAppRouter } from '../jabonesapp/routes/JabonesAppRouter'

export const JabonesRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={<JabonesAppRouter />} />
        </Routes>
    )
}
