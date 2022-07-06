import React, { useEffect } from 'react'
import FuCard from '../../components/FuCard'

const Simulation = ({data, homeTeam, awayTeam}) => {

  useEffect(() => {
    console.log(homeTeam)
    console.log(`${homeTeam.name} vs ${awayTeam.name} : ${data.winner}`)
  }, [])

  return (
    <>
      <div className='full-width'>
        <div className='flex-col-center'>
          <FuCard color={'fu-orange'} prediction={data} homeTeam={homeTeam} awayTeam={awayTeam} homeTeamWin={data.winner} />
        </div>
      </div>
    </>
  )
}

export default Simulation