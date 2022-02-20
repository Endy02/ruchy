import React from 'react'
import Button from '../../components/Button'
import Cards from '../../components/Cards'

const StatisticsPreview = () => {
  return (
    <>
      <div className='container-full-width flex-row-start pad-t-xl full-height'>
        <div className='medium-wrapper flex-col-center'>
          <div className='fu-title-left bg-blue'>
            <h2 className='large-text bold-text'>Statistics</h2>
          </div>
          <div className='card-cover'>
            <div className='card-list'>
              <div className='card-list-date'>
                <p className='medium-text bold-text'>Sunday February 20 2022</p>
              </div>
              <Cards team_1='chicago-bulls' team_2='boston-celtics' team_1_score="129" team_2_score='112' team_win='chicago-bulls' />
              <Cards team_1='new-york-knicks' team_2='los-angeles-lakers' team_1_score='106' team_2_score='114' team_win='los-angeles-lakers' />
              <Cards team_1='golden-state' team_2='san-antonio-spurs' team_1_score="130" team_2_score='128' team_win='golden-state' />
            </div>
          </div>
          <Button buttonSize="btn-large" mode="btn-regular" buttonStyle='btn-current' link='/statistics'>See more</Button>        
        </div>
        <div className='shape-wrapper-x-large'>
          <div className='rectangle-cut-left'>
            <img src='/assets/images/kobe-memorial-wall.jpg' className='rectangle-img' />
          </div>
        </div>
      </div>
    </>
  )
}

export default StatisticsPreview