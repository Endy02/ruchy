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
          <div className='container'>
              <Banner/>
          </div>
          <div className='container'>
            <StatisticsPreview />
          </div>
          <div className='container'>
            <SimulatorPreview />
          </div>
          <div className='container'>
            <PredictionsPreview />
          </div>
        </div>
      </>
    )
  }
}

export default Home