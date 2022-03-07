import React from 'react'

const RankCard = ({title, team, score}) => {

  return (
    <>
        <div className='rank-card'>
            <div className='rank-card-header'>
                <p className='medium-text bold-text white-text pad-b-s'>{title}</p>
                <p className='large-text bold-text white-text'>{score}</p>
            </div>
            <div className='rank-card-footer'>
                <div className='card-logo-big'>
                    <img className='card-img-logo' src={"/assets/images/teams/" + team + ".png"} />
                </div>
            </div>
        </div>
    </>
  )
}

export default RankCard