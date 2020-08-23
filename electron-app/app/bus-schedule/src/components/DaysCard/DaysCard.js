import React from 'react'
import styles from './DaysCard.module.scss'
import Delimiter from '../Delimiter/Delimiter.js'
const DaysCard=(props) =>
{
    const days=[]
    for(let i=0; i<30; ++i)
    {
        days.push(<div key={i} className={styles.day}>{i+1}</div>)
    }
    return <div className={styles.content}>
        <div className={styles.driverInfo}>
            <p className={styles.name}>IULIE</p>
            <div className={styles.allDays}>
                {days}
            </div>
        </div>
        <Delimiter color="Outline"/>
    </div>
}

export default DaysCard