import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import Logout from './pages/users/Logout'
import Register from './pages/users/Register'
import ForgotPassword from './pages/users/ForgotPassword'
import ResetPassword from './pages/users/ResetPassword'
import Activate from './pages/users/Activate'
import ConfirmReset from './pages/users/ConfirmReset'

const App = () => {

    const [token, setToken] = useState('')

    const handleToken = (token) => {
        setToken(token)
    }

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/logout" element={<Logout />}/>
                    <Route exact path="/register" element={<Register />}/>
                    <Route exact path="/forgot-password" element={<ForgotPassword />}/>
                    <Route exact path="/statistics" element={<Statistics />} />
                    <Route exact path="/statistic/:slug" element={<StatisticDetails />} />
                    <Route exact path="/simulator" element={<Simulator />} />
                    <Route exact path="/predictions" element={<Predictions />} />
                    <Route exact path="/prediction/:slug" element={<PredictionsDetail />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/settings" element={<Settings />} />
                    <Route exact path="/activate/:uidb64/:token" element={<Activate />} />
                    <Route exact path="/confirm-reset/:uidb64/:token" element={<ConfirmReset />} />
                    <Route exact path="/reset-password/:uidb64/:token" element={<ResetPassword />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));