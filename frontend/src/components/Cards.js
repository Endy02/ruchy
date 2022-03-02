import React from 'react'

const Cards = ({ team_1, team_2, team_1_score, team_2_score, team_win }) => {


  return (
    <>
      <div className='card-wrapper'>
        <div className='card'>
          <div className={team_1 == team_win ? 'card-right card-bg-win' : 'card-right'}>
            <div className='card-header'>
              <div className='card-logo'>
                <img className='card-img-logo' src={"/assets/images/teams/" + team_1 + ".png"} />
              </div>
            </div>
            <div className='card-content-right'>
              <p className='large-text bold-text'>{team_1_score}</p>
            </div>
          </div>
          <div className={team_2 == team_win ? 'card-left card-bg-win' : 'card-left'}>
            <div className='card-header'>
              <div className='card-logo'>
                <img className='card-img-logo' src={"/assets/images/teams/" + team_2 + ".png"} />
              </div>
            </div>
            <div className='card-content-left'>
              <p className='large-text bold-text'>{team_2_score}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards