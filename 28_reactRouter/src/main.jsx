import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import CreatePost from './components/CreatePost.jsx'




const route = createBrowserRouter([
  { path: "/", element: <App /> },
  {path:"/createPost", element:<CreatePost/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
    
  </StrictMode>,
)
