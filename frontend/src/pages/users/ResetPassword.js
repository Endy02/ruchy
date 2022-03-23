import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axiosProvider from '../../core/axios';

const ResetPassword = () => {
    const userRef = useRef();
    const errRef = useRef();
    const { uidb64 } = useParams();
    const { token } = useParams();

    const [pwd, setPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [pwd, confirmPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosProvider.post(`user/reset-password/${uidb64}/${token}/`,
                JSON.stringify({
                    password1: pwd,
                    password2: confirmPwd
                }))
            // console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));
            setPwd('')
            setConfirmPwd('')
            setSuccess(true)
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('The password is incorect');
            } else {
                setErrMsg('Login Failed')
            }
        }
    }

    return (
        <>
            {success ? (
                <div className='container-log'>
                    <div className='container-full-width flex-col-center full-height'>
                        <div className='log-wrapper'>
                            <div className='log-title'>
                                <h1 className='big-text bold-text white-text pad-b-m'>Reset Password</h1>
                            </div>
                            <div className='log-logo-check pad-b-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z" />
                                </svg>
                            </div>
                            <div className='main-content'>
                                <h2 className='big-text bold-text white-text'>Your password is updated successfully !!</h2>
                                <Link className="link link-current" to={'/login'}>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='container-log'>
                    <div className='container-full-width flex-col-center full-height'>
                        <div className='log-wrapper'>
                            <div className='log-title'>
                                <h1 className='big-text bold-text white-text pad-b-m'>Reset Password</h1>
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
                                <p className='medium-text white-text bold-text pad-b-m'>Enter a new password for your account.</p>
                                <form className='fu-form' onSubmit={handleSubmit}>
                                    <div className='fu-form-item'>
                                        <input className='finput-text' type='password' placeholder='New Password' ref={userRef} id='new-password' onChange={(e) => setPwd(e.target.value)} value={pwd} required />
                                    </div>
                                    <div className='fu-form-item'>
                                        <input className='finput-text' type='password' placeholder='Confirm Password' id='confirm-password' onChange={(e) => setConfirmPwd(e.target.value)} value={confirmPwd} required />
                                    </div>
                                    <div className='fu-form-item'>
                                        <button className='btn btn-medium btn-current btn-bordered btn-regular' type='submit'>Reset</button>
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

export default ResetPassword