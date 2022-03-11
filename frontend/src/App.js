import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './layers/Navbar'
import Footer from './layers/Footer'
import Home from './pages/home/Home'
import Statistics from './pages/statistics/Statistics'
import Simulator from './pages/simulator/Simulator'
import Predictions from './pages/predictions/Predictions'
import Profile from './pages/users/Profile'
import Settings from './pages/users/Settings'
import StatisticDetails from './pages/statistics/StatisticDetails'
import PredictionsDetail from './pages/predictions/PredictonsDetail'
import Login from './pages/users/Login'


const App = () => {
    
    const [token, setToken] = useState('')

    const handleToken = (token) => {
        setToken(token)
    }

    if(token == ''){
        return(
            <Login token={handleToken}/>
        )
    }

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/login" />
                    <Route exact path="/register" />
                    <Route exact path="/forgot-password" />
                    <Route exact path="/reset-password" />
                    <Route exact path="/send-email" />
                    <Route exact path="/administration" />
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/statistics" element={<Statistics />} />
                    <Route exact path="/statistic/:slug" element={<StatisticDetails />}/>
                    <Route exact path="/simulator" element={<Simulator />} />
                    <Route exact path="/predictions" element={<Predictions />} />
                    <Route exact path="/prediction/:slug" element={<PredictionsDetail />}/>
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/settings" element={<Settings />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));