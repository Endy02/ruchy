import React, { useState, useEffect } from 'react'
import DatePicker from '../../components/DatePicker'
import Cards from '../../components/Cards'
import TeamPrev from './TeamPrev'

const Statistics = () => {
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
      <div className='container'>
        <div className='container-full-width flex-col-center full-height'>
          <div className='full-gutter'>
            <div className='container-grid-2'>
              <div className='grid-item flex-col-center'>
                <div className='container-content flex-col-center'>
                  <div className='card-cover'>
                    <div className='card-list'>
                      <Cards team_1='chicago-bulls' team_2='boston-celtics' team_1_score="129" team_2_score='112' team_win='chicago-bulls' link={'/statistics/'+ 1}/>
                      <Cards team_1='new-york-knicks' team_2='los-angeles-lakers' team_1_score='106' team_2_score='114' team_win='los-angeles-lakers' link={'/statistics/'+ 2}/>
                      <Cards team_1='golden-state-warriors' team_2='san-antonio-spurs' team_1_score="130" team_2_score='128' team_win='golden-state-warriors' link={'/statistics/'+ 3}/>
                      <Cards team_1='portland-trail-blazers' team_2='minnesota-timberwolves' team_1_score="120" team_2_score='90' team_win='portland-trail-blazers' link={'/statistics/'+ 4}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid-item flex-col-center grid-first'>
                <div className='stats-date'>
                  <DatePicker color="picker-blue"/>
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
    </>
  )
}

export default Statistics