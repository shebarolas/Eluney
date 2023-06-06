
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { LayoutMain } from './Layouts/LayoutMain';
import { Galeria } from './pages/Galeria';
import { Servicios } from './pages/Servicios';

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
