
import './App.css';
import Header from './components/Header';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ModeContext from './utils/ModeContext';
import { useState } from 'react';

function App() {
    const [mode, setMode] = useState('light')

  return <div className="app">

    <ModeContext.Provider value={{mode, setMode}}>
    <Header />
    <Outlet />
    </ModeContext.Provider>

  </div>
}

const Events = lazy(() => import('./components/Events'))
const Home = lazy(() => import('./components/Home'))
const Live = lazy(() => import('./components/Live'))
const MySpace = lazy(() => import('./components/MySpace'))
const Register = lazy(() => import('./components/Register'))
const Videos = lazy(() => import('./components/Videos'))

export const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
          {
              path: "/",
              element: <Suspense fallback={<h1>Loading...</h1>}><Home /></Suspense>,
          },
          {
              path: "events",
              element: <Suspense fallback={<h1>Loading...</h1>}><Events /></Suspense>,
          },
          {
              path: "live",
              element: <Suspense fallback={<h1>Loading...</h1>}><Live /></Suspense>,
          },
          {
              path: "myspace",
              element: <Suspense fallback={<h1>Loading...</h1>}><MySpace /></Suspense>,
          },
          {
              path: "register",
              element: <Suspense fallback={<h1>Loading...</h1>}><Register /></Suspense>,
          },
          {
              path: "videos",
              element: <Suspense fallback={<h1>Loading...</h1>}><Videos /></Suspense>,
          },
          
      ],
      // errorElement: <Error />
  },
]);

export default App;
