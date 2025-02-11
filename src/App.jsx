import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppLayout } from './pages/AppLayout';
import { Home } from './pages/Home';
import { Countries } from './pages/Countries';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CountryDetail } from './components/UI/CountryDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/countries",
        element: <Countries />
      },
      {
        path: "/countries/:id",
        element: <CountryDetail />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
]);

function App () {
  return(
   <RouterProvider router={router}/>
  );
};

export default App