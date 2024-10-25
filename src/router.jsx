import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BebidaMenu from './components/Restaurante/BebidaMenu';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BebidaMenu />} /> {/* Solo se mostrará el menú de bebidas */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
