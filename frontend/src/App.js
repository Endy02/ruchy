import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './layers/navbar'
import Footer from './layers/footer'
import {Home} from './pages/Home'

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/statistics" element="" />
                        <Route exact path="/simulator" element="" />
                        <Route exact path="/predictions" element="" />
                        <Route exact path="/profile" element="" />
                        <Route exact path="/settings" element="" />
                    </Routes>
                    <Footer />
                </Router>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));