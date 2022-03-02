import React from 'react'
import Button from '../../components/Button'
import Cards from '../../components/Cards'

const StatisticsPreview = () => {
  return (
    <>
      <div className='container-full-width flex-col-center full-height'>
        <div className='spe-title flex-row-start'>
          <h2 className='spe-right spe-bg-blue large-text bold-text white-text'>Statistics</h2>
        </div>
        <div className='full-gutter'>
          <div className='container-grid-2'>
            <div className='grid-item flex-col-center'>
              <div className='container-content flex-col-center'>
                <div className='card-cover'>
                  <div className='card-list pad-b-l'>
                    <div className='card-list-date'>
                      <p className='medium-text bold-text'>Sunday February 20 2022</p>
                    </div>
                    <Cards team_1='chicago-bulls' team_2='boston-celtics' team_1_score="129" team_2_score='112' team_win='chicago-bulls' />
                    <Cards team_1='new-york-knicks' team_2='los-angeles-lakers' team_1_score='106' team_2_score='114' team_win='los-angeles-lakers' />
                    <Cards team_1='golden-state' team_2='san-antonio-spurs' team_1_score="130" team_2_score='128' team_win='golden-state' />
                  </div>
                </div>
                <Button buttonSize="btn-large" mode="btn-regular" buttonStyle='btn-current' link='/statistics'>Check out</Button>  
              </div>
            </div>
            <div className='grid-item flex-col-center mobile'>
              <div className='card-display'>
                <img src='/assets/images/kobe-memorial-wall.jpg' className='rectangle-img'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatisticsPreview