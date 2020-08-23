import React from 'react'
import styles from './Delimiter.module.scss'

export default function Delimiter(props){
    return <div className={styles[`divider${props.color}`]}> <span></span> </div>
}
