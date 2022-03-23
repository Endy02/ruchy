import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosProvider from '../../core/axios';

const FORGOTPASS_URL = 'user/forgot-password/'

const ForgotPassword = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSucces] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosProvider.post(FORGOTPASS_URL,
                JSON.stringify({
                    email: email,
                }))
            setEmail('')
            setSucces(true)
            console.log(JSON.stringify(response));
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('This email does not correspond to an existing user');
            } else {
                setErrMsg('Email sending failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <>
                    <div className='container-log'>
                        <div className='container-full-width flex-col-center full-height'>
                            <div className='log-wrapper'>
                                <div className='log-title'>
                                    <h1 className='big-text bold-text white-text pad-b-m'>Reset password email</h1>
                                </div>
                                <div className='log-logo-check pad-b-xl'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                                    </svg>
                                </div>
                                <div className='container-errors'>
                                    <p ref={errRef} className={errMsg ? "error-message" : "off-screen"}>{errMsg}</p>
                                </div>
                                <div className='main-content'>
                                    <h2 className='large-text bold-text white-text center pad-b-m'>We have sent you an email with the instructions to reset your password !!</h2>
                                    <p className='medium-text regular-text white-text center'>You can close this window and follow the instructions sended by email.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className='container-log'>
                    <div className='container-full-width flex-col-center full-height'>
                        <div className='log-wrapper'>
                            <div className='log-title'>
                                <h1 className='big-text bold-text white-text pad-b-m'>Forgot Password</h1>
                                <Link to={"/login"} className='btn btn-small btn-sand btn-bordered btn-regular'>Back to login</Link>
                            </div>
                            <div className='log-logo pad-b-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.14 46.62">
                                    <g id="ruchy_icon" data-name="Ruchy icon">
                                        <path d="M36.41,37.25h0s-.12-.26-2.69-6.47L33,29a5.24,5.24,0,0,1,1.82-6.2,9.64,9.64,0,0,0,2.74-3.05A14.18,14.18,0,0,0,39.13,13a11.78,11.78,0,0,0-4.22-9.43Q30.7,0,23.09,0H6.58A6.59,6.59,0,0,0,0,6.58V31.24a6.78,6.78,0,1,0,13.55,0v-4h4.27q3.22,7.52,6.46,15s2.25,6.36,9.61,3.7C39.46,43.25,36.4,37.26,36.41,37.25ZM13.55,17.87V9.38H19.8q5.13,0,5.19,4.23a3.53,3.53,0,0,1-1.55,3.13,7,7,0,0,1-4.11,1.08Z" />
                                    </g>
                                </svg>
                            </div>
                            <div className='container-errors'>
                                <p ref={errRef} className={errMsg ? "error-message" : "off-screen"}>{errMsg}</p>
                            </div>
                            <div className='main-content'>
                                <p className='medium-text white-text bold-text pad-b-m'>Please enter the email related to your account.</p>
                                <form className='fu-form' onSubmit={handleSubmit}>
                                    <div className='fu-form-item'>
                                        <input className='finput-text' type="email" placeholder='Email' id="email" ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email} required />
                                    </div>
                                    <div className='fu-form-item'>
                                        <button className='btn btn-medium btn-current btn-bordered btn-regular' type='submit'>Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ForgotPassword