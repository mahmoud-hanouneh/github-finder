import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
// Pages 
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
// Components 
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import { GithubProvider } from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
        <Router>
            <div className="App">
              <div className="flex flex-col justify-between h-screen">

                <Navbar />

                <main className='container pb-12 mx-auto px-3'>
                  <Routes>

                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/notfound' element={<NotFound />}/>
                    <Route path='/*' element={<NotFound />}/>
                    
                  </Routes>
                </main>

                <Footer />

              </div>
            </div>
        </Router>
      </GithubProvider>
  )
    
   
}

export default App
