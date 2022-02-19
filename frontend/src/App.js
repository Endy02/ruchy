import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './layers/Navbar'
import Footer from './layers/Footer'
import Home from './pages/Home'
import Statistics from './pages/statistics/Statistics'
import Simulator from './pages/simulator/Simulator'
import Predictions from './pages/predictions/Predictions'
import Profile from './pages/users/Profile'
import Settings from './pages/users/Settings'
class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/statistics" element={<Statistics />} />
                        <Route exact path="/simulator" element={<Simulator />} />
                        <Route exact path="/predictions" element={<Predictions />} />
                        <Route exact path="/profile" element={<Profile />} />
                        <Route exact path="/settings" element={<Settings />} />
                    </Routes>
                    <Footer />
                </Router>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));