import CardsPage from './Pages/CardsPage/CardsPage';
import ErrorPage from './Pages/EerrorPage/error-page';
import { Outlet, Route, Routes } from 'react-router';
import './App.sass';
import { Navigate } from 'react-router-dom';

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
        <Route index element={<Navigate replace to={'/cards?page=1'} />} />
        <Route path="/cards?" element={<CardsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
