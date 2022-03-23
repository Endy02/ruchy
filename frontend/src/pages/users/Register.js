import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axiosProvider from '../../core/axios';

const REGISTER_URL = 'user/register/'

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSucces] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosProvider.post(REGISTER_URL,
                JSON.stringify({
                    username: user,
                    email: email,
                    password: pwd
                }))
            console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));
            // const accesToken = response?.data?.access;
            // const roles = response?.data?.roles;

            setUser('')
            setEmail('')
            setPwd('')
            setConfirmPwd('')
            setSucces(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('Missing username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login Failed')
            }
        }
    }

    if(success){
        
    }

    return (
        <>
            {success ? (
                <>
                    <div className='container-log'>
                        <div className='container-full-width flex-col-center full-height'>
                            <div className='log-wrapper'>
                                <Navigate to={"/login"} />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className='container-log'>
                    <div className='container-full-width flex-col-center full-height'>
                        <div className='log-wrapper'>
                            <div className='log-title'>
                                <h1 className='big-text bold-text white-text pad-b-m'>Sign Up</h1>
                                <Link to={"/"} className='btn btn-small btn-sand btn-bordered btn-regular'>Back to home</Link>
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
                                <form className='fu-form' onSubmit={handleSubmit}>
                                    <div className='fu-form-item'>
                                        <input className='finput-text' type="text" placeholder='Username' id="username" ref={userRef} onChange={(e) => setUser(e.target.value)} value={user} required />
                                    </div>
                                    <div className='fu-form-item'>
                                        <input className='finput-text' type="email" placeholder='Email' id="email" ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email} required />
                                    </div>
                                    <div className='fu-form-item'>
                                        <input className='finput-text' type='password' placeholder='Password' id='password' onChange={(e) => setPwd(e.target.value)} value={pwd} required />
                                    </div>
                                    <div className='fu-form-item'>
                                        <input className='finput-text' type='password' placeholder='Confirm Password' id='confirm-password' onChange={(e) => setConfirmPwd(e.target.value)} value={confirmPwd} required />
                                    </div>
                                    <div className='fu-form-item'>
                                        <button className='btn btn-medium btn-current btn-bordered btn-regular' type='submit'>Sign up</button>
                                    </div>
                                </form>
                                <div className='full-width flex-row-center'>
                                    <p className='medium-text white-text bold-text pad-r-s'>Already have an account ?</p>
                                    <Link className="link link-current" to={'/login'}>Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Register