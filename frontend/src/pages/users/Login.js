import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axiosProvider from '../../core/axios';

const LOGIN_URL = 'user/login/';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate()

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
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
            const response = await axiosProvider.post(LOGIN_URL,
                JSON.stringify({
                    email: user,
                    password: pwd
                }))
            localStorage.setItem("access_token", response.data.access)
            localStorage.setItem("refresh_token", response.data.refresh)
            axiosProvider.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem("access_token")
            // console.log(JSON.stringify(response));

            setUser('')
            setPwd('')
            setSucces(true);
            navigate('/')
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
            errRef.current.focus();
        }
    }

    return (
        <>
            <div className='container-log'>
                <div className='container-full-width flex-col-center full-height'>
                    <div className='log-wrapper'>
                        <div className='log-title'>
                            <h1 className='big-text bold-text white-text pad-b-m'>Sign In</h1>
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
                                    <input className='finput-text' type="email" placeholder='Email' id="email" ref={userRef} onChange={(e) => setUser(e.target.value)} value={user} required />
                                </div>
                                <div className='fu-form-item'>
                                    <input className='finput-text' type='password' placeholder='Password' id='password' onChange={(e) => setPwd(e.target.value)} value={pwd} required />
                                </div>
                                <div className='fu-form-item'>
                                    <button className='btn btn-medium btn-current btn-bordered btn-regular' type='submit'>Sign in</button>
                                </div>
                            </form>
                            <div className='full-width flex-row-center'>
                                <Link className="link link-current pad-b-m" to={'/forgot-password'}>Forgot password ?</Link>
                            </div>
                            <div className='full-width flex-row-center'>
                                <p className='medium-text white-text bold-text pad-r-s'>Need an account ?</p>
                                <Link className="link link-current" to={'/register'}>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login