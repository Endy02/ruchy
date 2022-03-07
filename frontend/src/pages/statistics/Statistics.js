import React, { useState, useEffect } from 'react'
import DatePicker from '../../components/DatePicker'
import Cards from '../../components/Cards'
import RankCard from '../../components/RankCard'
import TeamPrev from './TeamPrev'

const Statistics = () => {
  return (
    <>
      <div className='container'>
        <div className='container-full-width flex-col-center full-height' >
          <div className='container-full'>
            <div className=''>
              
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
                      <Cards team_1='golden-state' team_2='san-antonio-spurs' team_1_score="130" team_2_score='128' team_win='golden-state' link={'/statistics/'+ 3}/>
                      <Cards team_1='portland-trail-blazers' team_2='minnesota-timberwolves' team_1_score="120" team_2_score='90' team_win='portland-trail-blazers' link={'/statistics/'+ 4}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid-item flex-col-center grid-first'>
                <div className='stats-date'>
                  <DatePicker />
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
            <h2 className='spe-right spe-bg-sand large-text bold-text white-text'>Ranking</h2>
          </div>
          <div className='full-gutter'>
            <div className='container-grid-4'>
              <div className='grid-item'>
                <RankCard title="Points" team="los-angeles-lakers" score="112"/>
              </div>
              <div className='grid-item'>
                <RankCard title="3 Points" team="golden-state" score="67"/>
              </div>
              <div className='grid-item'>
                <RankCard title="Rebonds" team="chicago-bulls" score="34"/>
              </div>
              <div className='grid-item'>
                <RankCard title="Assists" team="boston-celtics" score="23"/>
              </div>
              <div className='grid-item'>
                <RankCard title="Free Throws" team="san-antonio-spurs" score="150"/>
              </div>
              <div className='grid-item'>
                <RankCard title="Steals" team="portland-trail-blazers" score="48"/>
              </div>
              <div className='grid-item'>
                <RankCard title="Blocks" team="new-york-knicks" score="21"/>
              </div>
              <div className='grid-item'>
                <RankCard title="Turnover" team="new-york-knicks" score="73"/>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Statistics