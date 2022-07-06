import React, { useState } from 'react'
import DatePicker from '../../components/DatePicker'
import Cards from '../../components/Cards'
import FuCharts from '../../components/FuCharts'
import axiosProvider from '../../core/axios';

const Predictions = () => {
    const [request, setRequest] = useState(false)
    const [games, setGames] = useState(null)

    const handleDate = (date) => {
        axiosProvider.get(`games?est_date=${date}`).then((response) => {
            if (response.status === 200) {
                setRequest(true);
                setGames(response.data)
            } else {
                setRequest(false)
            }
        })
    }

    return (
        <>
            <div className='container'>
                <div className='container-full-width flex-col-center full-height' >
                    <div className='container-full'>
                        <div className='container-grid-2-flex full-height'>
                            <div className='back-ground-3 rectangle-cut-right'></div>
                            <div className='mobile-separator'></div>
                            <div className='full-gutter'>
                                <div className='container-content flex-col-center full-height'>
                                    <h1 className='big-text black-text bold-text pad-t-l'>Ruchy algorithm make his own predictions for tomorow games.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='container-full-width flex-col-center full-height'>
                    <div className='full-gutter'>
                        <div className='container-grid-2'>
                            <div className='grid-item flex-col-center'>
                                <div className='container-content flex-col-center'>
                                    <div className='card-cover'>
                                        <div className='card-list'>
                                            <Cards color="card-sand" team_1='chicago-bulls' team_2='boston-celtics' team_1_score="85%" team_2_score='15%' team_win='chicago-bulls' link={'/prediction/' + 1} />
                                            <Cards color="card-sand" team_1='new-york-knicks' team_2='los-angeles-lakers' team_1_score='25%' team_2_score='75%' team_win='los-angeles-lakers' link={'/prediction/' + 2} />
                                            <Cards color="card-sand" team_1='golden-state-warriors' team_2='san-antonio-spurs' team_1_score="95%" team_2_score='5%' team_win='golden-state-warriors' link={'/prediction/' + 3} />
                                            <Cards color="card-sand" team_1='portland-trail-blazers' team_2='minnesota-timberwolves' team_1_score="65%" team_2_score='35%' team_win='portland-trail-blazers' link={'/statistics/' + 4} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-item flex-col-center grid-first'>
                                <div className='stats-date'>
                                    <DatePicker color="picker-sand" handler={handleDate} />
                                </div>
                                <div className='today-details pad-t-m'>
                                    <div className='stats-info'>
                                        <p className='large-text black-text'>Matchs</p>
                                        <p className='large-text black-text pad-l-s'>4</p>
                                    </div>
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
                        <h2 className='big-text black-text bold-text center pad-b-xl'>Analizis charts to understand the prediction results</h2>
                        <div className='container-grid-2'>
                            <div className='grid-item flex-col-center'>
                                <div className='container-content flex-col-center'>
                                    <FuCharts />
                                </div>
                            </div>
                            <div className='grid-item flex-col-center'>
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

export default Predictions