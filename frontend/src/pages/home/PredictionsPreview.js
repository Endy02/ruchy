import React from 'react'
import Button from '../../components/Button'
import FuCard from '../../components/FuCard'

const PredictionsPreview = () => {
  return (
    <>
      <div className='container-full-width flex-col-center full-height'>
        <div className='spe-title flex-row-start'>
          <h2 className='spe-right spe-bg-sand large-text bold-text white-text'>Predictions</h2>
        </div>
        <div className='full-gutter'>
          <div className='container-grid-2'>
            <div className='grid-item flex-col-center'>
              <div className='container-content flex-col-center'>
                <FuCard />
                <Button buttonSize="btn-large" mode="btn-regular" buttonStyle='btn-sand' link='/statistics'>See more</Button>
              </div>
            </div>
            <div className='grid-item flex-col-center mobile'>
              <img src='/assets/images/kd_shape.svg' className='rectangle-img-small'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PredictionsPreview