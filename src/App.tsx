import useMockAdapter from './api/useMockAdapter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cls from "./App.module.scss";
import AppRouter from './providers/router/AppRouter';

export const App = () => {

  useMockAdapter();
  
  return (
    <>
      <div className={cls.app}>
        <AppRouter/>
      </div>
      <ToastContainer/>
    </>
  );
}