import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import axiosProvider from '../../core/axios'

const Logout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const response = axiosProvider.post('user/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosProvider.defaults.headers['Authorization'] = null;
        navigate('/')
    })

    return (
        <>
            <div className='container-log'>
                <div className='container-full-width flex-col-center full-height'>
                    <div className='log-wrapper'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logout