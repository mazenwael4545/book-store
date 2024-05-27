import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import SignUp from './Components/SignUp'
import Popular from './Components/Popular'
import Footer from './Components/Footer'
import Profile from './Components/Profile'
import SearchPage from './Components/SearchPage'

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <Router basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Popular />
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<h1>no page like that</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
