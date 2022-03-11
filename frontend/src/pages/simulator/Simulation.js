import React, { useEffect } from 'react'
import FuCard from '../../components/FuCard'

const Simulation = ({homeTeam, awayTeam}) => {

  useEffect(() => {
    console.log(`${homeTeam.name} vs ${awayTeam.name}`)
  }, [])

  return (
    <>
      <div className='full-width'>
        <div className='flex-col-center'>
          <FuCard color={'fu-orange'} homeTeam={homeTeam} awayTeam={awayTeam} />
        </div>
      </div>
    </>
  )
}

export default Simulation