import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Selector from '../../components/Selector'
import Switch from '../../components/Switch';

const Profile = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSucces] = useState(false);

    useEffect(() => {
        setErrMsg('')
    }, [user, email])

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const General = () => {
        return (
            <>
                <form className='fu-form' onSubmit={handleSubmit}>
                    <div className='fu-form-item'>
                        <input className='finput-text finput-blue' type="text" placeholder='First Name' id="firstname" ref={userRef} onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                    </div>
                    <div className='fu-form-item'>
                        <input className='finput-text finput-blue' type="text" placeholder='Last name' id="lastname" ref={userRef} onChange={(e) => setLastname(e.target.value)} value={lastname} />
                    </div>
                    <div className='fu-form-item'>
                        <input className='finput-text finput-blue' type="text" placeholder='Username' id="username" ref={userRef} onChange={(e) => setUser(e.target.value)} value={user} required />
                    </div>
                    <div className='fu-form-item'>
                        <input className='finput-text finput-blue' type="email" placeholder='Email' id="email" ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email} required />
                    </div>
                    <div className='fu-form-item'>
                        <button className='btn btn-medium btn-current btn-bordered btn-regular' type='submit'>Save</button>
                    </div>
                </form>
            </>
        )
    }

    const Apearance = () => {
        return (
            <>
                <Switch first="Light" second="Dark" />
            </>
        )
    }
    return (
        <>
            <div className='container'>
                <div className='container-full-width flex-col-center full-height' >
                    <div className='container-full flex-col-center'>
                        <div className='heading'>
                            <div className='heading-img'>
                                <img src='/assets/images/kobe-memorial-wall.jpg'/>
                            </div>
                            <div className='handing-tool'>

                            </div>
                        </div>
                        <div className='full-gutter abs-bottom'>
                            <div className='container-grid-2'>
                                <div className='mobile-col-center flex-row-center'>
                                    <div className='circle-small'>
                                        <img src='/assets/images/kobe-memorial-wall.jpg' />
                                    </div>
                                    <div className='icon pad-l-s'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z" />
                                        </svg>
                                    </div>
                                    <div className='user-info pad-l-l'>
                                        <h1 className='big-text black-text bold-text'>Fujyn</h1>
                                        <p className='large-text black-text regular-text'>endy.alexis@outlook.com</p>
                                    </div>
                                </div>
                                <div className='flex-col-center'>
                                    <div className='star-icon flex-row-end'>
                                        <span className='fa fa-star checked'></span>
                                        <p className='small-text regular-text black-text pad-l-s'>Favorite team</p>
                                    </div>
                                    <div className='flex-row-center'>
                                        <Selector />
                                        <p className='big-text bold-text black-text pad-l-l'>Chicago Bulls</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-col-center pad-t-xl'>
                                <Link className='btn btn-medium btn-current btn-bordered btn-regular' to='#'>Change Password</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='container-full-width flex-col-center full-height'>
                    <div className='spe-title flex-row-start'>
                        <h2 className='spe-right spe-bg-sand large-text bold-text white-text'>General informations</h2>
                    </div>
                    <div className='container-full flex-col-center'>
                        <div className='full-gutter'>
                            <div className='container-grid-2'>
                                <div className='flex-col-center'>
                                    <div className='container-errors'>
                                        <p ref={errRef} className={errMsg ? "error-message" : "off-screen"}>{errMsg}</p>
                                    </div>
                                    <General />
                                </div>
                                <div className='flex-row-center'>
                                    <Apearance />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile