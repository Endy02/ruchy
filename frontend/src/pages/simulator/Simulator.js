import React, { useEffect, useState } from 'react'
import Simulation from './Simulation'
import GameSimulator from '../../components/GameSimulator'
import RankCard from '../../components/RankCard'
import axiosProvider from '../../core/axios';
import { throws } from 'assert';

const Simulator = () => {
    const [homeTeam, setHomeTeam] = useState({})
    const [awayTeam, setAwayTeam] = useState({})
    const [homeTeamWin, setHomeTeamWin] = useState(null)
    const [error, setError] = useState({})
    const [errMsg, setErrMsg] = useState("")
    const [simulation, setSimulation] = useState(false)
    const [data, setData] = useState({})
    const [ranking, setRanking] = useState({})

    useEffect(async () => {
        try {
            const response = await axiosProvider.post(`game/ranking/`,{},{
                xsrfHeaderName: 'X-CSRFTOKEN',
                xsrfCookieName: 'csrftoken',
            })
                setRanking(response.data)
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('Process not initialized');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Simulator failed')
            }
        }
    }, [])

    const handleTeam = async (homeTeam, awayTeam, errors) => {
        try {
            setSimulation(true)
            const response = await axiosProvider.post(`game/simulate/`,{
                "homeTeam": homeTeam.id,
                "awayTeam": awayTeam.id
            },{
                xsrfHeaderName: 'X-CSRFTOKEN',
                xsrfCookieName: 'csrftoken',
            })
                setData(response.data)
                setSimulation(false)
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('Process not initialized');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Simulator failed')
            }
        }
        setError({})
        setHomeTeam(homeTeam)
        setAwayTeam(awayTeam)
        if(errors.message){
            setError(errors)   
        }
        setHomeTeamWin(true)
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
                                    {error.message ? 
                                        <>
                                            <h2 className='big-text black-text bold-text pad-b-m'>{error.message}</h2>
                                            <div className='logo-big'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.14 46.62">
                                                    <g id="Calque_2" data-name="Calque 2">
                                                        <path d="M36.41,37.25h0s-.12-.26-2.69-6.47L33,29a5.24,5.24,0,0,1,1.82-6.2,9.64,9.64,0,0,0,2.74-3.05A14.18,14.18,0,0,0,39.13,13a11.78,11.78,0,0,0-4.22-9.43Q30.7,0,23.09,0H6.58A6.59,6.59,0,0,0,0,6.58V31.24a6.78,6.78,0,1,0,13.55,0v-4h4.27q3.22,7.52,6.46,15s2.25,6.36,9.61,3.7C39.46,43.25,36.4,37.26,36.41,37.25ZM13.55,17.87V9.38H19.8q5.13,0,5.19,4.23a3.53,3.53,0,0,1-1.55,3.13,7,7,0,0,1-4.11,1.08Z" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </>
                                    : !error.message && homeTeamWin != null ? <Simulation data={data} homeTeam={homeTeam} awayTeam={awayTeam} homeTeamWin={homeTeamWin}/> : (
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
                        <h2 className='spe-right spe-bg-sand large-text bold-text white-text'>Ranking</h2>
                    </div>
                    <div className='full-gutter'>
                        <div className='container-grid-4'>
                            <div className='grid-item'>
                                <RankCard title="Points" team={ranking['points'] ? ranking['points'].team : null } score={ranking['points'] ? ranking['points'].score : null } />
                            </div>
                            <div className='grid-item'>
                                <RankCard title="3 Points" team={ranking['three_points'] ? ranking['three_points'].team : null } score={ranking['three_points'] ? ranking['three_points'].score : null } />
                            </div>
                            <div className='grid-item'>
                                <RankCard title="Rebonds" team={ranking['rebonds'] ? ranking['rebonds'].team : null } score={ranking['rebonds'] ? ranking['rebonds'].score : null } />
                            </div>
                            <div className='grid-item'>
                                <RankCard title="Assists" team={ranking['assists'] ? ranking['assists'].team : null } score={ranking['assists'] ? ranking['assists'].score : null } />
                            </div>
                            <div className='grid-item'>
                                <RankCard title="Free Throws" team={ranking['free_throws'] ? ranking['free_throws'].team : null } score={ranking['free_throws'] ? ranking['free_throws'].score : null } />
                            </div>
                            <div className='grid-item'>
                                <RankCard title="Steals" team={ranking['steals'] ? ranking['steals'].team : null } score={ranking['steals'] ? ranking['steals'].score : null } />
                            </div>
                            <div className='grid-item'>
                                <RankCard title="Blocks" team={ranking['blocks'] ? ranking['blocks'].team : null } score={ranking['blocks'] ? ranking['blocks'].score : null } />
                            </div>
                            <div className='grid-item'>
                                <RankCard title="Turnover" team={ranking['turnover'] ? ranking['turnover'].team : null } score={ranking['turnover'] ? ranking['turnover'].score : null } />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Simulator