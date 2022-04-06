import React, { useEffect, useRef, useState } from 'react'
import Switch from '../../components/Switch';

const Settings = () => {
    const [navigation, setNavigation] = useState('general')
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSucces] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, email])

    const handleNav = (part) => {
        console.log(part)
        if(part == 'general'){
            setNavigation('general')
        }else if(part == 'apearance'){
            setNavigation('apearance')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const General = () => {
        return(
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
                <Switch first="Sombre" second="Claire" />
            </>
        )
    }

    return (
        <div className='container'>
            <div className='container-full-width flex-col-center full-height'>
                <div className='spe-title flex-row-start'>
                    <h2 className='spe-right spe-bg-sand large-text bold-text white-text'>Settings</h2>
                </div>
                <div className='container-full flex-col-center'>
                    <div className='full-gutter'>
                        <div className='container-grid-2-side'>
                            <div className='flex-row-end'>
                               <div className='side-menu-wrapper'>
                                   <ul className='side-nav'>
                                       <li className='side-nav-item'>
                                            <div className='side-nav-link' onClick={() => handleNav('general')}>
                                                <p className='large-text bold-text black-text'>General</p>
                                            </div>
                                       </li>
                                       <li className='side-nav-item'>
                                            <div className='side-nav-link' onClick={() => handleNav('apearance')}>
                                                <p className='large-text bold-text black-text'>Apearance</p>
                                            </div>
                                       </li>
                                   </ul>
                               </div>
                            </div>
                            <div className='flex-col-center'>
                                <div className='container-errors'>
                                    <p ref={errRef} className={errMsg ? "error-message" : "off-screen"}>{errMsg}</p>
                                </div>
                                {navigation == 'general' ? <General /> : navigation == 'apearance' ? <Apearance/> : <General />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings