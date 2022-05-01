import React, { useState, useEffect } from 'react'
import DatePicker from '../../components/DatePicker'
import Cards from '../../components/Cards'
import TeamPrev from './TeamPrev'
import axiosProvider from '../../core/axios';
import moment from 'moment';

const Statistics = () => {
    const [request, setRequest] = useState(false)
    const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"))
    const [games, setGames] = useState(null)

    useEffect(() => {
        axiosProvider.get(`games/`).then((response) => {
            if (response.status === 200) {
                setRequest(true);
                setGames(response.data)
            } else {
                setRequest(false)
            }
        })
    }, [])

    const handleDate = (date) => {
        setDate(date)
    }

    return (
        <>
            <div className='container'>
                <div className='container-full-width flex-col-center full-height' >
                    <div className='container-full'>
                        <div className='container-medium-width'>
                            <div className='container-grid-2 full-height'>
                                <div className='full-gutter'>
                                    <div className='container-content flex-col-center full-height'>
                                        <h1 className='big-text black-text bold-text pad-t-l'>Consult games statistics and stay up to date with the NBA games.</h1>
                                    </div>
                                </div>
                                <div className='back-ground rectangle-cut-left'>
                                </div>
                            </div>
                        </div>
                        <div className='container-bottom flex-col-center'>
                            <TeamPrev />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-m-h'>
                <div className='container-m-h flex-col-center'>
                    <div className='full-gutter'>
                        <div className='container-grid-2'>
                            <div className='grid-item flex-col-center'>
                                <div className='container-content flex-col-center'>
                                    <div className='card-cover'>
                                        <div className='card-list'>
                                            {games ? games.filter(games => moment(games.est_date).format('YYYY-MM-DD') == date).map((filterdGames, i) => {
                                                var homeTeam = filterdGames.home_team_name.toLowerCase().replaceAll(" ", "-")
                                                var awayTeam = filterdGames.away_team_name.toLowerCase().replaceAll(" ", "-")
                                                var winner = filterdGames.home_team_win ? homeTeam : awayTeam
                                                return (
                                                    <>
                                                        <Cards team_1={homeTeam} team_2={awayTeam} team_1_score={filterdGames.pts_home} team_2_score={filterdGames.pts_away} team_win={winner} link={'/statistic/' + filterdGames.uuid} />
                                                    </>
                                                )
                                            }) :
                                                <>
                                                    <h2 className='big-text bold-text black-text'>No game found</h2>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-item flex-col-center grid-first'>
                                <div className='stats-date'>
                                    <DatePicker color="picker-blue" handler={handleDate} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistics