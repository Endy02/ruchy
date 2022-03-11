import React, {useEffect, useState} from 'react'
import moment from 'moment';

const COLORS = ['picker-blue','picker-orange', 'picker-green', 'picker-sand']

const DatePicker = ({color}) => {
    const [startDate, setStartDate] = useState(moment(new Date()).format('YYYY-MM-DD'))

    const checkColor = COLORS.includes(color) ? color : COLORS[3]

    const nextDate = () => {
        setStartDate(moment(startDate).add(1,'days').format('YYYY-MM-DD'));
    }
    const prevDate = () => {
        setStartDate(moment(startDate).subtract(1, 'days').format('YYYY-MM-DD'));
    }

    return (
        <>
            <div className='date-picker-wrapper'>
                <div className='full-width flex-col-center pad-b-m'>
                    <p className='large-text black-text bold-text'>{moment(startDate).format("dddd DD MMMM YYYY")}</p>
                </div>
                <div className='date-picker'>
                    <div>
                        <div className={`date-icon ${checkColor}`} onClick={prevDate}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <input type='date' className={`picker ${checkColor}`} value={startDate} onChange={(e) => setStartDate(moment(e.target.valueAsDate).format('YYYY-MM-DD'))}/>
                    </div>
                    <div>
                        <div className={`date-icon ${checkColor}`} onClick={nextDate}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DatePicker