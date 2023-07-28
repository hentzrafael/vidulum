import { RouterProvider } from 'react-router-dom'
import './App.css'
import MiniDrawer from './components/Drawer'
import LoginPage from './pages/LoginPage'
import router from './router'

function App() {
  return (
    <>
      {/* <MiniDrawer/> */}
      <LoginPage />
      <RouterProvider router={router} />
    </>
  )
}

export default App
