import React from 'react'
import { useHistory } from 'react-router'
import StatisticsPreview from './StatisticsPreview'
import SimulatorPreview from './SimulatorPreview'
import PredictionsPreview from './PredictionsPreview'
import Banner from './Banner'

const Home = () => {
    return (
        <>
            <div className='wrapper-container'>
                <div className='container'>
                    <Banner />
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

export default Home