import React, { useEffect } from 'react'

const LoadingPage = () => {

    useEffect(() => {
        progress()
    })

    const progress = () => {

    }

    return (
        <>
            <div className='container-log'>
                <div className='container-full-width flex-col-center full-height'>
                    <div className='log-wrapper'>
                        <div className='log-logo pad-b-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.14 46.62">
                                <g id="ruchy_icon" data-name="Ruchy icon">
                                    <path d="M36.41,37.25h0s-.12-.26-2.69-6.47L33,29a5.24,5.24,0,0,1,1.82-6.2,9.64,9.64,0,0,0,2.74-3.05A14.18,14.18,0,0,0,39.13,13a11.78,11.78,0,0,0-4.22-9.43Q30.7,0,23.09,0H6.58A6.59,6.59,0,0,0,0,6.58V31.24a6.78,6.78,0,1,0,13.55,0v-4h4.27q3.22,7.52,6.46,15s2.25,6.36,9.61,3.7C39.46,43.25,36.4,37.26,36.41,37.25ZM13.55,17.87V9.38H19.8q5.13,0,5.19,4.23a3.53,3.53,0,0,1-1.55,3.13,7,7,0,0,1-4.11,1.08Z" />
                                </g>
                            </svg>
                        </div>
                        <div className='main-content'>
                            <div className='progres-bar'>
                                <div className='progress'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadingPage