import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className='footer'>
        <div className='footer-header'>
          <Link onClick={scrollToTop} className='footer-logo-link' to='/'>
            <svg className='footer-logo-wrapper' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.14 46.62">
              <g id="Calque_2" data-name="Calque 2">
                <g id="Calque_1-2" data-name="Calque 1">
                  <path className="footer-logo" d="M36.41,37.25h0s-.12-.26-2.69-6.47L33,29a5.24,5.24,0,0,1,1.82-6.2,9.64,9.64,0,0,0,2.74-3.05A14.18,14.18,0,0,0,39.13,13a11.78,11.78,0,0,0-4.22-9.43Q30.7,0,23.09,0H6.58A6.59,6.59,0,0,0,0,6.58V31.24a6.78,6.78,0,1,0,13.55,0v-4h4.27q3.22,7.52,6.46,15s2.25,6.36,9.61,3.7C39.46,43.25,36.4,37.26,36.41,37.25ZM13.55,17.87V9.38H19.8q5.13,0,5.19,4.23a3.53,3.53,0,0,1-1.55,3.13,7,7,0,0,1-4.11,1.08Z"/>
                </g>
              </g>
            </svg>
          </Link>
        </div>
        <div className='footer-content'>
          <div className='footer-content-items'>
            <ul className='footer-link-list'>
              <li><Link className='footer-link' to="/statistics"><p className='medium-text bold-text'>Statistics</p></Link></li>
              <li><Link className='footer-link' to="/simulator"><p className='medium-text bold-text'>Simulator</p></Link></li>
              <li><Link className='footer-link' to="/predictions"><p className='medium-text bold-text'>Predictions</p></Link></li>
            </ul>
          </div>
        </div>
        <div className='footer-footer'>
          <div className='footer-footer-wrapper'>
            <div className='footer-copy'>
              <p className='medium-text bold-text white-text'>&copy; {(new Date().getFullYear())} Ruchy</p>
            </div>
            <div className='footer-builder'>
              <p className='small-text bold-text white-text'>Made by fujyn</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer