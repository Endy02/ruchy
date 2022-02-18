import React from 'react'
import { Link } from 'react-router-dom'

const STYLES = ['btn-current','btn-great','btn-cream','btn-sand','btn-beaut']

const SIZES = ['btn-medium', 'btn-small', 'btn-large']

const SHOW = ['btn-default', 'btn-bordered']

const MODE = ['btn-regular','btn-mobile']

const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonShow, mode, link, handler}) => {

    const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    
    const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    const checkShow = SHOW.includes(buttonShow) ? buttonShow : SHOW[0]

    const checkMode = MODE.includes(mode) ? mode : MODE[0]

    
    if(link){
        return (
            <Link to={link} className={checkMode}>
                <button className={`btn ${checkStyle} ${checkSize} ${checkShow}`} onClick={onClick} type={type}>
                    {children}
                </button>
            </Link>
        )
    }

    if(handler){
        return (
            <button className={`btn ${checkStyle} ${checkSize} ${checkShow}`} onClick={handler} type={type}>
                {children}
            </button>
        )
    }
}

export default Button