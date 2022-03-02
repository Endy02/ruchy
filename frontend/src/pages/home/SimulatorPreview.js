import React from 'react'
import Button from '../../components/Button'

const SimulatorPreview = () => {
  return (
    <>
      <div className='container-full-width flex-col-center full-height'>
        <div className='spe-title flex-row-end'>
          <h2 className='spe-left spe-bg-orange large-text bold-text white-text'>Simulator</h2>
        </div>
        <div className='full-gutter'>
          <div className='container-grid-2'>
            <div className='grid-item flex-col-center'>
              <div className='sim-wrapper'>
                <img src='/assets/images/simulator_view.svg'/>
              </div>
            </div>
            <div className='grid-item flex-col-center'>
              <div className='container-content flex-col-center'>
                <h3 className='big-text bold-text black-text center pad-b-l'>Choose your match up and run a simulation with the actual data from NBA</h3>
                <Button buttonSize="btn-large" mode="btn-regular" buttonStyle='btn-cream' link='/simulator'>Simulate</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SimulatorPreview