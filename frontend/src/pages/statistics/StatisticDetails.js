import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axiosProvider from '../../core/axios';
import TeamPrev from './TeamPrev'
import FuCard from '../../components/FuCard'


const StatisticDetails = () => {
    const { uidb64 } = useParams();
    const [request, setRequest] = useState(false);
    const [game, setGame] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        try {
            axiosProvider.get(`game/${uidb64}`).then((response) => {
                if (response.status === 200) {
                    setRequest(true);
                    setGame(response.data)
                } else {
                    setRequest(false)
                }
            })
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('Game does not exist yet');
            } else {
                setErrMsg('Game fetching failed')
            }
        }
    }, [])


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
                                        {game ? 
                                        <>
                                            <p className='large-text black-text regular-text pad-t-m'>{`${game.home_team_name} VS ${game.away_team_name}`}</p>
                                        </> : <></>}
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
                                    <FuCard color={'fu-blue'} data={game ? game : null} />
                                </div>
                            </div>
                            <div className='grid-item flex-col-center mobile'>
                                <img src='/assets/images/kd_shape.svg' className='rectangle-img-small' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatisticDetails