import React, {useState, useRef, useEffect} from 'react'
import TeamImages from '../../core/TeamImages'
import { motion } from 'framer-motion'

const TeamPrev = () => {
    const [width, setWidth] = useState(0);
    const slider = useRef();

    useEffect(() => {
        setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }, []);

    return (
        <>
            <div className='team-slider'>
                <motion.div ref={slider} className='slider' whileTap={{cursor: 'grabbing'}}>
                    <motion.div drag='x' dragConstraints={{right:0, left: -width}} className='inner-slider'>
                        {TeamImages.map((team, i) =>{
                            return(
                                <div key={i}>
                                    <motion.div className='slider-item'>
                                        <img src={team} alt=""/>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default TeamPrev