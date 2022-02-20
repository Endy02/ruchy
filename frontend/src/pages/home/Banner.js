import React from 'react'
import Button from '../../components/Button'

const Banner = () => {

  return (
      <>
        <div className='banner'>
            <div className='shape-wrapper-medium shape-right-center'>
                <img src='/assets/images/jordan_dunk_shape.svg'/>
            </div>
            <div className='container-full-width'>
                <div className='medium-wrapper'>
                    <div className='banner-infos'>
                        <div className='banner-title'>
                            <h1 className='big-text bold-text'>Stayed up to date on statistics and performances of your favorite team.</h1>
                        </div>
                        <div className='banner-cta'>
                            <Button buttonSize="btn-large" mode="btn-regular" buttonStyle='btn-current' link='/register'>Register</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shape-wrapper-large shape-bottom-left-inc'>
                <img src='/assets/images/ball_shape_orange.svg'/>
            </div>
        </div>
      </>
  )
}

export default Banner