import React from 'react'

const Profile = () => {
  return (
    <div className='container'>
            <div className='container-full-width flex-col-center full-height' >
                <div className='container-full flex-col-center'>
                    <div className='full-gutter'>
                        <div className='container-grid-2 '>
                            <div className='flex-row-center'>
                                <div className='circle-small'>
                                    <img src='/assets/images/kobe-memorial-wall.jpg'/>
                                </div>
                                <div className='user-info pad-l-l'>
                                    <h1 className='big-text black-text bold-text'>Fujyn</h1>
                                    <p className='large-text black-text regular-text'>endy.alexis@outlook.com</p>
                                </div>
                                <div className='icon pad-l-m'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className='flex-col-center'>
                                <div className='star-icon flex-row-end'>
                                    <span className='fa fa-star checked'></span>
                                </div>
                                <div className='flex-row-center'>
                                    <Selector />
                                    <p className='big-text bold-text black-text pad-l-l'>Chicago Bulls</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default Profile