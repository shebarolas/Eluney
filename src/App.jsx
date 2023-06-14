
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { LayoutMain } from './Layouts/LayoutMain';
import { Galeria } from './pages/Galeria';
import { Servicios } from './pages/Servicios';
import { Nosotros } from './pages/Nosotros';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutMain/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/galeria",
          element: <Galeria/>
        },
        {
          path: "/servicios",
          element: <Servicios/>
        },
        {
          path: "/nosotros",
          element: <Nosotros/>
        }
      ]
    }

  ]);


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
