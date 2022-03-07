import React from 'react'
import { Link } from 'react-router-dom';

const Cards = ({ team_1, team_2, team_1_score, team_2_score, team_win, link }) => {

  const CardLink = () => {
    return(
      <Link to={link}>
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
      </Link>
    )
  }

  const Card = () => {
    return(
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
    )
  }
  return (
    <>
      <div className='card-wrapper'>
        {link ? <CardLink /> : <Card />}
      </div>
    </>
  )
}

export default Cards