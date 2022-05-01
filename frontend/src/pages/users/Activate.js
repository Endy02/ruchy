import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosProvider from '../../core/axios';

const Activate = () => {
    const errRef = useRef();
    const { uidb64 } = useParams();
    const { token } = useParams();
    const [errMsg, setErrMsg] = useState('');
    const [activate, setActivate] = useState(true);

    useEffect(() => {
        try {
            axiosProvider.get(`user/activate/${uidb64}/${token}`).then((response) => {
                if (response.status === 200) {
                    setActivate(true);
                }else{
                    setActivate(false)
                }
            })
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('User does not exist yet');
            } else {
                setErrMsg('Account activation failed')
            }
            errRef.current.focus();
        }
    }, [])

    return (
        <>
            {activate ? (
                <div className='container-log'>
                    <div className='container-full-width flex-col-center full-height'>
                        <div className='log-wrapper'>
                            <div className='log-title'>
                                <h1 className='big-text bold-text white-text pad-b-m'>Account activation</h1>
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
                                <h2 className='big-text bold-text white-text'>Your account is activated !!</h2>
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
                                <h1 className='big-text bold-text white-text pad-b-m'>Account activation</h1>
                            </div>
                            <div className='log-logo-cross pad-b-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/>
                                </svg>
                            </div>
                            <div className='container-errors'>
                                <p ref={errRef} className={errMsg ? "error-message" : "off-screen"}>{errMsg}</p>
                            </div>
                            <div className='main-content'>
                                <h2 className='big-text bold-text white-text'>Account activation failed !!</h2>
                                <Link className="link link-current" to={'/'}>Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Activate