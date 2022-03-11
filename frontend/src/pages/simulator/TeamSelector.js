import React, { useEffect, useRef, useState } from 'react'
import Teams from '../../core/Teams';
import { motion } from 'framer-motion'

const TeamSelector = ({selectTeam}) => {
    const [width, setWidth] = useState(0);
    const modalSlider = useRef();

    useEffect(() => {
        setWidth(modalSlider.current.scrollWidth - modalSlider.current.offsetWidth);
    }, []);

    return (
        <>
            <div className='modal-motion'>
                <div className='modal-selector'>
                    <motion.div ref={modalSlider} className='modal-img-slider' whileTap={{ cursor: 'grabbing' }}>
                        <motion.div drag='x' dragConstraints={{ right: 0, left: width > 0 ? -width : '' }} className='modal-slider-inner'>
                            {Teams.map((team, i) => {
                                return (
                                    <motion.div className='modal-slider-item' key={i} onClick={() => selectTeam(team)}>
                                        <img src={team.url} alt="" />
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                        {/* {console.log(modalSlider.current.scrollWidth - modalSlider.current.offsetWidth)} */}
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default TeamSelector