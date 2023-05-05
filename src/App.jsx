
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { LayoutMain } from './Layouts/LayoutMain';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutMain/>,
      children: [
        {
          path: "/",
          element: <Home/>
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
