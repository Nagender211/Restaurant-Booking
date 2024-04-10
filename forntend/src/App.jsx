import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Home from './pages/Home'
import NotFound from './pages/notFound'
import Successe from './pages/Successe'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<Successe />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
