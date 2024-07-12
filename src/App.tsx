import CardsPage from './Pages/CardsPage/CardsPage';
import ErrorPage from './Pages/EerrorPage/error-page';
import { Outlet, Route, Routes } from 'react-router';
import './App.sass';

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CardsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
