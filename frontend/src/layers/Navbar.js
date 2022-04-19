import React, {useEffect, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '../components/Button'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [isAuth, setIsAuth] = useState(false)


    useEffect(() => {
        if(localStorage.getItem('access_token')){
            setIsAuth(true)
        }else{
            setIsAuth(false)
        }
    }, [])

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton)

    return (
        <>
            <header className={click ? "navbar nav-bg-orange" : "navbar"}>
                <Link to='/' className="nav-logo" onClick={closeMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.52 45.51">
                        <g id="Calque_2" data-name="Calque 2">
                            <g id="Calque_1-2" data-name="Calque 1">
                                <g id="Calque_2-2" data-name="Calque 2-2">
                                    <path className={click ? 'cls-1-active' : 'cls-1'} d="M203.37.68a5.13,5.13,0,0,0-4.61,2.82l-6,11.73-1.61-3.11h0l-4.24-7.95A6.56,6.56,0,0,0,181.1.68H160.77a6.59,6.59,0,0,0-6.58,6.58v9.65h-3.77a6.58,6.58,0,0,1-6.58-6.58V7.26A6.58,6.58,0,0,0,137.28.68h-.38a6.59,6.59,0,0,0-6.59,6.58v26.8H103.5a5.75,5.75,0,0,1-1.28-1.37c-1.11-1.72-1.67-5-1.67-9.79q0-12.82,6.41-12.83a5.13,5.13,0,0,1,4,2,6.44,6.44,0,0,1,1.28,2.56,5.12,5.12,0,0,0,5.39,3.54l1.67-.09a5.21,5.21,0,0,0,4.89-5.52,5.09,5.09,0,0,0-.37-1.63,17.88,17.88,0,0,0-3.84-6Q115.31,0,106.55,0,97.19,0,91.94,6.41T86.69,23.09A27.25,27.25,0,0,0,88.8,34H81.1a22.3,22.3,0,0,0,.4-4.16v-24A5.14,5.14,0,0,0,76.36.72H76A5.13,5.13,0,0,0,70.9,5.85V21a27.47,27.47,0,0,1-.31,5.13,4,4,0,0,1-1.87,2.38,7,7,0,0,1-4,1,5.63,5.63,0,0,1-4.4-1.41A6.73,6.73,0,0,1,59,23.52V15a6.58,6.58,0,0,0-6.58-6.58h-.62A6.58,6.58,0,0,0,45.24,15h0V30.63a20.71,20.71,0,0,0,.29,3.43h-7a5.12,5.12,0,0,1-4.77-3.19L33,29.09a5.24,5.24,0,0,1,1.82-6.2,9.64,9.64,0,0,0,2.74-3.05,14.18,14.18,0,0,0,1.58-6.75,11.78,11.78,0,0,0-4.22-9.43Q30.7.09,23.09.09H6.58A6.59,6.59,0,0,0,0,6.67V31.33a6.78,6.78,0,0,0,6.77,6.78h0a6.78,6.78,0,0,0,6.78-6.78h0v-4h4.27L22.25,38.9a10.25,10.25,0,0,0,9.59,6.61H132.73A11.12,11.12,0,0,0,143.84,34.4h0V27.65h3.77a6.59,6.59,0,0,1,6.58,6.58v4a6.57,6.57,0,0,0,6.57,6.57h.4a6.58,6.58,0,0,0,6.58-6.57v-21a5.13,5.13,0,0,1,5.13-5.13h1a5.15,5.15,0,0,1,4.45,2.57l5.79,9.91a6.45,6.45,0,0,1,.89,3.31v5.21a6.59,6.59,0,0,0,6.59,6.57h0a6.58,6.58,0,0,0,6.58-6.57V27.8a6.48,6.48,0,0,1,.79-3.14l8.88-16.35a5.13,5.13,0,0,0-4.5-7.63ZM13.55,18V9.47H19.8q5.13,0,5.19,4.23a3.53,3.53,0,0,1-1.55,3.13,7,7,0,0,1-4.11,1.08Z"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </Link>
                <div className="nav-content">
                    <div className={click ? "nav-list active" : "nav-list"}>
                        <div className='nav-content-header'>
                            {isAuth ? (
                                <>
                                    {button && <Button buttonSize="btn-medium" mode="btn-regular" buttonStyle='btn-great' link='/logout'>Logout</Button>}
                                </>
                            ) : (
                                <>
                                    {button && <Button buttonSize="btn-medium" mode="btn-regular" buttonStyle='btn-current' link='/login'>Sign in</Button>}
                                </>
                            )}
                        </div>
                        <ul className='nav-item-list'>
                            <li className="nav-item">
                                <NavLink to='/' activeclassname="active" className="nav-link" onClick={closeMobileMenu}>
                                    <div className='nav-link-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/>
                                        </svg>
                                    </div>
                                    <p>Home</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/statistics' activeclassname="active" className="nav-link" onClick={closeMobileMenu}>
                                    <div className='nav-link-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M320 0v128h128L320 0zM288 128L288 0H112C85.49 0 64 21.49 64 48V224H16C7.164 224 0 231.2 0 240v32C0 280.8 7.164 288 16 288h128c6.062 0 11.59 3.438 14.31 8.844L176 332.2l49.69-99.38c5.438-10.81 23.19-10.81 28.62 0L281.9 288H352c8.844 0 16 7.156 16 16S360.8 320 352 320h-80c-6.062 0-11.59-3.438-14.31-8.844L240 275.8l-49.69 99.38C187.6 380.6 182.1 384 176 384s-11.59-3.438-14.31-8.844L134.1 320H64v144C64 490.5 85.49 512 112 512h288c26.51 0 48-21.49 48-48V160h-127.1C302.3 160 288 145.7 288 128z"/>
                                        </svg>
                                    </div>
                                    <p>Statistics</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/simulator' activeclassname="active" className="nav-link" onClick={closeMobileMenu}>
                                    <div className='nav-link-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M481.2 64h-106c-14.5 0-26.6 11.8-26.6 26.3v39.6H163.3V90.3c0-14.5-12-26.3-26.6-26.3h-106C16.1 64 4.3 75.8 4.3 90.3v331.4c0 14.5 11.8 26.3 26.6 26.3h450.4c14.8 0 26.6-11.8 26.6-26.3V90.3c-.2-14.5-12-26.3-26.7-26.3zM149.8 355.8c-36.6 0-66.4-29.7-66.4-66.4 0-36.9 29.7-66.6 66.4-66.6 36.9 0 66.6 29.7 66.6 66.6 0 36.7-29.7 66.4-66.6 66.4zm212.4 0c-36.9 0-66.6-29.7-66.6-66.6 0-36.6 29.7-66.4 66.6-66.4 36.6 0 66.4 29.7 66.4 66.4 0 36.9-29.8 66.6-66.4 66.6z"/>
                                        </svg>
                                    </div>
                                    <p>Simulator</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/predictions' activeclassname="active" className="nav-link" onClick={closeMobileMenu}>
                                    <div className='nav-link-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M184 0C214.9 0 240 25.07 240 56V456C240 486.9 214.9 512 184 512C155.1 512 131.3 490.1 128.3 461.9C123.1 463.3 117.6 464 112 464C76.65 464 48 435.3 48 400C48 392.6 49.27 385.4 51.59 378.8C21.43 367.4 0 338.2 0 304C0 272.1 18.71 244.5 45.77 231.7C37.15 220.8 32 206.1 32 192C32 161.3 53.59 135.7 82.41 129.4C80.84 123.9 80 118 80 112C80 82.06 100.6 56.92 128.3 49.93C131.3 21.86 155.1 0 184 0zM383.7 49.93C411.4 56.92 432 82.06 432 112C432 118 431.2 123.9 429.6 129.4C458.4 135.7 480 161.3 480 192C480 206.1 474.9 220.8 466.2 231.7C493.3 244.5 512 272.1 512 304C512 338.2 490.6 367.4 460.4 378.8C462.7 385.4 464 392.6 464 400C464 435.3 435.3 464 400 464C394.4 464 388.9 463.3 383.7 461.9C380.7 490.1 356.9 512 328 512C297.1 512 272 486.9 272 456V56C272 25.07 297.1 0 328 0C356.9 0 380.7 21.86 383.7 49.93z"/>
                                        </svg>
                                    </div>
                                    <p>Predictions</p>
                                </NavLink>
                            </li>
                        </ul>
                        <div className='nav-content-footer'>
                            <div className='nav-content-footer-tools'>
                                <Link to='/' onClick={closeMobileMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='icon-img' viewBox="0 0 512 512">
                                        <path className='icon-logout' d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </header>
        </>
    )
}

export default Navbar