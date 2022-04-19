import React, { useState } from 'react'
import TeamSelector from '../pages/simulator/TeamSelector'

const Selector = ({team_select}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [team, setTeam] = useState({})
    const defaultImg = "/assets/images/teams/chicago-bulls.svg"
    const status = 1

    const openModal = () => {
        setIsOpen(true)
    }

    const SelectTeam = (team) => {
        setTeam(team)
        setIsOpen(false)
    }

    const CloseModal = () => {
        setIsOpen(false)
    }

    const TeamModal = () => {
        return(
            <>
             {/* <img src={Object.keys(team).length === 0 ? defaultImg : team.url} className="sim-selector-img"/> */}
                <div className='modal-wrapper'>
                    <div className='modal-overlay'>
                        <div className='modal'>
                            <div className='flex-row-end full-width'>
                                <div className='modal-close' onClick={CloseModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className='modal-content'>
                                <div className='modal-title'>
                                    <h2 className='big-text bold-text black-text pad-b-s'>Select your favorite team</h2>
                                </div>
                                <div className='modal-content-inner'>
                                    <TeamSelector selectTeam={SelectTeam}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='square-small border-blue flex-col-center' onClick={() => openModal()}>
                <img className='square-icon' src={Object.keys(team).length === 0 ? defaultImg : team.url} />
            </div>
            {isOpen ? <TeamModal/>: ''}
        </>
    )
}

export default Selector