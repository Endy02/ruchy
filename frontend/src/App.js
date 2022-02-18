import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <>
                <h1 className='big-text black-text pad-l-m pad-t-m'>React is active man</h1>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));