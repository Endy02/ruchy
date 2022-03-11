import React, { useEffect, useState } from 'react'
import Simulation from './Simulation'
import GameSimulator from '../../components/GameSimulator'
import Cards from '../../components/Cards'
import Button from '../../components/Button'
import FuCharts from '../../components/FuCharts'

const Simulator = () => {
    const [homeTeam, setHomeTeam] = useState({})
    const [awayTeam, setAwayTeam] = useState({})
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleTeam = (homeTeam, awayTeam, status) => {
        setHomeTeam(homeTeam)
        setAwayTeam(awayTeam)
        setStatus(status)
        setTimeout(() => setLoading(false), 6000)
    }

    return (
        <>
            <div className='container'>
                <div className='container-full-width flex-col-center full-height' >
                    <div className='container-full'>
                        <div className='container-grid-2-flex full-height'>
                            <div className='back-ground-2 rectangle-cut-right'></div>
                            <div className='mobile-separator'></div>
                            <div className='full-gutter'>
                                <div className='container-content flex-col-center full-height'>
                                    <h1 className='big-text black-text bold-text pad-t-l'>Simulate all your favorite match with the actual NBA statistics</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-plus'>
                <div className='container-plus-inner flex-col-center full-height'>
                    <div className='full-gutter'>
                        <div className='container-grid-2'>
                            <div className='grid-item flex-col-center'>
                                <GameSimulator teams={handleTeam} />
                            </div>
                            <div className='grid-item flex-col-center'>
                                <div className='container-content flex-col-center'>
                                    {status ? <Simulation homeTeam={homeTeam} awayTeam={awayTeam} /> : (
                                        <>
                                            <h2 className='big-text black-text bold-text pad-b-m'>Select your match up and click on the play button to run the simulation</h2>
                                            <div className='logo-big'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.14 46.62">
                                                    <g id="Calque_2" data-name="Calque 2">
                                                        <path d="M36.41,37.25h0s-.12-.26-2.69-6.47L33,29a5.24,5.24,0,0,1,1.82-6.2,9.64,9.64,0,0,0,2.74-3.05A14.18,14.18,0,0,0,39.13,13a11.78,11.78,0,0,0-4.22-9.43Q30.7,0,23.09,0H6.58A6.59,6.59,0,0,0,0,6.58V31.24a6.78,6.78,0,1,0,13.55,0v-4h4.27q3.22,7.52,6.46,15s2.25,6.36,9.61,3.7C39.46,43.25,36.4,37.26,36.41,37.25ZM13.55,17.87V9.38H19.8q5.13,0,5.19,4.23a3.53,3.53,0,0,1-1.55,3.13,7,7,0,0,1-4.11,1.08Z" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='container-full-width flex-col-center full-height'>
                    <div className='spe-title flex-row-start'>
                        <h2 className='spe-right spe-bg-green large-text bold-text white-text'>Analyzis</h2>
                    </div>
                    <div className='full-gutter'>
                        <div className='container-grid-2'>
                            <div className='grid-item flex-col-center'>
                                <div className='container-content flex-col-center'>
                                    <FuCharts />
                                </div>
                            </div>
                            <div className='grid-item flex-col-center mobile'>
                                <div className='container-content flex-col-center'>
                                    <FuCharts />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Simulator