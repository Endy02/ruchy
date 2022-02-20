import React, { Component } from 'react'
import StatisticsPreview from './StatisticsPreview'
import SimulatorPreview from './SimulatorPreview'
import PredictionsPreview from './PredictionsPreview'
import Banner from './Banner'

export class Home extends Component {
  render() {
    return (
      <>
        <div className='wrapper-container'>
          <div className='first-container'>
              <Banner/>
          </div>
          <div className='container'>
            <StatisticsPreview />
          </div>
          <div className='container'>
            <h1 className='big-text bold-text black-text pad-l-m'>Simulator preview</h1>
          </div>
          <div className='container'>
            <h1 className='big-text bold-text black-text pad-l-m'>Predictions preview</h1>
          </div>
        </div>
      </>
    )
  }
}

export default Home