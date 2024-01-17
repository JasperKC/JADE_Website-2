import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './Navbar'
import Footer from './Footer'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
    <HashRouter>
      <div>
        <NavigationBar></NavigationBar>
        <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/Home" element = {<Home />} />
        <Route path = "/Contact" element = {<Contact />} />
        <Route path = "/About" element = {<About />} />
        </Routes>
      </div>
      </HashRouter>
      <Footer></Footer>
    </>
  )
}

export default App
