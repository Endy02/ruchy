import React, { useState } from 'react'

const Switch = ({handleChange, first, second}) => {
    const [isToggled, setIsToggled] = useState(false)

    return (
        <>
            <div className="switch-wrapper">
                <p className={isToggled ? "switch-left black-text" : "switch-left blue-text"}>{first}</p>
                <label className="switch">
                    <input type="checkbox" className="switchBox" checked={isToggled} onChange={() => setIsToggled(!isToggled)} />
                    <span className="switch-slider" />
                </label>
                <p className={isToggled ? "switch-right green-text" : "switch-right black-text"}>{second}</p>
            </div>
        </>
    )
}

export default Switch
